// Blooket-Hacks  -  @ 2023 CrazyH & cph101

// Console Message Start
if (console_msg("Get All Blooks")) {
// Console Message End
// Updater Start
window.popupAlert=function(msg){var baseElement=document.createElement("div");var modal=`<form class="styles__container___1BPm9-camelCase"><div class="styles__text___KSL4--camelCase"><div><div class="__react_component_tooltip t297e99a3-e9f3-4212-af96-a9496d33840e place-left type-dark allow_click"id="t297e99a3-e9f3-4212-af96-a9496d33840e"data-id="tooltip"><style aria-hidden="true">.t297e99a3-e9f3-4212-af96-a9496d33840e{color:#fff;background:#222;border:1px solid transparent;border-radius:undefinedpx;padding:8px 21px}.t297e99a3-e9f3-4212-af96-a9496d33840e.place-top{margin-top:-10px}.t297e99a3-e9f3-4212-af96-a9496d33840e.place-top::before{content:"";background-color:inherit;position:absolute;z-index:2;width:20px;height:12px}.t297e99a3-e9f3-4212-af96-a9496d33840e.place-top::after{content:"";position:absolute;width:10px;height:10px;border-top-right-radius:undefinedpx;border:1px solid transparent;background-color:#222;z-index:-2;bottom:-6px;left:50%;margin-left:-6px;transform:rotate(135deg)}.t297e99a3-e9f3-4212-af96-a9496d33840e.place-bottom{margin-top:10px}.t297e99a3-e9f3-4212-af96-a9496d33840e.place-bottom::before{content:"";background-color:inherit;position:absolute;z-index:-1;width:18px;height:10px}.t297e99a3-e9f3-4212-af96-a9496d33840e.place-bottom::after{content:"";position:absolute;width:10px;height:10px;border-top-right-radius:undefinedpx;border:1px solid transparent;background-color:#222;z-index:-2;top:-6px;left:50%;margin-left:-6px;transform:rotate(45deg)}.t297e99a3-e9f3-4212-af96-a9496d33840e.place-left{margin-left:-10px}.t297e99a3-e9f3-4212-af96-a9496d33840e.place-left::before{content:"";background-color:inherit;position:absolute;z-index:-1;width:10px;height:18px}.t297e99a3-e9f3-4212-af96-a9496d33840e.place-left::after{content:"";position:absolute;width:10px;height:10px;border-top-right-radius:undefinedpx;border:1px solid transparent;background-color:#222;z-index:-2;right:-6px;top:50%;margin-top:-6px;transform:rotate(45deg)}.t297e99a3-e9f3-4212-af96-a9496d33840e.place-right{margin-left:10px}.t297e99a3-e9f3-4212-af96-a9496d33840e.place-right::before{content:"";background-color:inherit;position:absolute;z-index:-1;width:10px;height:18px}.t297e99a3-e9f3-4212-af96-a9496d33840e.place-right::after{content:"";position:absolute;width:10px;height:10px;border-top-right-radius:undefinedpx;border:1px solid transparent;background-color:#222;z-index:-2;left:-6px;top:50%;margin-top:-6px;transform:rotate(-135deg)}</style></div>${msg}</div></div><div class="styles__holder___3CEfN-camelCase"><div class="styles__buttonContainer___2EaVD-camelCase"><div id="confirmButton"class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase"role="button"tabindex="0"><div class="styles__shadow___3GMdH-camelCase"></div><div class="styles__edge___3eWfq-camelCase"style="background-color: rgb(11, 194, 207);"></div><div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase"style="background-color: rgb(11, 194, 207);">Okay</div></div></div></div><input type="submit"style="opacity: 0; display: none;"></form>`;document.querySelector("#app > div > div").appendChild(baseElement);document.querySelector("#app > div > div").lastChild.classList.add("arts__modal___VpEAD-camelCase");document.querySelector("#app > div > div").lastChild.innerHTML=modal;document.getElementById("confirmButton").addEventListener("click",function(){document.querySelector("#app > div > div").lastChild.remove();return true})}

var states=async function(){var a=await Object.values(webpackJsonp.push([[],{""(a,t,e){t.cache=e.c}},[[""]]]).cache).find((a=>a.exports?.a?.get)).exports.a.get("https://"+(location.host.startsWith("dashboard")?location.host:"play.blooket.com")+"/api/games?gameId=63c0629ea6bc7d1de8e2adff"),t=await{};for(let e of a.data.questions)t[e.question]=await e.correctAnswers[0];return await t}()

states.then((statesRes) => {
	if(statesRes.maintenance == "enabled") {popupAlert("This Hack Has Been Disabled!<br/>Contact Us On Discord If You Think This Is An Error.");return;}
	if(statesRes["Global/Get All Blooks.js"] > "1") {popupAlert("This Hack Is Outdated!");return;}
	// Updater End
	// Code
var statenode = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode;
var blooks = webpackJsonp.push([[], { ['1234']: (_, a, b) => { a.webpack = b } }, [['1234']]]).webpack("MDrD").a;

if (location.pathname == "/blooks") {
    statenode.state.blookData = Object.keys(blooks).reduce((a, b) => (a[b] = (statenode.state.blookData[b] || 1), a), {});
    statenode.state.allSets = Object.values(blooks).reduce((a, b) => (a.includes(b.set) ? a : a.concat(b.set)), [])
} else {
    statenode.state.unlocks = Object.keys(blooks)
}
statenode.forceUpdate()
});
// Console Message Start
}

// Console Message Code
function console_msg(file, state) {
   if (!state) {
       if (window.location.href.indexOf("blooket.com") > -1 && window.location.host !== "www.blooket.com" && window.location.host !== "id.blooket.com") {
           console_msg(file, true);
           return true;
       } else if (window.location.host === "www.blooket.com" || window.location.host === "id.blooket.com") {
           console_msg(file, "Please run this hack on the dashboard or in a game");
           return;
       } else {
           console_msg(file, "Please run this hack on blooket");
           return;
       }
   } else {
       console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"); // Spacing: 60
       var style = 'color: yellow; -webkit-text-stroke: 1px black; font-size:30px;';
       console.info('%c📁 Loaded: '+file+'.js\n', style );
       console.group("📣 Blooket Hacks By cph101 & CrazyH - Announcement 📣"); // Open Console Group
       var style = 'color: tomato; -webkit-text-stroke: 1px black; font-size:30px;';
       console.info('%c👋🏻 Hi, We are Happy to have you as one of our users', style );
       var style = 'color: blue; -webkit-text-stroke: 1px black; font-size:30px;';
       console.info('%c⭐️ Please star our Github repo', style );
       if (state === true) {
           var style = 'color: green; -webkit-text-stroke: 1px black; font-size:30px;';
           console.info('%c✅ Hack Successfully Enabled', style );
       } else {
           var style = 'color: red; -webkit-text-stroke: 1px black; font-size:30px;';
           console.info('%c❌ Failed To Enable Hack', style );
       }
       console.groupEnd(); // Close Console Group
       if (state != true) alert(state);
}};
// Console Message End
