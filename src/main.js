import '/src/css/style.scss'
import TongWen_st from "/src/js/tongwen-st.js";
import TongWen_ts from "/src/js/tongwen-ts.js";
import { registerSW } from 'virtual:pwa-register'

const updateSW = registerSW({
  onNeedRefresh () {},
  onOfflineReady () {}
})

updateSW()

window.convert = function (action) {
  let curDoc = document.getElementById("textOutput");
  let data = curDoc.value.split("");
  let word = {};
  if (action == "traditional") {
    word = TongWen_st;
  } else if (action == "simplified") {
    word = TongWen_ts;
  }
  data = data.map((element) => {
    if (word[element]) {
      element = word[element];
    }
    return element;
  });
  curDoc.value = data.join("");
};
