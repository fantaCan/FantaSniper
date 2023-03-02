const https = require('https');
module.exports = function (url, options = {}) {
    return new Promise((resolve, reject) => {
      const req = https.request(url, options, (res) => {
        let data = '';
        res.on('data', (chunk) => {
          data += chunk;
        });
        res.on('end', () => {
          const responseData = {
            text: data.toString('utf8'),
            json: () => JSON.parse(data),
            status: res.statusCode,
          };
          resolve(responseData);
        });
      });
      req.on('error', (error) => {
        reject(error);
      });
      if (options.body) {
        req.write(options.body);
      }
      req.end();
    });
  }
