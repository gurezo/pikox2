'use strict';

boardJSON = {
  "board": [
    {
        "connector":1,
        "GPIO": [283, 284, 196, 197, 198, 199, 244, 243, 246, 245]
    },
    {
      "connector":2,
      "GPIO": [163, 193, 192, 353]
    }
  ]
};


window.addEventListener('load', function (){

// WebGPIO を起動時に監視
  navigator.requestGPIOAccess()
    .then(gpioAccess=>{
      var port = gpioAccess.ports.get(198);
      var v = 0;
      return port.export("out").then(()=>{
        setInterval(function(){
          v = v ? 0 : 1;
          port.write(v);
        },1000);
      });
  });
}, false);
