const express = require('express');
const router = express.Router();
const request = require("request");
const ps4Config = require('../configs/config');

//The parameters from config file
const url = ps4Config.url;
const key = ps4Config.key;
const gd = ps4Config.group_desc;
const ald = ps4Config.agg_level_desc;
const year = ps4Config.year;
const sd = ps4Config.short_desc;
const state = ps4Config.state_alpha;

//ps4
router.get('/', function(req, res, next) {

  const options = {
      url: url,
      qs: {
          key: key,
          group_desc: gd,
          agg_level_desc: ald,
          year: year,
          short_desc: sd,
          state_alpha: state
      }
  }

      //COMMENTS BELOW ARE OTHER IN-PROGRESS API CALLS (ignore)

/* Shakespeare translation -- also does not work npm ERR!
  const options = {
    method: 'GET',
    url: 'https://api.funtranslations.com/translate/shakespeare.json',
    qs: {
      text: 'My fingers are long and beautiful, as, it has been well been documented, are various other parts of my body'
    },
    headers: {
      'cache-control': 'no-cache',
      Connection: 'keep-alive',
      'accept-encoding': 'gzip, deflate',
      Host: 'apilayer.net',
      'Postman-Token': 'b7eaae20-6aaf-4e90-8f12-0158aa49e552,ca553de2-15e1-45eb-899c-36d81e3ac7ec',
      'Cache-Control': 'no-cache',
      Accept: '*/
//*',
      /*'User-Agent': 'PostmanRuntime/7.13.0',
      'Content-Type': 'application/x-www-form-urlencoded'
    }
}
*/

//CURRENCY API -- this one works!
/*const options = {
method: 'GET',
url: 'http://apilayer.net/api/live',
qs:
{
  access_key: '707d4d2111a1976c7c4bbd767a9bf3a6',
  currencies: 'EUR,%20GBP,JPY,AUD',
  format: '0'
},
headers:
{
  'cache-control': 'no-cache',
  Connection: 'keep-alive',
  'accept-encoding': 'gzip, deflate',
  Host: 'apilayer.net',
  'Postman-Token': 'b7eaae20-6aaf-4e90-8f12-0158aa49e552,ca553de2-15e1-45eb-899c-36d81e3ac7ec',
  'Cache-Control': 'no-cache',
  Accept: '*/
//*',
  /*'User-Agent': 'PostmanRuntime/7.13.0',
  'Content-Type': 'application/x-www-form-urlencoded'
}
  }
*/

/*
  //HERE weather API --does not work
  const options = {
    method: 'GET',
    url: 'https://weather.cit.api.here.com/weather/1.0/report.json',
    qs:
        { product: 'observation',
          name: 'Boston',
          app_id: '8We2OQyifOEuqEh9lP8z',
          app_code: 'o4CfdLRgfUsnflXh1nRvVw'
        },
    headers:
        {
          'cache-control': 'no-cache',
          Connection: 'keep-alive',
          'accept-encoding': 'gzip, deflate',
          Host: 'weather.cit.api.here.com',
          'Postman-Token': '1aef16f9-5dde-4de4-806e-aadf576c2b95,757fd731-db76-4a52-9adb-18ec60f0cd38',
          'Cache-Control': 'no-cache',
          Accept: '*/
//*',
          /*'User-Agent': 'PostmanRuntime/7.13.0'
        }
  }
  */

  /*
  CODE FOR BOS:311 API -- doesn't work
  const options = {
    method: 'GET',
    url: 'https://data.boston.gov/api/3/action/datastore_search',
    qs: {
      resource_id: '2968e2c0-d479-49ba-a884-4ef523ada3c0',
      q: 'neighborhood:Allston'
    },
    headers: {
      Connection: 'keep-alive',
      'accept-encoding': 'gzip, deflate',
      Host: 'data.boston.gov',
      'User-Agent': 'PostmanRuntime/7.13.0',
      Accept: '*/
  //*',
      /*'Cache-Control': 'no-cache',
      'Postman-Token': '6fe81756-d6da-44ec-9d90-37aed6014546,27d6a969-dd32-48c4-887f-d55cf15a69b4',
      'cache-control': 'no-cache'
    }
  }*/

  request(options, function(error, response, body) {
    if (error) throw new Error(error);
    console.log(body);
    res.render('ps4', JSON.parse(body));
  });
});

module.exports = router;