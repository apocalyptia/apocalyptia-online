import{C as e,W as a,R as d,I as n,P as s}from"./SWBodyguard.54177d3a.js";class i extends e{constructor({id:e,name:a,desc:d,sz:n,qty:s}){super({id:e,name:a,desc:d,sz:n,qty:s})}}const r=new i({id:"4e4e24f4-8b09-4a85-9170-df4e5125cec2",name:"Bayonet",desc:["Counts as a Knife.","+1 Damage and Pierce for Melee Attacks."],sz:1}),t=new i({id:"aa0725d4-1da0-43f9-aa0f-37c85bb1ec22",name:"Bipod",desc:["Ignore Size requirement.","1 round setup."],sz:1}),c=new i({id:"2b2d6588-dd7b-47ec-a3f0-c574ae063bda",name:"Drum Magazine",desc:["Gun specific.","3x Ammo magazine capacity."],sz:1}),o=new i({id:"9e794d01-39c2-4c64-b6aa-6afef904ae08",name:"Foregrip",desc:["-1 Size requirement for 2h Gun."],sz:0}),m=new i({id:"a0309955-3f7d-4f93-9b5e-8239dd1371db",name:"Holosight",desc:["+1 Ranged Attack."],sz:0}),u=new i({id:"03f0ef12-bcc9-43de-aa5a-3e9cfaa51025",name:"Laser",desc:["+1 Ranged Attack.","-6 Ranged Attack to Blind for d6 rounds."],sz:0}),f=new i({id:"a17b2aba-5933-4de3-b351-176d5c54ed2b",name:"Scope",desc:["+3 Aimed Ranged Attacks and Perception(See)."],sz:1}),l=new i({id:"2baca903-28be-44a0-bfcc-5a78ab4ebf40",name:"Single-Point Sling",desc:["Draw or stow a 2h Gun without using an Action."],sz:0}),b=new i({id:"1b1419c3-48fd-40a5-9ad7-4279f9b6d1dc",name:"Suppressor",desc:["Firing a Gun does not break Concealment."],sz:0});class g extends a{constructor({id:e,name:a,desc:d,sz:n,qty:s,dmg:i,rng:r,attr:t,dur:c,fuse:o,mix:m}){super({id:e,name:a,desc:d,sz:n,qty:s,dmg:i,rng:r,attr:t}),this.dur=c,this.fuse=o,this.mix=m}}const h=new d({id:"5fb3123f-b7f0-4e09-acfb-10ed93b675a8",name:"Blind",desc:["You are considered to be Defenseless.","You automatically Fail any Perception roll that involves seeing.","You have a -6 penalty to all other rolls that involve seeing.","This includes Attacks, in which case all opponents are considered to be Concealed from you."]}),w=new d({id:"ba6cf397-b434-442f-a725-73ee00cf23ca",name:"Stun",desc:["Defenseless, Harmless, and Immobilized.","You fall Prone if Stunned for longer than 1 round."]}),p=new g({id:"f158de9a-ef27-4c24-9d38-6a2f665c941e",name:"Flashbang Grenade",desc:["Non-lethal stun grenade."],sz:1,dmg:"0",rng:"6yd",attr:[h,w],fuse:"1 round",dur:"d6 rounds",mix:9}),y=new n({id:"e0084114-b6d8-49fa-7b0f-d550d69e0590",name:"Blast",desc:["Roll [d6 vs Reflexive Dodge] against everyone in the Blast radius.","[Damage / 2] on a miss (minimum 1)."]}),z=new g({id:"e3a9114f-49c8-4984-89ff-54872d56ccda",name:"Frag Grenade",desc:["Explosive fragmentation grenade."],sz:1,dmg:"d6x3",rng:"15yd",attr:[y,s],fuse:"1 round",dur:"instant",mix:9}),x=new n({id:"62050739-7de6-4a45-6336-fcca96340629",name:"Fire Damage",desc:["Fire Damage can only be prevented with Fire Resistant Armor."]}),S=new g({id:"1b954e5d-fed1-4df7-905a-aed3fa9d2eec",name:"Molotov Cocktail",desc:["Glass bottle of fuel with rag wick."],sz:1,dmg:"d6 + 1 Fire Damage/round",rng:"3yd",attr:[y,x],fuse:"1 round",dur:"1min",mix:3}),v=new g({id:"aacd8692-39c0-4be9-b0cf-342d9ea24761",name:"Smoke Grenade",desc:["Visibility denial grenade."],sz:1,dmg:"0",rng:"1yd/round",attr:[h],fuse:"1 round",dur:"d6mins",mix:6}),A=new g({id:"892817b8-625f-4ef8-a6be-08716a6267c5",name:"Teargas Grenade",desc:["Non-lethal chemical irritant grenade."],sz:1,dmg:"1",rng:"1yd/round",attr:[h,w,new d({id:"b3c3fa84-e24d-4112-82ff-7c346a207e47",name:"Asphyxiation",desc:["Constant air supply is required.","1 Pain per minute without air.","This penalty is reduced by 1 per minute with air.","Going without air for a number of minutes = [Constitution] is lethal."]})],fuse:"1 round",dur:"d6mins",mix:15}),D=new g({id:"8d6aec56-bb21-4c12-a760-1dbb8d41e8cd",name:"Thermite",desc:["High-temperature incendiary bomb."],sz:1,dmg:"d6x6",rng:"1yd",attr:[y,x],fuse:"1 round",dur:"6 rounds",mix:6});export{r as B,c as D,o as F,m as H,u as L,S as M,f as S,A as T,t as a,l as b,b as c,p as d,z as e,v as f,D as g};
