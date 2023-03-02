console.clear();
//modules

// Color Objects
const colors = {}
colors.brightColors = {}
colors.defaultColors = {}

colors.defaultColors.Red = "\u001b[31m"
colors.defaultColors.Yellow = "\u001b[33m"
colors.defaultColors.Magenta = "\u001b[35m"

colors.brightColors.Red = "\u001b[31;1m"
colors.brightColors.Green = "\u001b[32;1m"
colors.brightColors.Yellow = "\u001b[33;1m"
colors.brightColors.Magenta = "\u001b[35;1m"

colors.reset = "\u001b[0m"



  
const defaultArt = `${colors.defaultColors.Magenta}

⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠄⠺⣍⠉⠉⢫⡝⠲⡀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠞⠁⠀⠀⣘⠦⠔⢺⠀⠀⢹⡒⣄⠀⠀⠀⠀
⠀⠀            ⠀ ⠀${colors.defaultColors.Yellow}Fanta#1337${colors.defaultColors.Magenta}⠀⠀⠀⠀⢀⡞⠀⡰⢢⠞⢁⡠⣤⣸⠄⠀⢠⠇⢸⢇⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⡇⡌⣺⡁⠀⢸⠏⠀⡰⠁⢠⠇⣼⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣟⠢⣀⣰⠸⣃⠤⠊⠀⢰⠃⣰⠃⣜⡏⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡷⣧⣀⡠⠄⠀⠀⠀⢸⢰⠃⡼⡜⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢮⠹⡦⠄⣀⣀⢀⣈⣿⠀⡇⢇⢀⡄⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣄⣀⣤⣴⡾⣦⣷⣼⣶⣾⣿⣿⠉⠛⠢⣵⡬⠝⢣⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣶⣶⢶⣿⣿⣽⣿⣿⣿⣿⣿⠿⠟⢿⣿⣿⠀⠀⡆⢱⡤⡞⡽⣇⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣤⣤⣴⣾⣿⣿⣿⣿⣿⣿⡿⠋⠉⠉⠒⢇⣈⠏⡿⠀⠀⡇⠀⠱⣵⡰⣹⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣴⣾⣿⣿⣿⣿⣿⣿⣽⠛⠛⠛⠛⢻⡃⠀⠀⠀⠀⠀⠙⢦⡇⠀⢰⠁⠀⠀⠈⠳⣿⠠
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣤⡶⠿⠿⠟⠿⠿⠟⠛⠛⠋⠉⠉⠀⠀⠀⠀⠀⠉⠐⠲⢤⣀⠀⠀⠀⠀⠀⡎⠀⠀⡀⠀⠀⠈⢆
⠀⠀⠀⠀⠀⠀⣀⣠⣤⡶⠾⠛⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿⣶⢤⠤⡞⠀⠀⢰⠁⠀⢰⣦⣼
⢀⣠⣴⣶⠾⠛⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡽⠛⠛⠛⠧⢬⡄⢡⡀⠀⠈⢧⠀⠘⢩⣾
`


let coloredEyes = `${colors.defaultColors.Magenta}
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠄⠺⣍⠉⠉⢫⡝⠲⡀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠞⠁⠀⠀⣘⠦⠔⢺⠀⠀⢹⡒⣄⠀⠀⠀⠀
⠀⠀            ⠀ ⠀${colors.defaultColors.Yellow}Fanta#1337${colors.defaultColors.Magenta}⠀⠀  ⢀⡞⠀⡰⢢⠞${colors.defaultColors.Red}⡠⣤⣸⠄${colors.reset}${colors.defaultColors.Magenta}⠀⢠⠇⢸⢇⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⡇⡌${colors.defaultColors.Red}⣺⡁⠀⢸⠏${colors.reset}${colors.defaultColors.Magenta}⠀⡰⠁⢠⠇⣼⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣟⠢⣀⣰${colors.defaultColors.Red}⠸⣃⠤⠊${colors.reset}${colors.defaultColors.Magenta}⠀⢰⠃⣰⠃⣜⡏⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡷⣧⣀⡠⠄⠀⠀⠀⢸⢰⠃⡼⡜⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢮⠹⡦⠄⣀⣀⢀⣈⣿⠀⡇⢇⢀⡄⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣄⣀⣤⣴⡾⣦⣷⣼⣶⣾⣿⣿⠉⠛⠢⣵⡬⠝⢣⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣶⣶⢶⣿⣿⣽⣿⣿⣿⣿⣿⠿⠟⢿⣿⣿⠀⠀⡆⢱⡤⡞⡽⣇⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣤⣤⣴⣾⣿⣿⣿⣿⣿⣿⡿⠋⠉⠉⠒⢇⣈⠏⡿⠀⠀⡇⠀⠱⣵⡰⣹⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣴⣾⣿⣿⣿⣿⣿⣿⣽⠛⠛⠛⠛⢻⡃⠀⠀⠀⠀⠀⠙⢦⡇⠀⢰⠁⠀⠀⠈⠳⣿⠠
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣤⡶⠿⠿⠟⠿⠿⠟⠛⠛⠋⠉⠉⠀⠀⠀⠀⠀⠉⠐⠲⢤⣀⠀⠀⠀⠀⠀⡎⠀⠀⡀⠀⠀⠈⢆
⠀⠀⠀⠀⠀⠀⣀⣠⣤⡶⠾⠛⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿⣶⢤⠤⡞⠀⠀⢰⠁⠀⢰⣦⣼
⢀⣠⣴⣶⠾⠛⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡽⠛⠛⠛⠧⢬⡄⢡⡀⠀⠈⢧⠀⠘⢩⣾`


let shooting = `${colors.defaultColors.Magenta}
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠄⠺⣍⠉⠉⢫⡝⠲⡀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠞⠁⠀⠀⣘⠦⠔⢺⠀⠀⢹⡒⣄⠀⠀⠀⠀
⠀⠀            ⠀   ⠀${colors.defaultColors.Yellow}Fanta#1337${colors.defaultColors.Magenta}⠀⠀⢀⡞⠀⡰⢢⠞${colors.defaultColors.Red}⡠⣤⣸⠄${colors.reset}${colors.defaultColors.Magenta}⠀⢠⠇⢸⢇⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⡇⡌${colors.defaultColors.Red}⣺⡁⠀⢸⠏${colors.reset}${colors.defaultColors.Magenta}⠀⡰⠁⢠⠇⣼⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣟⠢⣀⣰${colors.defaultColors.Red}⠸⣃⠤⠊${colors.reset}${colors.defaultColors.Magenta}⠀⢰⠃⣰⠃⣜⡏⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡷⣧⣀⡠⠄⠀⠀⠀⢸⢰⠃⡼⡜⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢮⠹⡦⠄⣀⣀⢀⣈⣿⠀⡇⢇⢀⡄⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣄⣀⣤⣴⡾⣦⣷⣼⣶⣾⣿⣿⠉⠛⠢⣵⡬⠝⢣⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣶⣶⢶⣿⣿⣽⣿⣿⣿⣿⣿⠿⠟⢿⣿⣿⠀⠀⡆⢱⡤⡞⡽⣇⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣤⣤⣴⣾⣿⣿⣿⣿⣿⣿⡿⠋⠉⠉⠒⢇⣈⠏⡿⠀⠀⡇⠀⠱⣵⡰⣹⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣴⣾⣿⣿⣿⣿⣿⣿⣽⠛⠛⠛⠛⢻⡃⠀⠀⠀⠀⠀⠙⢦⡇⠀⢰⠁⠀⠀⠈⠳⣿⠠
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣤⡶⠿⠿⠟⠿⠿⠟⠛⠛⠋⠉⠉⠀⠀⠀⠀⠀⠉⠐⠲⢤⣀⠀⠀⠀⠀⠀⡎⠀⠀⡀⠀⠀⠈⢆
⠀⠀⠀⠀⠀⠀⣀⣠⣤⡶⠾⠛⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿⣶⢤⠤⡞⠀⠀⢰⠁⠀⢰⣦⣼
⢀⣠⣴⣶⠾⠛⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡽⠛⠛⠛⠧⢬⡄⢡⡀⠀⠈⢧⠀⠘⢩⣾
${colors.defaultColors.Yellow}⢀⣠${colors.reset}
`

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  

module.exports = class {
    async defaultArt() {
        console.clear()
        console.log(defaultArt)
        await sleep(100)
    }

    async animateDefault() {
        console.clear()
        for (var x = 0; x < defaultArt.split("\n").length; x++) {
            console.log(colors.defaultColors.Magenta + defaultArt.split("\n")[x])
            await sleep(100)
        }
    }

    async redEyes() {
        await sleep(600);
        console.clear();
        console.log(coloredEyes);
    }

    async SniperShot() {
        await sleep(600);
        console.clear();
        console.log(shooting);
    }
}
