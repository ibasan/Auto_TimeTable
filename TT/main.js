window.onload = start;
var now_text_area=true;
function start(){
	//ここから処理
}
function chenge_text_area(){
	if(now_text_area){
		//まとめて入力 -> 一行ずつ入力
	}else{
		//一行ずつ入力 -> まとめて入力
	}
}// contentId="content4"
function tab_all_hidden(){
	var contents=document.getElementsByClassName( "content" ) ;
	for(var i=0; i < contents.length; i++) {
		contents[i].classList.add('notShow');
	}
}
function add_tab_show(){
	tab_all_hidden();
	var obj=event.target;
	var id=obj.getAttribute("connect");
	var content=document.getElementById(id);
	content.classList.remove("notShow");
}
