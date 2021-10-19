
console.log("jsファイルからハロワー");

// ----------------Twitterボタン------------
function twitText() {
	var s, url;
	s = "JSでTwitterを開いて投稿してます。";
	url = document.location.href;
	
	if (s != "") {
		if (s.length > 140) {
			//文字数制限
			alert("テキストが140字を超えています");
		} else {
			//投稿画面を開く
			url = "http://twitter.com/share?url=" + escape(url) + "&text=" + s;
			window.open(url,"_blank","width=600,height=300");
		}
	}
}

console.log("seungmin"+"ryungha");
console.log("sunabako".split("a"));

var student = "seungmin";
console.log(student);

student ="suzukka";
console.log(student);

student = ["seungmin","suzuka","siu","soi"]
console.log(student);

console.log(student[2]);

student[0] = "mimi";
console.log(student);

var sunabaco= {"沖縄":"KOZA","北海道":"EBETSU","香川":"TAKAMATSU"}
console.log(sunabaco);
console.log(sunabaco["北海道"]);

var count = 1;
console.log(count);

count+= 1 ;

console.log(1<2);

var	x = 2;
var y = 3;

/* console.log(x==y);
console.log(x===y);
console.log(x>y);
console.log(x<=y);
console.log(x>y);
console.log(x>=y);
console.log(x!=y);*/

var licence_flag = 0;
var now = 14;

if (licence_flag == 1) {
	console.log("車を運転できました");
}else if(now>22) {
	console.log("電車で帰れます");
}else{
	console.log("免許がないので運転できません");
}

var	limit = 10;
var getup = 10;

if(limit<getup){
	console.log("遅刻です");
}else if (limit==getup) {
	console.log("ギリギリセーフ！");
}else{
	console.log("よく頑張りました");
}


for (var i=1; i<=20; i++){
	console.log(i);	
}


for (var i=0; i<=25; i++){
	console.log(i + "番目");
}


function greet(user_name){
	message = user_name + "さん、 こんにちは";
	console.log(message);
}

console.log(greet("Seung Min"));