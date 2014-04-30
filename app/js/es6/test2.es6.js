/* jshint unused:false */
/* jshint camelcase:false */
/* global _:true */
 (function(){
   'use strict';

   $(document).ready(init);

   function init(){
     $('#get').click(getCams);
   }

     function getCams(){
       let zip = $('#zip').val().trim();
       let url = `http://api.wunderground.com/api/4044d317dac8e37e/webcams/q/${zip}.json?callback=?`;
       $.getJSON(url, getImg);
     }

     function getImg(data){
       console.log(data);
       data.webcams.forEach(c=>$('#container').append(`<img src=${c.WIDGETCURRENTIMAGEURL}>`));
     }

 })();
