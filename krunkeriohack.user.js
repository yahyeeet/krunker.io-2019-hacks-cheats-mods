// ==UserScript==
// @name         Krunker.io AIMBOT - Krunkerio Hacks - Best Krunker Cheat 2019
// @description  Krunker io Mods Features: Show FPS, Aim Fire, Auto Bunny, ESP, Adblock, Change Background
// @namespace    iomods.org
// @author       iomods.org
// @version      1.6.3
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// @updateURL    https://iomods.org/mods/krunkerio.user.js
// @downloadURL  https://iomods.org/mods/krunkerio.user.js
// @match        *://krunker.io/*
// @match        *iogames.space/*
// @match        *titotu.io/*
// @match        *io-games.io/*
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

GM_xmlhttpRequest({
    method: "GET",
    url: `https://krunker.io/js/game.vdkS3.js?build=vdkS3`,
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

    window.chatmessage("Krunkerio.org", `Welcome to Krunkerio.net! Press <span style="color: green;">'i'</span> to toggle <span style="color: green;">autoaim</span>, <span style="color: purple;">'b'</span> to toggle <span style="color: purple;">bhop</span>, <span style="color: yellow;">'o'</span> to toggle <span style="color: yellow;">wallhack</span> and <span style="color: green;">'j'</span> to toggle <span style="color: green;">auto reload</span>!`);
      $("#subLogoButtons").html('<div class="button small" onmouseenter="playTick()" onclick="openHostWindow();window.open(\'https://goo.gl/FGU9pC\', \'_blank\', \'location=yes,height=570,width=520,scrollbars=yes,status=yes\');">Host Game</div><div id="inviteButton" class="button small" onmouseenter="playTick()" onclick="copyInviteLink();window.open(\'https://goo.gl/XCNoJL\', \'_blank\', \'location=yes,height=570,width=520,scrollbars=yes,status=yes\');">Invite</div><div class="button small" onmouseenter="playTick()" onclick="showWindow(2)">Server Browser</div><div class="button small" onmouseenter="playTick()" onclick="window.open(\'https://goo.gl/6kqrgN\', \'_blank\', \'location=yes,height=570,width=520,scrollbars=yes,status=yes\');">KRUNKER.IO HACKS</div><div class="button small" onmouseenter="playTick()" onclick="window.open(\'https://goo.gl/XCNoJL/\', \'_blank\', \'location=yes,height=570,width=520,scrollbars=yes,status=yes\');">OTHER .IO CHEATS</div>');
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
            feature2: "Auto Aim",
            feature3: "Auto Bunny",
            feature4: "Show ESP",
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
$('.option4').html('<a style="'+this.settings.optionstyler+'" href="http://'+this.settings.l4+'" target="blank">'+this.settings.feature4+'</a> <label style="'+this.settings.buttonpadder+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\'http://'+this.settings.l4+'\', \'_blank\', \''+this.settings.locationer+'\');" checked><span class=\'slider\'></span></label><div class="option5"></div>');
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


var OnOffMode;
(function (OnOffMode) {
    OnOffMode["On"] = "On";
    OnOffMode["Off"] = "Off";
})(OnOffMode || (OnOffMode = {}));
class Module {
    constructor() {
        this.allStates = this.getAllModes();
        this.currentModeIndex = this.allStates.indexOf(this.getInitialMode());
    }
    onModeChanged() {
        // Let implementations override this if needed
    }
    onTick() {
        // Let implementations override this if needed
    }
    getInitialMode() {
        return this.allStates[0];
    }
    onKeyPressed() {
        this.currentModeIndex++;
        if (this.currentModeIndex >= this.allStates.length) {
            this.currentModeIndex = 0;
        }
        this.onModeChanged();
    }
    isEnabled() {
        return this.currentModeIndex !== 0;
    }
    getStatus() {
        return this.allStates[this.currentModeIndex].toString();
    }
    getCurrentMode() {
        return this.allStates[this.currentModeIndex];
    }
}

var AimbotMode;
(function (AimbotMode) {
    AimbotMode["Off"] = "Off";
    AimbotMode["Quickscoper"] = "Quickscoper";
    AimbotMode["OnRMB"] = "On RMB";
})(AimbotMode || (AimbotMode = {}));
class Aimbot extends Module {
    constructor() {
        super(...arguments);
        this.scopingOut = false;
        this.canShoot = true;
    }
    getName() {
        return 'Aimbot';
    }
    getKey() {
        return 'I';
    }
    getAllModes() {
        return [AimbotMode.Off, AimbotMode.Quickscoper, AimbotMode.OnRMB];
    }
    onTick() {
        if (!this.players) {
            return;
        }
        const possibleTargets = this.players
            .filter(player => {
            return player.active && player.inView && !player.isYou && (!player.team || player.team !== this.me.team);
        })
            .sort((p1, p2) => this.distance(this.me, p1) - this.distance(this.me, p2));
        let isLockedOn = false;
        if (possibleTargets.length > 0) {
            const target = possibleTargets[0];
            switch (this.getCurrentMode()) {
                case AimbotMode.Quickscoper:
                    isLockedOn = this.runQuickscoper(target);
                    break;
                case AimbotMode.OnRMB:
                    isLockedOn = this.runOnRMB(target);
                    break;
            }
        }
        if (!isLockedOn) {
            this.control.zqrU(null);
            this.control.target = null;
            if (this.getCurrentMode() === AimbotMode.Quickscoper) {
                this.control.mouseDownL = 0;
                this.control.mouseDownR = 0;
            }
        }
    }
    runQuickscoper(target) {
        if (this.me.didShoot) {
            this.canShoot = false;
            setTimeout(() => {
                this.canShoot = true;
            }, this.me.weapon.rate);
        }
        if (this.control.mouseDownL === 1) {
            this.control.mouseDownL = 0;
            this.control.mouseDownR = 0;
            this.scopingOut = true;
        }
        if (this.me.aimVal === 1) {
            this.scopingOut = false;
        }
        if (this.scopingOut || !this.canShoot || this.me.recoilForce > 0.01) {
            return false;
        }
        this.lookAt(target);
        if (this.control.mouseDownR === 0) {
            this.control.mouseDownR = 1;
        }
        else if (this.me.aimVal < 0.2) {
            this.control.mouseDownL = 1 - this.control.mouseDownL;
        }
        return true;
    }
    runOnRMB(target) {
        if (this.control.mouseDownR === 0) {
            return false;
        }
        this.lookAt(target);
        return true;
    }
    lookAt(target) {
        this.control.zqrU(target.x2, target.y2 + target.height - 1.5 - 2.5 * target.crouchVal - this.me.recoilAnimY * 0.3 * 25, target.z2);
    }
    distance(player1, player2) {
        const dx = player1.x - player2.x;
        const dy = player1.y - player2.y;
        const dz = player1.z - player2.z;
        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    }
}

var BHopMode;
(function (BHopMode) {
    BHopMode["Off"] = "Off";
    BHopMode["Jump"] = "Jump";
    BHopMode["SlideJump"] = "Slide Jump";
})(BHopMode || (BHopMode = {}));
class AutoBHop extends Module {
    constructor() {
        super(...arguments);
        this.isSliding = false;
    }
    getName() {
        return 'Auto BHop';
    }
    getKey() {
        return 'B';
    }
    getAllModes() {
        return [BHopMode.Off, BHopMode.Jump, BHopMode.SlideJump];
    }
    onTick() {
        this.control.keys[32] = !this.control.keys[32];
        if (this.getCurrentMode() === BHopMode.SlideJump) {
            if (this.isSliding) {
                this.inputs[8] = 1;
                return;
            }
            if (this.me.yVel < -0.04 && this.me.canSlide) {
                this.isSliding = true;
                setTimeout(() => {
                    this.isSliding = false;
                }, 350);
                this.inputs[8] = 1;
            }
        }
    }
}

class AutoWeaponSwap extends Module {
    getName() {
        return 'Auto Weapon Swap';
    }
    getKey() {
        return 'H';
    }
    getAllModes() {
        return [OnOffMode.Off, OnOffMode.On];
    }
    getInitialMode() {
        return OnOffMode.Off;
    }
    onTick() {
if (this.me.ammos[this.me.weaponIndex] === 0 && this.me.ammos[0] != this.me.ammos[1]) {
            this.inputs[10] = -1
        }
    }
}

class AutoReload extends Module {
    getName() {
        return 'Auto Reload';
    }
    getKey() {
        return 'J';
    }
    getAllModes() {
        return [OnOffMode.Off, OnOffMode.On];
    }
    getInitialMode() {
        return OnOffMode.On;
    }
    onTick() {
      if (this.me.ammos[this.me.weaponIndex] === 0) {
            this.inputs[9] = 1;
        }
    }
}

class UnlimitedAmmo extends Module {
    getName() {
        return 'Unlimited Ammo';
    }
    getKey() {
        return 'L';
    }
    getAllModes() {
        return [OnOffMode.Off, OnOffMode.On];
    }
    getInitialMode() {
        return OnOffMode.Off;
    }
    onTick() {
        this.me.ammos[this.me.weaponIndex]=101
    }
}

class SpeedHack extends Module {
    getName() {
        return 'Speed Hack';
    }
    getKey() {
        return 'K';
    }
    getAllModes() {
        return [OnOffMode.Off, OnOffMode.On];
    }
    getInitialMode() {
        return OnOffMode.Off;
    }
    onTick() {
this.inputs[1] *= 1.275;
    }
}


class WallHack extends Module {
    getName() {
        return 'Wall Hack';
    }
    getKey() {
        return 'O';
    }
    getAllModes() {
        return [OnOffMode.Off, OnOffMode.On];
    }
    getInitialMode() {
        unsafeWindow.wallHackEnabled = true;
        return OnOffMode.On;
    }
    onModeChanged() {
        unsafeWindow.wallHackEnabled = this.getCurrentMode() === OnOffMode.On;
    }
}

class Krunkbot {
    constructor() {
        this.modules = [];
    }
    init() {
        this.modules.push(new Aimbot());
        this.modules.push(new AutoReload());
        this.modules.push(new UnlimitedAmmo());
        this.modules.push(new AutoWeaponSwap());
        this.modules.push(new SpeedHack());
        this.modules.push(new WallHack());
        this.modules.push(new AutoBHop());
        const initInfoBoxInterval = setInterval(() => {
            if (this.canInjectInfoBox()) {
                clearInterval(initInfoBoxInterval);
                this.injectInfoBox();
                this.updateInfoBox();
            }
        }, 100);
    }
    onTick(me, inputs) {
        this.modules.forEach(module => {
            if (module.isEnabled()) {
                module.me = me;
                module.inputs = inputs;
                module.control = unsafeWindow.control;
                module.players = unsafeWindow.players;
                module.onTick();
            }
        });
    }
    onKeyPressed(e) {
        let shouldUpdateInfoBox = false;
        this.modules.forEach(module => {
            if (module.getKey().toUpperCase() === e.key.toUpperCase()) {
                module.onKeyPressed();
                shouldUpdateInfoBox = true;
            }
        });
        if (shouldUpdateInfoBox) {
            this.updateInfoBox();
        }
    }
    updateInfoBox() {
        const infoBox = unsafeWindow.document.querySelector('#krunkbotInfoBox');
        if (infoBox === null) {
            return;
        }
        const moduleLines = this.modules.map(module => {
            return `
        <div class="leaderItem">
          <div class="leaderNameF">[${module.getKey().toUpperCase()}] ${module.getName()}</div>
          <div class="leaderScore">${module.getStatus()}</div>
        </div>
      `;
        });
        infoBox.innerHTML = `
      <div class="krunkbotTitle">Krunkerio.org - Krunkerio.net</div>
      ${moduleLines.join('')}
    `.trim();
    }
    injectInfoBox() {
        const infoBox = unsafeWindow.document.createElement('div');
        infoBox.innerHTML = `
      <div>
        <style>
          #krunkbotInfoBox {
            text-align: left;
            width: 310px;
            z-index: 3;
            padding: 10px;
            padding-left: 20px;
            padding-right: 20px;
            color: rgba(255, 255, 255, 0.7);
            line-height: 25px;
            margin-top: 20px;
            background-color: rgba(0, 0, 0, 0.2);
          }

          #krunkbotInfoBox .krunkbotTitle {
            font-size: 18px;
            font-weight: bold;
            text-align: center;
            color: #fff;
            margin-top: 5px;
            margin-bottom: 5px;
          }

          #krunkbotInfoBox .leaderItem {
           font-size: 14px;
          }
        </style>

        <div id="krunkbotInfoBox"></div>
      </div>
    `.trim();
        const leaderDisplay = unsafeWindow.document.querySelector('#leaderDisplay');
        leaderDisplay.parentNode.insertBefore(infoBox.firstChild, leaderDisplay.nextSibling);
    }
    canInjectInfoBox() {
        return unsafeWindow.document.querySelector('#leaderDisplay') !== null;
    }
}

// tslint:disable no-console
class Logger {
    constructor(prefix) {
        this.prefix = prefix;
    }
    log(...message) {
        console.log(this.prefix, ...message);
    }
    error(...message) {
        console.error(this.prefix, ...message);
    }
    crash(message) {
        document.open();
        document.write(`
      <html lang="en">
        <head>
          <title>Krunkbot has crashed!</title>

          <style>
            .container {
              position: absolute;
              top: 50%;
              left: 50%;
              -moz-transform: translateX(-50%) translateY(-50%);
              -webkit-transform: translateX(-50%) translateY(-50%);
              transform: translateX(-50%) translateY(-50%);
              text-align: center;
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
            }

            .title {
              font-size: 24px;
              font-weight: bold;
              margin-bottom: 5px;
            }

            .message {
              font-size: 20px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="title">Krunkbot has crashed!</div>
            <div class="message">Error message: ${message}</div>
          </div>
        </body>
      </html>
    `);
        document.close();
        throw new Error(`${this.prefix} ${message}`);
    }
}
const logger = new Logger('[Krunkbot]');

function applyPatch(script, method, regex, replacer) {
    const newScript = script.replace(regex, replacer);
    if (script === newScript) {
        logger.crash(`${method} was not successful`);
    }
    return newScript;
}
function patchControl(script) {
    return applyPatch(script, 'patchControl', /var ([a-zA-Z0-9]+)=this,([a-zA-Z0-9]+)=([a-zA-Z0-9]+)\.renderer\.domElement/, ($0, $1, $2, $3) => {
        return `var ${$1} = window.control = this, ${$2} = ${$3}.renderer.domElement;`;
    });
}
function patchPlayers(script) {
    return applyPatch(script, 'patchPlayers', /if\(this\.now/, 'window.players = this.players.list; if (this.now');
}
function patchOnTick(script) {
    return applyPatch(script, 'patchOnTick', /,([a-zA-Z0-9]+)\.procInputs\(([a-zA-Z0-9]+)/, ($0, $1, $2) => {
        return `, window.onTick(${$1}, ${$2}), ${$1}.procInputs(${$2}`;
    });
}
function patchOnKeyPressed(script) {
    return applyPatch(script, 'patchOnKeyPressed', /"keyup",function\(([a-zA-Z0-9]+)\){/, ($0, $1) => {
        return `"keyup", function (${$1}) { if (document.activeElement !== chatInput) { window.onKeyPressed(${$1}); }`;
    });
}
function patchForAimbot(script) {
    return applyPatch(script, 'patchForAimbot', /{if\(this\.target\){(.+)}},this.zqrU=/, ($0, $1) => {
        return `
      {
        if (this.target) {
          this.object.rotation.y = this.target.yD;
          this.pitchObject.rotation.x = this.target.xD;

          const half = Math.PI / 2;
          this.pitchObject.rotation.x = Math.max(-half, Math.min(half, this.pitchObject.rotation.x));

          this.yDr = this.pitchObject.rotation.x % Math.PI;
          this.xDr = this.object.rotation.y % Math.PI;

          ${$1}
        }
      }, this.zqrU =
    `;
    });
}
function patchForWallHack(script) {
    return applyPatch(script, 'patchForWallHack', /if\(([a-zA-Z0-9]+)\.inView\){(.+)}else ([a-zA-Z0-9]+)\.style\.display="none"}var ([a-zA-Z0-9]+);/, ($0, $1, $2, $3, $4) => {
        return `
      if (${$1}.inView || window.wallHackEnabled) {
        ${$2}
      } else ${$3}.style.display = "none"
      } var ${$4};
    `;
    });
}
function patchIsHacker(script) {
    return applyPatch(script, 'patchIsHacker', /&&([a-zA-Z0-9]+)\.isHacker&&/, `&& 1 === 0 &&`);
}
function patchLastHack(script) {
    return applyPatch(script, 'patchIsHacker', /&&([a-zA-Z0-9]+)\.lastHack&&/, `&& 1 === 0 &&`);
}
function patchServerSearch(script) {
    return applyPatch(script, 'patchServerSearch', /([a-zA-Z0-9]+)\.data\.([a-zA-Z0-9]+)\.toLowerCase/, ($0, $1, $2) => {
        return `(${$1}.data.${$2} || '').toLowerCase`;
    });
}
function patchStyleErrors(script) {
    return applyPatch(script, 'patchStyleErrors', /else document\.getElementById\("healthBarE"\+([a-zA-Z0-9]+)\)\.style\.width=([a-zA-Z0-9]+)\+"%"/, ($0, $1, $2) => {
        return `else (document.getElementById("healthBarE" + ${$1}) || { style: {} }).style.width = ${$2} + "%"`;
    });
}
function patchGameScript(script) {
    logger.log('Patching the game script...');
    script = patchControl(script);
    script = patchPlayers(script);
    script = patchOnTick(script);
    script = patchOnKeyPressed(script);
    script = patchForAimbot(script);
    script = patchForWallHack(script);
    script = patchIsHacker(script);
    script = patchLastHack(script);
    script = patchServerSearch(script);
    script = patchStyleErrors(script);
    logger.log('Successfully patched the game script!');
    return script;
}

function request(url) {
    return new Promise(resolve => {
        logger.log(`Retrieving ${url}`);
        GM_xmlhttpRequest({
            url,
            method: 'GET',
            onload: response => resolve(response.responseText),
        });
    });
}

function replaceRemoteScriptWithInline(html, partialSrc, script) {
    const inline = `<script type="text/javascript">${script}</script>`;
    const regExp = new RegExp(`<script src="[^"]*${partialSrc}[^"]*"></script>`);
    const withoutScriptTag = html.replace(regExp, '');
    return withoutScriptTag + inline;
}
async function inlineRemoteScript(html, partialSrc) {
    const regExp = new RegExp(`<script src="([^"]*)${partialSrc}([^"]*)"></script>`);
    const [, prefix, suffix] = regExp.exec(html);
    const script = await request(prefix + partialSrc + suffix);
    return replaceRemoteScriptWithInline(html, partialSrc, script);
}
(async () => {
    if (unsafeWindow.navigator.userAgent.includes('Firefox')) {
        alert('Krunkbot does not work on Firefox.');
        return;
    }
    window.stop();
    logger.log('Loading Krunkbot...');
    let newHtml = await request(document.location.href);
    const gameScriptHash = /game\.([^\.]+)\.js/.exec(newHtml)[1];
    const gameScript = await request(`https://krunker.io/js/game.${gameScriptHash}.js`);
    newHtml = await inlineRemoteScript(newHtml, 'libs/zip.js');
    newHtml = await inlineRemoteScript(newHtml, 'libs/zip-ext.js');
    newHtml = replaceRemoteScriptWithInline(newHtml, 'js/game', patchGameScript(gameScript));
    const bot = new Krunkbot();
    bot.init();
    unsafeWindow.onTick = (me, inputs) => bot.onTick(me, inputs);
    unsafeWindow.onKeyPressed = (e) => bot.onKeyPressed(e);
    document.open();
    document.write(newHtml);
    document.close();
    logger.log('Successfully loaded Krunkbot!');
})();
