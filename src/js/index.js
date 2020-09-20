import "../css/style.scss";
import ClipboardJS from "clipboard";
import TongWen_st from "./tongwen-st.js";
import TongWen_ts from "./tongwen-ts.js";

const clipboardButton = new ClipboardJS(".column--copyButton");
clipboardButton.on("success", function (e) {
  e.clearSelection();
});

window.clearContent = function () {
  document.getElementById("textOutput").value = "";
};

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
