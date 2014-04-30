/* jshint unused:false */
/* global _:true */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#btn').click(go);
  }

    function go(){
      let nums = $('#input').val().split(',').map(n=>n.trim());
      nums = _.range(nums[0], nums[1], nums[2]);
      nums = _(nums).map(n=>Math.pow(n, 4)).filter(n=>n % 2).map(n=>`<div>${n}</div>`).forEach(n=>$('#container').append(n));
    }


  // function go(){
  //   let nums = $('#input').val().split(',').map(n=>n.trim());
  //   let [start, stop,step] = nums;
  //   nums = _(nums).range(start, stop, step).map(n=>Math.pow(n, 4)).filter(n=>n % 2).map(n=>`<div>${n}</div>`).forEach(n=>$('#container').append(n));
  // }

})();
