var request = require('request');
var urls = 'https://api.medium.com/v1/users/1dde57ac13df2873b5298bda465aecd7d873968b8ffd44fcbf541d03cde1c60f8/publications';

request({
           url: urls, 
           method: 'GET', 
           headers: { 
               'Authorization': 'Bearer 29ea845e59ea2dc5ace93e3b9c01e43f0d634c25af9ef330d272145be879a0522','content-type':'application/json'
                   }
       }, 
       function(err, response, body){
            if(err) console.log(err)
            else 
            var reply = JSON.parse(body);
            
            for (item = 0; item < reply['data'].length; item++){
                console.log(reply['data'][item]['name']);
                
            }
            
       })

    
