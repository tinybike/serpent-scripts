#!/usr/bin/env node
// -0x19d5b03ce9f19e430c60fee4bf95622f406b0f0d1e15b653b351687dfdd6f80b
//  0xe62a4fc3160e61bcf39f011b406a9dd0bf94f0f2e1ea49ac4cae9782022907f5

// (function(E,Da){var xa="undefined"!=typeof module;xa&&(E=global,E.JS_SHA3_TEST&&(E.navigator={userAgent:"Chrome"}));for(var g="0123456789abcdef".split(""),r=[0,8,16,24],ya=[1,0,32898,0,32906,2147483648,2147516416,2147483648,32907,0,2147483649,0,2147516545,2147483648,32777,2147483648,138,0,136,0,2147516425,0,2147483658,0,2147516555,0,139,2147483648,32905,2147483648,32771,2147483648,32770,2147483648,128,2147483648,32778,0,2147483658,2147483648,2147516545,2147483648,32896,2147483648,2147483649,0,2147516424,
// 2147483648],m=[224,256,384,512],za=["hex","buffer","shake"],p=function(a,e,l){return function(f){return Aa(f,a,e,a,l)}},m=[{name:"keccak",padding:[1,256,65536,16777216],bits:m,createMethod:p},{name:"sha3",padding:[6,1536,393216,100663296],bits:m,createMethod:p},{name:"shake",padding:[31,7936,2031616,520093696],bits:[128,256],createMethod:function(a,e,l){return function(f,g){return Aa(f,a,e,g,l)}}}],e=[],a=[],F={},ua=0;ua<m.length;++ua)for(var va=m[ua],Ba=va.bits,p=va.createMethod,wa=0;wa<Ba.length;++wa)(function(a,
// e){var g=p(e,a.padding,"hex");F[a.name+"_"+e]=g;for(var f=0;f<za.length;++f){var q=za[f];g[q]=p(e,a.padding,q)}})(va,Ba[wa]);var Aa=function(k,t,l,f,q){var m="string"!=typeof k;m&&k.constructor==E.ArrayBuffer&&(k=new Uint8Array(k));var p,h,F=!1,n=0;h=0;var G=k.length,b,c,d,u,v,w,x,y,z,A,B,C,D,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,aa,ba,ca,da,ea,fa,ga,ha,ia,ja,ka,la,ma,na,oa,pa,qa,ra,sa;t=(1600-2*t)/32;var ta=4*t;for(b=0;50>b;++b)a[b]=0;p=0;do{e[0]=p;for(b=1;b<t+1;++b)e[b]=0;if(m)for(b=h;n<G&&b<ta;++n)e[b>>
// 2]|=k[n]<<r[b++&3];else for(b=h;n<G&&b<ta;++n)h=k.charCodeAt(n),128>h?e[b>>2]|=h<<r[b++&3]:(2048>h?e[b>>2]|=(192|h>>6)<<r[b++&3]:(55296>h||57344<=h?e[b>>2]|=(224|h>>12)<<r[b++&3]:(h=65536+((h&1023)<<10|k.charCodeAt(++n)&1023),e[b>>2]|=(240|h>>18)<<r[b++&3],e[b>>2]|=(128|h>>12&63)<<r[b++&3]),e[b>>2]|=(128|h>>6&63)<<r[b++&3]),e[b>>2]|=(128|h&63)<<r[b++&3]);h=b-ta;n==G&&(e[b>>2]|=l[b&3],++n);p=e[t];n>G&&b<ta&&(e[t-1]|=2147483648,F=!0);for(b=0;b<t;++b)a[b]^=e[b];for(b=0;48>b;b+=2)u=a[0]^a[10]^a[20]^a[30]^
// a[40],v=a[1]^a[11]^a[21]^a[31]^a[41],w=a[2]^a[12]^a[22]^a[32]^a[42],x=a[3]^a[13]^a[23]^a[33]^a[43],y=a[4]^a[14]^a[24]^a[34]^a[44],z=a[5]^a[15]^a[25]^a[35]^a[45],A=a[6]^a[16]^a[26]^a[36]^a[46],B=a[7]^a[17]^a[27]^a[37]^a[47],C=a[8]^a[18]^a[28]^a[38]^a[48],D=a[9]^a[19]^a[29]^a[39]^a[49],c=C^(w<<1|x>>>31),d=D^(x<<1|w>>>31),a[0]^=c,a[1]^=d,a[10]^=c,a[11]^=d,a[20]^=c,a[21]^=d,a[30]^=c,a[31]^=d,a[40]^=c,a[41]^=d,c=u^(y<<1|z>>>31),d=v^(z<<1|y>>>31),a[2]^=c,a[3]^=d,a[12]^=c,a[13]^=d,a[22]^=c,a[23]^=d,a[32]^=
// c,a[33]^=d,a[42]^=c,a[43]^=d,c=w^(A<<1|B>>>31),d=x^(B<<1|A>>>31),a[4]^=c,a[5]^=d,a[14]^=c,a[15]^=d,a[24]^=c,a[25]^=d,a[34]^=c,a[35]^=d,a[44]^=c,a[45]^=d,c=y^(C<<1|D>>>31),d=z^(D<<1|C>>>31),a[6]^=c,a[7]^=d,a[16]^=c,a[17]^=d,a[26]^=c,a[27]^=d,a[36]^=c,a[37]^=d,a[46]^=c,a[47]^=d,c=A^(u<<1|v>>>31),d=B^(v<<1|u>>>31),a[8]^=c,a[9]^=d,a[18]^=c,a[19]^=d,a[28]^=c,a[29]^=d,a[38]^=c,a[39]^=d,a[48]^=c,a[49]^=d,c=a[0],d=a[1],ba=a[11]<<4|a[10]>>>28,ca=a[10]<<4|a[11]>>>28,J=a[20]<<3|a[21]>>>29,K=a[21]<<3|a[20]>>>
// 29,pa=a[31]<<9|a[30]>>>23,qa=a[30]<<9|a[31]>>>23,X=a[40]<<18|a[41]>>>14,Y=a[41]<<18|a[40]>>>14,P=a[2]<<1|a[3]>>>31,Q=a[3]<<1|a[2]>>>31,u=a[13]<<12|a[12]>>>20,v=a[12]<<12|a[13]>>>20,da=a[22]<<10|a[23]>>>22,ea=a[23]<<10|a[22]>>>22,L=a[33]<<13|a[32]>>>19,M=a[32]<<13|a[33]>>>19,ra=a[42]<<2|a[43]>>>30,sa=a[43]<<2|a[42]>>>30,ja=a[5]<<30|a[4]>>>2,ka=a[4]<<30|a[5]>>>2,R=a[14]<<6|a[15]>>>26,S=a[15]<<6|a[14]>>>26,w=a[25]<<11|a[24]>>>21,x=a[24]<<11|a[25]>>>21,fa=a[34]<<15|a[35]>>>17,ga=a[35]<<15|a[34]>>>17,
// N=a[45]<<29|a[44]>>>3,O=a[44]<<29|a[45]>>>3,C=a[6]<<28|a[7]>>>4,D=a[7]<<28|a[6]>>>4,la=a[17]<<23|a[16]>>>9,ma=a[16]<<23|a[17]>>>9,T=a[26]<<25|a[27]>>>7,U=a[27]<<25|a[26]>>>7,y=a[36]<<21|a[37]>>>11,z=a[37]<<21|a[36]>>>11,ha=a[47]<<24|a[46]>>>8,ia=a[46]<<24|a[47]>>>8,Z=a[8]<<27|a[9]>>>5,aa=a[9]<<27|a[8]>>>5,H=a[18]<<20|a[19]>>>12,I=a[19]<<20|a[18]>>>12,na=a[29]<<7|a[28]>>>25,oa=a[28]<<7|a[29]>>>25,V=a[38]<<8|a[39]>>>24,W=a[39]<<8|a[38]>>>24,A=a[48]<<14|a[49]>>>18,B=a[49]<<14|a[48]>>>18,a[0]=c^~u&w,
// a[1]=d^~v&x,a[10]=C^~H&J,a[11]=D^~I&K,a[20]=P^~R&T,a[21]=Q^~S&U,a[30]=Z^~ba&da,a[31]=aa^~ca&ea,a[40]=ja^~la&na,a[41]=ka^~ma&oa,a[2]=u^~w&y,a[3]=v^~x&z,a[12]=H^~J&L,a[13]=I^~K&M,a[22]=R^~T&V,a[23]=S^~U&W,a[32]=ba^~da&fa,a[33]=ca^~ea&ga,a[42]=la^~na&pa,a[43]=ma^~oa&qa,a[4]=w^~y&A,a[5]=x^~z&B,a[14]=J^~L&N,a[15]=K^~M&O,a[24]=T^~V&X,a[25]=U^~W&Y,a[34]=da^~fa&ha,a[35]=ea^~ga&ia,a[44]=na^~pa&ra,a[45]=oa^~qa&sa,a[6]=y^~A&c,a[7]=z^~B&d,a[16]=L^~N&C,a[17]=M^~O&D,a[26]=V^~X&P,a[27]=W^~Y&Q,a[36]=fa^~ha&Z,a[37]=
// ga^~ia&aa,a[46]=pa^~ra&ja,a[47]=qa^~sa&ka,a[8]=A^~c&u,a[9]=B^~d&v,a[18]=N^~C&H,a[19]=O^~D&I,a[28]=X^~P&R,a[29]=Y^~Q&S,a[38]=ha^~Z&ba,a[39]=ia^~aa&ca,a[48]=ra^~ja&la,a[49]=sa^~ka&ma,a[0]^=ya[b],a[1]^=ya[b+1]}while(!F);k=parseInt(f/32);l=parseInt(f%32/8);if("buffer"==q){f/=8;q=l?new ArrayBuffer(4*(k+1)):new ArrayBuffer(f);m=new Uint32Array(q);for(b=0;b<k;++b)m[b]=a[b];l&&(m[b]=a[b],q=q.slice(0,f));return q}f="";for(b=0;b<k;++b)c=a[b],f+=g[c>>4&15]+g[c&15]+g[c>>12&15]+g[c>>8&15]+g[c>>20&15]+g[c>>16&
// 15]+g[c>>28&15]+g[c>>24&15];l&&(c=a[b],0<l&&(f+=g[c>>4&15]+g[c&15]),1<l&&(f+=g[c>>12&15]+g[c>>8&15]),2<l&&(f+=g[c>>20&15]+g[c>>16&15]));return f};if(!E.JS_SHA3_TEST&&xa)module.exports=F;else if(E)for(var Ca in F)E[Ca]=F[Ca]})(this);

// // Convert hex to byte array for sha3
// var decodeHex = function(s) {
//     var o = [];
//     var alpha = '0123456789abcdef';
//     for (var i = (s.substr(0, 2) == '0x' ? 2 : 0); i < s.length; i += 2) {
//         var index1 = alpha.indexOf(s[i]);
//         var index2 = alpha.indexOf(s[i + 1]);
//         if (index1 < 0 || index2 < 0)
//             throw("Bad input to hex decoding: " + s + " " + i + " " + index1 + " " + index2)
//         o.push(index1 * 16 + index2);
//     }
//     return o;
// }

// var sha3Hex = function(x) {
//     return abi.keccak_256(decodeHex(x));
// }

var abi = require("../augur-abi");
var augur = require("../augur.js/src");

var description = "Will the average temperature on Earth in 2016 be Higher, Lower, or Unchanged from the average temperature on Earth in 2014?";

var marketInfo = [
    "0x1708aec800",
    "0x51eb851eb851eb8",
    "0x574aad9e",
    "0x7765617468657200000000000000000000000000000000000000000000000000",
    "0x74656d7065726174757265000000000000000000000000000000000000000000",
    "0x636c696d617465206368616e6765000000000000000000000000000000000000",
    "0x159823db800",
    new Buffer(description, "utf8").length,
    description
];

marketInfo = abi.prefix_hex(abi.pad_left(marketInfo[0]) + abi.pad_left(marketInfo[1]) + abi.pad_left(marketInfo[2]) + abi.strip_0x(marketInfo[3]) + abi.strip_0x(marketInfo[4]) + abi.strip_0x(marketInfo[5]) + abi.pad_left(marketInfo[6]) + abi.pad_left(abi.hex(description.length)) + abi.encode_hex(description));

console.log(abi.sha3(marketInfo));
