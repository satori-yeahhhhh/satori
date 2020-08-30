var roulette;
function start(){

    var result = document.getElementById("result");
    var omikuji = ["俺昔は顔良く<br>無かったからさー", "あーそれ山<br>だったら死んでるね", "俺国語だけ偏差値<br>高いんだけどww", "あ、この服？<br>UNITED ARROWS", "特技かー...<br>ダーツとかでもいい？","今日の服の組み合わせ<br>いいじゃーん","え？Suchimosとか<br>普通に聴くよ？","フォロワー何人?<br>俺400人","俺全然勉強<br>してないよw","俺昨日<br>2時間しか寝てなーい",
                   "え、賞取れると<br>思ってなかったーw","わかる？<br>あ、わかんないか","え、これくらい<br>普通じゃない？","あー、まだギリ<br>勝ってるわ","みんなは耐えられない<br>と思うよこれは","あ、この芸能人<br>会ったことあるわ","塾の方が進んでて<br>つまんないなー","その日ディズニー<br>誘われたから無理","自慢すんなよー俺もその<br>ブランド持ってるしw","まだその番組<br>見てんの？",
                   "お前マウント<br>とってきてる？","あ、続けて？後で<br>まとめて指摘するから","あ、俺のやつ<br>参考にしていいよ","俺のが始めたの遅いのに<br>ランク高いわ","はい乙〜w<br>まあ運も実力のうちw","えー！辛いの<br>食べれないんだぁw","Vはブイじゃなくて<br>ヴィーな",];
    roulette = setInterval(function(){
        var random = Math.round(Math.random() * (omikuji.length - 1))
        result.innerHTML = omikuji[random];
    }, 10);
}
function stop(){
    clearInterval(roulette);
}



// omikuji[0] = "大吉"
// omikuji[1] = "中吉"
// omikuji[2] = "小吉"
// omikuji[3] = "凶"

// xxxxx.length ←配列（リスト）なら何個要素が入っているかを数字 Int(整数）で返す
// xxxxx.length ←文字列（str）なら何文字入ってるかを数字（Int整数）で返す
// Math.random 0~1の数をランダムに作る→0.00000000000001〜0.99999999999999
// Math.random * 3 = 0.00000000000003〜3.999999999999999998
// Math.round は、小数点以下を四捨五入
// Math.raound(Math.random() * 3) = 0,1,2,3
