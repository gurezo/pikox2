'use strict';

window.addEventListener('load', function (){

// WebGPIO を起動時に監視
  navigator.requestGPIOAccess()
    .then(gpioAccess=>{
      var port = gpioAccess.ports.get(198);
      var v = 0;
      return port.export("out").then(()=>{
        setInterval(function(){

          // 画像差し込み


        },500);
      });
  });
}, false);
