'use strict';

var IMAGE_HEIGHT = 100;
var IMAGE_WIDTH = 100;

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
