$(function() {
  let hour = $("#hour");
  let min = $("#min");
  let sec = $("#sec");
  let ten_of_sec = $("#ten_of_sec")
  
  let start = $("#start");
  let stop = $("#stop");
  let reset = $("#reset");
  
  let ten_of_sec_time = 0; //timeよりこっちの方がいいわ。わかりやすい。
  let mid = 0;
  let measure_start;
  let count;
  
  let hour_time = 0;
  let min_time = 0;
  let sec_time = 0;
  
  
  //startボタン押下の処理
  start.click(function() {
    measure_start = new Date();
    count = setInterval(counter, 100);
    toggle();
    
  });
  
  //stopボタン押下時の処理
  stop.click(function() {
    clearInterval(count);
    mid = ten_of_sec_time; //提出したやつよりこっちの方がいいね。意味は同じだし。
    toggle();
    
  });
  
  //resetボタン押下時の処理
  reset.click(function() {
    ten_of_sec_time = 0;
    mid = 0;
    sec_time = 0;
    min_time = 0;
    hour_time = 0;
    
    ten_of_sec.html(ten_of_sec_time);
    sec.html(sec_time);
    min.html(min_time);
    hour.html(hour_time);
    
    reset.prop('disabled', true);
    
  });
  
  //計測関数作成
  function counter() {
    ten_of_sec_time = mid + (new Date() - measure_start) / 100;
    
    //ten_of_sec_time = 10 (time > 9 ) の時の処理
    if(ten_of_sec_time > 9) {
      ten_of_sec_time = 0;
      mid = 0;
      measure_start = new Date();
      sec_time ++;
    }
    
    //sec_time = 60(sec_time > 59)の時の処理
    if(sec_time > 59) {
      sec_time = 0;
      min_time ++;
    }
    
    //min_time = 60(min_time > 59)の時の処理
    if(min_time > 59) {
      min_time = 0;
      hour_time ++;
    }
    
    ten_of_sec.html(ten_of_sec_time.toFixed(0));
    sec.html(sec_time);
    min.html(min_time);
    hour.html(hour_time);
  }
  
  //start基準のボタン切り替え関数作成
  function toggle() {
    //start ボタンが有効な場合の処理
    if(!start.prop('disabled')) {
      start.prop('disabled', true);
      stop.prop('disabled', false);
      reset.prop('disabled', true);
    }
    //startボタンが有効でない場合
    else {
      start.prop('disabled', false);
      stop.prop('disabled', true);
      reset.prop('disabled', false);
    }
  }
  
});

//答え合わせ終了。改善したところは、++の前に半角スペース入れるくらい。
//他は答えのコードよりスッキリしてよい。もはやこれが今後の答えコード。