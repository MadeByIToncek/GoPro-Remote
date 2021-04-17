// File name: "ping.js"
// Folder "./commands"
const request = require('request');

module.exports = {
    name: 'Next Start of Rocket', // Optional
    category: 'Launch monitoring',
    description: 'This command shows informations for upcoming start (using fdo.rocketlaunch.live API)', // Required for slash commands
    commands: ['ns'], // Optional
    aliases: ['ns'], // Optional
    callback: ({ message }) => {
        message.channel.startTyping()
        var options = {
            url: 'https://fdo.rocketlaunch.live/json/launches/next/1',
            headers: {
              'User-Agent': 'request'
            }
          };
        request(options, function (error, response, body) {
        console.error('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        //var info = JSON.parse(body)
        var info = {"status":{
          "1":1,"2":2,"3":0,"4":0,"6":0,"8":0,"9":0,"10":0,"11":0,"13":0,"14":0,"15":0,"16":0,"17":1,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"26":0,"27":0,"28":2,"29":"","30":"KonradHERO4Black","31":0,"32":0,"33":0,"34":4778,"35":7523,"36":432,"37":114,"38":5298,"39":114,"40":"%10%08%13%17%13%01","41":0,"42":0,"43":0,"44":0,"45":0,"46":0,"47":0,"48":1,"49":0,"54":31798784,"55":1,"56":4,"57":932443,"58":0,"59":0,"60":500,"61":2,"62":0,"63":0,"64":0,"65":0,"66":0,"67":0},
          "settings":{"1":0,"2":9,"3":8,"4":0,"5":0,"6":1,"7":1,"8":1,"9":0,"10":0,"11":0,"12":0,"13":1,"14":0,"15":4,"16":0,"17":0,"18":0,"19":0,"20":0,"21":1,"22":7,"23":0,"24":0,"25":0,"26":4,"27":0,"28":0,"29":5,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":4,"49":0,"50":1,"51":1,"52":0,"53":0,"54":1,"55":2,"56":0,"57":0,"58":1,"59":1,"60":8,"61":1,"62":700000,"63":1,"64":1,"68":0,"69":0,"70":0,"72":1,"73":0,"74":1,"75":2,"76":3,"77":0,"78":0,"79":1,"80":1,"81":0,"82":0}}          
        const embed = {
            "title": "Status of GoPro:",
            "description": "This is cool...",
            "color": "00ff00",
            "author": {
              "name": "GoPro",
              "icon_url": "https://pngimg.com/uploads/gopro_logo/gopro_logo_PNG26.png"
            },
            "fields": [
              {
                "name": "***Vehicle***",
                "value": info.result[0].vehicle.name
              },
              {
                "name": "***Pad***",
                "value": "**Pad name: **"+ info.result[0].pad.name + "\n**Pad location: **" + info.result[0].pad.location.name
              },
              {
                "name": "***Weather prediction***",
                "value": "**Temperature:** " + info.result[0].weather_temp + "°F (" + Math.round(fahrenheitToCelsius(info.result[0].weather_temp)) + "°C) \n**Weather condition: **" + info.result[0].weather_condition + " \n**Wind: **" + info.result[0].weather_wind_mph + "mph (" + Math.round(info.result[0].weather_wind_mph * 0.44704) + "m/s)\n**Weather update from: **" + info.result[0].weather_updated
              }
            ]
          };
          message.channel.send({ embed });
          message.channel.stopTyping()
    })}}