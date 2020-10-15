import TongWen_st from "./tongwen-st.js";
import TongWen_ts from "./tongwen-ts.js";

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
