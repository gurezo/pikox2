'use strict';

var IMAGE_HEIGHT = 50;
var IMAGE_WIDTH = 50;

//レイヤを画面に生成する処理
function addImage(){

  //動的にDiv要素を生成する
  var elDiv = document.createElement('div');
  elDiv.style.position = "absolute";

  //10～269の乱数を発生させる
  var RandLeft = 10 + Math.random()*260;
  var RandTop = 10 + Math.random()*260;

  //の初期表示位置
  elDiv.style.left = RandLeft ;
  elDiv.style.top = RandTop ;

  //イメージ画像を読み込む
  var insImg = document.createElement('img');
  insImg.src = "./image/ahiru.png";
  insImg.width = IMAGE_WIDTH;
  insImg.height = IMAGE_HEIGHT;

  //Divにを組み込む
  elDiv.appendChild(insImg);
  //ゲーム画面にボールレイヤ（Div)を組み込む
  pikox2.appendChild(elDiv);
}

window.addEventListener('load', function (){

// WebGPIO hummer input
  navigator.requestGPIOAccess()
    .then(gpioAccess=>{
      var port = gpioAccess.ports.get(198);
      var v = 0;
      return port.export("out").then(()=>{
        setInterval(function(){
          if (v===1) {
            addImage();
          }
        },500);
      });
  });
}, false);
