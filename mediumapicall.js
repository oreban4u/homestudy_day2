var request = require('request');
var urls = 'https://api.medium.com/v1/users/1dde57ac13df2873b5298bda465aecd7d873968b8ffd44fcbf541d03cde1c60f8/publications';

response = request({
                   url: urls, //URL to hit
                   method: 'GET', //Specify the method
                   headers: { //We can define headers too
                       'Authorization': 'Bearer 29ea845e59ea2dc5ace93e3b9c01e43f0d634c25af9ef330d272145be879a0522','content-type':'application/json'
                   }
       }, function(err, response, body){
           if(err) console.log(err)
           else console.log(body)
       })

    //console.log(response);