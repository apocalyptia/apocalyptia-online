!function(){"use strict";const e=1603088134632,t="cache"+e,c=["/client/client.2ab9222b.js","/client/inject_styles.5607aec6.js","/client/index.6c0ba93f.js","/client/index.e2c00cc0.js","/client/BackButton.0d4a640a.js","/client/characterStore.8f7daf24.js","/client/CharacterSheet.7cdedf29.js","/client/BombList.4927c2b7.js","/client/StorageList.71288974.js","/client/AppendToGUUID.176d1458.js","/client/Skills.35c4252b.js","/client/Abilities.5f272c11.js","/client/SWBodyguard.54177d3a.js","/client/Speed.66ad8113.js","/client/RangedWeaponList.4703ea51.js","/client/Thermite.a457c57f.js","/client/GearBlock.14df8549.js","/client/RandomRoll.f18d347c.js","/client/Specialty.adf26afb.js","/client/Traits.2656d3ca.js","/client/ConstitutionSkills.56e093ee.js","/client/_layout.72587663.js","/client/description.fcfc882c.js","/client/Description.8a5b4d62.js","/client/properties.418ba7b4.js","/client/Properties.2daf5f2c.js","/client/abilities.2e3cc3c6.js","/client/skills.11516237.js","/client/Slider.201ef1dd.js","/client/traits.8df52446.js","/client/sheet.08653f03.js","/client/gear.462b6957.js","/client/RandomStartingGear.1aaace4b.js","/client/d6.b655a31f.js","/client/load.98251994.js","/client/new.e97bcf80.js","/client/index.35e677ca.js","/client/index.d0df2db9.js","/client/ManSubRule.8d2c351c.js","/client/[chapter].76d3be87.js","/client/index.c44646d7.js","/client/Spinner.df6fdf7c.js","/client/index.bfb85952.js","/client/recover.1b30cb8e.js"].concat(["/service-worker-index.html","/404.svg","/__index.html","/favicon.gif","/global.css","/logo-192.png","/logo-512.png","/manifest.json","/robots.txt"]),n=new Set(c);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(c))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const c of e)c!==t&&await caches.delete(c);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const c=new URL(t.request.url);c.protocol.startsWith("http")&&(c.hostname===self.location.hostname&&c.port!==self.location.port||(c.host===self.location.host&&n.has(c.pathname)?t.respondWith(caches.match(t.request)):"only-if-cached"!==t.request.cache&&t.respondWith(caches.open("offline"+e).then((async e=>{try{const c=await fetch(t.request);return e.put(t.request,c.clone()),c}catch(c){const n=await e.match(t.request);if(n)return n;throw c}})))))}))}();
