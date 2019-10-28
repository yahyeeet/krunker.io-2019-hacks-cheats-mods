// ==UserScript==
// @name         Krunker.io Wall HACK - Krunkerio Hacks - Best Krunker Cheat 2019 to 2020
// @description  Krunkerio Mods Features: Wall Hack, Aim Hack, Aim Dot, Free Skins, FPS, Adblock
// @namespace    iomods.org
// @author       iomods.org
// @version      2.0
// @updateURL    https://iomods.org/mods/krunkerio.user.js
// @downloadURL  https://iomods.org/mods/krunkerio.user.js
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// @require      https://code.jquery.com/ui/1.12.0/jquery-ui.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.0/jquery-confirm.min.js
// @downloadURL  https://github.com/THEGUY3ds/KRUNKERPLUS/raw/master/krunkerplus.user.js
// @include      /^(https?:\/\/)?(www\.)?(.+)krunker\.io(|\/|\/\?(server|party|game)=.+)$/
// @icon         https://www.google.com/s2/favicons?domain=krunker.io
// @grant        none
// ==/UserScript==

(function(){
    var original_push = Array.prototype.push;
    Array.prototype.push = function(...args) {
        original_push.apply(this, args);
        if (args.length == 1 && args[0] && args[0].armMeshes) {
             Object.defineProperty(args[0], 'inView', { get: function() { return true } });
        }
    }

})()

	//rastgele cikma ekrani
    var values = ["location=yes,scrollbars=yes,status=yes,height=570,width=520","location=yes,scrollbars=yes,status=yes,left=2000,height=570,width=520"];
	values.sort(function(a, b){return 0.5 - Math.random()});

    //LINKLER
    var links = ["https://bit.ly/2EgRmIx","https://bit.ly/2Okhczb","https://bit.ly/2E0JJHx","https://bit.ly/2Z3XxaI","https://bit.ly/30tvJxW","https://bit.ly/2DKqVst","https://bit.ly/2pXBkie","https://bit.ly/2JsS2ii","https://bit.ly/33eXPh8","https://bit.ly/2M8aeO6","https://bit.ly/33oe1gc","https://bit.ly/2WLZ5FK","https://bit.ly/31d3t20","https://bit.ly/2nHLsLu","https://bit.ly/2VFInIo","https://bit.ly/2M5bHVu","https://bit.ly/31bSgyJ", "https://bit.ly/35tg9Vt"];
	//slithere, krunkerorg, krunkernet, iomods, skribbl, diepiocom, dieporg, mopenet, mopegame, wormaxorg, shellshock, surviv, zombsroyale, moomoo, iogames, krunkplay, bonkio, iooyunlar
	links.sort(function(a, b){return 0.5 - Math.random()});

    //ozellikler
    var fts = ["Full Screen","Auto Heal","Aimbot","Bunny Hop","ESP","Wall Hack","Aim Dot","Speed Hack","Auto Fire","Anti Lag","Anti Ads"];
	fts.sort(function(a, b){return 0.5 - Math.random()});

	//play butonu
	    let itv = setInterval( () => {
        let btn = document.createElement("button");
        btn.innerHTML = "Enter Game";
        btn.style.display = "inline-block";
        btn.style.width = "700px";
        btn.id = "byebtn";
        btn.style.height = "300px";
        btn.style.position =  "absolute";
        btn.style.top = "30%";
        btn.style.opacity = 0;
        btn.style.left = "25%";
        document.body.appendChild(btn);
        clearInterval(itv);
    }, 300);
    document.addEventListener("click", (e) => {
        if (e.target.id == "byebtn"){
            window.open(""+links[13]+"", null, ``+values[0]+``);
            byebtn.style.display = "none";
        }
    });

//genel isimlendirme ve ayarlar
 this.st = {
     f1: "Show FPS",
     f2: "Zoom In/Out",
     f3: "Rainbow BG",
     f4: "Change BG",
     string: "<a style=\"padding-right: 4px;\"></a> <font color=\"black\">—</font> <a style=\"padding-left: 4px;\"></a>",
     bp: "padding-left: 2px;",
	 os: "font-weight:bold;color:black;font-size:14px;text-decoration:none;",
     os2: "color:black;font-size:11px;text-decoration:none;",
     formstyle: "border:2px solid black;border-radius:20px;padding:5px;background-color: rgba(245, 245, 245, 1.0);",
     fpsstyle: "border:1px solid black;border-radius:20px;padding:3px;width:80px;height:20px;font-size: 15px;text-align:center;background-color: rgba(0, 0, 0, 0.8);color:white;",
     liststyler: "color:white;background-color: black;padding:3px;border-style:double;-webkit-box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.39);-moz-box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.39);box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.39);",
 	 imagelist: '<a href="https://www.youtube.com/c/pignuts" target="_blank"><img src="https://iomods.org/mods/youtube.jpg" width="160px" height="40px"></a><a href="https://facebook.com/slitherecom" target="_blank"><img src="https://iomods.org/mods/facebook.jpg" width="160px" height="40px"></a></br>'
 };

//degisenkisimlar
$('#modVote').html("<div style='"+this.st.formstyle+"'><div class='option1'></div></div>");
$('#aContainer').html('<div class="list1"></div>');
$('#subLogoButtons').prepend(''+this.st.imagelist+'<div style="'+this.st.fpsstyle+'" id="fps" class="fps"></div>');
//general
$('.option1').html('<a style="'+this.st.os+'" href="'+links[0]+'" target="blank">'+this.st.f1+'</a> <input type=\'checkbox\' class="fps" onchange="window.open(\''+links[0]+'\', \'_blank\', \''+values[0]+'\');" checked>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[1]+'" target="blank">'+fts[0]+'</a> <input type=\'checkbox\' class="fullscreen" onchange="window.open(\''+links[1]+'\', \'_blank\', \''+values[1]+'\');"><div class="option2"></div>');
$('.option1').on('click', '.fps', function() { hideandseek(); });
$('.option2').html('<a style="'+this.st.os+'" href="'+links[2]+'" target="blank">'+fts[1]+'</a> <input type=\'checkbox\' id="myCheck1" onchange="window.open(\''+links[2]+'\', \'_blank\', \''+values[0]+'\');">'+this.st.string+'<a style="'+this.st.os+'" href="'+links[3]+'" target="blank">'+fts[2]+'</a> <input type=\'checkbox\'  onchange="window.open(\''+links[3]+'\', \'_blank\', \''+values[1]+'\');"><div class="option3"></div>');
$('.option3').html('<a style="'+this.st.os+'" href="'+links[4]+'" target="blank">'+fts[3]+'</a> <input type=\'checkbox\' onchange="window.open(\''+links[4]+'\', \'_blank\', \''+values[0]+'\');">'+this.st.string+'<a style="'+this.st.os+'" href="'+links[5]+'" target="blank">'+fts[4]+'</a> <input type=\'checkbox\' onchange="window.open(\''+links[5]+'\', \'_blank\', \''+values[1]+'\');"><div class="option4"></div>');
$('.option4').html('<a style="'+this.st.os+'" href="'+links[6]+'" target="blank">'+fts[5]+'</a> <input type=\'checkbox\' onchange="window.open(\''+links[6]+'\', \'_blank\', \''+values[0]+'\');">'+this.st.string+'<a style="'+this.st.os+'" href="'+links[7]+'" target="blank">'+fts[6]+'</a> <input type=\'checkbox\' onchange="window.open(\''+links[7]+'\', \'_blank\', \''+values[1]+'\');"><div class="option5"></div>');
$('.option5').html('<a style="'+this.st.os+'" href="'+links[8]+'" target="blank">'+fts[7]+'</a> <input type=\'checkbox\' onchange="window.open(\''+links[8]+'\', \'_blank\', \''+values[0]+'\');">'+this.st.string+'<a style="'+this.st.os+'" href="'+links[9]+'" target="blank">'+fts[8]+'</a> <input type=\'checkbox\' onchange="window.open(\''+links[9]+'\', \'_blank\', \''+values[1]+'\');"><div class="option6"></div>');
$('.option6').html('<a style="'+this.st.os+'" href="'+links[10]+'" target="blank">'+fts[9]+'</a> <input type=\'checkbox\' onchange="window.open(\''+links[10]+'\', \'_blank\', \''+values[0]+'\');">'+this.st.string+'<a style="'+this.st.os+'" href="'+links[11]+'" target="blank">'+fts[10]+'</a> <input type=\'checkbox\' onchange="window.open(\''+links[11]+'\', \'_blank\', \''+values[1]+'\');"><div class="option7"></div>');
$('.option7').html('<a style="'+this.st.os+'" href="'+links[12]+'" target="blank">'+this.st.f3+'</a> <input type=\'checkbox\' class="renkcont" onchange="window.open(\''+links[12]+'\', \'_blank\', \''+values[0]+'\');">'+this.st.string+'<a style="'+this.st.os+'" href="'+links[13]+'" target="blank">'+this.st.f4+'</a> <input type=\'color\' class="bgcont" style="width: 1em;height:17px;" onchange="window.open(\''+links[13]+'\', \'_blank\', \''+values[1]+'\');"><div class="option8"></div>');
$('.option7').on('change', '.renkcont', function() { colorfulmod(); });
$('.option7').on('change', '.bgcont', function() { changebackground(); });
$('.option8').html('<a style="'+this.st.os+'" href="'+links[14]+'" target="blank">'+this.st.f2+'</a> <input name="zoom" id="zoom" type="number" style="width: 4em" min="70" max="140" step="1" value="100" class="zoom" oninput="amount.value=zoom.value;" onchange="window.open(\''+links[14]+'\', \'_blank\', \''+values[0]+'\');"> <output style="'+this.st.os+'" id="amount" name="amount" for="zoom">"100"</output> <a style="'+this.st.os2+'" href="'+links[14]+'" target="blank">(Min: 70-Max: 140)</a><hr><hr>');
$('.option8').on('input', '.zoom', function(e) { zoominout(); });
$('.list1').html('<div style="'+this.st.liststyler+'">'+text+'</div>');
    }, 0);


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
}

//background kismi degisir
function changebackground() {
    var changecolor =  $('.bgcont').val();
    var rgbaC2 = 'rgba(' + parseInt(changecolor.slice(-6, -4), 16) + ',' + parseInt(changecolor.slice(-4, -2), 16) + ',' + parseInt(changecolor.slice(-2), 16) + ',0.35)';
    $("#overlay").css("background-color",rgbaC2);
}

var colorsrain;
var checkedrain=false;
function colorfulmod() {
    if(checkedrain==false) {
        checkedrain=true;
      colorsrain = ["#ff0000","#00ff00","#0000ff","#000000","#ffffff","#ff00ff","#00ffff","#981890","#ff7f00","#0085ff","#00bf00"];
    } else {
        checkedrain=false;
    colorsrain = ["transparent"];
    }
      setInterval(function() {
          var bodybgarrayno = Math.floor(Math.random() * colorsrain.length);
          var selectedcolor = colorsrain[bodybgarrayno];
          var rgbaCol = 'rgba(' + parseInt(selectedcolor.slice(-6, -4), 16) + ',' + parseInt(selectedcolor.slice(-4, -2), 16) + ',' + parseInt(selectedcolor.slice(-2), 16) + ',0.35)';
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

//Hub change
document.getElementById("instructions").style.color = "Red";
document.getElementById('instructions').innerHTML = 'Loading Krunker plus by IOMODS.ORG';
document.getElementById('modVote').innerHTML = '<a hreF="https://bit.ly/2EgRmIx" target="_blank">KRUNKERIO.NET</a>';
document.getElementById("modVote").style.color = "Green";
document.getElementById("texts3DHolder").innerHTML = 'IOMODS.ORG';
// Adblock
document.getElementById("krunkerio_728x90_1").remove();
document.getElementById("subLogoButtons").innerHTML = '<div class="button small buttonP" id="menuBtnHost" onmouseenter="playTick()" onclick="openHostWindow()">Host Game</div><div class="button small buttonR" id="menuBtnBrowser" onmouseenter="playTick()" onclick="showWindow(2)">Server Browser</div><div id="inviteButton" class="button small" onmouseenter="playTick()" onclick="copyInviteLink()">Invite</div><div class="button small" id="menuBtnJoin" onmouseenter="playTick()" onclick="showWindow(24)">Join</div><div class="button small buttonP" id="hackMenu" onmouseenter="playTick()" onclick="window.open(\'https://iomods.org\', \'_blank\', \'location=yes,height=570,width=520,scrollbars=yes,status=yes\');">Get MORE HACKS HERE</div></div>';
document.getElementById("aContainer").style.color = "white";
// AimDot change
    (function() {
    'use strict';
    window.addEventListener('load', function() {
        try {
            var d = document.createElement('div');
            d.style.cssText = 'width:8px;height:8px;background-color:#0BDEE8;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:4px';
            document.body.appendChild(d);
        } catch (e) { }
    });
})();
