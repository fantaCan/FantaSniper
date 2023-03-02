const readline = require('readline');
const asciiMod = require("./ascii-module.js");
const request = require("./httpsModule.js")
/** 
 * 
 * @author fanta#1337
 * 
 * */

const requiredStrings = {
  token: "Enter token",
  password: "Enter password",
  username: "Enter username",
  discriminator: "Enter discriminator",
  inWork: "Aiming at the target...",
  sniped: "Target sniped..."
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}



async function animatedTitle (){
  const titleName = "Made by fanta#1337"

  const titleChars = titleName.split("");
  let animatedTitle = "";
  for ( var x = 0; x < titleChars.length; x++){
    animatedTitle+= titleChars[x]
    process.title = animatedTitle
    await sleep(100)
  }
}


async function main() {
  //Variables
  let isSniped = false;
  let isLooping = false;
  // -------


  await new asciiMod().animateDefault();
  await animatedTitle()
  const token = await promptQuestion("\u001b[37;1m"+requiredStrings.token + ": \x1b[35m")
  await tokenValidate(token);

  //Prompt for password
  await new asciiMod().defaultArt();
  const password = await promptQuestion("\u001b[37;1m"+requiredStrings.password + ": \x1b[35m")

  //Asking client for the data
  await new asciiMod().defaultArt();
  const username = await promptQuestion("\u001b[37;1m"+requiredStrings.username + ": \x1b[35m")

  await new asciiMod().defaultArt();
  const discriminator = await promptQuestion("\u001b[37;1m"+requiredStrings.discriminator + ": \x1b[35m");

  await new asciiMod().defaultArt();
  console.log("\u001b[37;1m"+requiredStrings.inWork);

do {
  isLooping = true;
  if(isLooping){
    await new asciiMod().redEyes();
    console.log("\u001b[37;1m"+requiredStrings.inWork)
    isLooping = false;
    continue;
  }
  const res = await changeTag(username, discriminator, token, password);
    if (res.id) {
      new asciiMod().SniperShot();
      await animatedTitle();
      console.log("\u001b[37;1m"+requiredStrings.sniped);
      await sleep(1000 * 1000 * 100 * 10)
    }
    await sleep(800);
}while(isSniped == false);
};

main();


function promptQuestion(prompt) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise(resolve => {
    rl.question(prompt, answer => {
      rl.close();
      resolve(answer);
    });
  });
}


const baseUrl = "https://discord.com/api";


async function changeTag(username, discriminator, token, password) {
  const options = {
    headers: {
      authorization: token,
      'content-type': 'application/json',
    },
    method: 'PATCH',
    body: JSON.stringify({
      username: username,
      password: password,
      discriminator: discriminator,
    }),
  };
  try {
    const url = baseUrl + "/v9/users/@me";
    const res = await request(url, options);
    const data = await res.json();
    return data;
  } catch (e) {
    console.error(e);
    return;
  }
}


async function tokenValidate(token){

  const options = {
    headers: {
      authorization: token
    }
  }

  try {
    const url = baseUrl + "/v9/users/@me";
    const res = await request(url, options)
    const data = await res.Json();
    if(!data.id) {
      console.clear();
      console.log("Invalid Token")
      process.exit(1)
    }
  } catch (e) {
    return;
  }
}
