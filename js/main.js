'use strict';

window.addEventListener('load', function (){
  // タッチセンサー４つ分の受信処理を行う
/*
  var ax = document.querySelector('#ax');
  var ay = document.querySelector('#ay');
  var az = document.querySelector('#az');
*/

  // WebI2C Initialized
  navigator.requestI2CAccess()
    .then(function(i2cAccess){
      var port = i2cAccess.ports.get(0);
      var grovetouch = new GROVETOUCH(port,0x53);
      grovetouch.init().then(function(){
        setInterval(function(){
          grovetouch.read().then(function(values){
            //定常的にタッチセンサーを監視する
/*
            console.log('values(x,y,z):', values.x,values.y,values.z);
            ax.innerHTML = values.x ? values.x : ax.innerHTML;
            ay.innerHTML = values.y ? values.y : ay.innerHTML;
            az.innerHTML = values.z ? values.z : az.innerHTML;
*/
          });
        },1000);
      })
    }).catch(e=> console.error('error', e));
}, false);
