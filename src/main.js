import '/src/css/style.scss'
import s2t from "/src/js/s2t-char.min.json"
import t2s from "/src/js/t2s-char.min.json"
import { registerSW } from 'virtual:pwa-register'

const updateSW = registerSW({
  onNeedRefresh () {},
  onOfflineReady () {}
})
updateSW()

const mapping = {
  s2t: new Map(Object.entries(s2t)),
  t2s: new Map(Object.entries(t2s)),
}

window.convert = function (action) {
  let curDoc = document.getElementById("textOutput");
  curDoc.value =  [...curDoc.value].map((element) => mapping[action].get(element) || element).join('');
};
