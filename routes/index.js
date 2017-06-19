var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var urlImport=require('../url.model');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/api/new/:secndURL(*)', function(req, res, next){
/* MOST IMPORTANT!!! ^^^^ the '(*)' or '*' added after params is to PREVENT browser from seeing the 
http:// that is going to be entered as the start of another website you are going to, leading to giving 
404 or 'cannot get' problems, it is known as a wildcard router */
  var secndURL = req.params.secndURL;
    if(secndURL.slice(0,7)=="http://" && secndURL.includes(".com")){
      var url_data ={
        APIIndexPage: "https://secure-ridge-541.herokuapp.com",
        URL: secndURL
      };
    } else if(secndURL.slice(0,8)=="https://" && secndURL.includes(".com")) {
      var url_data ={
        APIIndexPage: "https://secure-ridge-541.herokuapp.com",
        URL: secndURL
      };
    } else if(secndURL.slice(0,4)=="www." && secndURL.includes(".com")){
      var url_data ={
        APIIndexPage: "https://secure-ridge-541.herokuapp.com",
        URL: secndURL
      };
    } else {
      var url_data ={
        APIIndexPage: "error",
        URL: "error"
      };
    }
  var urlx = new urlImport(url_data);
  urlx.save(function(error,data){
    if(error){
      res.json(error);
    } else {
      res.render('user', data);
    }
  });
});

module.exports = router;
