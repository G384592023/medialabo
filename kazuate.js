// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;
let n =0;
// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let b = document.querySelector('#print');
b.addEventListener('click', hantei);

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let i = document.querySelector('input[name="suuji"]');
  let yoso = Number(i.value);
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
  kaisu = kaisu+1;
  let dp = document.querySelector('span#kaisu')
  dp.textContent=(kaisu + "回目の予想: ");
  let dn = document.querySelector('span#answer')
  dn.textContent=(yoso);
  let df = document.querySelector('p#result')
  if(0<n){
    df.textContent=("答えは" + kotae + "でした．すでにゲームは終わっています");
  } else if(3<kaisu){
    df.textContent=("答えは" + kotae + "でした．すでにゲームは終わっています");
  } else if (kotae===yoso){
    df.textContent=("正解です．おめでとう!");
    n = n+1;
  } else if(kotae>yoso){
    df.textContent=("まちがい．答えはもっと大きいですよ");
  } else if (kotae<yoso){
    df.textContent=("まちがい．答えはもっと小さいですよ");
  } else {
    df.textContent=("まちがい．残念でした答えは" + kotae + "です");
  }
}
