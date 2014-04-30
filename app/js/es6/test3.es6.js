/* global google:true */
/* jshint unused:false, camelcase:false */
/* global AmCharts:true */
/* global _:true */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    makeChart();
    getDOI();
  }

  function getDOI(){
    let doi = 'When in the Course of human events, it becomes necessary for one people to dissolve the political bands which have connected them with another, and to assume among the powers of the earth, the separate and equal station to which the Laws of Nature and of Natures God entitle them, a decent respect to the opinions of mankind requires that they should declare the causes which impel them to the separation. We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.--That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed, --That whenever any Form of Government becomes destructive of these ends, it is the Right of the People to alter or to abolish it, and to institute new Government, laying its foundation on such principles and organizing its powers in such form, as to them shall seem most likely to effect their Safety and Happiness. Prudence, indeed, will dictate that Governments long established should not be changed for light and transient causes; and accordingly all experience hath shewn, that mankind are more disposed to suffer, while evils are sufferable, than to right themselves by abolishing the forms to which they are accustomed. But when a long train of abuses and usurpations, pursuing invariably the same Object evinces a design to reduce them under absolute Despotism, it is their right, it is their duty, to throw off such Government, and to provide new Guards for their future security.--Such has been the patient sufferance of these Colonies; and such is now the necessity which constrains them to alter their former Systems of Government. The history of the present King of Great Britain is a history of repeated injuries and usurpations, all having in direct object the establishment of an absolute Tyranny over these States. To prove this, let Facts be submitted to a candid world.'.replace(/[,;.-]/g, '');
    doi = doi.split(' ').map(w=>w.trim()).map(w=>w.toLowerCase());
    count(doi);
  }

  function count(doi){
    var occur = 1;
    let words = {};
    doi = doi.forEach(w=>{
      if(words[w]){
        words[w]++;
      }else{
        words[w] = 1;
      }
    });
    _(words).forEach((c, w)=>chart.dataProvider.push({word:w, count:c, color: 'rgba('+color()+','+color()+','+color()+','+opacity()+')'}));
    chart.validateData();
  }

  function color(){
    return Math.floor(Math.random() * 256);
  }

  function opacity(){
    return Math.random().toFixed(2);
  }

  var chart;
  function makeChart(){
    chart = AmCharts.makeChart('graph', {
    'theme': 'chalk',
    'type': 'serial',
	'startDuration': 2,
    'dataProvider': [],
    'graphs': [{
        'balloonText': '[[category]]: <b>[[value]]</b>',
        'colorField': 'color',
        'fillAlphas': 1,
        'lineAlpha': 0.1,
        'type': 'column',
        'valueField': 'count'
    }],
    'depth3D': 20,
	  'angle': 30,
    'chartCursor': {
        'categoryBalloonEnabled': false,
        'cursorAlpha': 0,
        'zoomable': false
    },
    'categoryField': 'word',
    'categoryAxis': {
        'gridPosition': 'start',
        'labelRotation': 90
    },
  	'exportConfig':{
  		'menuTop':'20px',
          'menuRight':'20px',
          'menuItems': [{
          'icon': '/lib/3/images/export.png',
          'format': 'png'
          }]
      }
      });
  }
})();
