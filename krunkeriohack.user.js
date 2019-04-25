// ==UserScript==
// @name         Krunker.io AIMBOT - Krunkerio Hacks - Best Krunker Cheat 2019
// @description  Krunker io Mods Features: Show FPS, Aim Fire, Auto Bunny, ESP, Adblock, Change Background
// @namespace    iomods.org
// @author       iomods.org
// @version      1.4
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// @updateURL    https://iomods.org/mods/krunkerio.user.js
// @downloadURL  https://iomods.org/mods/krunkerio.user.js
// @match        *://krunker.io/*
// @match        *iogames.space/*
// @match        *titotu.io/*
// @match        *io-games.io/*
// @include      /^(https?:\/\/)?(www\.)?(.+)krunker\.io(|\/|\/\?(server|party)=.+)$/
// @grant        GM_xmlhttpRequest
// @require http://code.jquery.com/jquery-3.3.1.min.js
// @require https://code.jquery.com/ui/1.12.0/jquery-ui.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.0/jquery-confirm.min.js
// @run-at       document-start
// ==/UserScript==

 var checkgameloaded;

  window.WebSocket.prototype.oldSend = WebSocket.prototype.send;
  window.WebSocket.prototype.send = function(m){
        if (!checkgameloaded){
          activatehack(this);
        }
        this.oldSend(m);
  }

window.stop();
document.innerHTML = ``;

window.gameCode = "";
window.zip = "";
window.zipExt = "";

GM_xmlhttpRequest({
    method: "GET",
    url: `https://krunker.io/js/game.kQzKQ.js?build=kQzKQ`,
    onload: inres => {
        window.gameCode = inres.responseText
        GM_xmlhttpRequest({
           method: "GET",
           url: `http://iomods.org/mods/zip.js`,
            onload: res => {
                 window.zipExt = res.responseText;
                 window.zipExt = window.zipExt.replace(/=== -1/g, `=== "hello"`);
                 GM_xmlhttpRequest({
                     method: "GET",
                     url: `http://iomods.org/mods/zip-main.js`,
                     onload: exres => {
                         window.zip = exres.responseText
                         GM_xmlhttpRequest({
                             method: "GET" ,
                             url: document.location.origin,
                             onload: extrares => {
                                 let main = extrares.responseText;
                                 var homepage = main;
                                 homepage = main.replace(/<script src="js\/game\.\w+?(?=\.)\.js\?build=.+"><\/script>/g, ``);
                                 homepage = homepage.replace(/<script src="libs\/zip-ext\.js\?build=.+"><\/script>/g, `<script type="text/plain" src="js/zip-ext.js?build=LwYhN"></script>`);
                                 homepage += `<script type="text/javascript">${window.zipExt.toString()}</script>`;
                                 homepage += `<script type="text/javascript">${window.gameCode.toString()}</script>`;
                                 document.open();
                                 document.write(homepage);
                                 document.close();
                             }
                         });
                     }
                 })
            }
        })
        }});


window.chatmessage = window.Ze = (t, e, i) => {
        for (chatList.innerHTML += i ? "<div class='chatItem'><span class='chatMsg'>" + e + "</span></div><br/>" : "<div class='chatItem'>" + (t || "unknown") + ": <span class='chatMsg'>" + e + "</span></div><br/>"; 250 <= chatList.scrollHeight;) chatList.removeChild(chatList.childNodes[0])
    }

  function activatehack(socket){
    window.socket = socket;
    checkgameloaded = socket;

    window.chatmessage("Krunkerio.org", `Welcome to Krunkerio.net! Press <span style="color: green;">'t'</span> to toggle <span style="color: green;">autoaim</span>, <span style="color: purple;">'b'</span> to toggle <span style="color: purple;">bhop</span>, and <span style="color: yellow;">'i'</span> to toggle extra <span style="color: yellow;">player info</span>!`);
      $("#subLogoButtons").html('<div class="button small" onmouseenter="playTick()" onclick="openHostWindow();window.open(\'https://goo.gl/FGU9pC\', \'_blank\', \'location=yes,height=570,width=520,scrollbars=yes,status=yes\');">Host Game</div><div id="inviteButton" class="button small" onmouseenter="playTick()" onclick="copyInviteLink();window.open(\'https://goo.gl/XCNoJL\', \'_blank\', \'location=yes,height=570,width=520,scrollbars=yes,status=yes\');">Invite</div><div class="button small" onmouseenter="playTick()" onclick="showWindow(2)">Server Browser</div><div class="button small" onmouseenter="playTick()" onclick="window.open(\'https://goo.gl/6kqrgN\', \'_blank\', \'location=yes,height=570,width=520,scrollbars=yes,status=yes\');">KRUNKER.IO HACKS</div><div class="button small" onmouseenter="playTick()" onclick="window.open(\'https://goo.gl/XCNoJL/io-games-mods/\', \'_blank\', \'location=yes,height=570,width=520,scrollbars=yes,status=yes\');">OTHER .IO CHEATS</div>');
      $("#signedOutHeaderBar").append('</br><a style=\"color:orange;\" href="https://goo.gl/XCNoJL" target="_blank">SLITHERE.COM</a> - <a style=\"color:yellow;\" href="https://goo.gl/6kqrgN" target="_blank">KRUNKERIO.NET</a>');
        $("#healthHolder").append('<a style=\"color:yellow;top:1520px;\" href="https://goo.gl/XCNoJL" target="_blank">SLITHERE.COM</a>');


      //tanitim belgeseli
var colorize,lnk,text,ministyler
lnk = ["SLITHERE.COM", "KRUNKERIO.ORG", "KRUNKERIO.NET", "SHELLSHOCKIO.ORG", "MOOMOOIOPLAY.COM", "SURVIVIO.INFO", "ZOMBSROYALEIO.ORG", "MOPE-IO.NET", "MOPEIOGAME.COM", "DIEPIOPLAY.COM", "DIEPIOPLAY.ORG", "SLITHERIOPLAY.ORG", "SKRIBBL-IO.NET", "SPINZ-IO.NET", "BONK-IO.NET", "TANKSMITHIO.ORG", "DEEEEP-IO.NET", "IOGAMESLIST.ORG", "IOMODS.ORG"];
text = "<b>";
lnk.forEach(lnkfunc);
text += "</b>";

function lnkfunc(value) {
var value2 = value;
if(value == "SLITHERE.COM" || value == "KRUNKERIO.ORG" || value == "KRUNKERIO.NET") { colorize = true; } else { colorize = false; }
if(value == "MOPE-IO.NET") { value2="MOPEIO.NET"; } if(value == "BONK-IO.NET") { value2="BONKIO.NET"; } if(value == "SPINZ-IO.NET") { value2="SPINZIO.NET"; } if(value == "DEEEEP-IO.NET") { value2="DEEEEPIO.NET"; } if(value == "SKRIBBL-IO.NET") { value2="SKRIBBLIO.NET"; } if(value == "IO-OYUNLAR.COM") { value2="IOOYUNLAR.COM"; }
if(colorize == false){ministyler = "color:white;font-size:11px;padding:0px;";} else {ministyler = "color:yellow;font-size:11px;padding:0px;";}
text += '<a href="http://'+value+'" target="_blank" style="'+ministyler+'">'+value2+'</a> - ';
}

//genel isimlendirme ve ayarlar
 this.settings = {
            feature1: "Show FPS",
            feature2: "Auto Aim <font>(in progress)</font>",
            feature3: "Auto Bunny <font>(in progress)</font>",
            feature4: "Show ESP <font>(in progress)</font>",
            feature5: "Change Background",
            feature6: "Rainbow Background",
            feature7: "Zoom IN/OUT",
     l1: "goo.gl/XCNoJL", //sl
     l2: "goo.gl/6kqrgN", //krnet
     l3: "goo.gl/FGU9pC", //krorg
     l4: "goo.gl/SXUzeF", //zrorg
     l5: "goo.gl/Lb1GKp", //surviv
     l6: "goo.gl/28tVmw", //skribb
     l7: "goo.gl/aHMmvA", //mope
     string: "<a style=\"padding-right: 12px;\"></a> <font color=\"black\">-</font> <a style=\"padding-left: 12px;\"></a>",
     buttonpadder: "padding-left: 2px;",
     box: "border:2px solid black;padding: 2px;padding-right:50px;",
     locationer: "location=yes,scrollbars=yes,status=yes,height=570,width=520",
     locationer2: "location=yes,scrollbars=yes,status=yes,left=800,height=570,width=520",
	 optionstyler: "font-weight:bold;color:black;font-size:14px;",
     optionstyler2: "font-weight:bold;color:black;font-size:14px;",
     optionstyler3: "color:black;font-size:11px;",
     formstyle: "border:2px solid black;border-radius:20px;padding:5px;background-color: rgba(245, 245, 245, 1.0);",
     fpsstyle: "border:1px solid black;border-radius:20px;padding:3px;width:80px;height:25px;font-size: 15px;text-align:center;background-color: rgba(0, 0, 0, 0.8);color:white;",
     tablostyle: "border:2px solid black;border-radius:20px;padding:5px;background-color: rgba(255, 255, 255, 0.3);",
     liststyler: "margin-left:22%;color:white;background-color: black;padding:3px;border-style:double;-webkit-box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.39);-moz-box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.39);box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.39);",
 };
//degisenkisimlar
$("#subLogoButtons").prepend('<div style="'+this.settings.formstyle+'"><div class="option1"></div></div>');
$("#signedOutHeaderBar").append('<div style="'+this.settings.fpsstyle+'" id="fps" class="fps"></div>');
$('#topLeftHolder').append('<div style="'+this.settings.fpsstyle+'" id="fps2" class="fps2"></div>');
$('#aHolder').prepend('<div class="list1"></div>');
//general
$('.option1').html('<a style="'+this.settings.optionstyler+'" href="http://'+this.settings.l1+'" target="blank">'+this.settings.feature1+'</a> <label style="'+this.settings.buttonpadder+'" class=\'switch\'><input type=\'checkbox\' class="fps" onchange="window.open(\'http://'+this.settings.l1+'\', \'_blank\', \''+this.settings.locationer+'\');" checked><span class=\'slider\'></span></label><div class="option2"></div>');
$('.option1').on('click', '.fps', function() { hideandseek(); });
$('.option2').html('<a style="'+this.settings.optionstyler+'" href="http://'+this.settings.l2+'" target="blank">'+this.settings.feature2+'</a> <label style="'+this.settings.buttonpadder+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\'http://'+this.settings.l2+'\', \'_blank\', \''+this.settings.locationer+'\');"><span class=\'slider\'></span></label><div class="option3"></div>');
$('.option3').html('<a style="'+this.settings.optionstyler+'" href="http://'+this.settings.l3+'" target="blank">'+this.settings.feature3+'</a> <label style="'+this.settings.buttonpadder+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\'http://'+this.settings.l3+'\', \'_blank\', \''+this.settings.locationer+'\');"><span class=\'slider\'></span></label><div class="option4"></div>');
$('.option4').html('<a style="'+this.settings.optionstyler+'" href="http://'+this.settings.l4+'" target="blank">'+this.settings.feature4+'</a> <label style="'+this.settings.buttonpadder+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\'http://'+this.settings.l4+'\', \'_blank\', \''+this.settings.locationer+'\');"><span class=\'slider\'></span></label><div class="option5"></div>');
$('.option5').html('<a style="'+this.settings.optionstyler+'" href="http://'+this.settings.l5+'" target="blank">'+this.settings.feature5+'</a> <label style="'+this.settings.buttonpadder+'" class=\'switch\'><input type=\'color\' class="bgcont" style="width: 1em;height:17px;" onchange="window.open(\'http://'+this.settings.l5+'\', \'_blank\', \''+this.settings.locationer+'\');"><span style=\''+this.settings.box+'\'></span></label><div class="option6"></div>');
$('.option5').on('change', '.bgcont', function() { changebackground(); });
$('.option6').html('<a style="'+this.settings.optionstyler+'" href="http://'+this.settings.l6+'" target="blank">'+this.settings.feature6+'</a> <label style="'+this.settings.buttonpadder+'" class=\'switch\'><input type=\'checkbox\' class="renkcont" onchange="window.open(\'http://'+this.settings.l6+'\', \'_blank\', \''+this.settings.locationer+'\');"><span class=\'slider\'></span></label><div class="option7"></div>');
$('.option6').on('change', '.renkcont', function() { colorfulmod(); });
$('.option7').html('<a style="'+this.settings.optionstyler+'" href="http://'+this.settings.l7+'" target="blank">'+this.settings.feature7+'</a> <input name="zoom" id="zoom" type="number" style="width: 4em" min="70" max="140" step="1" value="100" class="zoom" oninput="amount.value=zoom.value;" onchange="window.open(\'http://'+this.settings.l7+'\', \'_blank\', \''+this.settings.locationer2+'\');"> <output style="'+this.settings.optionstyler2+'" id="amount" name="amount" for="zoom">"100"</output> <a style="'+this.settings.optionstyler3+'" href="http://'+this.settings.l7+'" target="blank">(Min: 70-Max: 140)</a>');
$('.option7').on('input', '.zoom', function(e) { zoominout(); });
$('.list1').html('<div style="'+this.settings.liststyler+'">'+text+'</div>');

      //fps counter
var before,now,fps
before=Date.now();
fps=0;
requestAnimationFrame(
    function loop(){
        now=Date.now();
        fps=Math.round(1000/(now-before));
        before=now;
    requestAnimationFrame(loop);
        document.getElementById('fps').innerHTML = 'FPS: ' + fps;
        document.getElementById('fps2').innerHTML = 'FPS: ' + fps;
    }
);

if(window.location.href.indexOf("io-games.io") > -1 || window.location.href.indexOf("iogames.space") > -1 || window.location.href.indexOf("titotu.io") > -1) { location.replace("http://iogameslist.org"); }
function hideandseek() {
  var x = document.getElementById("fps");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
      var x2 = document.getElementById("fps2");
  if (x2.style.display === "none") {
    x2.style.display = "block";
  } else {
    x2.style.display = "none";
  }
}

//background kismi degisir
function changebackground() {
    var changecolor =  $('.bgcont').val();
var rgbaC2 = 'rgba(' + parseInt(changecolor.slice(-6, -4), 16) + ',' + parseInt(changecolor.slice(-4, -2), 16) + ',' + parseInt(changecolor.slice(-2), 16) + ',0.25)';
$('#overlay').css('background-color',rgbaC2);
}

var colorsrain;
var checkedrain=false;
function colorfulmod() {
    if(checkedrain==false) {
        checkedrain=true;
      colorsrain = ["#ff0000","#00ff00","#0000ff","#000000","#ffffff","#ff00ff","#00ffff","#981890","#ff7f00","#0085ff","#00bf00"];
    } else {
        checkedrain=false;
    colorsrain = ["#000000"];
    }
      setInterval(function() {
                 var bodybgarrayno = Math.floor(Math.random() * colorsrain.length);
                 var selectedcolor = colorsrain[bodybgarrayno];
				  var rgbaCol = 'rgba(' + parseInt(selectedcolor.slice(-6, -4), 16) + ',' + parseInt(selectedcolor.slice(-4, -2), 16) + ',' + parseInt(selectedcolor.slice(-2), 16) + ',0.25)';
                $("#overlay").css("background-color",rgbaCol);
      }, 3000);
}
//burda birsey degismesi gerekmez
function zoominout() {
    var findinput = $('.zoom').val();
    if(findinput >= 70 && findinput <= 140)
    {
    $('body').css('zoom',''+findinput+'%');
    } else { $('body').css('zoom','100%'); }
}

      checkgameloaded.addEventListener("message", (m) => {
        handleMessage(m);
    });
  }

function handleMessage(m){
}


setTimeout( () => {
    pending = true;
}, 5000);
