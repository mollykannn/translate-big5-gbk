// main.js
var clip = new ZeroClipboard( document.getElementById("copy-button"), {
  moviePath: "ZeroClipboard.swf"
} );

clip.on('load', function (client) {
  debugstr("Flash movie loaded and ready.");
});

clip.on('noflash', function (client) {
  $(".demo-area").hide();
  debugstr("Your browser has no flash.");
});

clip.on('complete', function (client, args) {
  debugstr("Copied text to clipboard: " + args.text );
});

// jquery stuff (optional)
function debugstr(text) {
  alert(text);
}