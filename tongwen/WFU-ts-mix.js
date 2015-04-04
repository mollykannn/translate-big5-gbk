/*******************************************
* 本簡繁切換前導程式 JS 檔存放位置由 WFU BLOG 提供
* 欲編輯、修改本程式，記得儲存的格式要選 unicode。
*
* WFU Blog : http://wayne-fu.blogspot.com/
*
***********************************/
/*** 此 JS 檔經過修改 (https://github.com/mollykannn/translate-big5-gbk.git) ***/

function tongwen_TtoS(){
  var s=document.getElementById("tongwenlet_cn");
  if(s!=null){document.body.removeChild(s);}
  var s=document.createElement("script");
  s.language="javascript";
  s.type="text/javascript";
  s.src="tongwen/tongwen-ts.js";
  s.id="tongwenlet_cn";
  document.body.appendChild(s);
}

function tongwen_StoT(){
  var s=document.getElementById("tongwenlet_tw");
  if(s!=null){document.body.removeChild(s);}
  var s=document.createElement("script");
  s.language="javascript";
  s.type="text/javascript";
  s.src="tongwen/tongwen-st.js";
  s.id="tongwenlet_tw";
  document.body.appendChild(s);
}
