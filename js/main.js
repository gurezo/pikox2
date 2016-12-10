'use strict';

var IMAGE_HEIGHT = 100;
var IMAGE_WIDTH = 100;
var bootflg = true;
var AHIRU_MAX = 10;
var ahiru_count = 0;

//レイヤを画面に生成する処理
function addImage() {

  //動的にDiv要素を生成する
  var elDiv = document.createElement('div');
  elDiv.style.position = "absolute";

  //乱数を発生させる
  var RandLeft = 10 + Math.random()*1200;
  var RandTop = 10 + Math.random()*1024;

  console.log("RandLeft = " + RandLeft);
  console.log("RandTop = " + RandTop);

  //初期表示位置
  elDiv.style.left = RandLeft + 'px';
  elDiv.style.top = RandTop + 'px';

  //イメージ画像を読み込む
  var insImg = document.createElement('img');
  insImg.src = "./image/ahiru.png";
  insImg.width = IMAGE_WIDTH;
  insImg.height = IMAGE_HEIGHT;

  //Divにを組み込む
  elDiv.appendChild(insImg);
  //画面にレイヤ（Div)を組み込む
  pikox2.appendChild(elDiv);
}

function checkAhiru() {
  if (ahiru_count > AHIRU_MAX) {
    console.log("ahiru max");
    ahiru_count = 0
    var aNode = document.getElementById("pikox2");
    for (var i =aNode.childNodes.length-1; i>=0; i--) {
      aNode.removeChild(aNode.childNodes[i]);
    }
  }
}

window.addEventListener('load', function (){

// WebGPIO hummer touch
  navigator.requestGPIOAccess().then(
    function(gpioAccess) {
        console.log("GPIO ready!");
        return gpioAccess;
    }).then(gpio=>{
      var buttonPort = gpio.ports.get(199);
      return Promise.all([
        buttonPort.export("in")
      ]).then(()=>{
        buttonPort.onchange = function(v){
          console.log("button is pushed!");
          v = v ? 0 : 1;
          if (bootflg) {
            bootflg = false;
            ahiru_count = 0;
          } else {
            addImage();
            checkAhiru();
            ahiru_count++;
          }
        }
      });
  }).catch(error=>{
    console.log("Failed to get GPIO access catch: " + error.message);
  });
}, false);
