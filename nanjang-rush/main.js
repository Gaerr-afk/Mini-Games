var nm=0,ph=1,im=2;var Dd=1,sm=2,jn=3,Bn=0,tn=1,vt=2,Mi=0,Rs=1,Oo=2,mh=3,gh=4,rm=5,Gi=100,om=101,am=102,cm=103,lm=104,um=200,hm=201,dm=202,fm=203,yc=204,vc=205,pm=206,mm=207,gm=208,xm=209,_m=210,ym=211,vm=212,Mm=213,bm=214,Mc=0,bc=1,Sc=2,Ls=3,Tc=4,wc=5,Ec=6,Ac=7,Gl=0,Sm=1,Tm=2,bi=0,wm=1,Em=2,Am=3,Rm=4,Cm=5,Im=6,Pm=7,xh="attached",Lm="detached",Ud=300,Ds=301,Us=302,Rc=303,Cc=304,ga=306,qi=1e3,Jn=1001,Tr=1002,Wt=1003,Wl=1004;var Ss=1005;var Gt=1006,_r=1007;var kn=1008;var ti=1009,Nd=1010,Od=1011,wr=1012,Xl=1013,Yi=1014,Dn=1015,Hr=1016,ql=1017,Yl=1018,Ns=1020,Fd=35902,kd=1021,Bd=1022,en=1023,zd=1024,Hd=1025,Cs=1026,Os=1027,$l=1028,Zl=1029,Vd=1030,jl=1031;var Kl=1033,Po=33776,Lo=33777,Do=33778,Uo=33779,Ic=35840,Pc=35841,Lc=35842,Dc=35843,Uc=36196,Nc=37492,Oc=37496,Fc=37808,kc=37809,Bc=37810,zc=37811,Hc=37812,Vc=37813,Gc=37814,Wc=37815,Xc=37816,qc=37817,Yc=37818,$c=37819,Zc=37820,jc=37821,No=36492,Kc=36494,Jc=36495,Gd=36283,Qc=36284,el=36285,tl=36286,Jl=2200,Dm=2201,Um=2202,Fs=2300,ks=2301,ka=2302,Ts=2400,ws=2401,Fo=2402,Ql=2500,Nm=2501,Wd=0,xa=1,Vr=2,Om=3200,Fm=3201;var _a=0,km=1,yi="",_t="srgb",Yt="srgb-linear",ya="linear",lt="srgb";var cs=7680;var _h=519,Bm=512,zm=513,Hm=514,Xd=515,Vm=516,Gm=517,Wm=518,Xm=519,nl=35044;var yh="300 es",Qn=2e3,ko=2001,ni=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vh=1234567,yr=Math.PI/180,Bs=180/Math.PI;function yn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]).toLowerCase()}function Ct(i,e,t){return Math.max(e,Math.min(t,i))}function eu(i,e){return(i%e+e)%e}function qm(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Ym(i,e,t){return i!==e?(t-i)/(e-i):0}function vr(i,e,t){return(1-t)*i+t*e}function $m(i,e,t,n){return vr(i,e,1-Math.exp(-t*n))}function Zm(i,e=1){return e-Math.abs(eu(i,e*2)-e)}function jm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Km(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Jm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Qm(i,e){return i+Math.random()*(e-i)}function eg(i){return i*(.5-Math.random())}function tg(i){i!==void 0&&(vh=i);let e=vh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ng(i){return i*yr}function ig(i){return i*Bs}function sg(i){return(i&i-1)===0&&i!==0}function rg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function og(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ag(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),m=o((n-e)/2);switch(s){case"XYX":i.set(a*u,c*h,c*f,a*l);break;case"YZY":i.set(c*f,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*f,a*u,a*l);break;case"XZX":i.set(a*u,c*m,c*d,a*l);break;case"YXY":i.set(c*d,a*u,c*m,a*l);break;case"ZYZ":i.set(c*m,c*d,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ln(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ct(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ji={DEG2RAD:yr,RAD2DEG:Bs,generateUUID:yn,clamp:Ct,euclideanModulo:eu,mapLinear:qm,inverseLerp:Ym,lerp:vr,damp:$m,pingpong:Zm,smoothstep:jm,smootherstep:Km,randInt:Jm,randFloat:Qm,randFloatSpread:eg,seededRandom:tg,degToRad:ng,radToDeg:ig,isPowerOfTwo:sg,ceilPowerOfTwo:rg,floorPowerOfTwo:og,setQuaternionFromProperEuler:ag,normalize:ct,denormalize:Ln},xe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qe=class i{constructor(e,t,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],d=n[5],m=n[8],v=s[0],g=s[3],p=s[6],y=s[1],_=s[4],x=s[7],A=s[2],M=s[5],w=s[8];return r[0]=o*v+a*y+c*A,r[3]=o*g+a*_+c*M,r[6]=o*p+a*x+c*w,r[1]=l*v+u*y+h*A,r[4]=l*g+u*_+h*M,r[7]=l*p+u*x+h*w,r[2]=f*v+d*y+m*A,r[5]=f*g+d*_+m*M,r[8]=f*p+d*x+m*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,f=a*c-u*r,d=l*r-o*c,m=t*h+n*f+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/m;return e[0]=h*v,e[1]=(s*l-u*n)*v,e[2]=(a*n-s*o)*v,e[3]=f*v,e[4]=(u*t-s*c)*v,e[5]=(s*r-a*t)*v,e[6]=d*v,e[7]=(n*c-l*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ba.makeScale(e,t)),this}rotate(e){return this.premultiply(Ba.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ba.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ba=new qe;function qd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Er(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function cg(){let i=Er("canvas");return i.style.display="block",i}var Mh={};function gr(i){i in Mh||(Mh[i]=!0,console.warn(i))}function lg(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function ug(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function hg(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Je={enabled:!0,workingColorSpace:Yt,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===lt&&(i.r=ei(i.r),i.g=ei(i.g),i.b=ei(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===lt&&(i.r=Is(i.r),i.g=Is(i.g),i.b=Is(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===yi?ya:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ei(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Is(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var bh=[.64,.33,.3,.6,.15,.06],Sh=[.2126,.7152,.0722],Th=[.3127,.329],wh=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Eh=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Je.define({[Yt]:{primaries:bh,whitePoint:Th,transfer:ya,toXYZ:wh,fromXYZ:Eh,luminanceCoefficients:Sh,workingColorSpaceConfig:{unpackColorSpace:_t},outputColorSpaceConfig:{drawingBufferColorSpace:_t}},[_t]:{primaries:bh,whitePoint:Th,transfer:lt,toXYZ:wh,fromXYZ:Eh,luminanceCoefficients:Sh,outputColorSpaceConfig:{drawingBufferColorSpace:_t}}});var ls,il=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ls===void 0&&(ls=Er("canvas")),ls.width=e.width,ls.height=e.height;let n=ls.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ls}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Er("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ei(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ei(t[n]/255)*255):t[n]=ei(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},dg=0,Bo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dg++}),this.uuid=yn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(za(s[o].image)):r.push(za(s[o]))}else r=za(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function za(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?il.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var fg=0,Ft=class i extends ni{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Jn,s=Jn,r=Gt,o=kn,a=en,c=ti,l=i.DEFAULT_ANISOTROPY,u=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fg++}),this.uuid=yn(),this.name="",this.source=new Bo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ud)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qi:e.x=e.x-Math.floor(e.x);break;case Jn:e.x=e.x<0?0:1;break;case Tr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qi:e.y=e.y-Math.floor(e.y);break;case Jn:e.y=e.y<0?0:1;break;case Tr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=Ud;Ft.DEFAULT_ANISOTROPY=1;var nt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],m=c[9],v=c[2],g=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(m+g)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(l+1)/2,x=(d+1)/2,A=(p+1)/2,M=(u+f)/4,w=(h+v)/4,E=(m+g)/4;return _>x&&_>A?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=M/n,r=w/n):x>A?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=M/s,r=E/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=w/r,s=E/r),this.set(n,s,r,t),this}let y=Math.sqrt((g-m)*(g-m)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(h-v)/y,this.z=(f-u)/y,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},sl=class extends ni{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ft(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Bo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Un=class extends sl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},zo=class extends Ft{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var rl=class extends Ft{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3],f=r[o+0],d=r[o+1],m=r[o+2],v=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=m,e[t+3]=v;return}if(h!==v||c!==f||l!==d||u!==m){let g=1-a,p=c*f+l*d+u*m+h*v,y=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let A=Math.sqrt(_),M=Math.atan2(A,p*y);g=Math.sin(g*M)/A,a=Math.sin(a*M)/A}let x=a*y;if(c=c*g+f*x,l=l*g+d*x,u=u*g+m*x,h=h*g+v*x,g===1-a){let A=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=A,l*=A,u*=A,h*=A}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return e[t]=a*m+u*h+c*d-l*f,e[t+1]=c*m+u*f+l*h-a*d,e[t+2]=l*m+u*d+a*f-c*h,e[t+3]=u*m-a*h-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),f=c(n/2),d=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=f*u*h+l*d*m,this._y=l*d*h-f*u*m,this._z=l*u*m+f*d*h,this._w=l*u*h-f*d*m;break;case"YXZ":this._x=f*u*h+l*d*m,this._y=l*d*h-f*u*m,this._z=l*u*m-f*d*h,this._w=l*u*h+f*d*m;break;case"ZXY":this._x=f*u*h-l*d*m,this._y=l*d*h+f*u*m,this._z=l*u*m+f*d*h,this._w=l*u*h-f*d*m;break;case"ZYX":this._x=f*u*h-l*d*m,this._y=l*d*h+f*u*m,this._z=l*u*m-f*d*h,this._w=l*u*h+f*d*m;break;case"YZX":this._x=f*u*h+l*d*m,this._y=l*d*h+f*u*m,this._z=l*u*m-f*d*h,this._w=l*u*h-f*d*m;break;case"XZY":this._x=f*u*h-l*d*m,this._y=l*d*h-f*u*m,this._z=l*u*m+f*d*h,this._w=l*u*h+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+u)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ah.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ah.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ha.copy(this).projectOnVector(e),this.sub(Ha)}reflect(e){return this.sub(Ha.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ha=new O,Ah=new Xt,nn=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Cn):Cn.fromBufferAttribute(r,o),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),eo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),eo.copy(n.boundingBox)),eo.applyMatrix4(e.matrixWorld),this.union(eo)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cr),to.subVectors(this.max,cr),us.subVectors(e.a,cr),hs.subVectors(e.b,cr),ds.subVectors(e.c,cr),fi.subVectors(hs,us),pi.subVectors(ds,hs),Oi.subVectors(us,ds);let t=[0,-fi.z,fi.y,0,-pi.z,pi.y,0,-Oi.z,Oi.y,fi.z,0,-fi.x,pi.z,0,-pi.x,Oi.z,0,-Oi.x,-fi.y,fi.x,0,-pi.y,pi.x,0,-Oi.y,Oi.x,0];return!Va(t,us,hs,ds,to)||(t=[1,0,0,0,1,0,0,0,1],!Va(t,us,hs,ds,to))?!1:(no.crossVectors(fi,pi),t=[no.x,no.y,no.z],Va(t,us,hs,ds,to))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Wn=[new O,new O,new O,new O,new O,new O,new O,new O],Cn=new O,eo=new nn,us=new O,hs=new O,ds=new O,fi=new O,pi=new O,Oi=new O,cr=new O,to=new O,no=new O,Fi=new O;function Va(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Fi.fromArray(i,r);let a=s.x*Math.abs(Fi.x)+s.y*Math.abs(Fi.y)+s.z*Math.abs(Fi.z),c=e.dot(Fi),l=t.dot(Fi),u=n.dot(Fi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var pg=new nn,lr=new O,Ga=new O,ln=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):pg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;lr.subVectors(e,this.center);let t=lr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(lr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ga.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(lr.copy(e.center).add(Ga)),this.expandByPoint(lr.copy(e.center).sub(Ga))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Xn=new O,Wa=new O,io=new O,mi=new O,Xa=new O,so=new O,qa=new O,zs=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xn.copy(this.origin).addScaledVector(this.direction,t),Xn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Wa.copy(e).add(t).multiplyScalar(.5),io.copy(t).sub(e).normalize(),mi.copy(this.origin).sub(Wa);let r=e.distanceTo(t)*.5,o=-this.direction.dot(io),a=mi.dot(this.direction),c=-mi.dot(io),l=mi.lengthSq(),u=Math.abs(1-o*o),h,f,d,m;if(u>0)if(h=o*c-a,f=o*a-c,m=r*u,h>=0)if(f>=-m)if(f<=m){let v=1/u;h*=v,f*=v,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f<=-m?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l):f<=m?(h=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Wa).addScaledVector(io,f),d}intersectSphere(e,t){Xn.subVectors(e.center,this.origin);let n=Xn.dot(this.direction),s=Xn.dot(Xn)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Xn)!==null}intersectTriangle(e,t,n,s,r){Xa.subVectors(t,e),so.subVectors(n,e),qa.crossVectors(Xa,so);let o=this.direction.dot(qa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;mi.subVectors(this.origin,e);let c=a*this.direction.dot(so.crossVectors(mi,so));if(c<0)return null;let l=a*this.direction.dot(Xa.cross(mi));if(l<0||c+l>o)return null;let u=-a*mi.dot(qa);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ke=class i{constructor(e,t,n,s,r,o,a,c,l,u,h,f,d,m,v,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,u,h,f,d,m,v,g)}set(e,t,n,s,r,o,a,c,l,u,h,f,d,m,v,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/fs.setFromMatrixColumn(e,0).length(),r=1/fs.setFromMatrixColumn(e,1).length(),o=1/fs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=o*u,d=o*h,m=a*u,v=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=d+m*l,t[5]=f-v*l,t[9]=-a*c,t[2]=v-f*l,t[6]=m+d*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*u,d=c*h,m=l*u,v=l*h;t[0]=f+v*a,t[4]=m*a-d,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-m,t[6]=v+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*u,d=c*h,m=l*u,v=l*h;t[0]=f-v*a,t[4]=-o*h,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*u,t[9]=v-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*u,d=o*h,m=a*u,v=a*h;t[0]=c*u,t[4]=m*l-d,t[8]=f*l+v,t[1]=c*h,t[5]=v*l+f,t[9]=d*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,d=o*l,m=a*c,v=a*l;t[0]=c*u,t[4]=v-f*h,t[8]=m*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=d*h+m,t[10]=f-v*h}else if(e.order==="XZY"){let f=o*c,d=o*l,m=a*c,v=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+v,t[5]=o*u,t[9]=d*h-m,t[2]=m*h-d,t[6]=a*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mg,e,gg)}lookAt(e,t,n){let s=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),gi.crossVectors(n,an),gi.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),gi.crossVectors(n,an)),gi.normalize(),ro.crossVectors(an,gi),s[0]=gi.x,s[4]=ro.x,s[8]=an.x,s[1]=gi.y,s[5]=ro.y,s[9]=an.y,s[2]=gi.z,s[6]=ro.z,s[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],d=n[13],m=n[2],v=n[6],g=n[10],p=n[14],y=n[3],_=n[7],x=n[11],A=n[15],M=s[0],w=s[4],E=s[8],b=s[12],T=s[1],R=s[5],V=s[9],G=s[13],N=s[2],P=s[6],D=s[10],B=s[14],U=s[3],z=s[7],oe=s[11],de=s[15];return r[0]=o*M+a*T+c*N+l*U,r[4]=o*w+a*R+c*P+l*z,r[8]=o*E+a*V+c*D+l*oe,r[12]=o*b+a*G+c*B+l*de,r[1]=u*M+h*T+f*N+d*U,r[5]=u*w+h*R+f*P+d*z,r[9]=u*E+h*V+f*D+d*oe,r[13]=u*b+h*G+f*B+d*de,r[2]=m*M+v*T+g*N+p*U,r[6]=m*w+v*R+g*P+p*z,r[10]=m*E+v*V+g*D+p*oe,r[14]=m*b+v*G+g*B+p*de,r[3]=y*M+_*T+x*N+A*U,r[7]=y*w+_*R+x*P+A*z,r[11]=y*E+_*V+x*D+A*oe,r[15]=y*b+_*G+x*B+A*de,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],d=e[14],m=e[3],v=e[7],g=e[11],p=e[15];return m*(+r*c*h-s*l*h-r*a*f+n*l*f+s*a*d-n*c*d)+v*(+t*c*d-t*l*f+r*o*f-s*o*d+s*l*u-r*c*u)+g*(+t*l*h-t*a*d-r*o*h+n*o*d+r*a*u-n*l*u)+p*(-s*a*u-t*c*h+t*a*f+s*o*h-n*o*f+n*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],m=e[12],v=e[13],g=e[14],p=e[15],y=h*g*l-v*f*l+v*c*d-a*g*d-h*c*p+a*f*p,_=m*f*l-u*g*l-m*c*d+o*g*d+u*c*p-o*f*p,x=u*v*l-m*h*l+m*a*d-o*v*d-u*a*p+o*h*p,A=m*h*c-u*v*c-m*a*f+o*v*f+u*a*g-o*h*g,M=t*y+n*_+s*x+r*A;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/M;return e[0]=y*w,e[1]=(v*f*r-h*g*r-v*s*d+n*g*d+h*s*p-n*f*p)*w,e[2]=(a*g*r-v*c*r+v*s*l-n*g*l-a*s*p+n*c*p)*w,e[3]=(h*c*r-a*f*r-h*s*l+n*f*l+a*s*d-n*c*d)*w,e[4]=_*w,e[5]=(u*g*r-m*f*r+m*s*d-t*g*d-u*s*p+t*f*p)*w,e[6]=(m*c*r-o*g*r-m*s*l+t*g*l+o*s*p-t*c*p)*w,e[7]=(o*f*r-u*c*r+u*s*l-t*f*l-o*s*d+t*c*d)*w,e[8]=x*w,e[9]=(m*h*r-u*v*r-m*n*d+t*v*d+u*n*p-t*h*p)*w,e[10]=(o*v*r-m*a*r+m*n*l-t*v*l-o*n*p+t*a*p)*w,e[11]=(u*a*r-o*h*r-u*n*l+t*h*l+o*n*d-t*a*d)*w,e[12]=A*w,e[13]=(u*v*s-m*h*s+m*n*f-t*v*f-u*n*g+t*h*g)*w,e[14]=(m*a*s-o*v*s-m*n*c+t*v*c+o*n*g-t*a*g)*w,e[15]=(o*h*s-u*a*s+u*n*c-t*h*c-o*n*f+t*a*f)*w,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,f=r*l,d=r*u,m=r*h,v=o*u,g=o*h,p=a*h,y=c*l,_=c*u,x=c*h,A=n.x,M=n.y,w=n.z;return s[0]=(1-(v+p))*A,s[1]=(d+x)*A,s[2]=(m-_)*A,s[3]=0,s[4]=(d-x)*M,s[5]=(1-(f+p))*M,s[6]=(g+y)*M,s[7]=0,s[8]=(m+_)*w,s[9]=(g-y)*w,s[10]=(1-(f+v))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=fs.set(s[0],s[1],s[2]).length(),o=fs.set(s[4],s[5],s[6]).length(),a=fs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],In.copy(this);let l=1/r,u=1/o,h=1/a;return In.elements[0]*=l,In.elements[1]*=l,In.elements[2]*=l,In.elements[4]*=u,In.elements[5]*=u,In.elements[6]*=u,In.elements[8]*=h,In.elements[9]*=h,In.elements[10]*=h,t.setFromRotationMatrix(In),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Qn){let c=this.elements,l=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s),d,m;if(a===Qn)d=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===ko)d=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Qn){let c=this.elements,l=1/(t-e),u=1/(n-s),h=1/(o-r),f=(t+e)*l,d=(n+s)*u,m,v;if(a===Qn)m=(o+r)*h,v=-2*h;else if(a===ko)m=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=v,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},fs=new O,In=new ke,mg=new O(0,0,0),gg=new O(1,1,1),gi=new O,ro=new O,an=new O,Rh=new ke,Ch=new Xt,un=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ct(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ct(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Rh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ch.setFromEuler(this),this.setFromQuaternion(Ch,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};un.DEFAULT_ORDER="XYZ";var Ho=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},xg=0,Ih=new O,ps=new Xt,qn=new ke,oo=new O,ur=new O,_g=new O,yg=new Xt,Ph=new O(1,0,0),Lh=new O(0,1,0),Dh=new O(0,0,1),Uh={type:"added"},vg={type:"removed"},ms={type:"childadded",child:null},Ya={type:"childremoved",child:null},mt=class i extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xg++}),this.uuid=yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new O,t=new un,n=new Xt,s=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ke},normalMatrix:{value:new qe}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ho,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.multiply(ps),this}rotateOnWorldAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.premultiply(ps),this}rotateX(e){return this.rotateOnAxis(Ph,e)}rotateY(e){return this.rotateOnAxis(Lh,e)}rotateZ(e){return this.rotateOnAxis(Dh,e)}translateOnAxis(e,t){return Ih.copy(e).applyQuaternion(this.quaternion),this.position.add(Ih.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ph,e)}translateY(e){return this.translateOnAxis(Lh,e)}translateZ(e){return this.translateOnAxis(Dh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?oo.copy(e):oo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(ur,oo,this.up):qn.lookAt(oo,ur,this.up),this.quaternion.setFromRotationMatrix(qn),s&&(qn.extractRotation(s.matrixWorld),ps.setFromRotationMatrix(qn),this.quaternion.premultiply(ps.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Uh),ms.child=e,this.dispatchEvent(ms),ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vg),Ya.child=e,this.dispatchEvent(Ya),Ya.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Uh),ms.child=e,this.dispatchEvent(ms),ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,e,_g),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,yg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};mt.DEFAULT_UP=new O(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pn=new O,Yn=new O,$a=new O,$n=new O,gs=new O,xs=new O,Nh=new O,Za=new O,ja=new O,Ka=new O,Ja=new nt,Qa=new nt,ec=new nt,Wi=class i{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Pn.subVectors(e,t),s.cross(Pn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Pn.subVectors(s,t),Yn.subVectors(n,t),$a.subVectors(e,t);let o=Pn.dot(Pn),a=Pn.dot(Yn),c=Pn.dot($a),l=Yn.dot(Yn),u=Yn.dot($a),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(l*c-a*u)*f,m=(o*u-a*c)*f;return r.set(1-d-m,m,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,$n)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,$n.x),c.addScaledVector(o,$n.y),c.addScaledVector(a,$n.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Ja.setScalar(0),Qa.setScalar(0),ec.setScalar(0),Ja.fromBufferAttribute(e,t),Qa.fromBufferAttribute(e,n),ec.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ja,r.x),o.addScaledVector(Qa,r.y),o.addScaledVector(ec,r.z),o}static isFrontFacing(e,t,n,s){return Pn.subVectors(n,t),Yn.subVectors(e,t),Pn.cross(Yn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),Pn.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;gs.subVectors(s,n),xs.subVectors(r,n),Za.subVectors(e,n);let c=gs.dot(Za),l=xs.dot(Za);if(c<=0&&l<=0)return t.copy(n);ja.subVectors(e,s);let u=gs.dot(ja),h=xs.dot(ja);if(u>=0&&h<=u)return t.copy(s);let f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(gs,o);Ka.subVectors(e,r);let d=gs.dot(Ka),m=xs.dot(Ka);if(m>=0&&d<=m)return t.copy(r);let v=d*l-c*m;if(v<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(n).addScaledVector(xs,a);let g=u*m-d*h;if(g<=0&&h-u>=0&&d-m>=0)return Nh.subVectors(r,s),a=(h-u)/(h-u+(d-m)),t.copy(s).addScaledVector(Nh,a);let p=1/(g+v+f);return o=v*p,a=f*p,t.copy(n).addScaledVector(gs,o).addScaledVector(xs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Yd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},ao={h:0,s:0,l:0};function tc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ie=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Je.workingColorSpace){if(e=eu(e,1),t=Ct(t,0,1),n=Ct(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=tc(o,r,e+1/3),this.g=tc(o,r,e),this.b=tc(o,r,e-1/3)}return Je.toWorkingColorSpace(this,s),this}setStyle(e,t=_t){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_t){let n=Yd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ei(e.r),this.g=ei(e.g),this.b=ei(e.b),this}copyLinearToSRGB(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_t){return Je.fromWorkingColorSpace(Vt.copy(this),e),Math.round(Ct(Vt.r*255,0,255))*65536+Math.round(Ct(Vt.g*255,0,255))*256+Math.round(Ct(Vt.b*255,0,255))}getHexString(e=_t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(Vt.copy(this),t);let n=Vt.r,s=Vt.g,r=Vt.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=_t){Je.fromWorkingColorSpace(Vt.copy(this),e);let t=Vt.r,n=Vt.g,s=Vt.b;return e!==_t?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(xi),this.setHSL(xi.h+e,xi.s+t,xi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xi),e.getHSL(ao);let n=vr(xi.h,ao.h,t),s=vr(xi.s,ao.s,t),r=vr(xi.l,ao.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Vt=new Ie;Ie.NAMES=Yd;var Mg=0,jt=class extends ni{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mg++}),this.uuid=yn(),this.name="",this.blending=Rs,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yc,this.blendDst=vc,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_h,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(n.blending=this.blending),this.side!==Bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==yc&&(n.blendSrc=this.blendSrc),this.blendDst!==vc&&(n.blendDst=this.blendDst),this.blendEquation!==Gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ls&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_h&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},St=class extends jt{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=Gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var At=new O,co=new xe,pt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=nl,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)co.fromBufferAttribute(this,t),co.applyMatrix3(e),this.setXY(t,co.x,co.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ln(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ln(t,this.array)),t}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ln(t,this.array)),t}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ln(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ln(t,this.array)),t}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array),r=ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nl&&(e.usage=this.usage),e}};var Vo=class extends pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Go=class extends pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ze=class extends pt{constructor(e,t,n){super(new Float32Array(e),t,n)}},bg=0,_n=new ke,nc=new mt,_s=new O,cn=new nn,hr=new nn,Ot=new O,ht=class i extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qd(e)?Go:Vo)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,t,n){return _n.makeTranslation(e,t,n),this.applyMatrix4(_n),this}scale(e,t,n){return _n.makeScale(e,t,n),this.applyMatrix4(_n),this}lookAt(e){return nc.lookAt(e),nc.updateMatrix(),this.applyMatrix4(nc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ze(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ln);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let n=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];hr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(cn.min,hr.min),cn.expandByPoint(Ot),Ot.addVectors(cn.max,hr.max),cn.expandByPoint(Ot)):(cn.expandByPoint(hr.min),cn.expandByPoint(hr.max))}cn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Ot.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ot));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ot.fromBufferAttribute(a,l),c&&(_s.fromBufferAttribute(e,l),Ot.add(_s)),s=Math.max(s,n.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let E=0;E<n.count;E++)a[E]=new O,c[E]=new O;let l=new O,u=new O,h=new O,f=new xe,d=new xe,m=new xe,v=new O,g=new O;function p(E,b,T){l.fromBufferAttribute(n,E),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,T),f.fromBufferAttribute(r,E),d.fromBufferAttribute(r,b),m.fromBufferAttribute(r,T),u.sub(l),h.sub(l),d.sub(f),m.sub(f);let R=1/(d.x*m.y-m.x*d.y);isFinite(R)&&(v.copy(u).multiplyScalar(m.y).addScaledVector(h,-d.y).multiplyScalar(R),g.copy(h).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(R),a[E].add(v),a[b].add(v),a[T].add(v),c[E].add(g),c[b].add(g),c[T].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let E=0,b=y.length;E<b;++E){let T=y[E],R=T.start,V=T.count;for(let G=R,N=R+V;G<N;G+=3)p(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let _=new O,x=new O,A=new O,M=new O;function w(E){A.fromBufferAttribute(s,E),M.copy(A);let b=a[E];_.copy(b),_.sub(A.multiplyScalar(A.dot(b))).normalize(),x.crossVectors(M,b);let R=x.dot(c[E])<0?-1:1;o.setXYZW(E,_.x,_.y,_.z,R)}for(let E=0,b=y.length;E<b;++E){let T=y[E],R=T.start,V=T.count;for(let G=R,N=R+V;G<N;G+=3)w(e.getX(G+0)),w(e.getX(G+1)),w(e.getX(G+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new O,r=new O,o=new O,a=new O,c=new O,l=new O,u=new O,h=new O;if(e)for(let f=0,d=e.count;f<d;f+=3){let m=e.getX(f+0),v=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),a.add(u),c.add(u),l.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u),d=0,m=0;for(let v=0,g=c.length;v<g;v++){a.isInterleavedBufferAttribute?d=c[v]*a.data.stride+a.offset:d=c[v]*u;for(let p=0;p<u;p++)f[m++]=l[d++]}return new pt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){let f=l[u],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){let d=l[h];u.push(d.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],h=r[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Oh=new ke,ki=new zs,lo=new ln,Fh=new O,uo=new O,ho=new O,fo=new O,ic=new O,po=new O,kh=new O,mo=new O,je=class extends mt{constructor(e=new ht,t=new St){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){po.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],h=r[c];u!==0&&(ic.fromBufferAttribute(h,e),o?po.addScaledVector(ic,u):po.addScaledVector(ic.sub(t),u))}t.add(po)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),lo.copy(n.boundingSphere),lo.applyMatrix4(r),ki.copy(e.ray).recast(e.near),!(lo.containsPoint(ki.origin)===!1&&(ki.intersectSphere(lo,Fh)===null||ki.origin.distanceToSquared(Fh)>(e.far-e.near)**2))&&(Oh.copy(r).invert(),ki.copy(e.ray).applyMatrix4(Oh),!(n.boundingBox!==null&&ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ki)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=f.length;m<v;m++){let g=f[m],p=o[g.materialIndex],y=Math.max(g.start,d.start),_=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let x=y,A=_;x<A;x+=3){let M=a.getX(x),w=a.getX(x+1),E=a.getX(x+2);s=go(this,p,e,n,l,u,h,M,w,E),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let g=m,p=v;g<p;g+=3){let y=a.getX(g),_=a.getX(g+1),x=a.getX(g+2);s=go(this,o,e,n,l,u,h,y,_,x),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,v=f.length;m<v;m++){let g=f[m],p=o[g.materialIndex],y=Math.max(g.start,d.start),_=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let x=y,A=_;x<A;x+=3){let M=x,w=x+1,E=x+2;s=go(this,p,e,n,l,u,h,M,w,E),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let g=m,p=v;g<p;g+=3){let y=g,_=g+1,x=g+2;s=go(this,o,e,n,l,u,h,y,_,x),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Sg(i,e,t,n,s,r,o,a){let c;if(e.side===tn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Bn,a),c===null)return null;mo.copy(a),mo.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(mo);return l<t.near||l>t.far?null:{distance:l,point:mo.clone(),object:i}}function go(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,uo),i.getVertexPosition(c,ho),i.getVertexPosition(l,fo);let u=Sg(i,e,t,n,uo,ho,fo,kh);if(u){let h=new O;Wi.getBarycoord(kh,uo,ho,fo,h),s&&(u.uv=Wi.getInterpolatedAttribute(s,a,c,l,h,new xe)),r&&(u.uv1=Wi.getInterpolatedAttribute(r,a,c,l,h,new xe)),o&&(u.normal=Wi.getInterpolatedAttribute(o,a,c,l,h,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new O,materialIndex:0};Wi.getNormal(uo,ho,fo,f.normal),u.face=f,u.barycoord=h}return u}var qt=class i extends ht{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],h=[],f=0,d=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,s,o,2),m("x","z","y",1,-1,e,n,-t,s,o,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ze(l,3)),this.setAttribute("normal",new Ze(u,3)),this.setAttribute("uv",new Ze(h,2));function m(v,g,p,y,_,x,A,M,w,E,b){let T=x/w,R=A/E,V=x/2,G=A/2,N=M/2,P=w+1,D=E+1,B=0,U=0,z=new O;for(let oe=0;oe<D;oe++){let de=oe*R-G;for(let Me=0;Me<P;Me++){let Re=Me*T-V;z[v]=Re*y,z[g]=de*_,z[p]=N,l.push(z.x,z.y,z.z),z[v]=0,z[g]=0,z[p]=M>0?1:-1,u.push(z.x,z.y,z.z),h.push(Me/w),h.push(1-oe/E),B+=1}}for(let oe=0;oe<E;oe++)for(let de=0;de<w;de++){let Me=f+de+P*oe,Re=f+de+P*(oe+1),te=f+(de+1)+P*(oe+1),le=f+(de+1)+P*oe;c.push(Me,Re,le),c.push(Re,te,le),U+=6}a.addGroup(d,U,b),d+=U,f+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Hs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Zt(i){let e={};for(let t=0;t<i.length;t++){let n=Hs(i[t]);for(let s in n)e[s]=n[s]}return e}function Tg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function $d(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}var wg={clone:Hs,merge:Zt},Eg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ag=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,vn=class extends jt{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Eg,this.fragmentShader=Ag,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=Tg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Wo=class extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=Qn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},_i=new O,Bh=new xe,zh=new xe,wt=class extends Wo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Bs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(yr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bs*2*Math.atan(Math.tan(yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){_i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_i.x,_i.y).multiplyScalar(-e/_i.z),_i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_i.x,_i.y).multiplyScalar(-e/_i.z)}getViewSize(e,t){return this.getViewBounds(e,Bh,zh),t.subVectors(zh,Bh)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(yr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ys=-90,vs=1,ol=class extends mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new wt(ys,vs,e,t);s.layers=this.layers,this.add(s);let r=new wt(ys,vs,e,t);r.layers=this.layers,this.add(r);let o=new wt(ys,vs,e,t);o.layers=this.layers,this.add(o);let a=new wt(ys,vs,e,t);a.layers=this.layers,this.add(a);let c=new wt(ys,vs,e,t);c.layers=this.layers,this.add(c);let l=new wt(ys,vs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ko)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Xo=class extends Ft{constructor(e,t,n,s,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Ds,super(e,t,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},al=class extends Un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Xo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Gt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new qt(5,5,5),r=new vn({name:"CubemapFromEquirect",uniforms:Hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:Mi});r.uniforms.tEquirect.value=t;let o=new je(s,r),a=t.minFilter;return t.minFilter===kn&&(t.minFilter=Gt),new ol(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},sc=new O,Rg=new O,Cg=new qe,Kn=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=sc.subVectors(n,t).cross(Rg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(sc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Cg.getNormalMatrix(e),s=this.coplanarPoint(sc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Bi=new ln,xo=new O,Ar=class{constructor(e=new Kn,t=new Kn,n=new Kn,s=new Kn,r=new Kn,o=new Kn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Qn){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],f=s[7],d=s[8],m=s[9],v=s[10],g=s[11],p=s[12],y=s[13],_=s[14],x=s[15];if(n[0].setComponents(c-r,f-l,g-d,x-p).normalize(),n[1].setComponents(c+r,f+l,g+d,x+p).normalize(),n[2].setComponents(c+o,f+u,g+m,x+y).normalize(),n[3].setComponents(c-o,f-u,g-m,x-y).normalize(),n[4].setComponents(c-a,f-h,g-v,x-_).normalize(),t===Qn)n[5].setComponents(c+a,f+h,g+v,x+_).normalize();else if(t===ko)n[5].setComponents(a,h,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(e){return Bi.center.set(0,0,0),Bi.radius=.7071067811865476,Bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(xo.x=s.normal.x>0?e.max.x:e.min.x,xo.y=s.normal.y>0?e.max.y:e.min.y,xo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(xo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Zd(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Ig(i){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){let u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<h.length;d++){let m=h[f],v=h[d];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++f,h[f]=v)}h.length=f+1;for(let d=0,m=h.length;d<m;d++){let v=h[d];i.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var ii=class i extends ht{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=e/a,f=t/c,d=[],m=[],v=[],g=[];for(let p=0;p<u;p++){let y=p*f-o;for(let _=0;_<l;_++){let x=_*h-r;m.push(x,-y,0),v.push(0,0,1),g.push(_/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){let _=y+l*p,x=y+l*(p+1),A=y+1+l*(p+1),M=y+1+l*p;d.push(_,x,M),d.push(x,A,M)}this.setIndex(d),this.setAttribute("position",new Ze(m,3)),this.setAttribute("normal",new Ze(v,3)),this.setAttribute("uv",new Ze(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Pg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Dg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ug=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ng=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Og=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,zg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Wg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Xg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,qg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Yg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$g=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Qg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,e0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,t0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,n0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,i0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,s0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,r0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,o0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,a0="gl_FragColor = linearToOutputTexel( gl_FragColor );",c0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,l0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,u0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,h0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,d0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,f0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,p0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,m0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,g0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,x0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,y0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,v0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,M0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,b0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,S0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,T0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,w0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,E0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,A0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,R0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,C0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,I0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,P0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,L0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,D0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,U0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,O0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,F0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,k0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,B0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,z0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,H0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,V0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,G0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,W0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,X0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,q0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Y0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Z0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,j0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,J0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Q0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ex=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ix=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ox=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ax=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ux=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,fx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,px=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,mx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_x=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Cx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ix=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Px=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ox=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Fx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,kx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Bx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Xx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$x=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Zx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Kx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Jx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,t_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,i_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,r_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,o_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,c_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,l_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:Pg,alphahash_pars_fragment:Lg,alphamap_fragment:Dg,alphamap_pars_fragment:Ug,alphatest_fragment:Ng,alphatest_pars_fragment:Og,aomap_fragment:Fg,aomap_pars_fragment:kg,batching_pars_vertex:Bg,batching_vertex:zg,begin_vertex:Hg,beginnormal_vertex:Vg,bsdfs:Gg,iridescence_fragment:Wg,bumpmap_pars_fragment:Xg,clipping_planes_fragment:qg,clipping_planes_pars_fragment:Yg,clipping_planes_pars_vertex:$g,clipping_planes_vertex:Zg,color_fragment:jg,color_pars_fragment:Kg,color_pars_vertex:Jg,color_vertex:Qg,common:e0,cube_uv_reflection_fragment:t0,defaultnormal_vertex:n0,displacementmap_pars_vertex:i0,displacementmap_vertex:s0,emissivemap_fragment:r0,emissivemap_pars_fragment:o0,colorspace_fragment:a0,colorspace_pars_fragment:c0,envmap_fragment:l0,envmap_common_pars_fragment:u0,envmap_pars_fragment:h0,envmap_pars_vertex:d0,envmap_physical_pars_fragment:S0,envmap_vertex:f0,fog_vertex:p0,fog_pars_vertex:m0,fog_fragment:g0,fog_pars_fragment:x0,gradientmap_pars_fragment:_0,lightmap_pars_fragment:y0,lights_lambert_fragment:v0,lights_lambert_pars_fragment:M0,lights_pars_begin:b0,lights_toon_fragment:T0,lights_toon_pars_fragment:w0,lights_phong_fragment:E0,lights_phong_pars_fragment:A0,lights_physical_fragment:R0,lights_physical_pars_fragment:C0,lights_fragment_begin:I0,lights_fragment_maps:P0,lights_fragment_end:L0,logdepthbuf_fragment:D0,logdepthbuf_pars_fragment:U0,logdepthbuf_pars_vertex:N0,logdepthbuf_vertex:O0,map_fragment:F0,map_pars_fragment:k0,map_particle_fragment:B0,map_particle_pars_fragment:z0,metalnessmap_fragment:H0,metalnessmap_pars_fragment:V0,morphinstance_vertex:G0,morphcolor_vertex:W0,morphnormal_vertex:X0,morphtarget_pars_vertex:q0,morphtarget_vertex:Y0,normal_fragment_begin:$0,normal_fragment_maps:Z0,normal_pars_fragment:j0,normal_pars_vertex:K0,normal_vertex:J0,normalmap_pars_fragment:Q0,clearcoat_normal_fragment_begin:ex,clearcoat_normal_fragment_maps:tx,clearcoat_pars_fragment:nx,iridescence_pars_fragment:ix,opaque_fragment:sx,packing:rx,premultiplied_alpha_fragment:ox,project_vertex:ax,dithering_fragment:cx,dithering_pars_fragment:lx,roughnessmap_fragment:ux,roughnessmap_pars_fragment:hx,shadowmap_pars_fragment:dx,shadowmap_pars_vertex:fx,shadowmap_vertex:px,shadowmask_pars_fragment:mx,skinbase_vertex:gx,skinning_pars_vertex:xx,skinning_vertex:_x,skinnormal_vertex:yx,specularmap_fragment:vx,specularmap_pars_fragment:Mx,tonemapping_fragment:bx,tonemapping_pars_fragment:Sx,transmission_fragment:Tx,transmission_pars_fragment:wx,uv_pars_fragment:Ex,uv_pars_vertex:Ax,uv_vertex:Rx,worldpos_vertex:Cx,background_vert:Ix,background_frag:Px,backgroundCube_vert:Lx,backgroundCube_frag:Dx,cube_vert:Ux,cube_frag:Nx,depth_vert:Ox,depth_frag:Fx,distanceRGBA_vert:kx,distanceRGBA_frag:Bx,equirect_vert:zx,equirect_frag:Hx,linedashed_vert:Vx,linedashed_frag:Gx,meshbasic_vert:Wx,meshbasic_frag:Xx,meshlambert_vert:qx,meshlambert_frag:Yx,meshmatcap_vert:$x,meshmatcap_frag:Zx,meshnormal_vert:jx,meshnormal_frag:Kx,meshphong_vert:Jx,meshphong_frag:Qx,meshphysical_vert:e_,meshphysical_frag:t_,meshtoon_vert:n_,meshtoon_frag:i_,points_vert:s_,points_frag:r_,shadow_vert:o_,shadow_frag:a_,sprite_vert:c_,sprite_frag:l_},Te={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Fn={basic:{uniforms:Zt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Zt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Ie(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Zt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Zt([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Zt([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new Ie(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Zt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Zt([Te.points,Te.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Zt([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Zt([Te.common,Te.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Zt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Zt([Te.sprite,Te.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:Zt([Te.common,Te.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:Zt([Te.lights,Te.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Fn.physical={uniforms:Zt([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};var _o={r:0,b:0,g:0},zi=new un,u_=new ke;function h_(i,e,t,n,s,r,o){let a=new Ie(0),c=r===!0?0:1,l,u,h=null,f=0,d=null;function m(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?t:e).get(_)),_}function v(y){let _=!1,x=m(y);x===null?p(a,c):x&&x.isColor&&(p(x,1),_=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(y,_){let x=m(_);x&&(x.isCubeTexture||x.mapping===ga)?(u===void 0&&(u=new je(new qt(1,1,1),new vn({name:"BackgroundCubeMaterial",uniforms:Hs(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,M,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),zi.copy(_.backgroundRotation),zi.x*=-1,zi.y*=-1,zi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(u_.makeRotationFromEuler(zi)),u.material.toneMapped=Je.getTransfer(x.colorSpace)!==lt,(h!==x||f!==x.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,d=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new je(new ii(2,2),new vn({name:"BackgroundMaterial",uniforms:Hs(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=Je.getTransfer(x.colorSpace)!==lt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,f=x.version,d=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,_){y.getRGB(_o,$d(i)),n.buffers.color.setClear(_o.r,_o.g,_o.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(y,_=1){a.set(y),c=_,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(a,c)},render:v,addToRenderList:g}}function d_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(T,R,V,G,N){let P=!1,D=h(G,V,R);r!==D&&(r=D,l(r.object)),P=d(T,G,V,N),P&&m(T,G,V,N),N!==null&&e.update(N,i.ELEMENT_ARRAY_BUFFER),(P||o)&&(o=!1,x(T,R,V,G),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function c(){return i.createVertexArray()}function l(T){return i.bindVertexArray(T)}function u(T){return i.deleteVertexArray(T)}function h(T,R,V){let G=V.wireframe===!0,N=n[T.id];N===void 0&&(N={},n[T.id]=N);let P=N[R.id];P===void 0&&(P={},N[R.id]=P);let D=P[G];return D===void 0&&(D=f(c()),P[G]=D),D}function f(T){let R=[],V=[],G=[];for(let N=0;N<t;N++)R[N]=0,V[N]=0,G[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:V,attributeDivisors:G,object:T,attributes:{},index:null}}function d(T,R,V,G){let N=r.attributes,P=R.attributes,D=0,B=V.getAttributes();for(let U in B)if(B[U].location>=0){let oe=N[U],de=P[U];if(de===void 0&&(U==="instanceMatrix"&&T.instanceMatrix&&(de=T.instanceMatrix),U==="instanceColor"&&T.instanceColor&&(de=T.instanceColor)),oe===void 0||oe.attribute!==de||de&&oe.data!==de.data)return!0;D++}return r.attributesNum!==D||r.index!==G}function m(T,R,V,G){let N={},P=R.attributes,D=0,B=V.getAttributes();for(let U in B)if(B[U].location>=0){let oe=P[U];oe===void 0&&(U==="instanceMatrix"&&T.instanceMatrix&&(oe=T.instanceMatrix),U==="instanceColor"&&T.instanceColor&&(oe=T.instanceColor));let de={};de.attribute=oe,oe&&oe.data&&(de.data=oe.data),N[U]=de,D++}r.attributes=N,r.attributesNum=D,r.index=G}function v(){let T=r.newAttributes;for(let R=0,V=T.length;R<V;R++)T[R]=0}function g(T){p(T,0)}function p(T,R){let V=r.newAttributes,G=r.enabledAttributes,N=r.attributeDivisors;V[T]=1,G[T]===0&&(i.enableVertexAttribArray(T),G[T]=1),N[T]!==R&&(i.vertexAttribDivisor(T,R),N[T]=R)}function y(){let T=r.newAttributes,R=r.enabledAttributes;for(let V=0,G=R.length;V<G;V++)R[V]!==T[V]&&(i.disableVertexAttribArray(V),R[V]=0)}function _(T,R,V,G,N,P,D){D===!0?i.vertexAttribIPointer(T,R,V,N,P):i.vertexAttribPointer(T,R,V,G,N,P)}function x(T,R,V,G){v();let N=G.attributes,P=V.getAttributes(),D=R.defaultAttributeValues;for(let B in P){let U=P[B];if(U.location>=0){let z=N[B];if(z===void 0&&(B==="instanceMatrix"&&T.instanceMatrix&&(z=T.instanceMatrix),B==="instanceColor"&&T.instanceColor&&(z=T.instanceColor)),z!==void 0){let oe=z.normalized,de=z.itemSize,Me=e.get(z);if(Me===void 0)continue;let Re=Me.buffer,te=Me.type,le=Me.bytesPerElement,be=te===i.INT||te===i.UNSIGNED_INT||z.gpuType===Xl;if(z.isInterleavedBufferAttribute){let j=z.data,he=j.stride,ye=z.offset;if(j.isInstancedInterleavedBuffer){for(let ge=0;ge<U.locationSize;ge++)p(U.location+ge,j.meshPerAttribute);T.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ge=0;ge<U.locationSize;ge++)g(U.location+ge);i.bindBuffer(i.ARRAY_BUFFER,Re);for(let ge=0;ge<U.locationSize;ge++)_(U.location+ge,de/U.locationSize,te,oe,he*le,(ye+de/U.locationSize*ge)*le,be)}else{if(z.isInstancedBufferAttribute){for(let j=0;j<U.locationSize;j++)p(U.location+j,z.meshPerAttribute);T.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let j=0;j<U.locationSize;j++)g(U.location+j);i.bindBuffer(i.ARRAY_BUFFER,Re);for(let j=0;j<U.locationSize;j++)_(U.location+j,de/U.locationSize,te,oe,de*le,de/U.locationSize*j*le,be)}}else if(D!==void 0){let oe=D[B];if(oe!==void 0)switch(oe.length){case 2:i.vertexAttrib2fv(U.location,oe);break;case 3:i.vertexAttrib3fv(U.location,oe);break;case 4:i.vertexAttrib4fv(U.location,oe);break;default:i.vertexAttrib1fv(U.location,oe)}}}}y()}function A(){E();for(let T in n){let R=n[T];for(let V in R){let G=R[V];for(let N in G)u(G[N].object),delete G[N];delete R[V]}delete n[T]}}function M(T){if(n[T.id]===void 0)return;let R=n[T.id];for(let V in R){let G=R[V];for(let N in G)u(G[N].object),delete G[N];delete R[V]}delete n[T.id]}function w(T){for(let R in n){let V=n[R];if(V[T.id]===void 0)continue;let G=V[T.id];for(let N in G)u(G[N].object),delete G[N];delete V[T.id]}}function E(){b(),o=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:b,dispose:A,releaseStatesOfGeometry:M,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:g,disableUnusedAttributes:y}}function f_(i,e,t){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let d=0;for(let m=0;m<h;m++)d+=u[m];t.update(d,n,1)}function c(l,u,h,f){if(h===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<l.length;m++)o(l[m],u[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,h);let m=0;for(let v=0;v<h;v++)m+=u[v]*f[v];t.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function p_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==en&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let E=w===Hr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==ti&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Dn&&!E)}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=m>0,M=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:A,maxSamples:M}}function m_(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Kn,a=new qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||s;return s=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){let m=h.clippingPlanes,v=h.clipIntersection,g=h.clipShadows,p=i.get(h);if(!s||m===null||m.length===0||r&&!g)r?u(null):l();else{let y=r?0:n,_=y*4,x=p.clippingState||null;c.value=x,x=u(m,f,_,d);for(let A=0;A!==_;++A)x[A]=t[A];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,m){let v=h!==null?h.length:0,g=null;if(v!==0){if(g=c.value,m!==!0||g===null){let p=d+v*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let _=0,x=d;_!==v;++_,x+=4)o.copy(h[_]).applyMatrix4(y,a),o.normal.toArray(g,x),g[x+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function g_(i){let e=new WeakMap;function t(o,a){return a===Rc?o.mapping=Ds:a===Cc&&(o.mapping=Us),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Rc||a===Cc)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new al(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Vs=class extends Wo{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Es=4,Hh=[.125,.215,.35,.446,.526,.582],Xi=20,rc=new Vs,Vh=new Ie,oc=null,ac=0,cc=0,lc=!1,Vi=(1+Math.sqrt(5))/2,Ms=1/Vi,Gh=[new O(-Vi,Ms,0),new O(Vi,Ms,0),new O(-Ms,0,Vi),new O(Ms,0,Vi),new O(0,Vi,-Ms),new O(0,Vi,Ms),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],qo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){oc=this._renderer.getRenderTarget(),ac=this._renderer.getActiveCubeFace(),cc=this._renderer.getActiveMipmapLevel(),lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(oc,ac,cc),this._renderer.xr.enabled=lc,e.scissorTest=!1,yo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ds||e.mapping===Us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oc=this._renderer.getRenderTarget(),ac=this._renderer.getActiveCubeFace(),cc=this._renderer.getActiveMipmapLevel(),lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:Hr,format:en,colorSpace:Yt,depthBuffer:!1},s=Wh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wh(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=x_(r)),this._blurMaterial=__(r,e,t)}return s}_compileMaterial(e){let t=new je(this._lodPlanes[0],e);this._renderer.compile(t,rc)}_sceneToCubeUV(e,t,n,s){let a=new wt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Vh),u.toneMapping=bi,u.autoClear=!1;let d=new St({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),m=new je(new qt,d),v=!1,g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,v=!0):(d.color.copy(Vh),v=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):y===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let _=this._cubeSize;yo(s,y*_,p>2?_:0,_,_),u.setRenderTarget(s),v&&u.render(m,a),u.render(e,a)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ds||e.mapping===Us;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=qh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new je(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;yo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,rc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Gh[(s-r-1)%Gh.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new je(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Xi-1),v=r/m,g=isFinite(r)?1+Math.floor(u*v):Xi;g>Xi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Xi}`);let p=[],y=0;for(let w=0;w<Xi;++w){let E=w/v,b=Math.exp(-E*E/2);p.push(b),w===0?y+=b:w<g&&(y+=2*b)}for(let w=0;w<p.length;w++)p[w]=p[w]/y;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:_}=this;f.dTheta.value=m,f.mipInt.value=_-n;let x=this._sizeLods[s],A=3*x*(s>_-Es?s-_+Es:0),M=4*(this._cubeSize-x);yo(t,A,M,3*x,2*x),c.setRenderTarget(t),c.render(h,rc)}};function x_(i){let e=[],t=[],n=[],s=i,r=i-Es+1+Hh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-Es?c=Hh[o-i+Es-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,m=6,v=3,g=2,p=1,y=new Float32Array(v*m*d),_=new Float32Array(g*m*d),x=new Float32Array(p*m*d);for(let M=0;M<d;M++){let w=M%3*2/3-1,E=M>2?0:-1,b=[w,E,0,w+2/3,E,0,w+2/3,E+1,0,w,E,0,w+2/3,E+1,0,w,E+1,0];y.set(b,v*m*M),_.set(f,g*m*M);let T=[M,M,M,M,M,M];x.set(T,p*m*M)}let A=new ht;A.setAttribute("position",new pt(y,v)),A.setAttribute("uv",new pt(_,g)),A.setAttribute("faceIndex",new pt(x,p)),e.push(A),s>Es&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Wh(i,e,t){let n=new Un(i,e,t);return n.texture.mapping=ga,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function yo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function __(i,e,t){let n=new Float32Array(Xi),s=new O(0,1,0);return new vn({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Xh(){return new vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function qh(){return new vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function tu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function y_(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Rc||c===Cc,u=c===Ds||c===Us;if(l||u){let h=e.get(a),f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new qo(i)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let d=a.image;return l&&d&&d.height>0||u&&d&&s(d)?(t===null&&(t=new qo(i)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function v_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&gr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function M_(i,e,t,n){let s={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let m in f.attributes)e.remove(f.attributes[m]);for(let m in f.morphAttributes){let v=f.morphAttributes[m];for(let g=0,p=v.length;g<p;g++)e.remove(v[g])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(h){let f=h.attributes;for(let m in f)e.update(f[m],i.ARRAY_BUFFER);let d=h.morphAttributes;for(let m in d){let v=d[m];for(let g=0,p=v.length;g<p;g++)e.update(v[g],i.ARRAY_BUFFER)}}function l(h){let f=[],d=h.index,m=h.attributes.position,v=0;if(d!==null){let y=d.array;v=d.version;for(let _=0,x=y.length;_<x;_+=3){let A=y[_+0],M=y[_+1],w=y[_+2];f.push(A,M,M,w,w,A)}}else if(m!==void 0){let y=m.array;v=m.version;for(let _=0,x=y.length/3-1;_<x;_+=3){let A=_+0,M=_+1,w=_+2;f.push(A,M,M,w,w,A)}}else return;let g=new(qd(f)?Go:Vo)(f,1);g.version=v;let p=r.get(h);p&&e.remove(p),r.set(h,g)}function u(h){let f=r.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function b_(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*o),t.update(d,n,1)}function l(f,d,m){m!==0&&(i.drawElementsInstanced(n,d,r,f*o,m),t.update(d,n,m))}function u(f,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];t.update(g,n,1)}function h(f,d,m,v){if(m===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],v[p]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,v,0,m);let p=0;for(let y=0;y<m;y++)p+=d[y]*v[y];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function S_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function T_(i,e,t){let n=new WeakMap,s=new nt;function r(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let b=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],_=0;d===!0&&(_=1),m===!0&&(_=2),v===!0&&(_=3);let x=a.attributes.position.count*_,A=1;x>e.maxTextureSize&&(A=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let M=new Float32Array(x*A*4*h),w=new zo(M,x,A,h);w.type=Dn,w.needsUpdate=!0;let E=_*4;for(let T=0;T<h;T++){let R=g[T],V=p[T],G=y[T],N=x*A*4*T;for(let P=0;P<R.count;P++){let D=P*E;d===!0&&(s.fromBufferAttribute(R,P),M[N+D+0]=s.x,M[N+D+1]=s.y,M[N+D+2]=s.z,M[N+D+3]=0),m===!0&&(s.fromBufferAttribute(V,P),M[N+D+4]=s.x,M[N+D+5]=s.y,M[N+D+6]=s.z,M[N+D+7]=0),v===!0&&(s.fromBufferAttribute(G,P),M[N+D+8]=s.x,M[N+D+9]=s.y,M[N+D+10]=s.z,M[N+D+11]=G.itemSize===4?s.w:1)}}f={count:h,texture:w,size:new xe(x,A)},n.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let v=0;v<l.length;v++)d+=l[v];let m=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function w_(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return h}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var Yo=class extends Ft{constructor(e,t,n,s,r,o,a,c,l,u=Cs){if(u!==Cs&&u!==Os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Cs&&(n=Yi),n===void 0&&u===Os&&(n=Ns),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Wt,this.minFilter=c!==void 0?c:Wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},jd=new Ft,Yh=new Yo(1,1),Kd=new zo,Jd=new rl,Qd=new Xo,$h=[],Zh=[],jh=new Float32Array(16),Kh=new Float32Array(9),Jh=new Float32Array(4);function Js(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=$h[s];if(r===void 0&&(r=new Float32Array(s),$h[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Pt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function va(i,e){let t=Zh[e];t===void 0&&(t=new Int32Array(e),Zh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function E_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function A_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2fv(this.addr,e),Lt(t,e)}}function R_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;i.uniform3fv(this.addr,e),Lt(t,e)}}function C_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4fv(this.addr,e),Lt(t,e)}}function I_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;Jh.set(n),i.uniformMatrix2fv(this.addr,!1,Jh),Lt(t,n)}}function P_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;Kh.set(n),i.uniformMatrix3fv(this.addr,!1,Kh),Lt(t,n)}}function L_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;jh.set(n),i.uniformMatrix4fv(this.addr,!1,jh),Lt(t,n)}}function D_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function U_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2iv(this.addr,e),Lt(t,e)}}function N_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3iv(this.addr,e),Lt(t,e)}}function O_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4iv(this.addr,e),Lt(t,e)}}function F_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function k_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2uiv(this.addr,e),Lt(t,e)}}function B_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3uiv(this.addr,e),Lt(t,e)}}function z_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4uiv(this.addr,e),Lt(t,e)}}function H_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Yh.compareFunction=Xd,r=Yh):r=jd,t.setTexture2D(e||r,s)}function V_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Jd,s)}function G_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Qd,s)}function W_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Kd,s)}function X_(i){switch(i){case 5126:return E_;case 35664:return A_;case 35665:return R_;case 35666:return C_;case 35674:return I_;case 35675:return P_;case 35676:return L_;case 5124:case 35670:return D_;case 35667:case 35671:return U_;case 35668:case 35672:return N_;case 35669:case 35673:return O_;case 5125:return F_;case 36294:return k_;case 36295:return B_;case 36296:return z_;case 35678:case 36198:case 36298:case 36306:case 35682:return H_;case 35679:case 36299:case 36307:return V_;case 35680:case 36300:case 36308:case 36293:return G_;case 36289:case 36303:case 36311:case 36292:return W_}}function q_(i,e){i.uniform1fv(this.addr,e)}function Y_(i,e){let t=Js(e,this.size,2);i.uniform2fv(this.addr,t)}function $_(i,e){let t=Js(e,this.size,3);i.uniform3fv(this.addr,t)}function Z_(i,e){let t=Js(e,this.size,4);i.uniform4fv(this.addr,t)}function j_(i,e){let t=Js(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function K_(i,e){let t=Js(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function J_(i,e){let t=Js(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Q_(i,e){i.uniform1iv(this.addr,e)}function ey(i,e){i.uniform2iv(this.addr,e)}function ty(i,e){i.uniform3iv(this.addr,e)}function ny(i,e){i.uniform4iv(this.addr,e)}function iy(i,e){i.uniform1uiv(this.addr,e)}function sy(i,e){i.uniform2uiv(this.addr,e)}function ry(i,e){i.uniform3uiv(this.addr,e)}function oy(i,e){i.uniform4uiv(this.addr,e)}function ay(i,e,t){let n=this.cache,s=e.length,r=va(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||jd,r[o])}function cy(i,e,t){let n=this.cache,s=e.length,r=va(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Jd,r[o])}function ly(i,e,t){let n=this.cache,s=e.length,r=va(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Qd,r[o])}function uy(i,e,t){let n=this.cache,s=e.length,r=va(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Kd,r[o])}function hy(i){switch(i){case 5126:return q_;case 35664:return Y_;case 35665:return $_;case 35666:return Z_;case 35674:return j_;case 35675:return K_;case 35676:return J_;case 5124:case 35670:return Q_;case 35667:case 35671:return ey;case 35668:case 35672:return ty;case 35669:case 35673:return ny;case 5125:return iy;case 36294:return sy;case 36295:return ry;case 36296:return oy;case 35678:case 36198:case 36298:case 36306:case 35682:return ay;case 35679:case 36299:case 36307:return cy;case 35680:case 36300:case 36308:case 36293:return ly;case 36289:case 36303:case 36311:case 36292:return uy}}var cl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=X_(t.type)}},ll=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hy(t.type)}},ul=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},uc=/(\w+)(\])?(\[|\.)?/g;function Qh(i,e){i.seq.push(e),i.map[e.id]=e}function dy(i,e,t){let n=i.name,s=n.length;for(uc.lastIndex=0;;){let r=uc.exec(n),o=uc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Qh(t,l===void 0?new cl(a,i,e):new ll(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new ul(a),Qh(t,h)),t=h}}}var Ps=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);dy(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function ed(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var fy=37297,py=0;function my(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var td=new qe;function gy(i){Je._getMatrix(td,Je.workingColorSpace,i);let e=`mat3( ${td.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(i)){case ya:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function nd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+my(i.getShaderSource(e),o)}else return s}function xy(i,e){let t=gy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function _y(i,e){let t;switch(e){case wm:t="Linear";break;case Em:t="Reinhard";break;case Am:t="Cineon";break;case Rm:t="ACESFilmic";break;case Im:t="AgX";break;case Pm:t="Neutral";break;case Cm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var vo=new O;function yy(){Je.getLuminanceCoefficients(vo);let i=vo.x.toFixed(4),e=vo.y.toFixed(4),t=vo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xr).join(`
`)}function My(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function by(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function xr(i){return i!==""}function id(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Sy=/^[ \t]*#include +<([\w\d./]+)>/gm;function hl(i){return i.replace(Sy,wy)}var Ty=new Map;function wy(i,e){let t=$e[e];if(t===void 0){let n=Ty.get(e);if(n!==void 0)t=$e[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return hl(t)}var Ey=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rd(i){return i.replace(Ey,Ay)}function Ay(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function od(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ry(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Dd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===sm?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===jn&&(e="SHADOWMAP_TYPE_VSM"),e}function Cy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ds:case Us:e="ENVMAP_TYPE_CUBE";break;case ga:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Iy(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Us&&(e="ENVMAP_MODE_REFRACTION"),e}function Py(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Gl:e="ENVMAP_BLENDING_MULTIPLY";break;case Sm:e="ENVMAP_BLENDING_MIX";break;case Tm:e="ENVMAP_BLENDING_ADD";break}return e}function Ly(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Dy(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Ry(t),l=Cy(t),u=Iy(t),h=Py(t),f=Ly(t),d=vy(t),m=My(r),v=s.createProgram(),g,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(xr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(xr).join(`
`),p.length>0&&(p+=`
`)):(g=[od(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xr).join(`
`),p=[od(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bi?"#define TONE_MAPPING":"",t.toneMapping!==bi?$e.tonemapping_pars_fragment:"",t.toneMapping!==bi?_y("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,xy("linearToOutputTexel",t.outputColorSpace),yy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xr).join(`
`)),o=hl(o),o=id(o,t),o=sd(o,t),a=hl(a),a=id(a,t),a=sd(a,t),o=rd(o),a=rd(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===yh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=y+g+o,x=y+p+a,A=ed(s,s.VERTEX_SHADER,_),M=ed(s,s.FRAGMENT_SHADER,x);s.attachShader(v,A),s.attachShader(v,M),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function w(R){if(i.debug.checkShaderErrors){let V=s.getProgramInfoLog(v).trim(),G=s.getShaderInfoLog(A).trim(),N=s.getShaderInfoLog(M).trim(),P=!0,D=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(P=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,A,M);else{let B=nd(s,A,"vertex"),U=nd(s,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+V+`
`+B+`
`+U)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(G===""||N==="")&&(D=!1);D&&(R.diagnostics={runnable:P,programLog:V,vertexShader:{log:G,prefix:g},fragmentShader:{log:N,prefix:p}})}s.deleteShader(A),s.deleteShader(M),E=new Ps(s,v),b=by(s,v)}let E;this.getUniforms=function(){return E===void 0&&w(this),E};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(v,fy)),T},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=py++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=M,this}var Uy=0,dl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new fl(e),t.set(e,n)),n}},fl=class{constructor(e){this.id=Uy++,this.code=e,this.usedTimes=0}};function Ny(i,e,t,n,s,r,o){let a=new Ho,c=new dl,l=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return l.add(b),b===0?"uv":`uv${b}`}function g(b,T,R,V,G){let N=V.fog,P=G.geometry,D=b.isMeshStandardMaterial?V.environment:null,B=(b.isMeshStandardMaterial?t:e).get(b.envMap||D),U=B&&B.mapping===ga?B.image.height:null,z=m[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));let oe=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,de=oe!==void 0?oe.length:0,Me=0;P.morphAttributes.position!==void 0&&(Me=1),P.morphAttributes.normal!==void 0&&(Me=2),P.morphAttributes.color!==void 0&&(Me=3);let Re,te,le,be;if(z){let at=Fn[z];Re=at.vertexShader,te=at.fragmentShader}else Re=b.vertexShader,te=b.fragmentShader,c.update(b),le=c.getVertexShaderID(b),be=c.getFragmentShaderID(b);let j=i.getRenderTarget(),he=i.state.buffers.depth.getReversed(),ye=G.isInstancedMesh===!0,ge=G.isBatchedMesh===!0,Pe=!!b.map,ie=!!b.matcap,Z=!!B,L=!!b.aoMap,pe=!!b.lightMap,re=!!b.bumpMap,H=!!b.normalMap,q=!!b.displacementMap,ne=!!b.emissiveMap,Q=!!b.metalnessMap,I=!!b.roughnessMap,S=b.anisotropy>0,k=b.clearcoat>0,ee=b.dispersion>0,F=b.iridescence>0,W=b.sheen>0,ce=b.transmission>0,ue=S&&!!b.anisotropyMap,Se=k&&!!b.clearcoatMap,Ve=k&&!!b.clearcoatNormalMap,me=k&&!!b.clearcoatRoughnessMap,_e=F&&!!b.iridescenceMap,Fe=F&&!!b.iridescenceThicknessMap,ze=W&&!!b.sheenColorMap,Le=W&&!!b.sheenRoughnessMap,et=!!b.specularMap,Ye=!!b.specularColorMap,dt=!!b.specularIntensityMap,X=ce&&!!b.transmissionMap,we=ce&&!!b.thicknessMap,se=!!b.gradientMap,fe=!!b.alphaMap,Ce=b.alphaTest>0,Ee=!!b.alphaHash,We=!!b.extensions,bt=bi;b.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(bt=i.toneMapping);let zt={shaderID:z,shaderType:b.type,shaderName:b.name,vertexShader:Re,fragmentShader:te,defines:b.defines,customVertexShaderID:le,customFragmentShaderID:be,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:ge,batchingColor:ge&&G._colorsTexture!==null,instancing:ye,instancingColor:ye&&G.instanceColor!==null,instancingMorph:ye&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Yt,alphaToCoverage:!!b.alphaToCoverage,map:Pe,matcap:ie,envMap:Z,envMapMode:Z&&B.mapping,envMapCubeUVHeight:U,aoMap:L,lightMap:pe,bumpMap:re,normalMap:H,displacementMap:f&&q,emissiveMap:ne,normalMapObjectSpace:H&&b.normalMapType===km,normalMapTangentSpace:H&&b.normalMapType===_a,metalnessMap:Q,roughnessMap:I,anisotropy:S,anisotropyMap:ue,clearcoat:k,clearcoatMap:Se,clearcoatNormalMap:Ve,clearcoatRoughnessMap:me,dispersion:ee,iridescence:F,iridescenceMap:_e,iridescenceThicknessMap:Fe,sheen:W,sheenColorMap:ze,sheenRoughnessMap:Le,specularMap:et,specularColorMap:Ye,specularIntensityMap:dt,transmission:ce,transmissionMap:X,thicknessMap:we,gradientMap:se,opaque:b.transparent===!1&&b.blending===Rs&&b.alphaToCoverage===!1,alphaMap:fe,alphaTest:Ce,alphaHash:Ee,combine:b.combine,mapUv:Pe&&v(b.map.channel),aoMapUv:L&&v(b.aoMap.channel),lightMapUv:pe&&v(b.lightMap.channel),bumpMapUv:re&&v(b.bumpMap.channel),normalMapUv:H&&v(b.normalMap.channel),displacementMapUv:q&&v(b.displacementMap.channel),emissiveMapUv:ne&&v(b.emissiveMap.channel),metalnessMapUv:Q&&v(b.metalnessMap.channel),roughnessMapUv:I&&v(b.roughnessMap.channel),anisotropyMapUv:ue&&v(b.anisotropyMap.channel),clearcoatMapUv:Se&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:Ve&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Le&&v(b.sheenRoughnessMap.channel),specularMapUv:et&&v(b.specularMap.channel),specularColorMapUv:Ye&&v(b.specularColorMap.channel),specularIntensityMapUv:dt&&v(b.specularIntensityMap.channel),transmissionMapUv:X&&v(b.transmissionMap.channel),thicknessMapUv:we&&v(b.thicknessMap.channel),alphaMapUv:fe&&v(b.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(H||S),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!P.attributes.uv&&(Pe||fe),fog:!!N,useFog:b.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:he,skinning:G.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Me,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:bt,decodeVideoTexture:Pe&&b.map.isVideoTexture===!0&&Je.getTransfer(b.map.colorSpace)===lt,decodeVideoTextureEmissive:ne&&b.emissiveMap.isVideoTexture===!0&&Je.getTransfer(b.emissiveMap.colorSpace)===lt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===vt,flipSided:b.side===tn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:We&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&b.extensions.multiDraw===!0||ge)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return zt.vertexUv1s=l.has(1),zt.vertexUv2s=l.has(2),zt.vertexUv3s=l.has(3),l.clear(),zt}function p(b){let T=[];if(b.shaderID?T.push(b.shaderID):(T.push(b.customVertexShaderID),T.push(b.customFragmentShaderID)),b.defines!==void 0)for(let R in b.defines)T.push(R),T.push(b.defines[R]);return b.isRawShaderMaterial===!1&&(y(T,b),_(T,b),T.push(i.outputColorSpace)),T.push(b.customProgramCacheKey),T.join()}function y(b,T){b.push(T.precision),b.push(T.outputColorSpace),b.push(T.envMapMode),b.push(T.envMapCubeUVHeight),b.push(T.mapUv),b.push(T.alphaMapUv),b.push(T.lightMapUv),b.push(T.aoMapUv),b.push(T.bumpMapUv),b.push(T.normalMapUv),b.push(T.displacementMapUv),b.push(T.emissiveMapUv),b.push(T.metalnessMapUv),b.push(T.roughnessMapUv),b.push(T.anisotropyMapUv),b.push(T.clearcoatMapUv),b.push(T.clearcoatNormalMapUv),b.push(T.clearcoatRoughnessMapUv),b.push(T.iridescenceMapUv),b.push(T.iridescenceThicknessMapUv),b.push(T.sheenColorMapUv),b.push(T.sheenRoughnessMapUv),b.push(T.specularMapUv),b.push(T.specularColorMapUv),b.push(T.specularIntensityMapUv),b.push(T.transmissionMapUv),b.push(T.thicknessMapUv),b.push(T.combine),b.push(T.fogExp2),b.push(T.sizeAttenuation),b.push(T.morphTargetsCount),b.push(T.morphAttributeCount),b.push(T.numDirLights),b.push(T.numPointLights),b.push(T.numSpotLights),b.push(T.numSpotLightMaps),b.push(T.numHemiLights),b.push(T.numRectAreaLights),b.push(T.numDirLightShadows),b.push(T.numPointLightShadows),b.push(T.numSpotLightShadows),b.push(T.numSpotLightShadowsWithMaps),b.push(T.numLightProbes),b.push(T.shadowMapType),b.push(T.toneMapping),b.push(T.numClippingPlanes),b.push(T.numClipIntersection),b.push(T.depthPacking)}function _(b,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),b.push(a.mask)}function x(b){let T=m[b.type],R;if(T){let V=Fn[T];R=wg.clone(V.uniforms)}else R=b.uniforms;return R}function A(b,T){let R;for(let V=0,G=u.length;V<G;V++){let N=u[V];if(N.cacheKey===T){R=N,++R.usedTimes;break}}return R===void 0&&(R=new Dy(i,T,b,r),u.push(R)),R}function M(b){if(--b.usedTimes===0){let T=u.indexOf(b);u[T]=u[u.length-1],u.pop(),b.destroy()}}function w(b){c.remove(b)}function E(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:x,acquireProgram:A,releaseProgram:M,releaseShaderCache:w,programs:u,dispose:E}}function Oy(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Fy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ad(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function cd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,f,d,m,v,g){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:m,renderOrder:h.renderOrder,z:v,group:g},i[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=v,p.group=g),e++,p}function a(h,f,d,m,v,g){let p=o(h,f,d,m,v,g);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):t.push(p)}function c(h,f,d,m,v,g){let p=o(h,f,d,m,v,g);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function l(h,f){t.length>1&&t.sort(h||Fy),n.length>1&&n.sort(f||ad),s.length>1&&s.sort(f||ad)}function u(){for(let h=e,f=i.length;h<f;h++){let d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function ky(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new cd,i.set(n,[o])):s>=r.length?(o=new cd,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function By(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Ie};break;case"SpotLight":t={position:new O,direction:new O,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function zy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Hy=0;function Vy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Gy(i){let e=new By,t=zy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new O);let s=new O,r=new ke,o=new ke;function a(l){let u=0,h=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,m=0,v=0,g=0,p=0,y=0,_=0,x=0,A=0,M=0,w=0;l.sort(Vy);for(let b=0,T=l.length;b<T;b++){let R=l[b],V=R.color,G=R.intensity,N=R.distance,P=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=V.r*G,h+=V.g*G,f+=V.b*G;else if(R.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(R.sh.coefficients[D],G);w++}else if(R.isDirectionalLight){let D=e.get(R);if(D.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let B=R.shadow,U=t.get(R);U.shadowIntensity=B.intensity,U.shadowBias=B.bias,U.shadowNormalBias=B.normalBias,U.shadowRadius=B.radius,U.shadowMapSize=B.mapSize,n.directionalShadow[d]=U,n.directionalShadowMap[d]=P,n.directionalShadowMatrix[d]=R.shadow.matrix,y++}n.directional[d]=D,d++}else if(R.isSpotLight){let D=e.get(R);D.position.setFromMatrixPosition(R.matrixWorld),D.color.copy(V).multiplyScalar(G),D.distance=N,D.coneCos=Math.cos(R.angle),D.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),D.decay=R.decay,n.spot[v]=D;let B=R.shadow;if(R.map&&(n.spotLightMap[A]=R.map,A++,B.updateMatrices(R),R.castShadow&&M++),n.spotLightMatrix[v]=B.matrix,R.castShadow){let U=t.get(R);U.shadowIntensity=B.intensity,U.shadowBias=B.bias,U.shadowNormalBias=B.normalBias,U.shadowRadius=B.radius,U.shadowMapSize=B.mapSize,n.spotShadow[v]=U,n.spotShadowMap[v]=P,x++}v++}else if(R.isRectAreaLight){let D=e.get(R);D.color.copy(V).multiplyScalar(G),D.halfWidth.set(R.width*.5,0,0),D.halfHeight.set(0,R.height*.5,0),n.rectArea[g]=D,g++}else if(R.isPointLight){let D=e.get(R);if(D.color.copy(R.color).multiplyScalar(R.intensity),D.distance=R.distance,D.decay=R.decay,R.castShadow){let B=R.shadow,U=t.get(R);U.shadowIntensity=B.intensity,U.shadowBias=B.bias,U.shadowNormalBias=B.normalBias,U.shadowRadius=B.radius,U.shadowMapSize=B.mapSize,U.shadowCameraNear=B.camera.near,U.shadowCameraFar=B.camera.far,n.pointShadow[m]=U,n.pointShadowMap[m]=P,n.pointShadowMatrix[m]=R.shadow.matrix,_++}n.point[m]=D,m++}else if(R.isHemisphereLight){let D=e.get(R);D.skyColor.copy(R.color).multiplyScalar(G),D.groundColor.copy(R.groundColor).multiplyScalar(G),n.hemi[p]=D,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Te.LTC_FLOAT_1,n.rectAreaLTC2=Te.LTC_FLOAT_2):(n.rectAreaLTC1=Te.LTC_HALF_1,n.rectAreaLTC2=Te.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let E=n.hash;(E.directionalLength!==d||E.pointLength!==m||E.spotLength!==v||E.rectAreaLength!==g||E.hemiLength!==p||E.numDirectionalShadows!==y||E.numPointShadows!==_||E.numSpotShadows!==x||E.numSpotMaps!==A||E.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=v,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=x+A-M,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=w,E.directionalLength=d,E.pointLength=m,E.spotLength=v,E.rectAreaLength=g,E.hemiLength=p,E.numDirectionalShadows=y,E.numPointShadows=_,E.numSpotShadows=x,E.numSpotMaps=A,E.numLightProbes=w,n.version=Hy++)}function c(l,u){let h=0,f=0,d=0,m=0,v=0,g=u.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){let _=l[p];if(_.isDirectionalLight){let x=n.directional[h];x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),h++}else if(_.isSpotLight){let x=n.spot[d];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),d++}else if(_.isRectAreaLight){let x=n.rectArea[m];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),o.identity(),r.copy(_.matrixWorld),r.premultiply(g),o.extractRotation(r),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(_.isPointLight){let x=n.point[f];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),f++}else if(_.isHemisphereLight){let x=n.hemi[v];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(g),v++}}}return{setup:a,setupView:c,state:n}}function ld(i){let e=new Gy(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Wy(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new ld(i),e.set(s,[a])):r>=o.length?(a=new ld(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var pl=class extends jt{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Om,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ml=class extends jt{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Xy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Yy(i,e,t){let n=new Ar,s=new xe,r=new xe,o=new nt,a=new pl({depthPacking:Fm}),c=new ml,l={},u=t.maxTextureSize,h={[Bn]:tn,[tn]:Bn,[vt]:vt},f=new vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:Xy,fragmentShader:qy}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new ht;m.setAttribute("position",new pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new je(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dd;let p=this.type;this.render=function(M,w,E){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;let b=i.getRenderTarget(),T=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),V=i.state;V.setBlending(Mi),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let G=p!==jn&&this.type===jn,N=p===jn&&this.type!==jn;for(let P=0,D=M.length;P<D;P++){let B=M[P],U=B.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);let z=U.getFrameExtents();if(s.multiply(z),r.copy(U.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/z.x),s.x=r.x*z.x,U.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/z.y),s.y=r.y*z.y,U.mapSize.y=r.y)),U.map===null||G===!0||N===!0){let de=this.type!==jn?{minFilter:Wt,magFilter:Wt}:{};U.map!==null&&U.map.dispose(),U.map=new Un(s.x,s.y,de),U.map.texture.name=B.name+".shadowMap",U.camera.updateProjectionMatrix()}i.setRenderTarget(U.map),i.clear();let oe=U.getViewportCount();for(let de=0;de<oe;de++){let Me=U.getViewport(de);o.set(r.x*Me.x,r.y*Me.y,r.x*Me.z,r.y*Me.w),V.viewport(o),U.updateMatrices(B,de),n=U.getFrustum(),x(w,E,U.camera,B,this.type)}U.isPointLightShadow!==!0&&this.type===jn&&y(U,E),U.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(b,T,R)};function y(M,w){let E=e.update(v);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Un(s.x,s.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(w,null,E,f,v,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(w,null,E,d,v,null)}function _(M,w,E,b){let T=null,R=E.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(R!==void 0)T=R;else if(T=E.isPointLight===!0?c:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let V=T.uuid,G=w.uuid,N=l[V];N===void 0&&(N={},l[V]=N);let P=N[G];P===void 0&&(P=T.clone(),N[G]=P,w.addEventListener("dispose",A)),T=P}if(T.visible=w.visible,T.wireframe=w.wireframe,b===jn?T.side=w.shadowSide!==null?w.shadowSide:w.side:T.side=w.shadowSide!==null?w.shadowSide:h[w.side],T.alphaMap=w.alphaMap,T.alphaTest=w.alphaTest,T.map=w.map,T.clipShadows=w.clipShadows,T.clippingPlanes=w.clippingPlanes,T.clipIntersection=w.clipIntersection,T.displacementMap=w.displacementMap,T.displacementScale=w.displacementScale,T.displacementBias=w.displacementBias,T.wireframeLinewidth=w.wireframeLinewidth,T.linewidth=w.linewidth,E.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let V=i.properties.get(T);V.light=E}return T}function x(M,w,E,b,T){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&T===jn)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,M.matrixWorld);let G=e.update(M),N=M.material;if(Array.isArray(N)){let P=G.groups;for(let D=0,B=P.length;D<B;D++){let U=P[D],z=N[U.materialIndex];if(z&&z.visible){let oe=_(M,z,b,T);M.onBeforeShadow(i,M,w,E,G,oe,U),i.renderBufferDirect(E,null,G,oe,M,U),M.onAfterShadow(i,M,w,E,G,oe,U)}}}else if(N.visible){let P=_(M,N,b,T);M.onBeforeShadow(i,M,w,E,G,P,null),i.renderBufferDirect(E,null,G,P,M,null),M.onAfterShadow(i,M,w,E,G,P,null)}}let V=M.children;for(let G=0,N=V.length;G<N;G++)x(V[G],w,E,b,T)}function A(M){M.target.removeEventListener("dispose",A);for(let E in l){let b=l[E],T=M.target.uuid;T in b&&(b[T].dispose(),delete b[T])}}}var $y={[Mc]:bc,[Sc]:Ec,[Tc]:Ac,[Ls]:wc,[bc]:Mc,[Ec]:Sc,[Ac]:Tc,[wc]:Ls};function Zy(i,e){function t(){let X=!1,we=new nt,se=null,fe=new nt(0,0,0,0);return{setMask:function(Ce){se!==Ce&&!X&&(i.colorMask(Ce,Ce,Ce,Ce),se=Ce)},setLocked:function(Ce){X=Ce},setClear:function(Ce,Ee,We,bt,zt){zt===!0&&(Ce*=bt,Ee*=bt,We*=bt),we.set(Ce,Ee,We,bt),fe.equals(we)===!1&&(i.clearColor(Ce,Ee,We,bt),fe.copy(we))},reset:function(){X=!1,se=null,fe.set(-1,0,0,0)}}}function n(){let X=!1,we=!1,se=null,fe=null,Ce=null;return{setReversed:function(Ee){if(we!==Ee){let We=e.get("EXT_clip_control");we?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT);let bt=Ce;Ce=null,this.setClear(bt)}we=Ee},getReversed:function(){return we},setTest:function(Ee){Ee?j(i.DEPTH_TEST):he(i.DEPTH_TEST)},setMask:function(Ee){se!==Ee&&!X&&(i.depthMask(Ee),se=Ee)},setFunc:function(Ee){if(we&&(Ee=$y[Ee]),fe!==Ee){switch(Ee){case Mc:i.depthFunc(i.NEVER);break;case bc:i.depthFunc(i.ALWAYS);break;case Sc:i.depthFunc(i.LESS);break;case Ls:i.depthFunc(i.LEQUAL);break;case Tc:i.depthFunc(i.EQUAL);break;case wc:i.depthFunc(i.GEQUAL);break;case Ec:i.depthFunc(i.GREATER);break;case Ac:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}fe=Ee}},setLocked:function(Ee){X=Ee},setClear:function(Ee){Ce!==Ee&&(we&&(Ee=1-Ee),i.clearDepth(Ee),Ce=Ee)},reset:function(){X=!1,se=null,fe=null,Ce=null,we=!1}}}function s(){let X=!1,we=null,se=null,fe=null,Ce=null,Ee=null,We=null,bt=null,zt=null;return{setTest:function(at){X||(at?j(i.STENCIL_TEST):he(i.STENCIL_TEST))},setMask:function(at){we!==at&&!X&&(i.stencilMask(at),we=at)},setFunc:function(at,An,Vn){(se!==at||fe!==An||Ce!==Vn)&&(i.stencilFunc(at,An,Vn),se=at,fe=An,Ce=Vn)},setOp:function(at,An,Vn){(Ee!==at||We!==An||bt!==Vn)&&(i.stencilOp(at,An,Vn),Ee=at,We=An,bt=Vn)},setLocked:function(at){X=at},setClear:function(at){zt!==at&&(i.clearStencil(at),zt=at)},reset:function(){X=!1,we=null,se=null,fe=null,Ce=null,Ee=null,We=null,bt=null,zt=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap,u={},h={},f=new WeakMap,d=[],m=null,v=!1,g=null,p=null,y=null,_=null,x=null,A=null,M=null,w=new Ie(0,0,0),E=0,b=!1,T=null,R=null,V=null,G=null,N=null,P=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),D=!1,B=0,U=i.getParameter(i.VERSION);U.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(U)[1]),D=B>=1):U.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),D=B>=2);let z=null,oe={},de=i.getParameter(i.SCISSOR_BOX),Me=i.getParameter(i.VIEWPORT),Re=new nt().fromArray(de),te=new nt().fromArray(Me);function le(X,we,se,fe){let Ce=new Uint8Array(4),Ee=i.createTexture();i.bindTexture(X,Ee),i.texParameteri(X,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(X,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let We=0;We<se;We++)X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?i.texImage3D(we,0,i.RGBA,1,1,fe,0,i.RGBA,i.UNSIGNED_BYTE,Ce):i.texImage2D(we+We,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ce);return Ee}let be={};be[i.TEXTURE_2D]=le(i.TEXTURE_2D,i.TEXTURE_2D,1),be[i.TEXTURE_CUBE_MAP]=le(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[i.TEXTURE_2D_ARRAY]=le(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),be[i.TEXTURE_3D]=le(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(i.DEPTH_TEST),o.setFunc(Ls),re(!1),H(ph),j(i.CULL_FACE),L(Mi);function j(X){u[X]!==!0&&(i.enable(X),u[X]=!0)}function he(X){u[X]!==!1&&(i.disable(X),u[X]=!1)}function ye(X,we){return h[X]!==we?(i.bindFramebuffer(X,we),h[X]=we,X===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=we),X===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=we),!0):!1}function ge(X,we){let se=d,fe=!1;if(X){se=f.get(we),se===void 0&&(se=[],f.set(we,se));let Ce=X.textures;if(se.length!==Ce.length||se[0]!==i.COLOR_ATTACHMENT0){for(let Ee=0,We=Ce.length;Ee<We;Ee++)se[Ee]=i.COLOR_ATTACHMENT0+Ee;se.length=Ce.length,fe=!0}}else se[0]!==i.BACK&&(se[0]=i.BACK,fe=!0);fe&&i.drawBuffers(se)}function Pe(X){return m!==X?(i.useProgram(X),m=X,!0):!1}let ie={[Gi]:i.FUNC_ADD,[om]:i.FUNC_SUBTRACT,[am]:i.FUNC_REVERSE_SUBTRACT};ie[cm]=i.MIN,ie[lm]=i.MAX;let Z={[um]:i.ZERO,[hm]:i.ONE,[dm]:i.SRC_COLOR,[yc]:i.SRC_ALPHA,[_m]:i.SRC_ALPHA_SATURATE,[gm]:i.DST_COLOR,[pm]:i.DST_ALPHA,[fm]:i.ONE_MINUS_SRC_COLOR,[vc]:i.ONE_MINUS_SRC_ALPHA,[xm]:i.ONE_MINUS_DST_COLOR,[mm]:i.ONE_MINUS_DST_ALPHA,[ym]:i.CONSTANT_COLOR,[vm]:i.ONE_MINUS_CONSTANT_COLOR,[Mm]:i.CONSTANT_ALPHA,[bm]:i.ONE_MINUS_CONSTANT_ALPHA};function L(X,we,se,fe,Ce,Ee,We,bt,zt,at){if(X===Mi){v===!0&&(he(i.BLEND),v=!1);return}if(v===!1&&(j(i.BLEND),v=!0),X!==rm){if(X!==g||at!==b){if((p!==Gi||x!==Gi)&&(i.blendEquation(i.FUNC_ADD),p=Gi,x=Gi),at)switch(X){case Rs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Oo:i.blendFunc(i.ONE,i.ONE);break;case mh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Rs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Oo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case mh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}y=null,_=null,A=null,M=null,w.set(0,0,0),E=0,g=X,b=at}return}Ce=Ce||we,Ee=Ee||se,We=We||fe,(we!==p||Ce!==x)&&(i.blendEquationSeparate(ie[we],ie[Ce]),p=we,x=Ce),(se!==y||fe!==_||Ee!==A||We!==M)&&(i.blendFuncSeparate(Z[se],Z[fe],Z[Ee],Z[We]),y=se,_=fe,A=Ee,M=We),(bt.equals(w)===!1||zt!==E)&&(i.blendColor(bt.r,bt.g,bt.b,zt),w.copy(bt),E=zt),g=X,b=!1}function pe(X,we){X.side===vt?he(i.CULL_FACE):j(i.CULL_FACE);let se=X.side===tn;we&&(se=!se),re(se),X.blending===Rs&&X.transparent===!1?L(Mi):L(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),o.setFunc(X.depthFunc),o.setTest(X.depthTest),o.setMask(X.depthWrite),r.setMask(X.colorWrite);let fe=X.stencilWrite;a.setTest(fe),fe&&(a.setMask(X.stencilWriteMask),a.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),a.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),ne(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):he(i.SAMPLE_ALPHA_TO_COVERAGE)}function re(X){T!==X&&(X?i.frontFace(i.CW):i.frontFace(i.CCW),T=X)}function H(X){X!==nm?(j(i.CULL_FACE),X!==R&&(X===ph?i.cullFace(i.BACK):X===im?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):he(i.CULL_FACE),R=X}function q(X){X!==V&&(D&&i.lineWidth(X),V=X)}function ne(X,we,se){X?(j(i.POLYGON_OFFSET_FILL),(G!==we||N!==se)&&(i.polygonOffset(we,se),G=we,N=se)):he(i.POLYGON_OFFSET_FILL)}function Q(X){X?j(i.SCISSOR_TEST):he(i.SCISSOR_TEST)}function I(X){X===void 0&&(X=i.TEXTURE0+P-1),z!==X&&(i.activeTexture(X),z=X)}function S(X,we,se){se===void 0&&(z===null?se=i.TEXTURE0+P-1:se=z);let fe=oe[se];fe===void 0&&(fe={type:void 0,texture:void 0},oe[se]=fe),(fe.type!==X||fe.texture!==we)&&(z!==se&&(i.activeTexture(se),z=se),i.bindTexture(X,we||be[X]),fe.type=X,fe.texture=we)}function k(){let X=oe[z];X!==void 0&&X.type!==void 0&&(i.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function ee(){try{i.compressedTexImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function F(){try{i.compressedTexImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function W(){try{i.texSubImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ce(){try{i.texSubImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ue(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Se(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ve(){try{i.texStorage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function me(){try{i.texStorage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function _e(){try{i.texImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Fe(){try{i.texImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ze(X){Re.equals(X)===!1&&(i.scissor(X.x,X.y,X.z,X.w),Re.copy(X))}function Le(X){te.equals(X)===!1&&(i.viewport(X.x,X.y,X.z,X.w),te.copy(X))}function et(X,we){let se=l.get(we);se===void 0&&(se=new WeakMap,l.set(we,se));let fe=se.get(X);fe===void 0&&(fe=i.getUniformBlockIndex(we,X.name),se.set(X,fe))}function Ye(X,we){let fe=l.get(we).get(X);c.get(we)!==fe&&(i.uniformBlockBinding(we,fe,X.__bindingPointIndex),c.set(we,fe))}function dt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},z=null,oe={},h={},f=new WeakMap,d=[],m=null,v=!1,g=null,p=null,y=null,_=null,x=null,A=null,M=null,w=new Ie(0,0,0),E=0,b=!1,T=null,R=null,V=null,G=null,N=null,Re.set(0,0,i.canvas.width,i.canvas.height),te.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:j,disable:he,bindFramebuffer:ye,drawBuffers:ge,useProgram:Pe,setBlending:L,setMaterial:pe,setFlipSided:re,setCullFace:H,setLineWidth:q,setPolygonOffset:ne,setScissorTest:Q,activeTexture:I,bindTexture:S,unbindTexture:k,compressedTexImage2D:ee,compressedTexImage3D:F,texImage2D:_e,texImage3D:Fe,updateUBOMapping:et,uniformBlockBinding:Ye,texStorage2D:Ve,texStorage3D:me,texSubImage2D:W,texSubImage3D:ce,compressedTexSubImage2D:ue,compressedTexSubImage3D:Se,scissor:ze,viewport:Le,reset:dt}}function ud(i,e,t,n){let s=jy(n);switch(t){case kd:return i*e;case zd:return i*e;case Hd:return i*e*2;case $l:return i*e/s.components*s.byteLength;case Zl:return i*e/s.components*s.byteLength;case Vd:return i*e*2/s.components*s.byteLength;case jl:return i*e*2/s.components*s.byteLength;case Bd:return i*e*3/s.components*s.byteLength;case en:return i*e*4/s.components*s.byteLength;case Kl:return i*e*4/s.components*s.byteLength;case Po:case Lo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Do:case Uo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pc:case Dc:return Math.max(i,16)*Math.max(e,8)/4;case Ic:case Lc:return Math.max(i,8)*Math.max(e,8)/2;case Uc:case Nc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Oc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case kc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Bc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case zc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Hc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Vc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Gc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Wc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Xc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case qc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Yc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case $c:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Zc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case jc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case No:case Kc:case Jc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Gd:case Qc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case el:case tl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function jy(i){switch(i){case ti:case Nd:return{byteLength:1,components:1};case wr:case Od:case Hr:return{byteLength:2,components:1};case ql:case Yl:return{byteLength:2,components:4};case Yi:case Xl:case Dn:return{byteLength:4,components:1};case Fd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Ky(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new xe,u=new WeakMap,h,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(I,S){return d?new OffscreenCanvas(I,S):Er("canvas")}function v(I,S,k){let ee=1,F=Q(I);if((F.width>k||F.height>k)&&(ee=k/Math.max(F.width,F.height)),ee<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let W=Math.floor(ee*F.width),ce=Math.floor(ee*F.height);h===void 0&&(h=m(W,ce));let ue=S?m(W,ce):h;return ue.width=W,ue.height=ce,ue.getContext("2d").drawImage(I,0,0,W,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+F.width+"x"+F.height+") to ("+W+"x"+ce+")."),ue}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+F.width+"x"+F.height+")."),I;return I}function g(I){return I.generateMipmaps}function p(I){i.generateMipmap(I)}function y(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(I,S,k,ee,F=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let W=S;if(S===i.RED&&(k===i.FLOAT&&(W=i.R32F),k===i.HALF_FLOAT&&(W=i.R16F),k===i.UNSIGNED_BYTE&&(W=i.R8)),S===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(W=i.R8UI),k===i.UNSIGNED_SHORT&&(W=i.R16UI),k===i.UNSIGNED_INT&&(W=i.R32UI),k===i.BYTE&&(W=i.R8I),k===i.SHORT&&(W=i.R16I),k===i.INT&&(W=i.R32I)),S===i.RG&&(k===i.FLOAT&&(W=i.RG32F),k===i.HALF_FLOAT&&(W=i.RG16F),k===i.UNSIGNED_BYTE&&(W=i.RG8)),S===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(W=i.RG8UI),k===i.UNSIGNED_SHORT&&(W=i.RG16UI),k===i.UNSIGNED_INT&&(W=i.RG32UI),k===i.BYTE&&(W=i.RG8I),k===i.SHORT&&(W=i.RG16I),k===i.INT&&(W=i.RG32I)),S===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(W=i.RGB8UI),k===i.UNSIGNED_SHORT&&(W=i.RGB16UI),k===i.UNSIGNED_INT&&(W=i.RGB32UI),k===i.BYTE&&(W=i.RGB8I),k===i.SHORT&&(W=i.RGB16I),k===i.INT&&(W=i.RGB32I)),S===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),k===i.UNSIGNED_INT&&(W=i.RGBA32UI),k===i.BYTE&&(W=i.RGBA8I),k===i.SHORT&&(W=i.RGBA16I),k===i.INT&&(W=i.RGBA32I)),S===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),S===i.RGBA){let ce=F?ya:Je.getTransfer(ee);k===i.FLOAT&&(W=i.RGBA32F),k===i.HALF_FLOAT&&(W=i.RGBA16F),k===i.UNSIGNED_BYTE&&(W=ce===lt?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function x(I,S){let k;return I?S===null||S===Yi||S===Ns?k=i.DEPTH24_STENCIL8:S===Dn?k=i.DEPTH32F_STENCIL8:S===wr&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Yi||S===Ns?k=i.DEPTH_COMPONENT24:S===Dn?k=i.DEPTH_COMPONENT32F:S===wr&&(k=i.DEPTH_COMPONENT16),k}function A(I,S){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==Wt&&I.minFilter!==Gt?Math.log2(Math.max(S.width,S.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?S.mipmaps.length:1}function M(I){let S=I.target;S.removeEventListener("dispose",M),E(S),S.isVideoTexture&&u.delete(S)}function w(I){let S=I.target;S.removeEventListener("dispose",w),T(S)}function E(I){let S=n.get(I);if(S.__webglInit===void 0)return;let k=I.source,ee=f.get(k);if(ee){let F=ee[S.__cacheKey];F.usedTimes--,F.usedTimes===0&&b(I),Object.keys(ee).length===0&&f.delete(k)}n.remove(I)}function b(I){let S=n.get(I);i.deleteTexture(S.__webglTexture);let k=I.source,ee=f.get(k);delete ee[S.__cacheKey],o.memory.textures--}function T(I){let S=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(S.__webglFramebuffer[ee]))for(let F=0;F<S.__webglFramebuffer[ee].length;F++)i.deleteFramebuffer(S.__webglFramebuffer[ee][F]);else i.deleteFramebuffer(S.__webglFramebuffer[ee]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[ee])}else{if(Array.isArray(S.__webglFramebuffer))for(let ee=0;ee<S.__webglFramebuffer.length;ee++)i.deleteFramebuffer(S.__webglFramebuffer[ee]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ee=0;ee<S.__webglColorRenderbuffer.length;ee++)S.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[ee]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let k=I.textures;for(let ee=0,F=k.length;ee<F;ee++){let W=n.get(k[ee]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),o.memory.textures--),n.remove(k[ee])}n.remove(I)}let R=0;function V(){R=0}function G(){let I=R;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),R+=1,I}function N(I){let S=[];return S.push(I.wrapS),S.push(I.wrapT),S.push(I.wrapR||0),S.push(I.magFilter),S.push(I.minFilter),S.push(I.anisotropy),S.push(I.internalFormat),S.push(I.format),S.push(I.type),S.push(I.generateMipmaps),S.push(I.premultiplyAlpha),S.push(I.flipY),S.push(I.unpackAlignment),S.push(I.colorSpace),S.join()}function P(I,S){let k=n.get(I);if(I.isVideoTexture&&q(I),I.isRenderTargetTexture===!1&&I.version>0&&k.__version!==I.version){let ee=I.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(k,I,S);return}}t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+S)}function D(I,S){let k=n.get(I);if(I.version>0&&k.__version!==I.version){te(k,I,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+S)}function B(I,S){let k=n.get(I);if(I.version>0&&k.__version!==I.version){te(k,I,S);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+S)}function U(I,S){let k=n.get(I);if(I.version>0&&k.__version!==I.version){le(k,I,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+S)}let z={[qi]:i.REPEAT,[Jn]:i.CLAMP_TO_EDGE,[Tr]:i.MIRRORED_REPEAT},oe={[Wt]:i.NEAREST,[Wl]:i.NEAREST_MIPMAP_NEAREST,[Ss]:i.NEAREST_MIPMAP_LINEAR,[Gt]:i.LINEAR,[_r]:i.LINEAR_MIPMAP_NEAREST,[kn]:i.LINEAR_MIPMAP_LINEAR},de={[Bm]:i.NEVER,[Xm]:i.ALWAYS,[zm]:i.LESS,[Xd]:i.LEQUAL,[Hm]:i.EQUAL,[Wm]:i.GEQUAL,[Vm]:i.GREATER,[Gm]:i.NOTEQUAL};function Me(I,S){if(S.type===Dn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Gt||S.magFilter===_r||S.magFilter===Ss||S.magFilter===kn||S.minFilter===Gt||S.minFilter===_r||S.minFilter===Ss||S.minFilter===kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,z[S.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,z[S.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,z[S.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,oe[S.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,oe[S.minFilter]),S.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,de[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Wt||S.minFilter!==Ss&&S.minFilter!==kn||S.type===Dn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Re(I,S){let k=!1;I.__webglInit===void 0&&(I.__webglInit=!0,S.addEventListener("dispose",M));let ee=S.source,F=f.get(ee);F===void 0&&(F={},f.set(ee,F));let W=N(S);if(W!==I.__cacheKey){F[W]===void 0&&(F[W]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),F[W].usedTimes++;let ce=F[I.__cacheKey];ce!==void 0&&(F[I.__cacheKey].usedTimes--,ce.usedTimes===0&&b(S)),I.__cacheKey=W,I.__webglTexture=F[W].texture}return k}function te(I,S,k){let ee=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ee=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ee=i.TEXTURE_3D);let F=Re(I,S),W=S.source;t.bindTexture(ee,I.__webglTexture,i.TEXTURE0+k);let ce=n.get(W);if(W.version!==ce.__version||F===!0){t.activeTexture(i.TEXTURE0+k);let ue=Je.getPrimaries(Je.workingColorSpace),Se=S.colorSpace===yi?null:Je.getPrimaries(S.colorSpace),Ve=S.colorSpace===yi||ue===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let me=v(S.image,!1,s.maxTextureSize);me=ne(S,me);let _e=r.convert(S.format,S.colorSpace),Fe=r.convert(S.type),ze=_(S.internalFormat,_e,Fe,S.colorSpace,S.isVideoTexture);Me(ee,S);let Le,et=S.mipmaps,Ye=S.isVideoTexture!==!0,dt=ce.__version===void 0||F===!0,X=W.dataReady,we=A(S,me);if(S.isDepthTexture)ze=x(S.format===Os,S.type),dt&&(Ye?t.texStorage2D(i.TEXTURE_2D,1,ze,me.width,me.height):t.texImage2D(i.TEXTURE_2D,0,ze,me.width,me.height,0,_e,Fe,null));else if(S.isDataTexture)if(et.length>0){Ye&&dt&&t.texStorage2D(i.TEXTURE_2D,we,ze,et[0].width,et[0].height);for(let se=0,fe=et.length;se<fe;se++)Le=et[se],Ye?X&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,Le.width,Le.height,_e,Fe,Le.data):t.texImage2D(i.TEXTURE_2D,se,ze,Le.width,Le.height,0,_e,Fe,Le.data);S.generateMipmaps=!1}else Ye?(dt&&t.texStorage2D(i.TEXTURE_2D,we,ze,me.width,me.height),X&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me.width,me.height,_e,Fe,me.data)):t.texImage2D(i.TEXTURE_2D,0,ze,me.width,me.height,0,_e,Fe,me.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ye&&dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,ze,et[0].width,et[0].height,me.depth);for(let se=0,fe=et.length;se<fe;se++)if(Le=et[se],S.format!==en)if(_e!==null)if(Ye){if(X)if(S.layerUpdates.size>0){let Ce=ud(Le.width,Le.height,S.format,S.type);for(let Ee of S.layerUpdates){let We=Le.data.subarray(Ee*Ce/Le.data.BYTES_PER_ELEMENT,(Ee+1)*Ce/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,Ee,Le.width,Le.height,1,_e,We)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,Le.width,Le.height,me.depth,_e,Le.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,se,ze,Le.width,Le.height,me.depth,0,Le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?X&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,Le.width,Le.height,me.depth,_e,Fe,Le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,se,ze,Le.width,Le.height,me.depth,0,_e,Fe,Le.data)}else{Ye&&dt&&t.texStorage2D(i.TEXTURE_2D,we,ze,et[0].width,et[0].height);for(let se=0,fe=et.length;se<fe;se++)Le=et[se],S.format!==en?_e!==null?Ye?X&&t.compressedTexSubImage2D(i.TEXTURE_2D,se,0,0,Le.width,Le.height,_e,Le.data):t.compressedTexImage2D(i.TEXTURE_2D,se,ze,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?X&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,Le.width,Le.height,_e,Fe,Le.data):t.texImage2D(i.TEXTURE_2D,se,ze,Le.width,Le.height,0,_e,Fe,Le.data)}else if(S.isDataArrayTexture)if(Ye){if(dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,ze,me.width,me.height,me.depth),X)if(S.layerUpdates.size>0){let se=ud(me.width,me.height,S.format,S.type);for(let fe of S.layerUpdates){let Ce=me.data.subarray(fe*se/me.data.BYTES_PER_ELEMENT,(fe+1)*se/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,fe,me.width,me.height,1,_e,Fe,Ce)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,_e,Fe,me.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ze,me.width,me.height,me.depth,0,_e,Fe,me.data);else if(S.isData3DTexture)Ye?(dt&&t.texStorage3D(i.TEXTURE_3D,we,ze,me.width,me.height,me.depth),X&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,_e,Fe,me.data)):t.texImage3D(i.TEXTURE_3D,0,ze,me.width,me.height,me.depth,0,_e,Fe,me.data);else if(S.isFramebufferTexture){if(dt)if(Ye)t.texStorage2D(i.TEXTURE_2D,we,ze,me.width,me.height);else{let se=me.width,fe=me.height;for(let Ce=0;Ce<we;Ce++)t.texImage2D(i.TEXTURE_2D,Ce,ze,se,fe,0,_e,Fe,null),se>>=1,fe>>=1}}else if(et.length>0){if(Ye&&dt){let se=Q(et[0]);t.texStorage2D(i.TEXTURE_2D,we,ze,se.width,se.height)}for(let se=0,fe=et.length;se<fe;se++)Le=et[se],Ye?X&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,_e,Fe,Le):t.texImage2D(i.TEXTURE_2D,se,ze,_e,Fe,Le);S.generateMipmaps=!1}else if(Ye){if(dt){let se=Q(me);t.texStorage2D(i.TEXTURE_2D,we,ze,se.width,se.height)}X&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e,Fe,me)}else t.texImage2D(i.TEXTURE_2D,0,ze,_e,Fe,me);g(S)&&p(ee),ce.__version=W.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function le(I,S,k){if(S.image.length!==6)return;let ee=Re(I,S),F=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+k);let W=n.get(F);if(F.version!==W.__version||ee===!0){t.activeTexture(i.TEXTURE0+k);let ce=Je.getPrimaries(Je.workingColorSpace),ue=S.colorSpace===yi?null:Je.getPrimaries(S.colorSpace),Se=S.colorSpace===yi||ce===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let Ve=S.isCompressedTexture||S.image[0].isCompressedTexture,me=S.image[0]&&S.image[0].isDataTexture,_e=[];for(let fe=0;fe<6;fe++)!Ve&&!me?_e[fe]=v(S.image[fe],!0,s.maxCubemapSize):_e[fe]=me?S.image[fe].image:S.image[fe],_e[fe]=ne(S,_e[fe]);let Fe=_e[0],ze=r.convert(S.format,S.colorSpace),Le=r.convert(S.type),et=_(S.internalFormat,ze,Le,S.colorSpace),Ye=S.isVideoTexture!==!0,dt=W.__version===void 0||ee===!0,X=F.dataReady,we=A(S,Fe);Me(i.TEXTURE_CUBE_MAP,S);let se;if(Ve){Ye&&dt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,we,et,Fe.width,Fe.height);for(let fe=0;fe<6;fe++){se=_e[fe].mipmaps;for(let Ce=0;Ce<se.length;Ce++){let Ee=se[Ce];S.format!==en?ze!==null?Ye?X&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ce,0,0,Ee.width,Ee.height,ze,Ee.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ce,et,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ce,0,0,Ee.width,Ee.height,ze,Le,Ee.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ce,et,Ee.width,Ee.height,0,ze,Le,Ee.data)}}}else{if(se=S.mipmaps,Ye&&dt){se.length>0&&we++;let fe=Q(_e[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,we,et,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(me){Ye?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,_e[fe].width,_e[fe].height,ze,Le,_e[fe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,et,_e[fe].width,_e[fe].height,0,ze,Le,_e[fe].data);for(let Ce=0;Ce<se.length;Ce++){let We=se[Ce].image[fe].image;Ye?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ce+1,0,0,We.width,We.height,ze,Le,We.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ce+1,et,We.width,We.height,0,ze,Le,We.data)}}else{Ye?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,ze,Le,_e[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,et,ze,Le,_e[fe]);for(let Ce=0;Ce<se.length;Ce++){let Ee=se[Ce];Ye?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ce+1,0,0,ze,Le,Ee.image[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ce+1,et,ze,Le,Ee.image[fe])}}}g(S)&&p(i.TEXTURE_CUBE_MAP),W.__version=F.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function be(I,S,k,ee,F,W){let ce=r.convert(k.format,k.colorSpace),ue=r.convert(k.type),Se=_(k.internalFormat,ce,ue,k.colorSpace),Ve=n.get(S),me=n.get(k);if(me.__renderTarget=S,!Ve.__hasExternalTextures){let _e=Math.max(1,S.width>>W),Fe=Math.max(1,S.height>>W);F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?t.texImage3D(F,W,Se,_e,Fe,S.depth,0,ce,ue,null):t.texImage2D(F,W,Se,_e,Fe,0,ce,ue,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),H(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,F,me.__webglTexture,0,re(S)):(F===i.TEXTURE_2D||F>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&F<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ee,F,me.__webglTexture,W),t.bindFramebuffer(i.FRAMEBUFFER,null)}function j(I,S,k){if(i.bindRenderbuffer(i.RENDERBUFFER,I),S.depthBuffer){let ee=S.depthTexture,F=ee&&ee.isDepthTexture?ee.type:null,W=x(S.stencilBuffer,F),ce=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=re(S);H(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,W,S.width,S.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,W,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,W,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,I)}else{let ee=S.textures;for(let F=0;F<ee.length;F++){let W=ee[F],ce=r.convert(W.format,W.colorSpace),ue=r.convert(W.type),Se=_(W.internalFormat,ce,ue,W.colorSpace),Ve=re(S);k&&H(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve,Se,S.width,S.height):H(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ve,Se,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Se,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function he(I,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ee=n.get(S.depthTexture);ee.__renderTarget=S,(!ee.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),P(S.depthTexture,0);let F=ee.__webglTexture,W=re(S);if(S.depthTexture.format===Cs)H(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,F,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,F,0);else if(S.depthTexture.format===Os)H(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,F,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,F,0);else throw new Error("Unknown depthTexture format")}function ye(I){let S=n.get(I),k=I.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==I.depthTexture){let ee=I.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ee){let F=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ee.removeEventListener("dispose",F)};ee.addEventListener("dispose",F),S.__depthDisposeCallback=F}S.__boundDepthTexture=ee}if(I.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");he(S.__webglFramebuffer,I)}else if(k){S.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[ee]),S.__webglDepthbuffer[ee]===void 0)S.__webglDepthbuffer[ee]=i.createRenderbuffer(),j(S.__webglDepthbuffer[ee],I,!1);else{let F=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=S.__webglDepthbuffer[ee];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,F,i.RENDERBUFFER,W)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),j(S.__webglDepthbuffer,I,!1);else{let ee=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,F=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,F),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,F)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ge(I,S,k){let ee=n.get(I);S!==void 0&&be(ee.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&ye(I)}function Pe(I){let S=I.texture,k=n.get(I),ee=n.get(S);I.addEventListener("dispose",w);let F=I.textures,W=I.isWebGLCubeRenderTarget===!0,ce=F.length>1;if(ce||(ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture()),ee.__version=S.version,o.memory.textures++),W){k.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[ue]=[];for(let Se=0;Se<S.mipmaps.length;Se++)k.__webglFramebuffer[ue][Se]=i.createFramebuffer()}else k.__webglFramebuffer[ue]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let ue=0;ue<S.mipmaps.length;ue++)k.__webglFramebuffer[ue]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(ce)for(let ue=0,Se=F.length;ue<Se;ue++){let Ve=n.get(F[ue]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&H(I)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ue=0;ue<F.length;ue++){let Se=F[ue];k.__webglColorRenderbuffer[ue]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[ue]);let Ve=r.convert(Se.format,Se.colorSpace),me=r.convert(Se.type),_e=_(Se.internalFormat,Ve,me,Se.colorSpace,I.isXRRenderTarget===!0),Fe=re(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Fe,_e,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,k.__webglColorRenderbuffer[ue])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),j(k.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),Me(i.TEXTURE_CUBE_MAP,S);for(let ue=0;ue<6;ue++)if(S.mipmaps&&S.mipmaps.length>0)for(let Se=0;Se<S.mipmaps.length;Se++)be(k.__webglFramebuffer[ue][Se],I,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Se);else be(k.__webglFramebuffer[ue],I,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);g(S)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let ue=0,Se=F.length;ue<Se;ue++){let Ve=F[ue],me=n.get(Ve);t.bindTexture(i.TEXTURE_2D,me.__webglTexture),Me(i.TEXTURE_2D,Ve),be(k.__webglFramebuffer,I,Ve,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,0),g(Ve)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let ue=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ue=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,ee.__webglTexture),Me(ue,S),S.mipmaps&&S.mipmaps.length>0)for(let Se=0;Se<S.mipmaps.length;Se++)be(k.__webglFramebuffer[Se],I,S,i.COLOR_ATTACHMENT0,ue,Se);else be(k.__webglFramebuffer,I,S,i.COLOR_ATTACHMENT0,ue,0);g(S)&&p(ue),t.unbindTexture()}I.depthBuffer&&ye(I)}function ie(I){let S=I.textures;for(let k=0,ee=S.length;k<ee;k++){let F=S[k];if(g(F)){let W=y(I),ce=n.get(F).__webglTexture;t.bindTexture(W,ce),p(W),t.unbindTexture()}}}let Z=[],L=[];function pe(I){if(I.samples>0){if(H(I)===!1){let S=I.textures,k=I.width,ee=I.height,F=i.COLOR_BUFFER_BIT,W=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=n.get(I),ue=S.length>1;if(ue)for(let Se=0;Se<S.length;Se++)t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let Se=0;Se<S.length;Se++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(F|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(F|=i.STENCIL_BUFFER_BIT)),ue){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ce.__webglColorRenderbuffer[Se]);let Ve=n.get(S[Se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ve,0)}i.blitFramebuffer(0,0,k,ee,0,0,k,ee,F,i.NEAREST),c===!0&&(Z.length=0,L.length=0,Z.push(i.COLOR_ATTACHMENT0+Se),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Z.push(W),L.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Z))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ue)for(let Se=0;Se<S.length;Se++){t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,ce.__webglColorRenderbuffer[Se]);let Ve=n.get(S[Se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,Ve,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){let S=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function re(I){return Math.min(s.maxSamples,I.samples)}function H(I){let S=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function q(I){let S=o.render.frame;u.get(I)!==S&&(u.set(I,S),I.update())}function ne(I,S){let k=I.colorSpace,ee=I.format,F=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||k!==Yt&&k!==yi&&(Je.getTransfer(k)===lt?(ee!==en||F!==ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),S}function Q(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=G,this.resetTextureUnits=V,this.setTexture2D=P,this.setTexture2DArray=D,this.setTexture3D=B,this.setTextureCube=U,this.rebindTextures=ge,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=be,this.useMultisampledRTT=H}function Jy(i,e){function t(n,s=yi){let r,o=Je.getTransfer(s);if(n===ti)return i.UNSIGNED_BYTE;if(n===ql)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Yl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Fd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Nd)return i.BYTE;if(n===Od)return i.SHORT;if(n===wr)return i.UNSIGNED_SHORT;if(n===Xl)return i.INT;if(n===Yi)return i.UNSIGNED_INT;if(n===Dn)return i.FLOAT;if(n===Hr)return i.HALF_FLOAT;if(n===kd)return i.ALPHA;if(n===Bd)return i.RGB;if(n===en)return i.RGBA;if(n===zd)return i.LUMINANCE;if(n===Hd)return i.LUMINANCE_ALPHA;if(n===Cs)return i.DEPTH_COMPONENT;if(n===Os)return i.DEPTH_STENCIL;if(n===$l)return i.RED;if(n===Zl)return i.RED_INTEGER;if(n===Vd)return i.RG;if(n===jl)return i.RG_INTEGER;if(n===Kl)return i.RGBA_INTEGER;if(n===Po||n===Lo||n===Do||n===Uo)if(o===lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Po)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Do)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Po)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Lo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Do)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Uo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ic||n===Pc||n===Lc||n===Dc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ic)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Pc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Lc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Dc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Uc||n===Nc||n===Oc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Uc||n===Nc)return o===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Oc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Fc||n===kc||n===Bc||n===zc||n===Hc||n===Vc||n===Gc||n===Wc||n===Xc||n===qc||n===Yc||n===$c||n===Zc||n===jc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Fc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===kc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Bc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===zc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Hc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Vc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Gc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Yc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$c)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Zc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===jc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===No||n===Kc||n===Jc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===No)return o===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Kc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Jc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Gd||n===Qc||n===el||n===tl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===No)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Qc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===el)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===tl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ns?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var gl=class extends wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},It=class extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Qy={type:"move"},Mr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new It,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new It,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new It,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,n),p=this._getHandJoint(l,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,m=.005;l.inputState.pinching&&f>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Qy)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new It;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ev=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,xl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Ft,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new vn({vertexShader:ev,fragmentShader:tv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new je(new ii(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},_l=class extends ni{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,m=null,v=new xl,g=t.getContextAttributes(),p=null,y=null,_=[],x=[],A=new xe,M=null,w=new wt;w.viewport=new nt;let E=new wt;E.viewport=new nt;let b=[w,E],T=new gl,R=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let le=_[te];return le===void 0&&(le=new Mr,_[te]=le),le.getTargetRaySpace()},this.getControllerGrip=function(te){let le=_[te];return le===void 0&&(le=new Mr,_[te]=le),le.getGripSpace()},this.getHand=function(te){let le=_[te];return le===void 0&&(le=new Mr,_[te]=le),le.getHandSpace()};function G(te){let le=x.indexOf(te.inputSource);if(le===-1)return;let be=_[le];be!==void 0&&(be.update(te.inputSource,te.frame,l||o),be.dispatchEvent({type:te.type,data:te.inputSource}))}function N(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",P);for(let te=0;te<_.length;te++){let le=x[te];le!==null&&(x[te]=null,_[te].disconnect(le))}R=null,V=null,v.reset(),e.setRenderTarget(p),d=null,f=null,h=null,s=null,y=null,Re.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(te){l=te},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",N),s.addEventListener("inputsourceschange",P),g.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(A),s.renderState.layers===void 0){let le={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,le),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Un(d.framebufferWidth,d.framebufferHeight,{format:en,type:ti,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let le=null,be=null,j=null;g.depth&&(j=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=g.stencil?Os:Cs,be=g.stencil?Ns:Yi);let he={colorFormat:t.RGBA8,depthFormat:j,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(he),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Un(f.textureWidth,f.textureHeight,{format:en,type:ti,depthTexture:new Yo(f.textureWidth,f.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Re.setContext(s),Re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function P(te){for(let le=0;le<te.removed.length;le++){let be=te.removed[le],j=x.indexOf(be);j>=0&&(x[j]=null,_[j].disconnect(be))}for(let le=0;le<te.added.length;le++){let be=te.added[le],j=x.indexOf(be);if(j===-1){for(let ye=0;ye<_.length;ye++)if(ye>=x.length){x.push(be),j=ye;break}else if(x[ye]===null){x[ye]=be,j=ye;break}if(j===-1)break}let he=_[j];he&&he.connect(be)}}let D=new O,B=new O;function U(te,le,be){D.setFromMatrixPosition(le.matrixWorld),B.setFromMatrixPosition(be.matrixWorld);let j=D.distanceTo(B),he=le.projectionMatrix.elements,ye=be.projectionMatrix.elements,ge=he[14]/(he[10]-1),Pe=he[14]/(he[10]+1),ie=(he[9]+1)/he[5],Z=(he[9]-1)/he[5],L=(he[8]-1)/he[0],pe=(ye[8]+1)/ye[0],re=ge*L,H=ge*pe,q=j/(-L+pe),ne=q*-L;if(le.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(ne),te.translateZ(q),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),he[10]===-1)te.projectionMatrix.copy(le.projectionMatrix),te.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{let Q=ge+q,I=Pe+q,S=re-ne,k=H+(j-ne),ee=ie*Pe/I*Q,F=Z*Pe/I*Q;te.projectionMatrix.makePerspective(S,k,ee,F,Q,I),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function z(te,le){le===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(le.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;let le=te.near,be=te.far;v.texture!==null&&(v.depthNear>0&&(le=v.depthNear),v.depthFar>0&&(be=v.depthFar)),T.near=E.near=w.near=le,T.far=E.far=w.far=be,(R!==T.near||V!==T.far)&&(s.updateRenderState({depthNear:T.near,depthFar:T.far}),R=T.near,V=T.far),w.layers.mask=te.layers.mask|2,E.layers.mask=te.layers.mask|4,T.layers.mask=w.layers.mask|E.layers.mask;let j=te.parent,he=T.cameras;z(T,j);for(let ye=0;ye<he.length;ye++)z(he[ye],j);he.length===2?U(T,w,E):T.projectionMatrix.copy(w.projectionMatrix),oe(te,T,j)};function oe(te,le,be){be===null?te.matrix.copy(le.matrixWorld):(te.matrix.copy(be.matrixWorld),te.matrix.invert(),te.matrix.multiply(le.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(le.projectionMatrix),te.projectionMatrixInverse.copy(le.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Bs*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(te){c=te,f!==null&&(f.fixedFoveation=te),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=te)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(T)};let de=null;function Me(te,le){if(u=le.getViewerPose(l||o),m=le,u!==null){let be=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let j=!1;be.length!==T.cameras.length&&(T.cameras.length=0,j=!0);for(let ye=0;ye<be.length;ye++){let ge=be[ye],Pe=null;if(d!==null)Pe=d.getViewport(ge);else{let Z=h.getViewSubImage(f,ge);Pe=Z.viewport,ye===0&&(e.setRenderTargetTextures(y,Z.colorTexture,f.ignoreDepthValues?void 0:Z.depthStencilTexture),e.setRenderTarget(y))}let ie=b[ye];ie===void 0&&(ie=new wt,ie.layers.enable(ye),ie.viewport=new nt,b[ye]=ie),ie.matrix.fromArray(ge.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(ge.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),ye===0&&(T.matrix.copy(ie.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),j===!0&&T.cameras.push(ie)}let he=s.enabledFeatures;if(he&&he.includes("depth-sensing")){let ye=h.getDepthInformation(be[0]);ye&&ye.isValid&&ye.texture&&v.init(e,ye,s.renderState)}}for(let be=0;be<_.length;be++){let j=x[be],he=_[be];j!==null&&he!==void 0&&he.update(j,le,l||o)}de&&de(te,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),m=null}let Re=new Zd;Re.setAnimationLoop(Me),this.setAnimationLoop=function(te){de=te},this.dispose=function(){}}},Hi=new un,nv=new ke;function iv(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,$d(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,y,_,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),h(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,x)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),v(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,y,_):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===tn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===tn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let y=e.get(p),_=y.envMap,x=y.envMapRotation;_&&(g.envMap.value=_,Hi.copy(x),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),g.envMapRotation.value.setFromMatrix4(nv.makeRotationFromEuler(Hi)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,y,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=_*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){let y=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function sv(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,_){let x=_.program;n.uniformBlockBinding(y,x)}function l(y,_){let x=s[y.id];x===void 0&&(m(y),x=u(y),s[y.id]=x,y.addEventListener("dispose",g));let A=_.program;n.updateUBOMapping(y,A);let M=e.render.frame;r[y.id]!==M&&(f(y),r[y.id]=M)}function u(y){let _=h();y.__bindingPointIndex=_;let x=i.createBuffer(),A=y.__size,M=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,A,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,x),x}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let _=s[y.id],x=y.uniforms,A=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let M=0,w=x.length;M<w;M++){let E=Array.isArray(x[M])?x[M]:[x[M]];for(let b=0,T=E.length;b<T;b++){let R=E[b];if(d(R,M,b,A)===!0){let V=R.__offset,G=Array.isArray(R.value)?R.value:[R.value],N=0;for(let P=0;P<G.length;P++){let D=G[P],B=v(D);typeof D=="number"||typeof D=="boolean"?(R.__data[0]=D,i.bufferSubData(i.UNIFORM_BUFFER,V+N,R.__data)):D.isMatrix3?(R.__data[0]=D.elements[0],R.__data[1]=D.elements[1],R.__data[2]=D.elements[2],R.__data[3]=0,R.__data[4]=D.elements[3],R.__data[5]=D.elements[4],R.__data[6]=D.elements[5],R.__data[7]=0,R.__data[8]=D.elements[6],R.__data[9]=D.elements[7],R.__data[10]=D.elements[8],R.__data[11]=0):(D.toArray(R.__data,N),N+=B.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,_,x,A){let M=y.value,w=_+"_"+x;if(A[w]===void 0)return typeof M=="number"||typeof M=="boolean"?A[w]=M:A[w]=M.clone(),!0;{let E=A[w];if(typeof M=="number"||typeof M=="boolean"){if(E!==M)return A[w]=M,!0}else if(E.equals(M)===!1)return E.copy(M),!0}return!1}function m(y){let _=y.uniforms,x=0,A=16;for(let w=0,E=_.length;w<E;w++){let b=Array.isArray(_[w])?_[w]:[_[w]];for(let T=0,R=b.length;T<R;T++){let V=b[T],G=Array.isArray(V.value)?V.value:[V.value];for(let N=0,P=G.length;N<P;N++){let D=G[N],B=v(D),U=x%A,z=U%B.boundary,oe=U+z;x+=z,oe!==0&&A-oe<B.storage&&(x+=A-oe),V.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=x,x+=B.storage}}}let M=x%A;return M>0&&(x+=A-M),y.__size=x,y.__cache={},this}function v(y){let _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function g(y){let _=y.target;_.removeEventListener("dispose",g);let x=o.indexOf(_.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var $o=class{constructor(e={}){let{canvas:t=cg(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let m=new Uint32Array(4),v=new Int32Array(4),g=null,p=null,y=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_t,this.toneMapping=bi,this.toneMappingExposure=1;let x=this,A=!1,M=0,w=0,E=null,b=-1,T=null,R=new nt,V=new nt,G=null,N=new Ie(0),P=0,D=t.width,B=t.height,U=1,z=null,oe=null,de=new nt(0,0,D,B),Me=new nt(0,0,D,B),Re=!1,te=new Ar,le=!1,be=!1,j=new ke,he=new ke,ye=new O,ge=new nt,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ie=!1;function Z(){return E===null?U:1}let L=n;function pe(C,Y){return t.getContext(C,Y)}try{let C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",Ce,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),L===null){let Y="webgl2";if(L=pe(Y,C),L===null)throw pe(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let re,H,q,ne,Q,I,S,k,ee,F,W,ce,ue,Se,Ve,me,_e,Fe,ze,Le,et,Ye,dt,X;function we(){re=new v_(L),re.init(),Ye=new Jy(L,re),H=new p_(L,re,e,Ye),q=new Zy(L,re),H.reverseDepthBuffer&&f&&q.buffers.depth.setReversed(!0),ne=new S_(L),Q=new Oy,I=new Ky(L,re,q,Q,H,Ye,ne),S=new g_(x),k=new y_(x),ee=new Ig(L),dt=new d_(L,ee),F=new M_(L,ee,ne,dt),W=new w_(L,F,ee,ne),ze=new T_(L,H,I),me=new m_(Q),ce=new Ny(x,S,k,re,H,dt,me),ue=new iv(x,Q),Se=new ky,Ve=new Wy(re),Fe=new h_(x,S,k,q,W,d,c),_e=new Yy(x,W,H),X=new sv(L,ne,H,q),Le=new f_(L,re,ne),et=new b_(L,re,ne),ne.programs=ce.programs,x.capabilities=H,x.extensions=re,x.properties=Q,x.renderLists=Se,x.shadowMap=_e,x.state=q,x.info=ne}we();let se=new _l(x,L);this.xr=se,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let C=re.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=re.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(C){C!==void 0&&(U=C,this.setSize(D,B,!1))},this.getSize=function(C){return C.set(D,B)},this.setSize=function(C,Y,K=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=C,B=Y,t.width=Math.floor(C*U),t.height=Math.floor(Y*U),K===!0&&(t.style.width=C+"px",t.style.height=Y+"px"),this.setViewport(0,0,C,Y)},this.getDrawingBufferSize=function(C){return C.set(D*U,B*U).floor()},this.setDrawingBufferSize=function(C,Y,K){D=C,B=Y,U=K,t.width=Math.floor(C*K),t.height=Math.floor(Y*K),this.setViewport(0,0,C,Y)},this.getCurrentViewport=function(C){return C.copy(R)},this.getViewport=function(C){return C.copy(de)},this.setViewport=function(C,Y,K,J){C.isVector4?de.set(C.x,C.y,C.z,C.w):de.set(C,Y,K,J),q.viewport(R.copy(de).multiplyScalar(U).round())},this.getScissor=function(C){return C.copy(Me)},this.setScissor=function(C,Y,K,J){C.isVector4?Me.set(C.x,C.y,C.z,C.w):Me.set(C,Y,K,J),q.scissor(V.copy(Me).multiplyScalar(U).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(C){q.setScissorTest(Re=C)},this.setOpaqueSort=function(C){z=C},this.setTransparentSort=function(C){oe=C},this.getClearColor=function(C){return C.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor.apply(Fe,arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha.apply(Fe,arguments)},this.clear=function(C=!0,Y=!0,K=!0){let J=0;if(C){let $=!1;if(E!==null){let ve=E.texture.format;$=ve===Kl||ve===jl||ve===Zl}if($){let ve=E.texture.type,Ae=ve===ti||ve===Yi||ve===wr||ve===Ns||ve===ql||ve===Yl,De=Fe.getClearColor(),Ue=Fe.getClearAlpha(),Ge=De.r,Xe=De.g,Ne=De.b;Ae?(m[0]=Ge,m[1]=Xe,m[2]=Ne,m[3]=Ue,L.clearBufferuiv(L.COLOR,0,m)):(v[0]=Ge,v[1]=Xe,v[2]=Ne,v[3]=Ue,L.clearBufferiv(L.COLOR,0,v))}else J|=L.COLOR_BUFFER_BIT}Y&&(J|=L.DEPTH_BUFFER_BIT),K&&(J|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",Ce,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),Se.dispose(),Ve.dispose(),Q.dispose(),S.dispose(),k.dispose(),W.dispose(),dt.dispose(),X.dispose(),ce.dispose(),se.dispose(),se.removeEventListener("sessionstart",oh),se.removeEventListener("sessionend",ah),Ni.stop()};function fe(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Ce(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let C=ne.autoReset,Y=_e.enabled,K=_e.autoUpdate,J=_e.needsUpdate,$=_e.type;we(),ne.autoReset=C,_e.enabled=Y,_e.autoUpdate=K,_e.needsUpdate=J,_e.type=$}function Ee(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function We(C){let Y=C.target;Y.removeEventListener("dispose",We),bt(Y)}function bt(C){zt(C),Q.remove(C)}function zt(C){let Y=Q.get(C).programs;Y!==void 0&&(Y.forEach(function(K){ce.releaseProgram(K)}),C.isShaderMaterial&&ce.releaseShaderCache(C))}this.renderBufferDirect=function(C,Y,K,J,$,ve){Y===null&&(Y=Pe);let Ae=$.isMesh&&$.matrixWorld.determinant()<0,De=Qp(C,Y,K,J,$);q.setMaterial(J,Ae);let Ue=K.index,Ge=1;if(J.wireframe===!0){if(Ue=F.getWireframeAttribute(K),Ue===void 0)return;Ge=2}let Xe=K.drawRange,Ne=K.attributes.position,tt=Xe.start*Ge,ft=(Xe.start+Xe.count)*Ge;ve!==null&&(tt=Math.max(tt,ve.start*Ge),ft=Math.min(ft,(ve.start+ve.count)*Ge)),Ue!==null?(tt=Math.max(tt,0),ft=Math.min(ft,Ue.count)):Ne!=null&&(tt=Math.max(tt,0),ft=Math.min(ft,Ne.count));let gt=ft-tt;if(gt<0||gt===1/0)return;dt.setup($,J,De,K,Ue);let Qt,it=Le;if(Ue!==null&&(Qt=ee.get(Ue),it=et,it.setIndex(Qt)),$.isMesh)J.wireframe===!0?(q.setLineWidth(J.wireframeLinewidth*Z()),it.setMode(L.LINES)):it.setMode(L.TRIANGLES);else if($.isLine){let Oe=J.linewidth;Oe===void 0&&(Oe=1),q.setLineWidth(Oe*Z()),$.isLineSegments?it.setMode(L.LINES):$.isLineLoop?it.setMode(L.LINE_LOOP):it.setMode(L.LINE_STRIP)}else $.isPoints?it.setMode(L.POINTS):$.isSprite&&it.setMode(L.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)it.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))it.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let Oe=$._multiDrawStarts,Gn=$._multiDrawCounts,st=$._multiDrawCount,Rn=Ue?ee.get(Ue).bytesPerElement:1,as=Q.get(J).currentProgram.getUniforms();for(let on=0;on<st;on++)as.setValue(L,"_gl_DrawID",on),it.render(Oe[on]/Rn,Gn[on])}else if($.isInstancedMesh)it.renderInstances(tt,gt,$.count);else if(K.isInstancedBufferGeometry){let Oe=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Gn=Math.min(K.instanceCount,Oe);it.renderInstances(tt,gt,Gn)}else it.render(tt,gt)};function at(C,Y,K){C.transparent===!0&&C.side===vt&&C.forceSinglePass===!1?(C.side=tn,C.needsUpdate=!0,Qr(C,Y,K),C.side=Bn,C.needsUpdate=!0,Qr(C,Y,K),C.side=vt):Qr(C,Y,K)}this.compile=function(C,Y,K=null){K===null&&(K=C),p=Ve.get(K),p.init(Y),_.push(p),K.traverseVisible(function($){$.isLight&&$.layers.test(Y.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),C!==K&&C.traverseVisible(function($){$.isLight&&$.layers.test(Y.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),p.setupLights();let J=new Set;return C.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let ve=$.material;if(ve)if(Array.isArray(ve))for(let Ae=0;Ae<ve.length;Ae++){let De=ve[Ae];at(De,K,$),J.add(De)}else at(ve,K,$),J.add(ve)}),_.pop(),p=null,J},this.compileAsync=function(C,Y,K=null){let J=this.compile(C,Y,K);return new Promise($=>{function ve(){if(J.forEach(function(Ae){Q.get(Ae).currentProgram.isReady()&&J.delete(Ae)}),J.size===0){$(C);return}setTimeout(ve,10)}re.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let An=null;function Vn(C){An&&An(C)}function oh(){Ni.stop()}function ah(){Ni.start()}let Ni=new Zd;Ni.setAnimationLoop(Vn),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(C){An=C,se.setAnimationLoop(C),C===null?Ni.stop():Ni.start()},se.addEventListener("sessionstart",oh),se.addEventListener("sessionend",ah),this.render=function(C,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(Y),Y=se.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,Y,E),p=Ve.get(C,_.length),p.init(Y),_.push(p),he.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),te.setFromProjectionMatrix(he),be=this.localClippingEnabled,le=me.init(this.clippingPlanes,be),g=Se.get(C,y.length),g.init(),y.push(g),se.enabled===!0&&se.isPresenting===!0){let ve=x.xr.getDepthSensingMesh();ve!==null&&Fa(ve,Y,-1/0,x.sortObjects)}Fa(C,Y,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(z,oe),ie=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,ie&&Fe.addToRenderList(g,C),this.info.render.frame++,le===!0&&me.beginShadows();let K=p.state.shadowsArray;_e.render(K,C,Y),le===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();let J=g.opaque,$=g.transmissive;if(p.setupLights(),Y.isArrayCamera){let ve=Y.cameras;if($.length>0)for(let Ae=0,De=ve.length;Ae<De;Ae++){let Ue=ve[Ae];lh(J,$,C,Ue)}ie&&Fe.render(C);for(let Ae=0,De=ve.length;Ae<De;Ae++){let Ue=ve[Ae];ch(g,C,Ue,Ue.viewport)}}else $.length>0&&lh(J,$,C,Y),ie&&Fe.render(C),ch(g,C,Y);E!==null&&(I.updateMultisampleRenderTarget(E),I.updateRenderTargetMipmap(E)),C.isScene===!0&&C.onAfterRender(x,C,Y),dt.resetDefaultState(),b=-1,T=null,_.pop(),_.length>0?(p=_[_.length-1],le===!0&&me.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?g=y[y.length-1]:g=null};function Fa(C,Y,K,J){if(C.visible===!1)return;if(C.layers.test(Y.layers)){if(C.isGroup)K=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Y);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||te.intersectsSprite(C)){J&&ge.setFromMatrixPosition(C.matrixWorld).applyMatrix4(he);let Ae=W.update(C),De=C.material;De.visible&&g.push(C,Ae,De,K,ge.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||te.intersectsObject(C))){let Ae=W.update(C),De=C.material;if(J&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ge.copy(C.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),ge.copy(Ae.boundingSphere.center)),ge.applyMatrix4(C.matrixWorld).applyMatrix4(he)),Array.isArray(De)){let Ue=Ae.groups;for(let Ge=0,Xe=Ue.length;Ge<Xe;Ge++){let Ne=Ue[Ge],tt=De[Ne.materialIndex];tt&&tt.visible&&g.push(C,Ae,tt,K,ge.z,Ne)}}else De.visible&&g.push(C,Ae,De,K,ge.z,null)}}let ve=C.children;for(let Ae=0,De=ve.length;Ae<De;Ae++)Fa(ve[Ae],Y,K,J)}function ch(C,Y,K,J){let $=C.opaque,ve=C.transmissive,Ae=C.transparent;p.setupLightsView(K),le===!0&&me.setGlobalState(x.clippingPlanes,K),J&&q.viewport(R.copy(J)),$.length>0&&Jr($,Y,K),ve.length>0&&Jr(ve,Y,K),Ae.length>0&&Jr(Ae,Y,K),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function lh(C,Y,K,J){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[J.id]===void 0&&(p.state.transmissionRenderTarget[J.id]=new Un(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float")?Hr:ti,minFilter:kn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));let ve=p.state.transmissionRenderTarget[J.id],Ae=J.viewport||R;ve.setSize(Ae.z,Ae.w);let De=x.getRenderTarget();x.setRenderTarget(ve),x.getClearColor(N),P=x.getClearAlpha(),P<1&&x.setClearColor(16777215,.5),x.clear(),ie&&Fe.render(K);let Ue=x.toneMapping;x.toneMapping=bi;let Ge=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),p.setupLightsView(J),le===!0&&me.setGlobalState(x.clippingPlanes,J),Jr(C,K,J),I.updateMultisampleRenderTarget(ve),I.updateRenderTargetMipmap(ve),re.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let Ne=0,tt=Y.length;Ne<tt;Ne++){let ft=Y[Ne],gt=ft.object,Qt=ft.geometry,it=ft.material,Oe=ft.group;if(it.side===vt&&gt.layers.test(J.layers)){let Gn=it.side;it.side=tn,it.needsUpdate=!0,uh(gt,K,J,Qt,it,Oe),it.side=Gn,it.needsUpdate=!0,Xe=!0}}Xe===!0&&(I.updateMultisampleRenderTarget(ve),I.updateRenderTargetMipmap(ve))}x.setRenderTarget(De),x.setClearColor(N,P),Ge!==void 0&&(J.viewport=Ge),x.toneMapping=Ue}function Jr(C,Y,K){let J=Y.isScene===!0?Y.overrideMaterial:null;for(let $=0,ve=C.length;$<ve;$++){let Ae=C[$],De=Ae.object,Ue=Ae.geometry,Ge=J===null?Ae.material:J,Xe=Ae.group;De.layers.test(K.layers)&&uh(De,Y,K,Ue,Ge,Xe)}}function uh(C,Y,K,J,$,ve){C.onBeforeRender(x,Y,K,J,$,ve),C.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),$.onBeforeRender(x,Y,K,J,C,ve),$.transparent===!0&&$.side===vt&&$.forceSinglePass===!1?($.side=tn,$.needsUpdate=!0,x.renderBufferDirect(K,Y,J,$,C,ve),$.side=Bn,$.needsUpdate=!0,x.renderBufferDirect(K,Y,J,$,C,ve),$.side=vt):x.renderBufferDirect(K,Y,J,$,C,ve),C.onAfterRender(x,Y,K,J,$,ve)}function Qr(C,Y,K){Y.isScene!==!0&&(Y=Pe);let J=Q.get(C),$=p.state.lights,ve=p.state.shadowsArray,Ae=$.state.version,De=ce.getParameters(C,$.state,ve,Y,K),Ue=ce.getProgramCacheKey(De),Ge=J.programs;J.environment=C.isMeshStandardMaterial?Y.environment:null,J.fog=Y.fog,J.envMap=(C.isMeshStandardMaterial?k:S).get(C.envMap||J.environment),J.envMapRotation=J.environment!==null&&C.envMap===null?Y.environmentRotation:C.envMapRotation,Ge===void 0&&(C.addEventListener("dispose",We),Ge=new Map,J.programs=Ge);let Xe=Ge.get(Ue);if(Xe!==void 0){if(J.currentProgram===Xe&&J.lightsStateVersion===Ae)return dh(C,De),Xe}else De.uniforms=ce.getUniforms(C),C.onBeforeCompile(De,x),Xe=ce.acquireProgram(De,Ue),Ge.set(Ue,Xe),J.uniforms=De.uniforms;let Ne=J.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ne.clippingPlanes=me.uniform),dh(C,De),J.needsLights=tm(C),J.lightsStateVersion=Ae,J.needsLights&&(Ne.ambientLightColor.value=$.state.ambient,Ne.lightProbe.value=$.state.probe,Ne.directionalLights.value=$.state.directional,Ne.directionalLightShadows.value=$.state.directionalShadow,Ne.spotLights.value=$.state.spot,Ne.spotLightShadows.value=$.state.spotShadow,Ne.rectAreaLights.value=$.state.rectArea,Ne.ltc_1.value=$.state.rectAreaLTC1,Ne.ltc_2.value=$.state.rectAreaLTC2,Ne.pointLights.value=$.state.point,Ne.pointLightShadows.value=$.state.pointShadow,Ne.hemisphereLights.value=$.state.hemi,Ne.directionalShadowMap.value=$.state.directionalShadowMap,Ne.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ne.spotShadowMap.value=$.state.spotShadowMap,Ne.spotLightMatrix.value=$.state.spotLightMatrix,Ne.spotLightMap.value=$.state.spotLightMap,Ne.pointShadowMap.value=$.state.pointShadowMap,Ne.pointShadowMatrix.value=$.state.pointShadowMatrix),J.currentProgram=Xe,J.uniformsList=null,Xe}function hh(C){if(C.uniformsList===null){let Y=C.currentProgram.getUniforms();C.uniformsList=Ps.seqWithValue(Y.seq,C.uniforms)}return C.uniformsList}function dh(C,Y){let K=Q.get(C);K.outputColorSpace=Y.outputColorSpace,K.batching=Y.batching,K.batchingColor=Y.batchingColor,K.instancing=Y.instancing,K.instancingColor=Y.instancingColor,K.instancingMorph=Y.instancingMorph,K.skinning=Y.skinning,K.morphTargets=Y.morphTargets,K.morphNormals=Y.morphNormals,K.morphColors=Y.morphColors,K.morphTargetsCount=Y.morphTargetsCount,K.numClippingPlanes=Y.numClippingPlanes,K.numIntersection=Y.numClipIntersection,K.vertexAlphas=Y.vertexAlphas,K.vertexTangents=Y.vertexTangents,K.toneMapping=Y.toneMapping}function Qp(C,Y,K,J,$){Y.isScene!==!0&&(Y=Pe),I.resetTextureUnits();let ve=Y.fog,Ae=J.isMeshStandardMaterial?Y.environment:null,De=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Yt,Ue=(J.isMeshStandardMaterial?k:S).get(J.envMap||Ae),Ge=J.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Xe=!!K.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ne=!!K.morphAttributes.position,tt=!!K.morphAttributes.normal,ft=!!K.morphAttributes.color,gt=bi;J.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(gt=x.toneMapping);let Qt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,it=Qt!==void 0?Qt.length:0,Oe=Q.get(J),Gn=p.state.lights;if(le===!0&&(be===!0||C!==T)){let xn=C===T&&J.id===b;me.setState(J,C,xn)}let st=!1;J.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==Gn.state.version||Oe.outputColorSpace!==De||$.isBatchedMesh&&Oe.batching===!1||!$.isBatchedMesh&&Oe.batching===!0||$.isBatchedMesh&&Oe.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Oe.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Oe.instancing===!1||!$.isInstancedMesh&&Oe.instancing===!0||$.isSkinnedMesh&&Oe.skinning===!1||!$.isSkinnedMesh&&Oe.skinning===!0||$.isInstancedMesh&&Oe.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Oe.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Oe.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Oe.instancingMorph===!1&&$.morphTexture!==null||Oe.envMap!==Ue||J.fog===!0&&Oe.fog!==ve||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==me.numPlanes||Oe.numIntersection!==me.numIntersection)||Oe.vertexAlphas!==Ge||Oe.vertexTangents!==Xe||Oe.morphTargets!==Ne||Oe.morphNormals!==tt||Oe.morphColors!==ft||Oe.toneMapping!==gt||Oe.morphTargetsCount!==it)&&(st=!0):(st=!0,Oe.__version=J.version);let Rn=Oe.currentProgram;st===!0&&(Rn=Qr(J,Y,$));let as=!1,on=!1,or=!1,xt=Rn.getUniforms(),On=Oe.uniforms;if(q.useProgram(Rn.program)&&(as=!0,on=!0,or=!0),J.id!==b&&(b=J.id,on=!0),as||T!==C){q.buffers.depth.getReversed()?(j.copy(C.projectionMatrix),ug(j),hg(j),xt.setValue(L,"projectionMatrix",j)):xt.setValue(L,"projectionMatrix",C.projectionMatrix),xt.setValue(L,"viewMatrix",C.matrixWorldInverse);let hi=xt.map.cameraPosition;hi!==void 0&&hi.setValue(L,ye.setFromMatrixPosition(C.matrixWorld)),H.logarithmicDepthBuffer&&xt.setValue(L,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&xt.setValue(L,"isOrthographic",C.isOrthographicCamera===!0),T!==C&&(T=C,on=!0,or=!0)}if($.isSkinnedMesh){xt.setOptional(L,$,"bindMatrix"),xt.setOptional(L,$,"bindMatrixInverse");let xn=$.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),xt.setValue(L,"boneTexture",xn.boneTexture,I))}$.isBatchedMesh&&(xt.setOptional(L,$,"batchingTexture"),xt.setValue(L,"batchingTexture",$._matricesTexture,I),xt.setOptional(L,$,"batchingIdTexture"),xt.setValue(L,"batchingIdTexture",$._indirectTexture,I),xt.setOptional(L,$,"batchingColorTexture"),$._colorsTexture!==null&&xt.setValue(L,"batchingColorTexture",$._colorsTexture,I));let ar=K.morphAttributes;if((ar.position!==void 0||ar.normal!==void 0||ar.color!==void 0)&&ze.update($,K,Rn),(on||Oe.receiveShadow!==$.receiveShadow)&&(Oe.receiveShadow=$.receiveShadow,xt.setValue(L,"receiveShadow",$.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(On.envMap.value=Ue,On.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&Y.environment!==null&&(On.envMapIntensity.value=Y.environmentIntensity),on&&(xt.setValue(L,"toneMappingExposure",x.toneMappingExposure),Oe.needsLights&&em(On,or),ve&&J.fog===!0&&ue.refreshFogUniforms(On,ve),ue.refreshMaterialUniforms(On,J,U,B,p.state.transmissionRenderTarget[C.id]),Ps.upload(L,hh(Oe),On,I)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Ps.upload(L,hh(Oe),On,I),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&xt.setValue(L,"center",$.center),xt.setValue(L,"modelViewMatrix",$.modelViewMatrix),xt.setValue(L,"normalMatrix",$.normalMatrix),xt.setValue(L,"modelMatrix",$.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let xn=J.uniformsGroups;for(let hi=0,di=xn.length;hi<di;hi++){let fh=xn[hi];X.update(fh,Rn),X.bind(fh,Rn)}}return Rn}function em(C,Y){C.ambientLightColor.needsUpdate=Y,C.lightProbe.needsUpdate=Y,C.directionalLights.needsUpdate=Y,C.directionalLightShadows.needsUpdate=Y,C.pointLights.needsUpdate=Y,C.pointLightShadows.needsUpdate=Y,C.spotLights.needsUpdate=Y,C.spotLightShadows.needsUpdate=Y,C.rectAreaLights.needsUpdate=Y,C.hemisphereLights.needsUpdate=Y}function tm(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(C,Y,K){Q.get(C.texture).__webglTexture=Y,Q.get(C.depthTexture).__webglTexture=K;let J=Q.get(C);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=K===void 0,J.__autoAllocateDepthBuffer||re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,Y){let K=Q.get(C);K.__webglFramebuffer=Y,K.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(C,Y=0,K=0){E=C,M=Y,w=K;let J=!0,$=null,ve=!1,Ae=!1;if(C){let Ue=Q.get(C);if(Ue.__useDefaultFramebuffer!==void 0)q.bindFramebuffer(L.FRAMEBUFFER,null),J=!1;else if(Ue.__webglFramebuffer===void 0)I.setupRenderTarget(C);else if(Ue.__hasExternalTextures)I.rebindTextures(C,Q.get(C.texture).__webglTexture,Q.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let Ne=C.depthTexture;if(Ue.__boundDepthTexture!==Ne){if(Ne!==null&&Q.has(Ne)&&(C.width!==Ne.image.width||C.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(C)}}let Ge=C.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Ae=!0);let Xe=Q.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Xe[Y])?$=Xe[Y][K]:$=Xe[Y],ve=!0):C.samples>0&&I.useMultisampledRTT(C)===!1?$=Q.get(C).__webglMultisampledFramebuffer:Array.isArray(Xe)?$=Xe[K]:$=Xe,R.copy(C.viewport),V.copy(C.scissor),G=C.scissorTest}else R.copy(de).multiplyScalar(U).floor(),V.copy(Me).multiplyScalar(U).floor(),G=Re;if(q.bindFramebuffer(L.FRAMEBUFFER,$)&&J&&q.drawBuffers(C,$),q.viewport(R),q.scissor(V),q.setScissorTest(G),ve){let Ue=Q.get(C.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ue.__webglTexture,K)}else if(Ae){let Ue=Q.get(C.texture),Ge=Y||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ue.__webglTexture,K||0,Ge)}b=-1},this.readRenderTargetPixels=function(C,Y,K,J,$,ve,Ae){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=Q.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ae!==void 0&&(De=De[Ae]),De){q.bindFramebuffer(L.FRAMEBUFFER,De);try{let Ue=C.texture,Ge=Ue.format,Xe=Ue.type;if(!H.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!H.textureTypeReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=C.width-J&&K>=0&&K<=C.height-$&&L.readPixels(Y,K,J,$,Ye.convert(Ge),Ye.convert(Xe),ve)}finally{let Ue=E!==null?Q.get(E).__webglFramebuffer:null;q.bindFramebuffer(L.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(C,Y,K,J,$,ve,Ae){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=Q.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ae!==void 0&&(De=De[Ae]),De){let Ue=C.texture,Ge=Ue.format,Xe=Ue.type;if(!H.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!H.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=C.width-J&&K>=0&&K<=C.height-$){q.bindFramebuffer(L.FRAMEBUFFER,De);let Ne=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ne),L.bufferData(L.PIXEL_PACK_BUFFER,ve.byteLength,L.STREAM_READ),L.readPixels(Y,K,J,$,Ye.convert(Ge),Ye.convert(Xe),0);let tt=E!==null?Q.get(E).__webglFramebuffer:null;q.bindFramebuffer(L.FRAMEBUFFER,tt);let ft=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await lg(L,ft,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ne),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ve),L.deleteBuffer(Ne),L.deleteSync(ft),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,Y=null,K=0){C.isTexture!==!0&&(gr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,C=arguments[1]);let J=Math.pow(2,-K),$=Math.floor(C.image.width*J),ve=Math.floor(C.image.height*J),Ae=Y!==null?Y.x:0,De=Y!==null?Y.y:0;I.setTexture2D(C,0),L.copyTexSubImage2D(L.TEXTURE_2D,K,0,0,Ae,De,$,ve),q.unbindTexture()},this.copyTextureToTexture=function(C,Y,K=null,J=null,$=0){C.isTexture!==!0&&(gr("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,C=arguments[1],Y=arguments[2],$=arguments[3]||0,K=null);let ve,Ae,De,Ue,Ge,Xe,Ne,tt,ft,gt=C.isCompressedTexture?C.mipmaps[$]:C.image;K!==null?(ve=K.max.x-K.min.x,Ae=K.max.y-K.min.y,De=K.isBox3?K.max.z-K.min.z:1,Ue=K.min.x,Ge=K.min.y,Xe=K.isBox3?K.min.z:0):(ve=gt.width,Ae=gt.height,De=gt.depth||1,Ue=0,Ge=0,Xe=0),J!==null?(Ne=J.x,tt=J.y,ft=J.z):(Ne=0,tt=0,ft=0);let Qt=Ye.convert(Y.format),it=Ye.convert(Y.type),Oe;Y.isData3DTexture?(I.setTexture3D(Y,0),Oe=L.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(I.setTexture2DArray(Y,0),Oe=L.TEXTURE_2D_ARRAY):(I.setTexture2D(Y,0),Oe=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,Y.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,Y.unpackAlignment);let Gn=L.getParameter(L.UNPACK_ROW_LENGTH),st=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Rn=L.getParameter(L.UNPACK_SKIP_PIXELS),as=L.getParameter(L.UNPACK_SKIP_ROWS),on=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,gt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,gt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ue),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ge),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Xe);let or=C.isDataArrayTexture||C.isData3DTexture,xt=Y.isDataArrayTexture||Y.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){let On=Q.get(C),ar=Q.get(Y),xn=Q.get(On.__renderTarget),hi=Q.get(ar.__renderTarget);q.bindFramebuffer(L.READ_FRAMEBUFFER,xn.__webglFramebuffer),q.bindFramebuffer(L.DRAW_FRAMEBUFFER,hi.__webglFramebuffer);for(let di=0;di<De;di++)or&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Q.get(C).__webglTexture,$,Xe+di),C.isDepthTexture?(xt&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Q.get(Y).__webglTexture,$,ft+di),L.blitFramebuffer(Ue,Ge,ve,Ae,Ne,tt,ve,Ae,L.DEPTH_BUFFER_BIT,L.NEAREST)):xt?L.copyTexSubImage3D(Oe,$,Ne,tt,ft+di,Ue,Ge,ve,Ae):L.copyTexSubImage2D(Oe,$,Ne,tt,ft+di,Ue,Ge,ve,Ae);q.bindFramebuffer(L.READ_FRAMEBUFFER,null),q.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else xt?C.isDataTexture||C.isData3DTexture?L.texSubImage3D(Oe,$,Ne,tt,ft,ve,Ae,De,Qt,it,gt.data):Y.isCompressedArrayTexture?L.compressedTexSubImage3D(Oe,$,Ne,tt,ft,ve,Ae,De,Qt,gt.data):L.texSubImage3D(Oe,$,Ne,tt,ft,ve,Ae,De,Qt,it,gt):C.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,$,Ne,tt,ve,Ae,Qt,it,gt.data):C.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,$,Ne,tt,gt.width,gt.height,Qt,gt.data):L.texSubImage2D(L.TEXTURE_2D,$,Ne,tt,ve,Ae,Qt,it,gt);L.pixelStorei(L.UNPACK_ROW_LENGTH,Gn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,st),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Rn),L.pixelStorei(L.UNPACK_SKIP_ROWS,as),L.pixelStorei(L.UNPACK_SKIP_IMAGES,on),$===0&&Y.generateMipmaps&&L.generateMipmap(Oe),q.unbindTexture()},this.copyTextureToTexture3D=function(C,Y,K=null,J=null,$=0){return C.isTexture!==!0&&(gr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,J=arguments[1]||null,C=arguments[2],Y=arguments[3],$=arguments[4]||0),gr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,Y,K,J,$)},this.initRenderTarget=function(C){Q.get(C).__webglFramebuffer===void 0&&I.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?I.setTextureCube(C,0):C.isData3DTexture?I.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?I.setTexture2DArray(C,0):I.setTexture2D(C,0),q.unbindTexture()},this.resetState=function(){M=0,w=0,E=null,q.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}};var Zo=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ie(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Gs=class extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Rr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=nl,this.updateRanges=[],this.version=0,this.uuid=yn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},$t=new O,Cr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ln(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ln(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ln(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ln(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ln(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array),r=ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new pt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var hd=new O,dd=new nt,fd=new nt,rv=new O,pd=new ke,Mo=new O,hc=new ln,md=new ke,dc=new zs,$i=class extends je{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=xh,this.bindMatrix=new ke,this.bindMatrixInverse=new ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new nn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Mo),this.boundingBox.expandByPoint(Mo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ln),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Mo),this.boundingSphere.expandByPoint(Mo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hc.copy(this.boundingSphere),hc.applyMatrix4(s),e.ray.intersectsSphere(hc)!==!1&&(md.copy(s).invert(),dc.copy(e.ray).applyMatrix4(md),!(this.boundingBox!==null&&dc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,dc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new nt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===xh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Lm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;dd.fromBufferAttribute(s.attributes.skinIndex,e),fd.fromBufferAttribute(s.attributes.skinWeight,e),hd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=fd.getComponent(r);if(o!==0){let a=dd.getComponent(r);pd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(rv.copy(hd).applyMatrix4(pd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},Ir=class extends mt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ws=class extends Ft{constructor(e=null,t=1,n=1,s,r,o,a,c,l=Wt,u=Wt,h,f){super(null,o,a,c,l,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},gd=new ke,ov=new ke,jo=class i{constructor(e=[],t=[]){this.uuid=yn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:ov;gd.multiplyMatrices(a,t[r]),gd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Ws(t,e,e,en,Dn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Ir),this.bones.push(o),this.boneInverses.push(new ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},Zi=class extends pt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},bs=new ke,xd=new ke,bo=[],_d=new nn,av=new ke,dr=new je,fr=new ln,hn=class extends je{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Zi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,av)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new nn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,bs),_d.copy(e.boundingBox).applyMatrix4(bs),this.boundingBox.union(_d)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ln),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,bs),fr.copy(e.boundingSphere).applyMatrix4(bs),this.boundingSphere.union(fr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(dr.geometry=this.geometry,dr.material=this.material,dr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fr.copy(this.boundingSphere),fr.applyMatrix4(n),e.ray.intersectsSphere(fr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,bs),xd.multiplyMatrices(n,bs),dr.matrixWorld=xd,dr.raycast(e,bo);for(let o=0,a=bo.length;o<a;o++){let c=bo[o];c.instanceId=r,c.object=this,t.push(c)}bo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Zi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ws(new Float32Array(s*this.count),s,this.count,$l,Dn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var ji=class extends jt{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ko=new O,Jo=new O,yd=new ke,pr=new zs,So=new ln,fc=new O,vd=new O,Xs=class extends mt{constructor(e=new ht,t=new ji){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Ko.fromBufferAttribute(t,s-1),Jo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ko.distanceTo(Jo);e.setAttribute("lineDistance",new Ze(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),So.copy(n.boundingSphere),So.applyMatrix4(s),So.radius+=r,e.ray.intersectsSphere(So)===!1)return;yd.copy(s).invert(),pr.copy(e.ray).applyMatrix4(yd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let v=d,g=m-1;v<g;v+=l){let p=u.getX(v),y=u.getX(v+1),_=To(this,e,pr,c,p,y);_&&t.push(_)}if(this.isLineLoop){let v=u.getX(m-1),g=u.getX(d),p=To(this,e,pr,c,v,g);p&&t.push(p)}}else{let d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let v=d,g=m-1;v<g;v+=l){let p=To(this,e,pr,c,v,v+1);p&&t.push(p)}if(this.isLineLoop){let v=To(this,e,pr,c,m-1,d);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function To(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(Ko.fromBufferAttribute(o,s),Jo.fromBufferAttribute(o,r),t.distanceSqToSegment(Ko,Jo,fc,vd)>n)return;fc.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(fc);if(!(c<e.near||c>e.far))return{distance:c,point:vd.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Md=new O,bd=new O,qs=class extends Xs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Md.fromBufferAttribute(t,s),bd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Md.distanceTo(bd);e.setAttribute("lineDistance",new Ze(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Qo=class extends Xs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Pr=class extends jt{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Sd=new ke,yl=new zs,wo=new ln,Eo=new O,ea=class extends mt{constructor(e=new ht,t=new Pr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wo.copy(n.boundingSphere),wo.applyMatrix4(s),wo.radius+=r,e.ray.intersectsSphere(wo)===!1)return;Sd.copy(s).invert(),yl.copy(e.ray).applyMatrix4(Sd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let m=f,v=d;m<v;m++){let g=l.getX(m);Eo.fromBufferAttribute(h,g),Td(Eo,g,c,s,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let m=f,v=d;m<v;m++)Eo.fromBufferAttribute(h,m),Td(Eo,m,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Td(i,e,t,n,s,r,o){let a=yl.distanceSqToPoint(i);if(a<t){let c=new O;yl.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Lr=class extends Ft{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let u=n[s],f=n[s+1]-u,d=(o-u)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new xe:new O);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new O,s=[],r=[],o=[],a=new O,c=new ke;for(let d=0;d<=e;d++){let m=d/e;s[d]=this.getTangentAt(m,new O)}r[0]=new O,o[0]=new O;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Ct(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,m))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Ct(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],d*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Dr=class extends Mn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new xe){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*u-d*h+this.aX,l=f*h+d*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},vl=class extends Dr{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function nu(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let f=(o-r)/l-(a-r)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+h)+(c-a)/h;f*=u,d*=u,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Ao=new O,pc=new nu,mc=new nu,gc=new nu,Ml=class extends Mn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new O){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(Ao.subVectors(s[0],s[1]).add(s[0]),l=Ao);let h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Ao.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Ao),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(h),d),v=Math.pow(h.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(u),d);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),pc.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,m,v,g),mc.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,m,v,g),gc.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,m,v,g)}else this.curveType==="catmullrom"&&(pc.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),mc.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),gc.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return n.set(pc.calc(c),mc.calc(c),gc.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new O().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function wd(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function cv(i,e){let t=1-i;return t*t*e}function lv(i,e){return 2*(1-i)*i*e}function uv(i,e){return i*i*e}function br(i,e,t,n){return cv(i,e)+lv(i,t)+uv(i,n)}function hv(i,e){let t=1-i;return t*t*t*e}function dv(i,e){let t=1-i;return 3*t*t*i*e}function fv(i,e){return 3*(1-i)*i*i*e}function pv(i,e){return i*i*i*e}function Sr(i,e,t,n,s){return hv(i,e)+dv(i,t)+fv(i,n)+pv(i,s)}var ta=class extends Mn{constructor(e=new xe,t=new xe,n=new xe,s=new xe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new xe){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Sr(e,s.x,r.x,o.x,a.x),Sr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},bl=class extends Mn{constructor(e=new O,t=new O,n=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new O){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Sr(e,s.x,r.x,o.x,a.x),Sr(e,s.y,r.y,o.y,a.y),Sr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},na=class extends Mn{constructor(e=new xe,t=new xe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new xe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new xe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Sl=class extends Mn{constructor(e=new O,t=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new O){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new O){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ia=class extends Mn{constructor(e=new xe,t=new xe,n=new xe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new xe){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(br(e,s.x,r.x,o.x),br(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Tl=class extends Mn{constructor(e=new O,t=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new O){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(br(e,s.x,r.x,o.x),br(e,s.y,r.y,o.y),br(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sa=class extends Mn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new xe){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(wd(a,c.x,l.x,u.x,h.x),wd(a,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new xe().fromArray(s))}return this}},wl=Object.freeze({__proto__:null,ArcCurve:vl,CatmullRomCurve3:Ml,CubicBezierCurve:ta,CubicBezierCurve3:bl,EllipseCurve:Dr,LineCurve:na,LineCurve3:Sl,QuadraticBezierCurve:ia,QuadraticBezierCurve3:Tl,SplineCurve:sa}),El=class extends Mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new wl[s.type]().fromJSON(s))}return this}},Ur=class extends El{constructor(e){super(),this.type="Path",this.currentPoint=new xe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new na(this.currentPoint.clone(),new xe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new ia(this.currentPoint.clone(),new xe(e,t),new xe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new ta(this.currentPoint.clone(),new xe(e,t),new xe(n,s),new xe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new sa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let l=new Dr(e,t,n,s,r,o,a,c);if(this.curves.length>0){let h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Al=class i extends ht{constructor(e=[new xe(0,-.5),new xe(.5,0),new xe(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Ct(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],u=1/t,h=new O,f=new xe,d=new O,m=new O,v=new O,g=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:g=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,d.x=p*1,d.y=-g,d.z=p*0,v.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(v.x,v.y,v.z);break;default:g=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,d.x=p*1,d.y=-g,d.z=p*0,m.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),c.push(d.x,d.y,d.z),v.copy(m)}for(let y=0;y<=t;y++){let _=n+y*u*s,x=Math.sin(_),A=Math.cos(_);for(let M=0;M<=e.length-1;M++){h.x=e[M].x*x,h.y=e[M].y,h.z=e[M].x*A,o.push(h.x,h.y,h.z),f.x=y/t,f.y=M/(e.length-1),a.push(f.x,f.y);let w=c[3*M+0]*x,E=c[3*M+1],b=c[3*M+0]*A;l.push(w,E,b)}}for(let y=0;y<t;y++)for(let _=0;_<e.length-1;_++){let x=_+y*e.length,A=x,M=x+e.length,w=x+e.length+1,E=x+1;r.push(A,M,E),r.push(w,E,M)}this.setIndex(r),this.setAttribute("position",new Ze(o,3)),this.setAttribute("uv",new Ze(a,2)),this.setAttribute("normal",new Ze(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},ra=class i extends Al{constructor(e=1,t=1,n=4,s=8){let r=new Ur;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new i(e.radius,e.length,e.capSegments,e.radialSegments)}},Ys=class i extends ht{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new O,u=new xe;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){let d=n+h/t*s;l.x=e*Math.cos(d),l.y=e*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Ze(o,3)),this.setAttribute("normal",new Ze(a,3)),this.setAttribute("uv",new Ze(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},bn=class i extends ht{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],f=[],d=[],m=0,v=[],g=n/2,p=0;y(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new Ze(h,3)),this.setAttribute("normal",new Ze(f,3)),this.setAttribute("uv",new Ze(d,2));function y(){let x=new O,A=new O,M=0,w=(t-e)/n;for(let E=0;E<=r;E++){let b=[],T=E/r,R=T*(t-e)+e;for(let V=0;V<=s;V++){let G=V/s,N=G*c+a,P=Math.sin(N),D=Math.cos(N);A.x=R*P,A.y=-T*n+g,A.z=R*D,h.push(A.x,A.y,A.z),x.set(P,w,D).normalize(),f.push(x.x,x.y,x.z),d.push(G,1-T),b.push(m++)}v.push(b)}for(let E=0;E<s;E++)for(let b=0;b<r;b++){let T=v[b][E],R=v[b+1][E],V=v[b+1][E+1],G=v[b][E+1];(e>0||b!==0)&&(u.push(T,R,G),M+=3),(t>0||b!==r-1)&&(u.push(R,V,G),M+=3)}l.addGroup(p,M,0),p+=M}function _(x){let A=m,M=new xe,w=new O,E=0,b=x===!0?e:t,T=x===!0?1:-1;for(let V=1;V<=s;V++)h.push(0,g*T,0),f.push(0,T,0),d.push(.5,.5),m++;let R=m;for(let V=0;V<=s;V++){let N=V/s*c+a,P=Math.cos(N),D=Math.sin(N);w.x=b*D,w.y=g*T,w.z=b*P,h.push(w.x,w.y,w.z),f.push(0,T,0),M.x=P*.5+.5,M.y=D*.5*T+.5,d.push(M.x,M.y),m++}for(let V=0;V<s;V++){let G=A+V,N=R+V;x===!0?u.push(N,N+1,G):u.push(N+1,N,G),E+=3}l.addGroup(p,E,x===!0?1:2),p+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Rl=class i extends ht{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new Ze(r,3)),this.setAttribute("normal",new Ze(r.slice(),3)),this.setAttribute("uv",new Ze(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let _=new O,x=new O,A=new O;for(let M=0;M<t.length;M+=3)d(t[M+0],_),d(t[M+1],x),d(t[M+2],A),c(_,x,A,y)}function c(y,_,x,A){let M=A+1,w=[];for(let E=0;E<=M;E++){w[E]=[];let b=y.clone().lerp(x,E/M),T=_.clone().lerp(x,E/M),R=M-E;for(let V=0;V<=R;V++)V===0&&E===M?w[E][V]=b:w[E][V]=b.clone().lerp(T,V/R)}for(let E=0;E<M;E++)for(let b=0;b<2*(M-E)-1;b++){let T=Math.floor(b/2);b%2===0?(f(w[E][T+1]),f(w[E+1][T]),f(w[E][T])):(f(w[E][T+1]),f(w[E+1][T+1]),f(w[E+1][T]))}}function l(y){let _=new O;for(let x=0;x<r.length;x+=3)_.x=r[x+0],_.y=r[x+1],_.z=r[x+2],_.normalize().multiplyScalar(y),r[x+0]=_.x,r[x+1]=_.y,r[x+2]=_.z}function u(){let y=new O;for(let _=0;_<r.length;_+=3){y.x=r[_+0],y.y=r[_+1],y.z=r[_+2];let x=g(y)/2/Math.PI+.5,A=p(y)/Math.PI+.5;o.push(x,1-A)}m(),h()}function h(){for(let y=0;y<o.length;y+=6){let _=o[y+0],x=o[y+2],A=o[y+4],M=Math.max(_,x,A),w=Math.min(_,x,A);M>.9&&w<.1&&(_<.2&&(o[y+0]+=1),x<.2&&(o[y+2]+=1),A<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,_){let x=y*3;_.x=e[x+0],_.y=e[x+1],_.z=e[x+2]}function m(){let y=new O,_=new O,x=new O,A=new O,M=new xe,w=new xe,E=new xe;for(let b=0,T=0;b<r.length;b+=9,T+=6){y.set(r[b+0],r[b+1],r[b+2]),_.set(r[b+3],r[b+4],r[b+5]),x.set(r[b+6],r[b+7],r[b+8]),M.set(o[T+0],o[T+1]),w.set(o[T+2],o[T+3]),E.set(o[T+4],o[T+5]),A.copy(y).add(_).add(x).divideScalar(3);let R=g(A);v(M,T+0,y,R),v(w,T+2,_,R),v(E,T+4,x,R)}}function v(y,_,x,A){A<0&&y.x===1&&(o[_]=y.x-1),x.x===0&&x.z===0&&(o[_]=A/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var Ti=class extends Ur{constructor(e){super(e),this.uuid=yn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Ur().fromJSON(s))}return this}},mv={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=ef(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,h,f,d;if(n&&(r=vv(i,e,r,t)),i.length>80*t){a=l=i[0],c=u=i[1];for(let m=t;m<s;m+=t)h=i[m],f=i[m+1],h<a&&(a=h),f<c&&(c=f),h>l&&(l=h),f>u&&(u=f);d=Math.max(l-a,u-c),d=d!==0?32767/d:0}return Nr(r,o,t,a,c,d,0),o}};function ef(i,e,t,n,s){let r,o;if(s===Pv(i,e,t,n)>0)for(r=e;r<t;r+=n)o=Ed(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=Ed(r,i[r],i[r+1],o);return o&&Ma(o,o.next)&&(Fr(o),o=o.next),o}function Ki(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ma(t,t.next)||Mt(t.prev,t,t.next)===0)){if(Fr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Nr(i,e,t,n,s,r,o){if(!i)return;!o&&r&&wv(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?xv(i,n,s,r):gv(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),Fr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=_v(Ki(i),e,t),Nr(i,e,t,n,s,r,2)):o===2&&yv(i,e,t,n,s,r):Nr(Ki(i),e,t,n,s,r,1);break}}}function gv(i){let e=i.prev,t=i,n=i.next;if(Mt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,u=s<r?s<o?s:o:r<o?r:o,h=a<c?a<l?a:l:c<l?c:l,f=s>r?s>o?s:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l,m=n.next;for(;m!==e;){if(m.x>=u&&m.x<=f&&m.y>=h&&m.y<=d&&As(s,a,r,c,o,l,m.x,m.y)&&Mt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function xv(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Mt(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,u=s.y,h=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,m=u<h?u<f?u:f:h<f?h:f,v=a>c?a>l?a:l:c>l?c:l,g=u>h?u>f?u:f:h>f?h:f,p=Cl(d,m,e,t,n),y=Cl(v,g,e,t,n),_=i.prevZ,x=i.nextZ;for(;_&&_.z>=p&&x&&x.z<=y;){if(_.x>=d&&_.x<=v&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&As(a,u,c,h,l,f,_.x,_.y)&&Mt(_.prev,_,_.next)>=0||(_=_.prevZ,x.x>=d&&x.x<=v&&x.y>=m&&x.y<=g&&x!==s&&x!==o&&As(a,u,c,h,l,f,x.x,x.y)&&Mt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;_&&_.z>=p;){if(_.x>=d&&_.x<=v&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&As(a,u,c,h,l,f,_.x,_.y)&&Mt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;x&&x.z<=y;){if(x.x>=d&&x.x<=v&&x.y>=m&&x.y<=g&&x!==s&&x!==o&&As(a,u,c,h,l,f,x.x,x.y)&&Mt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function _v(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!Ma(s,r)&&tf(s,n,n.next,r)&&Or(s,r)&&Or(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Fr(n),Fr(n.next),n=i=r),n=n.next}while(n!==i);return Ki(n)}function yv(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Rv(o,a)){let c=nf(o,a);o=Ki(o,o.next),c=Ki(c,c.next),Nr(o,e,t,n,s,r,0),Nr(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function vv(i,e,t,n){let s=[],r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=ef(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(Av(l));for(s.sort(Mv),r=0;r<s.length;r++)t=bv(s[r],t);return t}function Mv(i,e){return i.x-e.x}function bv(i,e){let t=Sv(i,e);if(!t)return e;let n=nf(t,i);return Ki(n,n.next),Ki(t,t.next)}function Sv(i,e){let t=e,n=-1/0,s,r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,c=s.x,l=s.y,u=1/0,h;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&As(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),Or(t,i)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&Tv(s,t)))&&(s=t,u=h)),t=t.next;while(t!==a);return s}function Tv(i,e){return Mt(i.prev,i,e.prev)<0&&Mt(e.next,i,i.next)<0}function wv(i,e,t,n){let s=i;do s.z===0&&(s.z=Cl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Ev(s)}function Ev(i){let e,t,n,s,r,o,a,c,l=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,l*=2}while(o>1);return i}function Cl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Av(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function As(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Rv(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Cv(i,e)&&(Or(i,e)&&Or(e,i)&&Iv(i,e)&&(Mt(i.prev,i,e.prev)||Mt(i,e.prev,e))||Ma(i,e)&&Mt(i.prev,i,i.next)>0&&Mt(e.prev,e,e.next)>0)}function Mt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ma(i,e){return i.x===e.x&&i.y===e.y}function tf(i,e,t,n){let s=Co(Mt(i,e,t)),r=Co(Mt(i,e,n)),o=Co(Mt(t,n,i)),a=Co(Mt(t,n,e));return!!(s!==r&&o!==a||s===0&&Ro(i,t,e)||r===0&&Ro(i,n,e)||o===0&&Ro(t,i,n)||a===0&&Ro(t,e,n))}function Ro(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Co(i){return i>0?1:i<0?-1:0}function Cv(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&tf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Or(i,e){return Mt(i.prev,i,i.next)<0?Mt(i,e,i.next)>=0&&Mt(i,i.prev,e)>=0:Mt(i,e,i.prev)<0||Mt(i,i.next,e)<0}function Iv(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function nf(i,e){let t=new Il(i.i,i.x,i.y),n=new Il(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Ed(i,e,t,n){let s=new Il(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Fr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Il(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Pv(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Si=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Ad(e),Rd(n,e);let o=e.length;t.forEach(Ad);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Rd(n,t[c]);let a=mv.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Ad(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Rd(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var oa=class i extends ht{constructor(e=new Ti([new xe(.5,.5),new xe(-.5,.5),new xe(-.5,-.5),new xe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new Ze(s,3)),this.setAttribute("uv",new Ze(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Lv,_,x=!1,A,M,w,E;p&&(_=p.getSpacedPoints(u),x=!0,f=!1,A=p.computeFrenetFrames(u,!1),M=new O,w=new O,E=new O),f||(g=0,d=0,m=0,v=0);let b=a.extractPoints(l),T=b.shape,R=b.holes;if(!Si.isClockWise(T)){T=T.reverse();for(let ie=0,Z=R.length;ie<Z;ie++){let L=R[ie];Si.isClockWise(L)&&(R[ie]=L.reverse())}}let G=Si.triangulateShape(T,R),N=T;for(let ie=0,Z=R.length;ie<Z;ie++){let L=R[ie];T=T.concat(L)}function P(ie,Z,L){return Z||console.error("THREE.ExtrudeGeometry: vec does not exist"),ie.clone().addScaledVector(Z,L)}let D=T.length,B=G.length;function U(ie,Z,L){let pe,re,H,q=ie.x-Z.x,ne=ie.y-Z.y,Q=L.x-ie.x,I=L.y-ie.y,S=q*q+ne*ne,k=q*I-ne*Q;if(Math.abs(k)>Number.EPSILON){let ee=Math.sqrt(S),F=Math.sqrt(Q*Q+I*I),W=Z.x-ne/ee,ce=Z.y+q/ee,ue=L.x-I/F,Se=L.y+Q/F,Ve=((ue-W)*I-(Se-ce)*Q)/(q*I-ne*Q);pe=W+q*Ve-ie.x,re=ce+ne*Ve-ie.y;let me=pe*pe+re*re;if(me<=2)return new xe(pe,re);H=Math.sqrt(me/2)}else{let ee=!1;q>Number.EPSILON?Q>Number.EPSILON&&(ee=!0):q<-Number.EPSILON?Q<-Number.EPSILON&&(ee=!0):Math.sign(ne)===Math.sign(I)&&(ee=!0),ee?(pe=-ne,re=q,H=Math.sqrt(S)):(pe=q,re=ne,H=Math.sqrt(S/2))}return new xe(pe/H,re/H)}let z=[];for(let ie=0,Z=N.length,L=Z-1,pe=ie+1;ie<Z;ie++,L++,pe++)L===Z&&(L=0),pe===Z&&(pe=0),z[ie]=U(N[ie],N[L],N[pe]);let oe=[],de,Me=z.concat();for(let ie=0,Z=R.length;ie<Z;ie++){let L=R[ie];de=[];for(let pe=0,re=L.length,H=re-1,q=pe+1;pe<re;pe++,H++,q++)H===re&&(H=0),q===re&&(q=0),de[pe]=U(L[pe],L[H],L[q]);oe.push(de),Me=Me.concat(de)}for(let ie=0;ie<g;ie++){let Z=ie/g,L=d*Math.cos(Z*Math.PI/2),pe=m*Math.sin(Z*Math.PI/2)+v;for(let re=0,H=N.length;re<H;re++){let q=P(N[re],z[re],pe);j(q.x,q.y,-L)}for(let re=0,H=R.length;re<H;re++){let q=R[re];de=oe[re];for(let ne=0,Q=q.length;ne<Q;ne++){let I=P(q[ne],de[ne],pe);j(I.x,I.y,-L)}}}let Re=m+v;for(let ie=0;ie<D;ie++){let Z=f?P(T[ie],Me[ie],Re):T[ie];x?(w.copy(A.normals[0]).multiplyScalar(Z.x),M.copy(A.binormals[0]).multiplyScalar(Z.y),E.copy(_[0]).add(w).add(M),j(E.x,E.y,E.z)):j(Z.x,Z.y,0)}for(let ie=1;ie<=u;ie++)for(let Z=0;Z<D;Z++){let L=f?P(T[Z],Me[Z],Re):T[Z];x?(w.copy(A.normals[ie]).multiplyScalar(L.x),M.copy(A.binormals[ie]).multiplyScalar(L.y),E.copy(_[ie]).add(w).add(M),j(E.x,E.y,E.z)):j(L.x,L.y,h/u*ie)}for(let ie=g-1;ie>=0;ie--){let Z=ie/g,L=d*Math.cos(Z*Math.PI/2),pe=m*Math.sin(Z*Math.PI/2)+v;for(let re=0,H=N.length;re<H;re++){let q=P(N[re],z[re],pe);j(q.x,q.y,h+L)}for(let re=0,H=R.length;re<H;re++){let q=R[re];de=oe[re];for(let ne=0,Q=q.length;ne<Q;ne++){let I=P(q[ne],de[ne],pe);x?j(I.x,I.y+_[u-1].y,_[u-1].x+L):j(I.x,I.y,h+L)}}}te(),le();function te(){let ie=s.length/3;if(f){let Z=0,L=D*Z;for(let pe=0;pe<B;pe++){let re=G[pe];he(re[2]+L,re[1]+L,re[0]+L)}Z=u+g*2,L=D*Z;for(let pe=0;pe<B;pe++){let re=G[pe];he(re[0]+L,re[1]+L,re[2]+L)}}else{for(let Z=0;Z<B;Z++){let L=G[Z];he(L[2],L[1],L[0])}for(let Z=0;Z<B;Z++){let L=G[Z];he(L[0]+D*u,L[1]+D*u,L[2]+D*u)}}n.addGroup(ie,s.length/3-ie,0)}function le(){let ie=s.length/3,Z=0;be(N,Z),Z+=N.length;for(let L=0,pe=R.length;L<pe;L++){let re=R[L];be(re,Z),Z+=re.length}n.addGroup(ie,s.length/3-ie,1)}function be(ie,Z){let L=ie.length;for(;--L>=0;){let pe=L,re=L-1;re<0&&(re=ie.length-1);for(let H=0,q=u+g*2;H<q;H++){let ne=D*H,Q=D*(H+1),I=Z+pe+ne,S=Z+re+ne,k=Z+re+Q,ee=Z+pe+Q;ye(I,S,k,ee)}}}function j(ie,Z,L){c.push(ie),c.push(Z),c.push(L)}function he(ie,Z,L){ge(ie),ge(Z),ge(L);let pe=s.length/3,re=y.generateTopUV(n,s,pe-3,pe-2,pe-1);Pe(re[0]),Pe(re[1]),Pe(re[2])}function ye(ie,Z,L,pe){ge(ie),ge(Z),ge(pe),ge(Z),ge(L),ge(pe);let re=s.length/3,H=y.generateSideWallUV(n,s,re-6,re-3,re-2,re-1);Pe(H[0]),Pe(H[1]),Pe(H[3]),Pe(H[1]),Pe(H[2]),Pe(H[3])}function ge(ie){s.push(c[ie*3+0]),s.push(c[ie*3+1]),s.push(c[ie*3+2])}function Pe(ie){r.push(ie.x),r.push(ie.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Dv(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new wl[s.type]().fromJSON(s)),new i(n,e.options)}},Lv={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],u=e[s*3+1];return[new xe(r,o),new xe(a,c),new xe(l,u)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[s*3],d=e[s*3+1],m=e[s*3+2],v=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new xe(o,1-c),new xe(l,1-h),new xe(f,1-m),new xe(v,1-p)]:[new xe(a,1-c),new xe(u,1-h),new xe(d,1-m),new xe(g,1-p)]}};function Dv(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var aa=class i extends Rl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var ca=class i extends ht{constructor(e=new Ti([new xe(0,.5),new xe(-.5,-.5),new xe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Ze(s,3)),this.setAttribute("normal",new Ze(r,3)),this.setAttribute("uv",new Ze(o,2));function l(u){let h=s.length/3,f=u.extractPoints(t),d=f.shape,m=f.holes;Si.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,p=m.length;g<p;g++){let y=m[g];Si.isClockWise(y)===!0&&(m[g]=y.reverse())}let v=Si.triangulateShape(d,m);for(let g=0,p=m.length;g<p;g++){let y=m[g];d=d.concat(y)}for(let g=0,p=d.length;g<p;g++){let y=d[g];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let g=0,p=v.length;g<p;g++){let y=v[g],_=y[0]+h,x=y[1]+h,A=y[2]+h;n.push(_,x,A),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Uv(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function Uv(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var wi=class i extends ht{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,u=[],h=new O,f=new O,d=[],m=[],v=[],g=[];for(let p=0;p<=n;p++){let y=[],_=p/n,x=0;p===0&&o===0?x=.5/t:p===n&&c===Math.PI&&(x=-.5/t);for(let A=0;A<=t;A++){let M=A/t;h.x=-e*Math.cos(s+M*r)*Math.sin(o+_*a),h.y=e*Math.cos(o+_*a),h.z=e*Math.sin(s+M*r)*Math.sin(o+_*a),m.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),g.push(M+x,1-_),y.push(l++)}u.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){let _=u[p][y+1],x=u[p][y],A=u[p+1][y],M=u[p+1][y+1];(p!==0||o>0)&&d.push(_,x,M),(p!==n-1||c<Math.PI)&&d.push(x,A,M)}this.setIndex(d),this.setAttribute("position",new Ze(m,3)),this.setAttribute("normal",new Ze(v,3)),this.setAttribute("uv",new Ze(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var $s=class extends jt{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_a,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},dn=class extends $s{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var kr=class extends jt{static get type(){return"MeshToonMaterial"}constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new Ie(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_a,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Kt=class extends jt{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_a,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=Gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Io(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Nv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ov(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Cd(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function sf(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var Ei=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Pl=class extends Ei{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ts,endingEnd:Ts}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ws:r=e,a=2*t-n;break;case Fo:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ws:o=e,c=2*n-t;break;case Fo:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-t)/(s-t),v=m*m,g=v*m,p=-f*g+2*f*v-f*m,y=(1+f)*g+(-1.5-2*f)*v+(-.5+f)*m+1,_=(-1-d)*g+(1.5+d)*v+.5*m,x=d*g-d*v;for(let A=0;A!==a;++A)r[A]=p*o[u+A]+y*o[l+A]+_*o[c+A]+x*o[h+A];return r}},la=class extends Ei{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[l+f]*h+o[c+f]*u;return r}},Ll=class extends Ei{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Sn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Io(t,this.TimeBufferType),this.values=Io(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Io(e.times,Array),values:Io(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ll(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new la(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Pl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Fs:t=this.InterpolantFactoryMethodDiscrete;break;case ks:t=this.InterpolantFactoryMethodLinear;break;case ka:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fs;case this.InterpolantFactoryMethodLinear:return ks;case this.InterpolantFactoryMethodSmooth:return ka}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&Nv(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ka,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(s)c=!0;else{let h=a*n,f=h-n,d=h+n;for(let m=0;m!==n;++m){let v=t[h+m];if(v!==t[f+m]||v!==t[d+m]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=ks;var Ai=class extends Sn{constructor(e,t,n){super(e,t,n)}};Ai.prototype.ValueTypeName="bool";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=Fs;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var ua=class extends Sn{};ua.prototype.ValueTypeName="color";var si=class extends Sn{};si.prototype.ValueTypeName="number";var Dl=class extends Ei{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let u=l+a;l!==u;l+=4)Xt.slerpFlat(r,0,o,l-a,o,l,c);return r}},ri=class extends Sn{InterpolantFactoryMethodLinear(e){return new Dl(this.times,this.values,this.getValueSize(),e)}};ri.prototype.ValueTypeName="quaternion";ri.prototype.InterpolantFactoryMethodSmooth=void 0;var Ri=class extends Sn{constructor(e,t,n){super(e,t,n)}};Ri.prototype.ValueTypeName="string";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=Fs;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var oi=class extends Sn{};oi.prototype.ValueTypeName="vector";var Zs=class{constructor(e="",t=-1,n=[],s=Ql){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=yn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(kv(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Sn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let u=Ov(c);c=Cd(c,1,u),l=Cd(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new si(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],u=l.name.match(r);if(u&&u.length>1){let h=u[1],f=s[h];f||(s[h]=f=[]),f.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,f,d,m,v){if(d.length!==0){let g=[],p=[];sf(d,g,p,m),g.length!==0&&v.push(new h(f,g,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let h=0;h<l.length;h++){let f=l[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},m;for(m=0;m<f.length;m++)if(f[m].morphTargets)for(let v=0;v<f[m].morphTargets.length;v++)d[f[m].morphTargets[v]]=-1;for(let v in d){let g=[],p=[];for(let y=0;y!==f[m].morphTargets.length;++y){let _=f[m];g.push(_.time),p.push(_.morphTarget===v?1:0)}s.push(new si(".morphTargetInfluence["+v+"]",g,p))}c=d.length*o}else{let d=".bones["+t[h].name+"]";n(oi,d+".position",f,"pos",s),n(ri,d+".quaternion",f,"rot",s),n(oi,d+".scale",f,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Fv(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return si;case"vector":case"vector2":case"vector3":case"vector4":return oi;case"color":return ua;case"quaternion":return ri;case"bool":case"boolean":return Ai;case"string":return Ri}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function kv(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Fv(i.type);if(i.times===void 0){let t=[],n=[];sf(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var vi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Ul=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){let d=l[h],m=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null}}},Bv=new Ul,ai=class{constructor(e){this.manager=e!==void 0?e:Bv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ai.DEFAULT_MATERIAL_NAME="__DEFAULT";var Zn={},Nl=class extends Error{constructor(e,t){super(e),this.response=t}},Br=class extends ai{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=vi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Zn[e]!==void 0){Zn[e].push({onLoad:t,onProgress:n,onError:s});return}Zn[e]=[],Zn[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=Zn[e],h=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,m=d!==0,v=0,g=new ReadableStream({start(p){y();function y(){h.read().then(({done:_,value:x})=>{if(_)p.close();else{v+=x.byteLength;let A=new ProgressEvent("progress",{lengthComputable:m,loaded:v,total:d});for(let M=0,w=u.length;M<w;M++){let E=u[M];E.onProgress&&E.onProgress(A)}p.enqueue(x),y()}},_=>{p.error(_)})}}});return new Response(g)}else throw new Nl(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(m=>d.decode(m))}}}).then(l=>{vi.add(e,l);let u=Zn[e];delete Zn[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onLoad&&d.onLoad(l)}}).catch(l=>{let u=Zn[e];if(u===void 0)throw this.manager.itemError(e),l;delete Zn[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Ol=class extends ai{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=vi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Er("img");function c(){u(),vi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var ha=class extends ai{constructor(e){super(e)}load(e,t,n,s){let r=new Ft,o=new Ol(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},js=class extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Ks=class extends js{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},xc=new ke,Id=new O,Pd=new O,zr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ar,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Id.setFromMatrixPosition(e.matrixWorld),t.position.copy(Id),Pd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Pd),t.updateMatrixWorld(),xc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Fl=class extends zr{constructor(){super(new wt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Bs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},da=class extends js{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Fl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ld=new ke,mr=new O,_c=new O,kl=class extends zr{constructor(){super(new wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new xe(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),mr.setFromMatrixPosition(e.matrixWorld),n.position.copy(mr),_c.copy(n.position),_c.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(_c),n.updateMatrixWorld(),s.makeTranslation(-mr.x,-mr.y,-mr.z),Ld.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ld)}},fa=class extends js{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new kl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Bl=class extends zr{constructor(){super(new Vs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ci=class extends js{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new Bl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Ii=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var pa=class extends ai{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=vi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return vi.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),vi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});vi.add(e,c),r.manager.itemStart(e)}};var zl=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,s,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){Xt.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let o=this._workIndex*r;Xt.multiplyQuaternionsFlat(e,o,e,t,e,n),Xt.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){let o=1-s;for(let a=0;a!==r;++a){let c=t+a;e[c]=e[c]*o+e[n+a]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*s}}},iu="\\[\\]\\.:\\/",zv=new RegExp("["+iu+"]","g"),su="[^"+iu+"]",Hv="[^"+iu.replace("\\.","")+"]",Vv=/((?:WC+[\/:])*)/.source.replace("WC",su),Gv=/(WCOD+)?/.source.replace("WCOD",Hv),Wv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",su),Xv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",su),qv=new RegExp("^"+Vv+Gv+Wv+Xv+"$"),Yv=["material","materials","bones","map"],Hl=class{constructor(e,t,n){let s=n||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ut=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(zv,"")}static parseTrackName(e){let t=qv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Yv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ut.Composite=Hl;ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray];ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Vl=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,o=r.length,a=new Array(o),c={endingStart:Ts,endingEnd:Ts};for(let l=0;l!==o;++l){let u=r[l].createInterpolant(null);a[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Dm,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);let c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Nm:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulateAdditive(a);break;case Ql:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,o=n===Um;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===Jl){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){let a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=ws,s.endingEnd=ws):(e?s.endingStart=this.zeroSlopeAtStart?ws:Ts:s.endingStart=Fo,t?s.endingEnd=this.zeroSlopeAtEnd?ws:Ts:s.endingEnd=Fo)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=n,this}},$v=new Float32Array(1),ma=class extends ni{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==r;++h){let f=s[h],d=f.name,m=u[d];if(m!==void 0)++m.referenceCount,o[h]=m;else{if(m=o[h],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,d));continue}let v=t&&t._propertyBindings[h].binding.parsedPath;m=new zl(ut.create(n,d,v),f.ValueTypeName,f.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,d),o[h]=m}a[h].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],u=e._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),e._byClipCacheIndex=null;let h=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete h[f],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new la(new Float32Array(2),new Float32Array(2),1,$v),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,o=typeof e=="string"?Zs.findByName(s,e):e,a=o!==null?o.uuid:e,c=this._actionsByClip[a],l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Ql),c!==void 0){let h=c.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;let u=new Vl(this,o,t,n);return this._bindAction(u,l),this._addInactiveAction(u,a,r),u}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?Zs.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(s,e,r,o);let a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){let l=o[a];this._deactivateAction(l);let u=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var fn={tickHz:60,maxTicksPerFrame:5},ba={tableStep:1,splineSubdiv:32,lapLenMin:280,lapLenMax:350,widthMin:8,widthMax:10,racingLineMargin:.5,roundTripTol:.05,nearestSearchWindow:25},Tt={baseTopSpeed:9,topSpeedPerStat:.02,baseAccelTime:1.6,accelTimePerStat:.2,turnRateDeg:110,headingLimitDeg:50,headingReturnDeg:70,jumpHeight:.9,jumpAirTime:.55,wallSpeedLoss:.15,wallCooldown:.4,bodyRadius:.45},rt={back:4.5,height:2.2,lookAhead:6,fov:60,fovBoost:76,lag:.12,lookHeight:.8,sideFollow:.5,downDrop:.6,downDropLag:.15,shakeTime:.2,shakeAmp:.12,shakeFreq:38,fovInLag:.07,fovOutLag:.45,boostFade:.4,padStrength:.8,boostBack:.9,boostDrop:.35,boostShakeTime:.25,boostShakeAmp:.09,near:.1,far:400},ae={maxPixelRatio:2,lowPixelRatio:1.5,stripeEvery:5,edgeBand:.6,wallHeight:.6,capsuleRadius:.32,capsuleLength:.66,idColors:["#E5484D","#F28C28","#F5C518","#3BA55C","#12A4A8","#3E63DD","#8E4EC6","#E2559D"],charBodyColors:{daon:"#4b5878",sora:"#c9cbd2",default:"#8a8f9c"},charScale:.68,glbDir:"./assets/glb/",animCrossfade:.12,upperFade:.08,runGroundSpeed:2.86,runRateMin:.5,runRateMax:1.9,idleSpeed:.3,toon:{shadow:.62,light:1,rimColor:"#ffffff",rimPower:3,rimStrength:.28,faceAlphaTest:.5},faceBlinkMin:2.5,faceBlinkMax:5,faceBlinkTime:.12,drinkShowTime:.7,glbBandRadius:.245,glbBandHeight:.07,glbBandOffsetY:-.19,glbPlateSize:.17,glbPlateOffsetY:0,glbPlateOffsetZ:-.035,vestNumberLift:.004,propScale:.68,obstacleWidthScale:{hurdle:1.4},boxGlbFit:!0,headbandY:1.12,overheadY:1.55,shadowRadius:.42,shadowOpacity:.22,respawnBlinkHz:8,boxSize:.8,boxHover:.7,boxSpin:1.6,boxBob:.12,projectileRadius:.18,maxProjectiles:48,starsPerRunner:3,starsStunned:6,starHeadLift:.12,starStunScale:1.6,starStunOrbitMul:1.4,starOrbitR:.35,starOrbitSpeed:5,starSize:.12,splashParticles:14,splashPool:96,splashLife:.45,splashSpeed:3.2,speedLines:110,speedLineLen:2.4,speedLineSpeed:40,speedLineAlphaBoost:.85,boostTrailLen:2.6,boostTrailAlpha:.45,boostTrailColor:"#ffffff",speedLineAlphaDraft:.22,propHurdleH:.55,propHurdleW:2,propPoleH:2.6,propBarH:.9,padLen:4,padW:2,propColors:{hurdle:"#d9d2c0",hurdleBar:"#c96a5a",pole:"#d0b070",bar:"#7f93b8",roller:"#a8865c",boost:"#e8b04a",jump:"#6fa2c8",mud:"#7d6048",water:"#7fa9c2",other:"#9a9a9a",box:"#f0c75a",boxEdge:"#ffffff",water_shot:"#6fc3ff",projectile:"#e0e0e0",star:"#ffd84a",splash:"#9fd8ff"}},li={drawCalls:150,triangles:15e4,fpsLow:45,fpsWindow:3,fpsWarmup:2,lowFps:30},Qe={steerRadius:60,steerDeadzone:6,buttonSize:80,buttonSizeMain:92,buttonArcInset:64,buttonSizeItem:96,buttonArcRadius:106,buttonArcDeg:{slide:8,use:78},nameDist:22,minimapSize:132,countdownGoTime:.8,m0CountdownSec:3,hpWarn:.6,hpDanger:.3,hpFlashTime:.35,hintTime:3,iconSize:64,nickMax:12,defaultNick:"\uD50C\uB808\uC774\uC5B4",netToastMs:3500,netConnectTimeoutMs:15e3,qrPx:4},Dt={slideTime:.6,slideInvuln:.3,slideCooldown:.3,slideSteerMul:.5,overSpeedDecel:14,offroadCap:.6,shoulder:2,respawnTime:1.5,pushPerPower:.1,pushRate:.5,dashSpeedRatio:.3},Ut={staggerMin:.3,staggerMax:.6,staggerSlow:.4,downTime:1.2,downPerTough:.15,downDecel:25,getUpTime:1,slipTime:1,slipHeadingDeg:30,slipSpeedMul:.85},Gr={boostMul:.3,boostTime:1.2,jumpPadLen:2,zoneCap:{mud:.6,water:.7,offroad:.6}},sn={bodyHalf:.3,hurdle:{halfW:.8,clearH:.45,slideUnder:!1,result:"Stagger",dur:.5,speedMul:.7},gourdPole:{halfW:.35,clearH:null,slideUnder:!1,result:"Stagger",dur:.6,speedMul:.3},bar:{halfW:1.5,clearH:null,slideUnder:!0,result:"Stagger",dur:.6,speedMul:.5},roller:{halfW:.8,clearH:.6,slideUnder:!1,result:"Down",dur:0,speedMul:0}},ot={boxRespawn:.5,boxPickRadius:.9,boxMaxH:1,boxSpacing:1.7,boxEdgeMargin:.8,rerollOccupied:!1,targetRadius:.35,bat:{windup:.18,swingTime:.45,range:1.8,halfArcDeg:60,maxDh:1},watergun:{speed:24,range:20,radius:.4,interval:.2,shootTime:.25,stagger:.6,muzzle:.5,h:.8},drink:{boost:.35,time:3}},He={lookAhead:6,obstacleLook:10,steerGainDeg:12,edgeMargin:.7,errResample:1.5,errFollow:2,passLook:4,passOffset:1.3,solidClear:1.2,zoneMargin:.7,boxLook:14,boxSeekD:3,chaseLook:7,chaseD:3,meleeRange:2,rangedRange:15,rangedD:1,reuseMul:.5,dodgeRange:2.4,jumpLead:.25,errJitterMin:.6,errJitterMax:1.4,passSpeedDiff:.2,hurdleSideMargin:.3,slideLeadTime:.15,minTargetDs:.3,rangedMinDs:.5,boxMinDs:1,bandDist:30,bandMax:.08,levels:{easy:{speed:.88,err:1.2,delay:1.5,defense:.2,gear:0,hurdleMiss:.25},normal:{speed:.95,err:.6,delay:.8,defense:.5,gear:1,hurdleMiss:.1},hard:{speed:1,err:.3,delay:.4,defense:.8,gear:2,hurdleMiss:.03}}},Jt={countdownSec:3,gridCols:4,gridColGap:1.8,gridRowGap:2.5,gridFirstRow:1.5,finishJogSpeed:3,dnfTime:30,maxTime:300},kt={model:"hp",hp:{speedPerStat:.11,accelTimePerStat:.25,hpBase:100,hpPerTough:35,regenBase:.8,regenPerRec:.3,dmg:{bat:70,watergun:24,hurdle:6,gourdPole:10,bar:8,roller:30},dmgPerPower:.15,knockdownTime:1,stunTime:2,downPerRec:.1,woundSlow:.12,woundSlowPerTough:.05,woundSlowMin:.05,stunRestore:.7,bumpSlowPerPower:.05,bumpDmgPerPower:1,bumpCooldown:.6,drinkHeal:20,dashSpeedRatio:.5,draftBonus:.05,draftMin:1,draftMax:9,draftHalfW:1.5}},Be={protocol:1,workerUrl:"https://nanjang-rush-relay.kimsudae.workers.dev",relayParam:"relay",roomParam:"room",stunUrls:["stun:stun.l.google.com:19302","stun:stun.cloudflare.com:3478"],maxPlayers:8,p2pTimeoutMs:5e3,hostLostGraceMs:2e3,hostPathGraceMs:3e3,keepAliveMs:3e4,relayFrameMax:4096,uBufferMax:16384,inputHz:30,snapshotHz:15,relayInputHz:20,relaySnapshotHz:10,statusHz:2,inputRedundancy:3,inputRateMax:60,inputQueueMax:4,q:{s:.02,d:.05,h:.02,speed:.1,headingDeg:.5},snapDist:.5,smoothTime:.1,hAdoptDiff:.3,interpDelayMs:100,extrapolateMs:250,snapshotKeepMs:1e3,timelineGain:.1,timelineResetMs:250,histTicks:128,pingCount:5,pingIntervalMs:200,startLeadMs:1500,aiTakeoverLevel:"normal"};function ru(i,e,t,n,s){let r=s*s,o=r*s;return .5*(2*e+(-i+t)*s+(2*i-5*e+4*t-n)*r+(-i+3*e-3*t+n)*o)}function rf(i){let e=i.centerline;if(!Array.isArray(e)||e.length<4)throw new Error(`track ${i.id}: centerline needs >= 4 points`);let t=e.length,n=ba.splineSubdiv,s=t*n,r=new Float64Array(s),o=new Float64Array(s),a=new Float64Array(s),c=new Float64Array(s),l=new Float64Array(s);for(let P=0;P<t;P++){let D=e[(P-1+t)%t],B=e[P],U=e[(P+1)%t],z=e[(P+2)%t];for(let oe=0;oe<n;oe++){let de=oe/n,Me=P*n+oe;r[Me]=ru(D.p[0],B.p[0],U.p[0],z.p[0],de),o[Me]=ru(D.p[1],B.p[1],U.p[1],z.p[1],de),a[Me]=ru(D.p[2],B.p[2],U.p[2],z.p[2],de),c[Me]=B.w+(U.w-B.w)*de,l[Me]=(B.bank||0)+((U.bank||0)-(B.bank||0))*de}}let u=new Float64Array(s+1);for(let P=0;P<s;P++){let D=(P+1)%s;u[P+1]=u[P]+Math.hypot(r[D]-r[P],o[D]-o[P],a[D]-a[P])}let h=u[s],f=Math.max(8,Math.round(h/ba.tableStep)),d=h/f,m=new Float64Array(f*3),v=new Float64Array(f*3),g=new Float64Array(f*3),p=new Float64Array(f*3),y=new Float64Array(f),_=0;for(let P=0;P<f;P++){let D=P*d;for(;u[_+1]<D;)_++;let B=(_+1)%s,U=(D-u[_])/(u[_+1]-u[_]||1);m[P*3]=r[_]+(r[B]-r[_])*U,m[P*3+1]=o[_]+(o[B]-o[_])*U,m[P*3+2]=a[_]+(a[B]-a[_])*U,y[P]=c[_]+(c[B]-c[_])*U,p[P*3+1]=l[_]+(l[B]-l[_])*U}for(let P=0;P<f;P++){let D=(P-1+f)%f*3,B=(P+1)%f*3,U=m[B]-m[D],z=m[B+1]-m[D+1],oe=m[B+2]-m[D+2],de=Math.hypot(U,z,oe)||1;U/=de,z/=de,oe/=de,v[P*3]=U,v[P*3+1]=z,v[P*3+2]=oe;let Me=-oe,Re=U,te=Math.hypot(Me,Re)||1;Me/=te,Re/=te;let le=p[P*3+1],be=Math.cos(le),j=Math.sin(le);g[P*3]=Me*be,g[P*3+1]=j,g[P*3+2]=Re*be;let he=[g[P*3],g[P*3+1],g[P*3+2]];p[P*3]=he[1]*oe-he[2]*z,p[P*3+1]=he[2]*U-he[0]*oe,p[P*3+2]=he[0]*z-he[1]*U}let x=P=>(P%h+h)%h;function A(P){let D=x(P)/d,B=Math.floor(D)%f,U=(B+1)%f,z=D-Math.floor(D);return{j:B,k:U,f:z}}let M=(P,D,B,U,z)=>(z[0]=P[D*3]+(P[B*3]-P[D*3])*U,z[1]=P[D*3+1]+(P[B*3+1]-P[D*3+1])*U,z[2]=P[D*3+2]+(P[B*3+2]-P[D*3+2])*U,z);function w(P,D={}){let{j:B,k:U,f:z}=A(P);return D.p=M(m,B,U,z,D.p||[0,0,0]),D.t=M(v,B,U,z,D.t||[0,0,0]),D.r=M(g,B,U,z,D.r||[0,0,0]),D.u=M(p,B,U,z,D.u||[0,0,0]),D.w=y[B]+(y[U]-y[B])*z,D}let E={};function b(P,D,B=0,U=[0,0,0]){let z=w(P,E);return U[0]=z.p[0]+z.r[0]*D+z.u[0]*B,U[1]=z.p[1]+z.r[1]*D+z.u[1]*B,U[2]=z.p[2]+z.r[2]*D+z.u[2]*B,U}function T(P,D,B){let U=-1,z=1/0,oe=de=>{let Me=m[de*3]-P,Re=m[de*3+2]-D,te=Me*Me+Re*Re;te<z&&(z=te,U=de)};if(B===void 0)for(let de=0;de<f;de++)oe(de);else{let de=Math.round(x(B)/d),Me=Math.ceil(ba.nearestSearchWindow/d);for(let Re=-Me;Re<=Me;Re++)oe(((de+Re)%f+f)%f)}return U}let R=[0,0,0],V=[0,0,0];function G(P,D,B,U){let z=T(P,B,U)*d,oe=0,de=0;for(let Me=0;Me<8;Me++){let Re=w(z,E),te=P-Re.p[0],le=D-Re.p[1],be=B-Re.p[2];oe=te*Re.r[0]+le*Re.r[1]+be*Re.r[2],de=te*Re.u[0]+le*Re.u[1]+be*Re.u[2];let j=d*.25;b(z+j,oe,de,R),b(z-j,oe,de,V);let he=(R[0]-V[0])/(2*j),ye=(R[1]-V[1])/(2*j),ge=(R[2]-V[2])/(2*j);b(z,oe,de,R);let Pe=he*he+ye*ye+ge*ge||1,ie=((P-R[0])*he+(D-R[1])*ye+(B-R[2])*ge)/Pe;if(z=x(z+ie),Math.abs(ie)<1e-6)break}return{s:z,d:oe,h:de}}function N(P,D){let B=x(D)-x(P);return B>h/2&&(B-=h),B<-h/2&&(B+=h),B}return{id:i.id,world:i.world,laps:i.laps,json:i,length:h,step:d,N:f,pos:m,tan:v,right:g,up:p,width:y,wrapS:x,sample:w,toWorld:b,toTrack:G,deltaS:N,widthAt:P=>w(P,E).w}}function of(i){let e=i>>>0,t=()=>{e=e+1831565813>>>0;let n=e;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296};return{next:t,range:(n,s)=>n+(s-n)*t(),int:(n,s)=>n+Math.floor(t()*(s-n+1)),getState:()=>e,setState:n=>{e=n>>>0}}}var Nn={daon:{id:"daon",name:"\uAC15\uB2E4\uC628",job:"\uC785\uC0AC 3\uAC1C\uC6D4 \uC2E0\uC785",type:"\uBC38\uB7F0\uC2A4",stats:{speed:3,accel:3,power:3,tough:3},passive:{id:"quickRise",name:"\uCD9C\uADFC \uBCF8\uB2A5",desc:"\uAE30\uC0C1 \uC2DC\uAC04 -15%",downTimeMul:.85,implemented:!0}},wang:{id:"wang",name:"\uC655\uBD80\uC7A5",job:"\uC601\uC5C52\uD300 \uBD80\uC7A5",type:"\uD30C\uC6CC",stats:{speed:2,accel:2,power:5,tough:3},statsHp:{speed:3,accel:2,power:4,tough:3},passive:{id:"stamp",name:"\uACB0\uC7AC \uB3C4\uC7A5",desc:"\uADFC\uC811 \uB109\uBC31 +20%, \uBC29\uC5B4\uAD6C 25% \uD655\uB960 \uAD00\uD1B5",knockbackMul:1.2,pierceChance:.25,implemented:!1}},sora:{id:"sora",name:"\uD55C\uC18C\uB77C",job:"\uCCB4\uC721\uAD50\uC0AC, \uC804\uC9C1 \uC721\uC0C1",type:"\uC2A4\uD53C\uB4DC",stats:{speed:5,accel:3,power:2,tough:2},passive:{id:"startDash",name:"\uC2A4\uD0C0\uD2B8 \uB300\uC2DC",desc:"\uCD9C\uBC1C\xB7\uAE30\uC0C1 \uC9C1\uD6C4 1\uCD08\uAC04 \uCD5C\uACE0 \uC18D\uB3C4",dashTime:1,implemented:!0}},dusik:{id:"dusik",name:"\uC624\uB450\uC2DD",job:"\uD3B8\uC758\uC810 \uC57C\uAC04 \uC54C\uBC14",type:"\uC544\uC774\uD15C",stats:{speed:3,accel:4,power:2,tough:3},passive:{id:"onePlusOne",name:"1+1",desc:"\uC0C1\uC790\uC5D0\uC11C 20% \uD655\uB960\uB85C \uD558\uB098 \uB354",extraChance:.2,implemented:!1}},haru:{id:"haru",name:"\uC720\uD558\uB8E8",job:"\uC2E0\uC778 \uC544\uC774\uB3CC",type:"\uD68C\uD53C",stats:{speed:3,accel:5,power:1,tough:3},passive:{id:"cameraMove",name:"\uCE74\uBA54\uB77C \uBB34\uBE59",desc:"\uC2AC\uB77C\uC774\uB529 \uBB34\uC801 +0.2\uCD08",slideInvulnAdd:.2,implemented:!1}},deokbae:{id:"deokbae",name:"\uB9C8\uB355\uBC30",job:"\uD604\uC7A5 \uBC18\uC7A5",type:"\uB9F7\uC9D1",stats:{speed:2,accel:2,power:3,tough:5},passive:{id:"safetyFirst",name:"\uC548\uC804 \uC81C\uC77C",desc:"\uC548\uC804\uBAA8 \uC4F0\uACE0 \uCD9C\uBC1C, \uB118\uC5B4\uC9D0 \uACBD\uC9C1 -10%",startItem:"helmet",downTimeMul:.9,implemented:!1}},mio:{id:"mio",name:"\uBBF8\uC624",job:"\uAC8C\uC784 \uC2A4\uD2B8\uB9AC\uBA38",type:"\uC6D0\uAC70\uB9AC",stats:{speed:4,accel:3,power:2,tough:3},passive:{id:"aimAssist",name:"\uC5D0\uC784 \uBCF4\uC815",desc:"\uC6D0\uAC70\uB9AC \uD0C4\uC218 +1, \uBA85\uC911 \uD310\uC815 +15%",extraShots:1,hitRadiusMul:1.15,implemented:!1}},soonja:{id:"soonja",name:"\uC21C\uC790 \uC5EC\uC0AC",job:"\uC544\uCE68 \uC870\uAE45 6\uB144 \uCC28",type:"\uD2B8\uB9AD\uC2A4\uD130",stats:{speed:2,accel:4,power:2,tough:4},passive:{id:"basket",name:"\uC2DC\uC7A5\uBC14\uAD6C\uB2C8",desc:"\uC124\uCE58\uBB3C \uC9C0\uC18D +30%, \uBC14\uB2E5 \uD568\uC815 1\uD68C \uBB34\uC2DC",placeTimeMul:1.3,trapIgnore:1,implemented:!1}}},Db=Object.keys(Nn);var Nt={bat:{id:"bat",name:"\uC57C\uAD6C\uBC30\uD2B8",category:"melee",slot:"hand",uses:3,result:"Down",attackDir:"top",high:!0},watergun:{id:"watergun",name:"\uBB3C\uCD1D",category:"ranged",slot:"hand",uses:5,result:"Stagger",attackDir:"geom",high:!1},helmet:{id:"helmet",name:"\uC548\uC804\uBAA8",category:"defense",slot:"body",uses:1,block:["front","top"]},drink:{id:"drink",name:"\uC5D0\uB108\uC9C0 \uB4DC\uB9C1\uD06C",category:"move",slot:"instant",uses:0}},Qi=["melee","ranged","defense","place","move","flip"],Zv=[{maxRank:2,melee:15,ranged:10,defense:35,place:30,move:10,flip:0},{maxRank:5,melee:25,ranged:20,defense:15,place:15,move:20,flip:5},{maxRank:8,melee:15,ranged:15,defense:5,place:5,move:35,flip:25}],es={};for(let i of Qi)es[i]=[];for(let i of Object.values(Nt))es[i.category].push(i.id);var ou=Zv.map(i=>{let e={maxRank:i.maxRank},t=0;for(let n of Qi)es[n].length&&(t+=i[n]);for(let n of Qi)e[n]=es[n].length&&t>0?i[n]*100/t:0;return e});function af(i){for(let e of ou)if(i<=e.maxRank)return e;return ou[ou.length-1]}var Sa=Math.PI/180,Rt=()=>kt.model==="hp",Bt=kt.hp;function jv(i){return Tt.baseTopSpeed+(i.speed-3)*(Rt()?Bt.speedPerStat:Tt.topSpeedPerStat)}function Kv(i){return Tt.baseAccelTime-(i.accel-3)*(Rt()?Bt.accelTimePerStat:Tt.accelTimePerStat)}function lf(i){let e=1-(i.stats.accel-3)*Bt.downPerRec;return i.passive&&i.passive.downTimeMul&&(e*=i.passive.downTimeMul),e}function uf(i){if(Rt())return Bt.knockdownTime*lf(i);let e=Ut.downTime*(1-(i.stats.tough-3)*Ut.downPerTough);return i.passive&&i.passive.id==="quickRise"&&(e*=i.passive.downTimeMul),e}function Jv(i){return Bt.stunTime*lf(i)}function cf(i){return Bt.hpBase+(i.tough-3)*Bt.hpPerTough}function Ta(i,e,t=!0){return i.hp-=e,i.hp>0?!1:t?(i.hp=0,i.stunned=!0,i.action=null,yt(i,"Down",Jv(i)),!0):(i.hp=1,!1)}function hf(i,e={},t=0,n=0){let s=Nn[e.charId]||Nn.daon,r={...Rt()&&s.statsHp?s.statsHp:s.stats,...e.stats||{}};r.power===void 0&&(r.power=3),r.tough===void 0&&(r.tough=3);let o=Qv(i,s,r,e,t,n);return Rt()&&s.passive.startItem&&(o.body={id:s.passive.startItem,uses:Nt[s.passive.startItem].uses}),o}function Qv(i,e,t,n,s,r){return{id:i,charId:e.id,stats:t,passive:e.passive,s,d:r,h:0,vh:0,speed:0,heading:0,lap:0,nextCp:1,lapS:0,state:"Run",stateT:0,stateDur:0,hand:null,body:null,rank:0,finished:!1,place:0,finishTick:0,invuln:!1,invulnT:0,boostT:0,padT:0,dashT:0,zoneCap:1,speedMul:1,action:null,ai:n.ai||null,hp:cf(t),hpMax:cf(t),stunned:!1,draft:!1,bumpCd:0,trapLeft:Rt()&&e.passive.trapIgnore?e.passive.trapIgnore:0,wallT:0,slideCd:0,useCd:0,prevSlide:!1,prevUse:!1}}function yt(i,e,t=0){i.state=e,i.stateT=0,i.stateDur=t}function au(i){i.passive&&i.passive.id==="startDash"&&(i.dashT=i.passive.dashTime)}function wa(i){au(i)}function cu(i,e,t,n,s,r,o){if(e.finished||e.state==="Respawn"||e.state==="Down")return null;let a={type:"hit",target:e.id,by:t,item:n,blocked:!1,result:s,reason:null,dmg:0,stun:!1},c=Rt(),l=t==null?null:i.runners[t];if(e.invuln)return a.blocked=!0,a.result="None",a.reason="invuln",i.events.push(a),a.result;let u=e.body&&Nt[e.body.id];if(o&&u&&u.block&&u.block.includes(o)){let h=c&&l&&l.passive.pierceChance&&Nt[n]&&Nt[n].category==="melee"&&i.rng.next()<l.passive.pierceChance;if(a.reason=e.body.id,e.body.uses-=1,e.body.uses<=0&&(e.body=null),!h)return a.blocked=!0,a.result="None",i.events.push(a),a.result;a.pierced=!0}if(c){let h=Bt.dmg[n]||0;if(l&&(h*=1+(l.stats.power-3)*Bt.dmgPerPower,l.passive.knockbackMul&&Nt[n]&&Nt[n].category==="melee"&&(h*=l.passive.knockbackMul)),a.dmg=h,Ta(e,h))return a.result="Down",a.stun=!0,i.events.push(a),a.result}if(s==="Down")yt(e,"Down",uf(e)),e.action=null;else if(s==="Slip")yt(e,"Slip",Ut.slipTime),e.heading=(i.rng.next()<.5?-1:1)*Ut.slipHeadingDeg*Sa,e.action=null;else if(s==="Stagger"){let h=Math.max(Ut.staggerMin,Math.min(Ut.staggerMax,r||Ut.staggerMax));e.state==="Stagger"?(e.stateDur=Math.max(e.stateDur-e.stateT,h),e.stateT=0):e.state!=="Slip"&&yt(e,"Stagger",h)}return i.events.push(a),a.result}function eM(i,e){let t=e.json.checkpoints,n=(i.nextCp-1+t.length)%t.length;i.s=t[n],i.d=0,i.h=0,i.vh=0,i.speed=0,i.heading=0,yt(i,"GetUp",Ut.getUpTime),i.invulnT=Ut.getUpTime,au(i)}function Wr(i,e,t){let{track:n,dt:s}=t,r=A=>Math.max(0,A-s);switch(i.invulnT=r(i.invulnT),i.boostT=r(i.boostT),i.padT=r(i.padT),i.dashT=r(i.dashT),i.slideCd=r(i.slideCd),i.useCd=r(i.useCd),i.wallT=r(i.wallT),i.action&&(i.action.t+=s),i.stateT+=s,i.usePressed=!1,Rt()&&(i.bumpCd=r(i.bumpCd),i.state!=="Down"&&i.state!=="Respawn"&&!i.finished&&(i.hp=Math.min(i.hpMax,i.hp+(Bt.regenBase+(i.stats.accel-3)*Bt.regenPerRec)*s))),i.state){case"Slide":i.stateT>=Dt.slideTime&&(yt(i,"Run"),i.slideCd=Dt.slideCooldown);break;case"Stagger":i.stateT>=i.stateDur&&yt(i,"Run");break;case"Slip":i.stateT>=i.stateDur&&yt(i,"Run");break;case"GetUp":i.stateT>=i.stateDur&&yt(i,"Run");break;case"Down":i.stateT>=i.stateDur&&i.h===0&&(i.stunned&&(i.stunned=!1,i.hp=Math.max(i.hp,i.hpMax*Bt.stunRestore)),yt(i,"GetUp",Ut.getUpTime),i.invulnT=Ut.getUpTime,au(i));break;case"Respawn":i.stateT>=Dt.respawnTime&&eM(i,n),i.invuln=i.invulnT>0;return;default:break}let o=i.state,a=o==="Finish",c=o==="Run"||o==="Jump"||o==="Slide"||o==="Stagger"||o==="GetUp",l=o==="Run"||o==="GetUp",u=!!e.slide,h=!!e.use,f=8*Tt.jumpHeight/(Tt.jumpAirTime*Tt.jumpAirTime),d=4*Tt.jumpHeight/Tt.jumpAirTime;l&&i.h===0&&(e.jump?(i.vh=d,yt(i,"Jump")):u&&!i.prevSlide&&i.slideCd===0&&(yt(i,"Slide",Dt.slideTime),i.invulnT=Math.max(i.invulnT,Dt.slideInvuln+(Rt()&&i.passive.slideInvulnAdd?i.passive.slideInvulnAdd:0)))),h&&!i.prevUse&&!a&&o!=="Down"&&o!=="Slip"&&(i.usePressed=!0),i.prevSlide=u,i.prevUse=h,(i.h>0||i.vh>0)&&(i.h+=i.vh*s-.5*f*s*s,i.vh-=f*s,i.h<=0&&(i.h=0,i.vh=0,i.state==="Jump"&&yt(i,"Run")));let m=jv(i.stats),v,g=Dt.overSpeedDecel;if(o==="Down")v=0,g=Ut.downDecel;else if(a)v=Jt.finishJogSpeed;else{let A=i.speedMul;i.boostT>0&&(A*=1+ot.drink.boost),i.padT>0&&(A*=1+Gr.boostMul),i.draft&&(A*=1+Bt.draftBonus),Rt()&&(A*=1-Math.max(Bt.woundSlowMin,Bt.woundSlow-(i.stats.tough-3)*Bt.woundSlowPerTough)*(1-i.hp/i.hpMax)),o==="Stagger"&&(A*=1-Ut.staggerSlow),o==="Slip"&&(A*=Ut.slipSpeedMul),v=m*A,i.zoneCap<1&&i.h===0&&(v=Math.min(v,m*i.zoneCap)),i.dashT>0&&o!=="Stagger"&&o!=="Slip"&&(i.speed=Math.max(i.speed,v*(Rt()?Bt.dashSpeedRatio:Dt.dashSpeedRatio)))}i.speed<v?i.speed=Math.min(v,i.speed+m/Kv(i.stats)*s):i.speed=Math.max(v,i.speed-g*s);let p=Tt.headingLimitDeg*Sa,y=c?Math.max(-1,Math.min(1,e.steer||0)):0;if(o==="Slide"&&(y*=Dt.slideSteerMul),!(o==="Slip"||o==="Down"))if(y!==0)i.heading+=y*Tt.turnRateDeg*Sa*s;else{let A=Tt.headingReturnDeg*Sa*s;i.heading=Math.abs(i.heading)<=A?0:i.heading-Math.sign(i.heading)*A}i.heading=Math.max(-p,Math.min(p,i.heading));let _=i.s,x=i.speed*Math.cos(i.heading)*s;i.s=n.wrapS(i.s+x),i.lapS+=x,i.d+=i.speed*Math.sin(i.heading)*s,Ea(i,n,!0),i.invuln=i.invulnT>0,!(i.state==="Respawn"||a)&&(tM(i,t,_,d),nM(i,t,x))}function Ea(i,e,t){let n=e.widthAt(i.s)/2-Tt.bodyRadius;if(i.offroad=!1,!(Math.abs(i.d)<=n)){if(e.json.noWalls){i.offroad=!0,Math.abs(i.d)>n+Dt.shoulder&&i.state!=="Respawn"&&!i.finished&&(yt(i,"Respawn",Dt.respawnTime),i.speed=0,i.action=null);return}i.d=Math.sign(i.d)*n,Math.sign(i.heading)===Math.sign(i.d)&&i.state!=="Slip"&&(i.heading=0),t&&i.wallT===0&&(i.speed*=1-Tt.wallSpeedLoss,i.wallT=Tt.wallCooldown)}}function lu(i,e){return i.move&&i.move.axis==="d"?i.d+i.move.amp*Math.sin(2*Math.PI*e/i.move.period):i.d}function tM(i,e,t,n){let{track:s}=e,r=s.json,o=i.h===0;i.zoneCap=i.offroad?Dt.offroadCap:1;for(let c of r.slowZones||[])i.s>=c.s0&&i.s<=c.s1&&i.d>=c.d0&&i.d<=c.d1&&(i.zoneCap=Math.min(i.zoneCap,Gr.zoneCap[c.kind]??Dt.offroadCap));if(o){for(let c of r.boostPads||[]){let l=s.deltaS(c.s,i.s);l>=0&&l<=c.len&&Math.abs(i.d-c.d)<=c.w/2&&(i.padT=Gr.boostTime)}if(i.state!=="Down"&&i.state!=="Slip")for(let c of r.jumpPads||[]){let l=s.deltaS(c.s,i.s);l>=0&&l<=Gr.jumpPadLen&&Math.abs(i.d-c.d)<=c.w/2&&(i.vh=n*c.power,(i.state==="Run"||i.state==="GetUp"||i.state==="Slide")&&yt(i,"Jump"))}}if(i.state==="GetUp"||i.state==="Down")return;let a=r.obstacles||[];for(let c=0;c<a.length;c++){let l=a[c],u=sn[l.kind];if(!u||!(s.deltaS(l.s,t)<0&&s.deltaS(l.s,i.s)>=0)||Math.abs(i.d-lu(l,e.time))>=u.halfW+sn.bodyHalf||u.clearH!==null&&i.h>u.clearH||u.slideUnder&&i.state==="Slide")continue;if(i.trapLeft>0){i.trapLeft-=1;break}i.speed*=u.speedMul;let h={type:"hit",target:i.id,by:null,item:l.kind,blocked:!1,result:u.result,reason:null,dmg:0,stun:!1};if(Rt()&&(h.dmg=Bt.dmg[l.kind]||0,Ta(i,h.dmg))){h.result="Down",h.stun=!0,e.events.push(h);break}u.result==="Down"?(yt(i,"Down",uf(i)),i.action=null):i.state!=="Stagger"?yt(i,"Stagger",u.dur):(i.stateT=0,i.stateDur=u.dur),e.events.push(h);break}}function nM(i,e,t){let{track:n}=e,s=n.json.checkpoints,r=s[i.nextCp%s.length],o=n.deltaS(r,i.s);o>=0&&o<Math.max(2,t+1)&&(i.nextCp%s.length===0&&(i.lap+=1,i.lapS=0,e.events.push({type:"lap",runner:i.id,lap:i.lap}),i.lap>=n.laps&&uu(i,e)),i.nextCp=(i.nextCp+1)%s.length)}function uu(i,e){i.finished||(i.finished=!0,e.finishOrder.push(i.id),i.place=e.finishOrder.length,i.finishTick=e.tick,i.action=null,i.invulnT=0,i.invuln=!1,yt(i,"Finish"),e.events.push({type:"finish",runner:i.id,place:i.place}))}function ts(i,e){return i.lap*e.length+i.s+(i.nextCp===1&&i.s>e.length/2?-e.length:0)}var iM=Math.PI/180;function pf(i){let e=[];for(let t of i.json.itemRows||[]){let n=t.count,s=i.widthAt(t.s)-2*ot.boxEdgeMargin,r=n>1?Math.min(ot.boxSpacing,s/(n-1)):0;for(let o=0;o<n;o++)e.push({id:e.length,s:t.s,d:(t.d||0)+(o-(n-1)/2)*r,active:!0,respawnT:0})}return e}var Xr=i=>!i.finished&&i.state!=="Down"&&i.state!=="Respawn";function df(i,e){let t=af(e.rank||1),n=0,s=[];for(let c of Qi){let l=t[c];if(l>0&&ot.rerollOccupied){let u=Nt[es[c][0]].slot;(u==="hand"&&e.hand||u==="body"&&e.body)&&(l=0)}s.push(l),n+=l}if(n<=0)return null;let r=i.rng.next()*n,o=null;for(let c=0;c<Qi.length&&!(!(s[c]<=0)&&(o=Qi[c],r-=s[c],r<0));c++);let a=es[o];return a[i.rng.int(0,a.length-1)]}function ff(i,e,t,n){let s=Nt[t];if(s.slot==="hand"){if(e.hand)return!1;e.hand={id:t,uses:s.uses},Rt()&&s.category==="ranged"&&e.passive.extraShots&&(e.hand.uses+=e.passive.extraShots)}else if(s.slot==="body"){if(e.body)return!1;e.body={id:t,uses:s.uses}}return i.events.push({type:"itemGet",runner:e.id,item:t,box:n}),s.slot==="instant"&&sM(i,e,t),!0}function sM(i,e,t){t==="drink"&&(e.boostT=ot.drink.time,e.state==="Stagger"&&yt(e,"Run"),Rt()&&(e.passive.placeTimeMul&&(e.boostT*=e.passive.placeTimeMul),e.hp=Math.min(e.hpMax,e.hp+kt.hp.drinkHeal))),i.events.push({type:"itemUse",runner:e.id,item:t})}function mf(i,e){if(!e.hand||e.useCd>0||e.action||!Xr(e)||e.state==="Slip")return!1;let t=e.hand.id;if(t==="bat")e.action={kind:"Swing",t:0,done:!1},e.useCd=ot.bat.swingTime;else if(t==="watergun"){let n=ot.watergun;e.action={kind:"Shoot",t:0,done:!0},e.useCd=n.interval;let s={id:i.nextProjectileId++,kind:"watergun",owner:e.id,s:i.track.wrapS(e.s+n.muzzle*Math.cos(e.heading)),d:e.d+n.muzzle*Math.sin(e.heading),h:e.h+n.h,vs:n.speed*Math.cos(e.heading),vd:n.speed*Math.sin(e.heading),dist:0,radiusMul:Rt()&&e.passive.hitRadiusMul?e.passive.hitRadiusMul:1};i.projectiles.push(s),i.events.push({type:"projectile",id:s.id,runner:e.id,item:t})}else return!1;return i.events.push({type:"itemUse",runner:e.id,item:t}),e.hand.uses-=1,e.hand.uses<=0&&(e.hand=null),!0}function rM(i,e){let t=ot.bat,{track:n}=i;for(let s of i.runners){if(s===e||!Xr(s))continue;let r=n.deltaS(e.s,s.s),o=s.d-e.d;Math.hypot(r,o)>t.range||Math.abs(Math.atan2(o,r)-e.heading)>t.halfArcDeg*iM||Math.abs(s.h-e.h)>t.maxDh||Nt.bat.high&&s.state==="Slide"||cu(i,s,e.id,"bat",Nt.bat.result,0,Nt.bat.attackDir)}}function gf(i){let{track:e,dt:t}=i;for(let r of i.runners){let o=r.action;if(o){if(!Xr(r)||r.state==="Slip"){r.action=null;continue}o.kind==="Swing"?(!o.done&&o.t>=ot.bat.windup&&(o.done=!0,rM(i,r)),o.t>=ot.bat.swingTime&&(r.action=null)):o.t>=ot.watergun.shootTime&&(r.action=null)}}let n=ot.watergun,s=[];for(let r of i.projectiles){r.s=e.wrapS(r.s+r.vs*t),r.d+=r.vd*t,r.dist+=n.speed*t;let o=r.dist<=n.range&&Math.abs(r.d)<=e.widthAt(r.s)/2;if(o)for(let a of i.runners){if(a.id===r.owner||!Xr(a)||Math.hypot(e.deltaS(r.s,a.s),a.d-r.d)>(n.radius+ot.targetRadius)*r.radiusMul)continue;let c=r.vs-a.speed*Math.cos(a.heading)>0?"back":"front";cu(i,a,r.owner,r.kind,Nt.watergun.result,n.stagger,c),o=!1;break}o&&s.push(r)}i.projectiles=s;for(let r of i.boxes){if(!r.active){r.respawnT-=t,r.respawnT<=0&&(r.active=!0);continue}for(let o of i.runners){if(!Xr(o)||o.h>ot.boxMaxH||Math.hypot(e.deltaS(r.s,o.s),o.d-r.d)>ot.boxPickRadius)continue;r.active=!1,r.respawnT=ot.boxRespawn,i.events.push({type:"boxUsed",runner:o.id,box:r.id});let a=df(i,o);if(a&&ff(i,o,a,r.id),Rt()&&o.passive.extraChance&&i.rng.next()<o.passive.extraChance){let c=df(i,o);c&&ff(i,o,c,r.id)}break}}}var xf=Math.PI/180,_f=(i,e,t)=>Math.max(e,Math.min(t,i));function Aa(){return{errD:0,errGoal:0,errT:0,useCd:0,lastHand:null,obsKey:-1,obsJump:!0,swingSeen:null,dodge:!1}}function oM(i,e){let t=i.json.racingLine,n=i.length;e=i.wrapS(e);let s=t.length-1;for(let l=0;l<t.length;l++)if(t[l].s>e){s=l-1;break}let r=t[(s+t.length)%t.length],o=t[(s+1)%t.length],a=((o.s-r.s)%n+n)%n||n,c=((e-r.s)%n+n)%n/a;return r.d+(o.d-r.d)*c}var yf=i=>!i.finished&&!i.invuln&&i.state!=="Down"&&i.state!=="Respawn";function vf(i,e){let t=i.runners[e],n=i.aiState[e],s=He.levels[t.ai]||He.levels.normal,{track:r,dt:o,rng:a}=i,c=r.json,l={tick:i.tick,steer:0,jump:!1,slide:!1,use:!1};if(t.finished||t.state==="Down"||t.state==="Respawn"||t.state==="Slip")return l;n.errT-=o,n.errT<=0&&(n.errGoal=a.range(-s.err,s.err),n.errT=He.errResample*a.range(He.errJitterMin,He.errJitterMax)),n.errD+=(n.errGoal-n.errD)*Math.min(1,o*He.errFollow);let u=oM(r,t.s+He.lookAhead),h=u+n.errD,f=He.boxLook;for(let _ of i.boxes){if(!_.active)continue;let x=r.deltaS(t.s,_.s);x>He.boxMinDs&&x<f&&Math.abs(_.d-u)<He.boxSeekD&&(f=x,h=_.d)}let d=t.hand?t.hand.id:null;if(d){let x=d==="bat"?He.chaseLook:He.rangedRange;for(let A of i.runners){if(A===t||!yf(A))continue;let M=r.deltaS(t.s,A.s);M>He.minTargetDs&&M<x&&Math.abs(A.d-t.d)<He.chaseD&&(x=M,h=A.d)}}if(d!=="bat")for(let _ of i.runners){if(_===t||_.finished||_.state==="Respawn")continue;let x=r.deltaS(t.s,_.s);if(x<=0||x>He.passLook||Math.abs(_.d-h)>2*Tt.bodyRadius||_.speed>t.speed-He.passSpeedDiff)continue;let A=Math.sign(t.d-_.d)||(e%2?1:-1);h=_.d+A*He.passOffset;break}let m=c.obstacles||[],v=-1,g=He.obstacleLook;for(let _=0;_<m.length;_++){let x=m[_],A=sn[x.kind];if(!A)continue;let M=r.deltaS(t.s,x.s);if(M<=0||M>He.obstacleLook)continue;let w=lu(x,i.time);if(A.clearH===null&&!A.slideUnder){if(Math.abs(w-h)<A.halfW+He.solidClear){let E=Math.sign(t.d-w)||(e%2?1:-1);h=w+E*(A.halfW+He.solidClear)}}else Math.abs(w-t.d)<A.halfW+sn.bodyHalf+He.hurdleSideMargin&&M<g&&(g=M,v=_)}if(v>=0){let _=v+m.length*t.lap;n.obsKey!==_&&(n.obsKey=_,n.obsJump=a.next()>=s.hurdleMiss);let x=sn[m[v].kind];n.obsJump&&(x.slideUnder?g<t.speed*He.slideLeadTime+He.jumpLead&&(l.slide=!0):g<t.speed*Tt.jumpAirTime*.5+He.jumpLead&&(l.jump=!0))}let p=r.widthAt(t.s+He.lookAhead)/2-He.edgeMargin;if(t.h===0){let _=!1;for(let x of c.jumpPads||[]){let A=r.deltaS(t.s,x.s);A>-1&&A<He.obstacleLook&&Math.abs(x.d-h)<x.w/2&&(_=!0)}if(!_){let x=r.wrapS(t.s+He.lookAhead);for(let A of c.slowZones||[]){if(x<A.s0||x>A.s1||h<A.d0-He.zoneMargin||h>A.d1+He.zoneMargin)continue;let M=A.d0-He.zoneMargin,w=A.d1+He.zoneMargin,E=M>=-p,b=w<=p;E&&b?h=Math.abs(t.d-M)<Math.abs(t.d-w)?M:w:E?h=M:b&&(h=w)}}}h=_f(h,-p,p);let y=Math.atan2(h-t.d,He.lookAhead);l.steer=_f((y-t.heading)/(He.steerGainDeg*xf),-1,1);for(let _ of i.runners){if(_===t||!_.action||_.action.kind!=="Swing"||_.action.done)continue;let x=r.deltaS(_.s,t.s);x<-.5||x>He.dodgeRange||Math.abs(_.d-t.d)>He.dodgeRange||(n.swingSeen!==_.action&&(n.swingSeen=_.action,n.dodge=a.next()<s.defense),n.dodge&&!t.prevSlide&&(l.slide=!0,l.jump=!1))}if(d!==n.lastHand&&(n.lastHand=d,d&&(n.useCd=s.delay)),n.useCd=Math.max(0,n.useCd-o),d&&n.useCd===0&&!t.prevUse){let _=!1;for(let x of i.runners){if(x===t||!yf(x))continue;let A=r.deltaS(t.s,x.s),M=x.d-t.d;if(d==="bat"?A>0&&A<He.meleeRange&&Math.hypot(A,M)<ot.bat.range&&Math.abs(Math.atan2(M,A)-t.heading)<ot.bat.halfArcDeg*xf&&!(Nt.bat.high&&x.state==="Slide")&&(_=!0):d==="watergun"&&A>He.rangedMinDs&&A<He.rangedRange&&Math.abs(M)<=He.rangedD&&(_=!0),_)break}_&&(l.use=!0,n.useCd=Math.max(s.delay*He.reuseMul,2*o))}return l}var aM={tick:0,steer:0,jump:!1,slide:!1,use:!1};function Qs(i,{seed:e=1,runners:t=[]}={}){let n={track:i,tick:0,time:0,dt:1/fn.tickHz,rng:of(e),phase:"countdown",countdown:Jt.countdownSec,runners:t.map((s,r)=>{let o=Math.floor(r/Jt.gridCols),a=r%Jt.gridCols,c=s.s??i.wrapS(-Jt.gridFirstRow-o*Jt.gridRowGap),l=s.d??(a-(Jt.gridCols-1)/2)*Jt.gridColGap;return hf(r,s,c,l)}),boxes:pf(i),projectiles:[],nextProjectileId:0,events:[],results:null,finishOrder:[],firstFinishTime:-1,aiState:[],lastCount:0};return n.aiState=n.runners.map(s=>s.ai?Aa():null),hu(n),n}function hu(i){let{track:e}=i;i.runners.slice().sort((n,s)=>n.finished!==s.finished?n.finished?-1:1:n.finished?n.place-s.place:ts(s,e)-ts(n,e)||n.id-s.id).forEach((n,s)=>{n.rank=s+1})}function cM(i){let{track:e}=i,t=0,n=0,s=0;for(let o of i.runners)o.ai||s++;for(let o of i.runners)s&&o.ai||(t+=ts(o,e),n++);let r=n?t/n:0;for(let o of i.runners){if(!o.ai){o.speedMul=1;continue}let a=He.levels[o.ai]||He.levels.normal,c=Math.max(-1,Math.min(1,(ts(o,e)-r)/He.bandDist));o.speedMul=a.speed*(1-c*He.bandMax)}}function lM(i){let{track:e}=i,t=kt.hp;for(let n of i.runners)if(n.draft=!1,!(!Rt()||t.draftBonus<=0||n.finished))for(let s of i.runners){if(s===n||s.finished||s.state==="Down"||s.state==="Respawn")continue;let r=e.deltaS(n.s,s.s);if(r>=t.draftMin&&r<=t.draftMax&&Math.abs(s.d-n.d)<=t.draftHalfW){n.draft=!0;break}}}function uM(i){let{track:e}=i,t=i.runners,n=r=>!r.finished&&r.state!=="Respawn",s=2*Tt.bodyRadius;for(let r=0;r<t.length;r++)if(n(t[r]))for(let o=r+1;o<t.length;o++){let a=t[r],c=t[o];if(!n(c))continue;let l=e.deltaS(a.s,c.s);if(Math.abs(l)>=s)continue;let u=c.d-a.d,h=Math.hypot(l,u);if(h>=s||Math.abs(a.h-c.h)>Tt.bodyRadius*2)continue;let f=(s-h)*Dt.pushRate,d=Math.max(0,Math.min(1,.5-(a.stats.power-c.stats.power)*Dt.pushPerPower)),m=Math.sign(u)||1;if(a.d-=m*f*d,c.d+=m*f*(1-d),Ea(a,e,!1),Ea(c,e,!1),Rt()&&a.stats.power!==c.stats.power){let v=a.stats.power<c.stats.power?a:c,g=Math.abs(a.stats.power-c.stats.power);v.bumpCd===0&&v.state!=="Down"&&!v.invuln&&(v.bumpCd=kt.hp.bumpCooldown,v.speed*=Math.max(0,1-kt.hp.bumpSlowPerPower*g),Ta(v,kt.hp.bumpDmgPerPower*g,!1))}}}function hM(i){i.phase="done",i.results=i.finishOrder.slice()}function Ra(i,e=[]){let{track:t,dt:n}=i;if(i.tick+=1,i.events.length=0,i.phase==="countdown"){let s=Math.ceil(i.countdown-1e-9);if(s!==i.lastCount&&s>0&&(i.lastCount=s,i.events.push({type:"countdown",n:s})),i.countdown=Math.max(0,i.countdown-n),i.countdown<=1e-9){i.countdown=0,i.phase="race",i.events.push({type:"go"});for(let r of i.runners)wa(r)}hu(i);return}i.time+=n,cM(i),lM(i);for(let s=0;s<i.runners.length;s++){let r=i.runners[s],o=r.ai?vf(i,s):e[s]||aM;Wr(r,o,i),r.usePressed&&mf(i,r)}if(uM(i),gf(i),i.phase==="race"){if(i.finishOrder.length&&i.firstFinishTime<0&&(i.firstFinishTime=i.time),i.firstFinishTime>=0&&i.time-i.firstFinishTime>=Jt.dnfTime||i.time>=Jt.maxTime){let r=i.runners.filter(o=>!o.finished).sort((o,a)=>ts(a,t)-ts(o,t)||o.id-a.id);for(let o of r)uu(o,i)}i.runners.length&&i.finishOrder.length===i.runners.length&&hM(i)}hu(i)}function ns(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new ht,l=0;for(let u=0;u<i.length;++u){let h=i[u],f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in h.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in h.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(e){let d;if(t)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,u),l+=d}}if(t){let u=0,h=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let m=0;m<d.count;++m)h.push(d.getX(m)+u);u+=i[f].attributes.position.count}c.setIndex(h)}for(let u in r){let h=Mf(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let f=0;f<h;++f){let d=[];for(let v=0;v<o[u].length;++v)d.push(o[u][v][f]);let m=Mf(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(m)}}return c}function Mf(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let u=i[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new pt(o,t,n),c=0;for(let l=0;l<i.length;++l){let u=i[l];if(u.isInterleavedBufferAttribute){let h=c/t;for(let f=0,d=u.count;f<d;f++)for(let m=0;m<t;m++){let v=u.getComponent(f,m);a.setComponent(f+h,m,v)}}else o.set(u.array,c);c+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function du(i,e){if(e===Wd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Vr||e===xa){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Vr)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Pi=null;function bf(){if(Pi)return Pi;let i=ae.toon,e=[i.shadow,(i.shadow+i.light)/2,i.light,i.light].map(n=>Math.round(n*255)),t=new Uint8Array(e.length*4);return e.forEach((n,s)=>t.set([n,n,n,255],s*4)),Pi=new Ws(t,e.length,1,en),Pi.minFilter=Pi.magFilter=Gt,Pi.generateMipmaps=!1,Pi.needsUpdate=!0,Pi}var dM=new Ie(ae.toon.rimColor);function Sf(i){return i.onBeforeCompile=e=>{e.uniforms.uRimColor={value:dM},e.uniforms.uRimPow={value:ae.toon.rimPower},e.uniforms.uRimStr={value:ae.toon.rimStrength},e.fragmentShader=e.fragmentShader.replace("void main() {",`uniform vec3 uRimColor; uniform float uRimPow; uniform float uRimStr;
void main() {`).replace("#include <opaque_fragment>",`
        float rimK = 1.0 - clamp(dot(normalize(normal), normalize(vViewPosition)), 0.0, 1.0);
        outgoingLight += uRimColor * pow(rimK, uRimPow) * uRimStr;
        #include <opaque_fragment>`)},i.customProgramCacheKey=()=>"nr-toon-rim",i}var fu={};function zn(i="body"){return fu[i]||(fu[i]=Sf(new kr({color:16777215,vertexColors:!0,gradientMap:bf(),side:vt}))),fu[i]}function Tf(i){return Sf(new kr({map:i,gradientMap:bf(),alphaTest:ae.toon.faceAlphaTest,side:vt}))}var is={sky:12575733,ground:9421930,road:13215612,roadStripe:12557167,edge:16052714,wall:7311320};function Ef(){let i=new Gs;i.background=new Ie(is.sky),i.fog=new Zo(is.sky,80,220),i.add(new Ks(16777215,9083504,1.6));let e=new Ci(16777215,1.4);e.position.set(30,60,20),i.add(e);let t=new je(new Ys(400,48),new Kt({color:is.ground}));return t.rotation.x=-Math.PI/2,t.position.y=-.02,i.add(t),i}function Af(i){let e=new It,t=i.N,n=[0,0,0],s=(o,a,c=0)=>i.toWorld(o*i.step,a,c,n).slice();{let o=[],a=[],c=[],l=new Ie(is.road),u=new Ie(is.roadStripe);for(let f=0;f<=t;f++){let d=f%t,m=i.width[d]/2,v=s(d,-m,.01),g=s(d,m,.01);o.push(...v,...g);let p=Math.floor(f*i.step/ae.stripeEvery)%2?u:l;if(a.push(p.r,p.g,p.b,p.r,p.g,p.b),f<t){let y=f*2;c.push(y,y+2,y+1,y+1,y+2,y+3)}}let h=new ht;h.setAttribute("position",new Ze(o,3)),h.setAttribute("color",new Ze(a,3)),h.setIndex(c),h.computeVertexNormals(),e.add(new je(h,new Kt({vertexColors:!0,side:vt})))}let r=(o,a,c,l,u)=>{let h=[],f=[];for(let m of[-1,1]){let v=h.length/3;for(let g=0;g<=t;g++){let p=g%t,y=i.width[p]/2;if(h.push(...s(p,m*(y+o),c),...s(p,m*(y+a),l)),g<t){let _=v+g*2;m>0?f.push(_,_+2,_+1,_+1,_+2,_+3):f.push(_,_+1,_+2,_+1,_+3,_+2)}}}let d=new ht;return d.setAttribute("position",new Ze(h,3)),d.setIndex(f),d.computeVertexNormals(),new je(d,new Kt({color:u,side:vt}))};e.add(r(-ae.edgeBand,0,.02,.02,is.edge)),e.add(r(.05,.05,0,ae.wallHeight,is.wall));{let o=new ii(i.width[0],.6),a=new je(o,new St({color:16777215})),c=s(0,0,.03);a.position.set(c[0],c[1],c[2]),a.rotation.x=-Math.PI/2,a.rotation.z=-Math.atan2(i.tan[2],i.tan[0])+Math.PI/2,e.add(a)}return e}function pu(i,e,t,n,s,r,o,a){let c=Math.max(1,Math.ceil(Math.abs(t-e)/i.step)),l=o.length/3,u=[0,0,0];for(let h=0;h<=c;h++){let f=e+(t-e)*h/c;if(o.push(...i.toWorld(f,n,r,u)),o.push(...i.toWorld(f,s,r,u)),h<c){let d=l+h*2;a.push(d,d+2,d+1,d+1,d+2,d+3)}}}function wf(i,e,t){let n=new ht;return n.setAttribute("position",new Ze(i,3)),n.setIndex(e),n.computeVertexNormals(),new je(n,new Kt({color:t,side:vt,polygonOffset:!0,polygonOffsetFactor:-1}))}var fM={gourdPole:"pole",lowbar:"bar"};function pM(i){let e=ae,t=[],n=sn&&sn[i.kind]||{},s=n.halfW?n.halfW*2:null,r=n.clearH||null;switch(fM[i.kind]||i.kind){case"hurdle":{let o=i.w||s||e.propHurdleW,a=i.h||r||e.propHurdleH;t.push([new qt(.08,a,.08).translate(-o/2,a/2,0),"hurdle"]),t.push([new qt(.08,a,.08).translate(o/2,a/2,0),"hurdle"]),t.push([new qt(o,.16,.05).translate(0,a-.08,0),"hurdleBar"]);break}case"pole":{let o=i.h||e.propPoleH;t.push([new bn(.08,.1,o,10).translate(0,o/2,0),"pole"]);break}case"bar":{let o=i.w||s||e.propHurdleW,a=i.h||e.propBarH;t.push([new bn(.06,.06,a+.2,8).translate(-o/2,(a+.2)/2,0),"hurdle"]),t.push([new bn(.06,.06,a+.2,8).translate(o/2,(a+.2)/2,0),"hurdle"]),t.push([new bn(.07,.07,o,8).rotateZ(Math.PI/2).translate(0,a,0),"bar"]);break}case"roller":{let o=i.r||(r?r/2:.45),a=i.w||s||1.6;t.push([new bn(o,o,a,14).rotateZ(Math.PI/2).translate(0,o,0),"roller"]);break}default:t.push([new qt(.8,.8,.8).translate(0,.4,0),"other"])}return t}var mM={};function mu(i,e,t,n){let s=i.toWorld(e,t,0,[0,0,0]),r=i.sample(e,mM),o=new O(...r.r),a=new O(...r.u),c=new O(...r.t);return n.makeBasis(o,a,c).setPosition(s[0],s[1],s[2])}var gM={hurdle:"hurdle",gourdPole:"gourd-pole",pole:"gourd-pole"};function Rf(i,e=null){let t=i.json||{},n=new It,s=ae.propColors,r={boost:[[],[]],jump:[[],[]]};for(let p of t.boostPads||[]){let y=p.len||ae.padLen,_=p.w||ae.padW;pu(i,p.s,p.s+y,(p.d||0)-_/2,(p.d||0)+_/2,.025,...r.boost)}for(let p of t.jumpPads||[]){let y=p.len||ae.padLen/2,_=p.w||ae.padW;pu(i,p.s,p.s+y,(p.d||0)-_/2,(p.d||0)+_/2,.03,...r.jump)}let o={};for(let p of t.slowZones||[]){let y=s[p.kind]?p.kind:"mud";o[y]=o[y]||[[],[]],pu(i,p.s0,p.s1,p.d0,p.d1,.02,...o[y])}for(let[p,[y,_]]of Object.entries(r))y.length&&n.add(wf(y,_,s[p]));for(let[p,[y,_]]of Object.entries(o))y.length&&n.add(wf(y,_,s[p]));let a={},c=[],l={},u=p=>l[p]||(l[p]=new Kt({color:s[p]||s.other})),h=new ke,f=e&&e.decorAlias||{},d=p=>{let y=f[p];return y&&e.props&&e.props[y]?y:null},m={},v=new ke().makeScale(ae.propScale,ae.propScale,ae.propScale);for(let p of t.obstacles||[]){let y=!p.move&&d(gM[p.kind]||p.kind);if(y){let x=ae.obstacleWidthScale&&ae.obstacleWidthScale[p.kind]||1,A=new ke().makeScale(ae.propScale*x,ae.propScale,ae.propScale);(m[y]=m[y]||[]).push(mu(i,p.s,p.d||0,new ke).multiply(A));continue}let _=pM(p);if(p.move){let x=new It;for(let[A,M]of _)x.add(new je(A,u(M)));x.matrixAutoUpdate=!1,n.add(x),c.push({mesh:x,o:p})}else{mu(i,p.s,p.d||0,h);for(let[x,A]of _)x.applyMatrix4(h),(a[A]=a[A]||[]).push(x)}}for(let[p,y]of Object.entries(a))n.add(new je(ns(y),u(p)));for(let p of t.decor||[]){let y=d(p.glb);if(!y||!Array.isArray(p.p))continue;let _=new ke().makeRotationY(p.ry||0).setPosition(p.p[0],p.p[1]||0,p.p[2]).multiply(v);(m[y]=m[y]||[]).push(_)}for(let[p,y]of Object.entries(m)){let _=new hn(e.props[p],zn(),y.length);y.forEach((x,A)=>_.setMatrixAt(A,x)),_.instanceMatrix.needsUpdate=!0,_.computeBoundingSphere(),n.add(_)}function g(p,y){for(let _ of c){let x=_.o,A=x.move,M=y&&y.obstacles&&y.obstacles.find&&y.obstacles.find(b=>b.id===x.id&&b.id!==void 0),w=x.s,E=x.d||0;if(M)w=M.s,E=M.d;else{let b=(A.amp||0)*Math.sin(2*Math.PI*p/(A.period||1));A.axis==="s"?w+=b:E+=b}mu(i,w,E,_.mesh.matrix)}}return{group:n,update:g}}function Cf(i){let e=new Map,t=new Map,n=i.clone();return If(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function If(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)If(i.children[n],e.children[n],t)}var _M={Run:"Run",Jump:"Jump",Slide:"Slide",Stagger:"Stagger",Down:"Down",GetUp:"GetUp",Slip:"Slip",Respawn:"Fall",Finish:"Run"},yM={Sprint:"Run",Slip:"Stagger",Win:"Idle",Lose:"Idle",Fall:"Down",Idle:"Run"},_u=new Set(["Jump","Slide","Swing","Shoot","Throw","Place","Drink","Stagger","Fall","GetUp","Slip"]),gu={Swing:"Swing",Shoot:"Shoot",Throw:"Throw",Place:"Place",Drink:"Drink"},vM=["Chest","Neck","Head","UpperArm.L","UpperArm.R","LowerArm.L","LowerArm.R","Hand.L","Hand.R"],kf=["Socket_HandR","Socket_Head","Socket_Back","Socket_FootL","Socket_FootR","Socket_Overhead"],Li={normal:0,blink:1,surprise:2,hurt:3,dizzy:4,strain:5,smile:6,sad:7},Pf=i=>i.replace(/[\[\]\.:\/]/g,""),Di={};function Bf(){if(Di.ready)return Di;let i=ae.capsuleRadius,e=ae.capsuleLength;return Di.capsule=new ra(i,e,4,12).translate(0,i+e/2,0),Di.nose=new qt(.18,.12,.22),Di.noseMat=new Kt({color:2236962}),Di.bodyMats={},Di.ready=!0,Di}function MM(i){let e=Bf(),t=ae.charBodyColors[i]||ae.charBodyColors.default;return e.bodyMats[t]||(e.bodyMats[t]=new Kt({color:t}))}function Lf(i,e,t){let n=new bn(i,i,e,20,4,!0),s=n.attributes.position,r=new Ie(t),o=new Float32Array(s.count*3);for(let a=0;a<s.count;a++){let c=Math.abs(s.getY(a))>e*.3;o.set(c?[1,1,1]:[r.r,r.g,r.b],a*3)}return n.setAttribute("color",new pt(o,3)),n}var Df=new St({vertexColors:!0,side:vt});function bM(i,e){let t=document.createElement("canvas");t.width=t.height=64;let n=t.getContext("2d");n.fillStyle="#ffffff",n.fillRect(0,0,64,64),n.fillStyle=e,n.fillRect(6,6,52,52),n.fillStyle="#ffffff",n.font="bold 40px system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText(String(i),32,35);let s=new Lr(t);return s.colorSpace=_t,s}function SM(i,e){let t=document.createElement("canvas");t.width=t.height=64;let n=t.getContext("2d");n.font="bold 52px system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle",n.lineWidth=7,n.strokeStyle="#ffffff",n.lineJoin="round",n.strokeText(String(i),32,35),n.fillStyle=e,n.fillText(String(i),32,35);let s=new Lr(t);return s.colorSpace=_t,s}function TM(i,e,t){let n=new Ti,s=-i/2,r=-e/2;return n.moveTo(s+t,r),n.lineTo(s+i-t,r),n.quadraticCurveTo(s+i,r,s+i,r+t),n.lineTo(s+i,r+e-t),n.quadraticCurveTo(s+i,r+e,s+i-t,r+e),n.lineTo(s+t,r+e),n.quadraticCurveTo(s,r+e,s,r+e-t),n.lineTo(s,r+t),n.quadraticCurveTo(s,r,s+t,r),new ca(n,3)}function wM(i,e,t){let n=new It,[s,r]=t.size||[.15,.135],o=new je(TM(s,r,t.cornerRadius||.012),new St({color:t.color||"#4A4F5C",side:vt})),a=Math.max(t.numberInsetMin||.015,0),c=Math.min(t.numberMaxHeight||.105,r-a*2,s-a*2),l=new je(new ii(c,c),new St({map:SM(i,e),transparent:!0,alphaTest:.1}));l.position.z=ae.vestNumberLift,n.add(o,l);let u=t.offsetLocal||[0,-.01,-.134];return n.position.set(u[0],u[1],u[2]),n.rotation.y=Math.PI,n}function Uf(i,e,t){return new je(new ii(t,t),new St({map:bM(i,e)}))}var Nf={bat:()=>new bn(.05,.08,1,8).translate(0,.45,0),watergun:()=>new qt(.14,.2,.45).translate(0,0,.12),helmet:()=>new wi(.36,14,8,0,Math.PI*2,0,Math.PI/2),shellpack:()=>new wi(.3,12,8).scale(1,1.1,.55),drink:()=>new bn(.06,.06,.22,8),default:()=>new qt(.2,.2,.2)},Of={bat:"#c58a4a",watergun:"#4fb3e8",helmet:"#f2c230",shellpack:"#5c9a5a",drink:"#e8604a",default:"#dddddd"},Ca={};function EM(i,e,t){let n=t&&e.items&&e.items[i];if(n&&n.geo){let s=new je(n.geo,zn()),r=n.info.attach&&n.info.attach.rotationXDeg;return r&&(s.rotation.x=Ji.degToRad(r)),s}return Ca[i]||(Ca[i]={geo:(Nf[i]||Nf.default)(),mat:new Kt({color:Of[i]||Of.default})}),new je(Ca[i].geo,Ca[i].mat)}var xu={};function AM(i,e){if(xu[i])return xu[i];let t=e.gltf.scene,n=new Set(e.info&&e.info.hideWhenHelmet||[]),s=[],r=[],o=null;if(t.traverse(c=>{c.isSkinnedMesh&&(c.name==="face"||c.material&&c.material.map?o=c:n.has(c.name)?r.push(c):s.push(c))}),s.length>1){let c=s[0],l=s.map(h=>{let f=h.geometry.clone();for(let d of Object.keys(f.attributes))["position","normal","color","skinIndex","skinWeight"].includes(d)||f.deleteAttribute(d);return f}),u=ns(l);if(u){let h=new $i(u,c.material);h.name="bodyMerged",h.bind(c.skeleton,c.bindMatrix),c.parent.add(h);for(let f of s)f.removeFromParent()}}let a=o&&o.material.map?o.material.map:null;return a&&(a.flipY=!1,a.colorSpace=_t),xu[i]={root:t,faceTex:a,hideNames:[...n]}}function zf(i,e,t,n,s){let r=ae;if(n==="glb"){let o=s.Socket_Head,a=s.Socket_Back;if(o){let c=new je(Lf(r.glbBandRadius,r.glbBandHeight,t),Df);c.position.y=r.glbBandOffsetY,o.add(c)}if(a){let c=Uf(e+1,t,r.glbPlateSize);return c.position.set(0,r.glbPlateOffsetY,r.glbPlateOffsetZ),c.rotation.y=Math.PI,a.add(c),c}}else{let o=new je(Lf(ae.capsuleRadius*1.04,.1,t),Df);o.position.y=ae.headbandY;let a=Uf(e+1,t,.3);a.position.set(0,ae.capsuleRadius+ae.capsuleLength*.45,ae.capsuleRadius+.01),i.add(o,a)}}function RM(i,e){let t=Bf(),n=ae.idColors[i%ae.idColors.length],s=new It,r=new It;s.add(r);let o=new je(t.capsule,MM(e)),a=new je(t.nose,t.noseMat);a.position.set(0,ae.capsuleRadius+ae.capsuleLength*.8,-ae.capsuleRadius),r.add(o,a),zf(r,i,n,"capsule");let c={},l={Socket_HandR:[.36,.55,-.1],Socket_Head:[0,1.06,0],Socket_Back:[0,.65,.3],Socket_FootL:[-.12,0,0],Socket_FootR:[.12,0,0],Socket_Overhead:[0,ae.overheadY,0]};for(let u of kf){let h=new mt;h.name=u,h.position.set(...l[u]),r.add(h),c[u]=h}return{kind:"capsule",root:s,pose:r,sockets:c,color:n}}function CM(i,e,t,n){let s=AM(e,t),r=ae.idColors[i%ae.idColors.length],o=new It,a=Cf(s.root);a.scale.setScalar(ae.charScale),a.rotation.y=Math.PI,o.add(a);let c={};for(let x of kf)c[x]=a.getObjectByName(x)||null;if(!c.Socket_Overhead){let x=new mt;x.position.y=ae.overheadY,o.add(x),c.Socket_Overhead=x}let l=null,u=[];a.traverse(x=>{x.isMesh&&(x.frustumCulled=!1,x.material&&x.material.map?(l=x.material.map.clone(),l.repeat.set(1,1),x.material=Tf(l)):x.material=zn(),s.hideNames.includes(x.name)&&u.push(x))});let h=zf(o,i,r,"glb",c),f=null,d=null,m=n.parts&&n.parts.vest;if(m&&m.geo){let x=null;if(a.traverse(A=>{!x&&A.isSkinnedMesh&&!(A.material&&A.material.map)&&(x=A)}),x){f=new $i(m.geo,zn()),f.name="part_vest",f.frustumCulled=!1,f.visible=!1,x.parent.add(f),f.bind(x.skeleton,x.bindMatrix);let A=a.getObjectByName(m.info.numberBacking&&m.info.numberBacking.bone||"Chest");A&&m.info.numberBacking&&(d=wM(i+1,r,m.info.numberBacking),d.visible=!1,A.add(d))}}let v=new ma(a),g={};for(let x of n.clips||[])g[x.name]=x;let p=new Set((n.upperBones||vM).map(Pf)),y={};return{kind:"glb",root:o,model:a,sockets:c,color:r,mixer:v,act:x=>{if(y[x]!==void 0)return y[x];let A;if(x.endsWith("@lower")){let E=g[x.slice(0,-6)];E&&(A=E.clone(),A.name=x,A.tracks=A.tracks.filter(b=>!p.has(Pf(b.name.split(".")[0]))))}else A=g[x];if(!A)return y[x]=null;let M=v.clipAction(A),w=x.replace("@lower","");return _u.has(w)&&(M.setLoop(Jl,1),M.clampWhenFinished=!0),y[x]=M},byName:g,base:null,baseName:null,upper:null,upperName:null,faceTex:l,faceCell:-1,blinkT:ae.faceBlinkMin+i*.37,blinkOn:0,blinkSeed:1234+i*7919,hideMeshes:u,lastStateT:0,vest:f,vestNum:d,plate:h}}function Ff(i,e){let t=e,n=0;for(;t&&!i.byName[t]&&n++<4;)t=yM[t];return t&&i.byName[t]?t:null}function IM(i,e,t){if(i.baseName===e&&!t)return i.base;let n=i.act(e);return n?(n.reset().setEffectiveWeight(1).fadeIn(ae.animCrossfade).play(),i.base&&i.base!==n&&i.base.fadeOut(ae.animCrossfade),i.base=n,i.baseName=e,n):i.base}function PM(i,e){i.upperName!==e&&(i.upper&&i.upper.fadeOut(ae.upperFade),i.upper=e?i.act(e):null,i.upperName=e,i.upper&&i.upper.reset().setEffectiveWeight(1).fadeIn(ae.upperFade).play())}function yu(i,e,t={chars:{},clips:null}){let n=e.map((h,f)=>{let d=t.chars&&t.chars[h.charId],m=null;if(d&&t.clips)try{m=CM(f,h.charId,d,t)}catch(v){console.warn("GLB actor failed, capsule fallback",v)}return m||(m=RM(f,h.charId)),m.hand={id:null,mesh:null},m.bodyItem={id:null,mesh:null},m.drinkT=0,i.add(m.root),m}),s=[0,0,0],r={};function o(h,f,d){f.toWorld(d.s,d.d,d.h,s),h.root.position.set(s[0],s[1],s[2]),f.sample(d.s,r);let m=Math.atan2(r.t[0],r.t[2]);h.root.rotation.y=m-d.heading+Math.PI}function a(h,f,d,m){let v=h[f];if(v.id===d)return;v.mesh&&v.mesh.removeFromParent(),v.id=d,v.mesh=null;let g=h.sockets[m];if(d&&g&&(v.mesh=EM(d,t,h.kind==="glb"),g.add(v.mesh)),f==="bodyItem"){let p=d==="helmet";if(h.hideMeshes)for(let y of h.hideMeshes)y.visible=!p;h.vest&&(h.vest.visible=p),h.vestNum&&(h.vestNum.visible=p,h.plate&&(h.plate.visible=!p))}}function c(h,f,d){let m=h.pose;m.rotation.set(0,0,0),m.position.set(0,0,0),m.scale.set(1,1,1);let v=f.stateT||0;switch(f.state){case"Run":case"Jump":m.position.y=Math.abs(Math.sin(d*14))*.05*Math.min(1,(f.speed||0)/5),m.rotation.x=-.12*Math.min(1,(f.speed||0)/9);break;case"Slide":m.scale.y=.5,m.rotation.x=.35;break;case"Stagger":m.rotation.z=Math.sin(d*20)*.25;break;case"Down":m.rotation.x=Math.PI/2,m.position.y=.3,m.position.z=.4;break;case"GetUp":{let p=Math.max(0,1-v/.4);m.rotation.x=Math.PI/2*p,m.position.y=.3*p;break}case"Slip":m.rotation.y=d*12,m.rotation.z=.3;break;case"Finish":m.position.y=Math.abs(Math.sin(d*6))*.25;break;default:break}let g=h.hand.mesh;g&&(g.rotation.set(0,0,0),f.action&&f.action.kind==="Swing"&&(g.rotation.x=-Math.min(1,(f.action.t||0)/.3)*2.4))}function l(h,f,d,m){let v=_M[f.state]||"Run",g=(f.speed||0)>ae.idleSpeed;(m==="countdown"||(f.state==="Run"||f.state==="Finish")&&!g)&&(v="Idle"),f.state==="Finish"&&!g&&(v=(f.place||f.rank||9)<=3?"Win":"Lose"),f.state==="Down"&&(f.stateT||0)<(h.byName.Fall?h.byName.Fall.duration:0)&&(v="Fall");let p=Ff(h,v)||Ff(h,"Run"),y=f.action&&!f.action.done&&gu[f.action.kind]&&h.byName[gu[f.action.kind]]?gu[f.action.kind]:null;y&&p&&(p+="@lower");let _=f.stateT||0,x=_<h.lastStateT&&_u.has(p.replace("@lower",""));h.lastStateT=_;let A=IM(h,p,x);if(A){let M=p.replace("@lower","");if(M==="Run"){let w=(f.speed||0)/(t.runGroundSpeed||ae.runGroundSpeed);A.timeScale=Ji.clamp(w,ae.runRateMin,ae.runRateMax)}else _u.has(M)&&f.stateDur>0&&M!=="Fall"?A.timeScale=A.getClip().duration/f.stateDur:A.timeScale=1}PM(h,y),h.mixer.update(d)}function u(h,f,d){return h.blinkT-=d,h.blinkT<=0&&(h.blinkSeed=h.blinkSeed*16807%2147483647,h.blinkOn=ae.faceBlinkTime,h.blinkT=ae.faceBlinkMin+h.blinkSeed/2147483647*(ae.faceBlinkMax-ae.faceBlinkMin)),h.blinkOn>0&&(h.blinkOn-=d),f.finished||f.state==="Finish"?(f.place||f.rank||9)<=3?Li.smile:Li.sad:f.stunned?Li.dizzy:f.state==="Down"||f.state==="Respawn"?Li.hurt:f.state==="Stagger"||f.state==="Slip"?Li.surprise:f.action&&!f.action.done?Li.strain:h.blinkOn>0?Li.blink:Li.normal}return{list:n,showDrink(h){let f=n[h];f&&(f.drinkT=ae.drinkShowTime)},update(h,f,d,m,v,g){for(let p=0;p<n.length;p++){let y=n[p],_=f[p],x=d[p];if(!_||!x)continue;o(y,h,x),y.drinkT=Math.max(0,y.drinkT-m);let A=_.hand?_.hand.id:y.drinkT>0?"drink":null;a(y,"hand",A,"Socket_HandR");let M=_.body?_.body.id:null;if(a(y,"bodyItem",M,M==="shellpack"?"Socket_Back":"Socket_Head"),y.kind==="glb"){if(l(y,_,m,g),y.faceTex){let E=u(y,_,m);E!==y.faceCell&&(y.faceCell=E,y.faceTex.offset.set(E%4*.25,Math.floor(E/4)*.5))}}else c(y,_,v);let w=_.state==="Respawn"||_.invuln===!0||(_.invuln||0)>0;y.root.visible=!w||Math.floor(v*ae.respawnBlinkHz)%2===0}},starWorld(h,f){let d=n[h];return d.kind==="glb"&&d.sockets.Socket_Head?(d.sockets.Socket_Head.getWorldPosition(f),f.y+=ae.starHeadLift,f):(this.overheadWorld(h,f),f.y-=.25,f)},overheadWorld(h,f){let d=n[h].sockets.Socket_Overhead;return d?d.getWorldPosition(f):n[h].root.getWorldPosition(f)},dispose(){for(let h of n)h.root.removeFromParent(),h.mixer&&h.mixer.stopAllAction()}}}var Ia=class extends ai{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Eu(t)}),this.register(function(t){return new Au(t)}),this.register(function(t){return new Ou(t)}),this.register(function(t){return new Fu(t)}),this.register(function(t){return new ku(t)}),this.register(function(t){return new Cu(t)}),this.register(function(t){return new Iu(t)}),this.register(function(t){return new Pu(t)}),this.register(function(t){return new Lu(t)}),this.register(function(t){return new wu(t)}),this.register(function(t){return new Du(t)}),this.register(function(t){return new Ru(t)}),this.register(function(t){return new Nu(t)}),this.register(function(t){return new Uu(t)}),this.register(function(t){return new Su(t)}),this.register(function(t){return new Bu(t)}),this.register(function(t){return new zu(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=Ii.extractUrlBase(e);o=Ii.resolveURL(l,this.path)}else o=Ii.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Br(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Xf){try{o[Ke.KHR_BINARY_GLTF]=new Hu(e)}catch(h){s&&s(h);return}r=JSON.parse(o[Ke.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new $u(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case Ke.KHR_MATERIALS_UNLIT:o[h]=new Tu;break;case Ke.KHR_DRACO_MESH_COMPRESSION:o[h]=new Vu(r,this.dracoLoader);break;case Ke.KHR_TEXTURE_TRANSFORM:o[h]=new Gu;break;case Ke.KHR_MESH_QUANTIZATION:o[h]=new Wu;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function LM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var Ke={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Su=class{constructor(e){this.parser=e,this.name=Ke.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,u=new Ie(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],Yt);let h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Ci(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new fa(u),l.distance=h;break;case"spot":l=new da(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,ui(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},Tu=class{constructor(){this.name=Ke.KHR_MATERIALS_UNLIT}getMaterialType(){return St}extendParams(e,t,n){let s=[];e.color=new Ie(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Yt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,_t))}return Promise.all(s)}},wu=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Eu=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new xe(a,a)}return Promise.all(r)}},Au=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Ru=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Cu=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Ie(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Yt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,_t)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Iu=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Pu=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ie().setRGB(a[0],a[1],a[2],Yt),Promise.all(r)}},Lu=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Du=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ie().setRGB(a[0],a[1],a[2],Yt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,_t)),Promise.all(r)}},Uu=class{constructor(e){this.parser=e,this.name=Ke.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Nu=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Ou=class{constructor(e){this.parser=e,this.name=Ke.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Fu=class{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},ku=class{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Bu=class{constructor(e){this.name=Ke.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,s.mode,s.filter),d})})}else return null}},zu=class{constructor(e){this.name=Ke.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==Tn.TRIANGLES&&l.mode!==Tn.TRIANGLE_STRIP&&l.mode!==Tn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let u=l.pop(),h=u.isGroup?u.children:[u],f=l[0].count,d=[];for(let m of h){let v=new ke,g=new O,p=new Xt,y=new O(1,1,1),_=new hn(m.geometry,m.material,f);for(let x=0;x<f;x++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,x),c.SCALE&&y.fromBufferAttribute(c.SCALE,x),_.setMatrixAt(x,v.compose(g,p,y));for(let x in c)if(x==="_COLOR_0"){let A=c[x];_.instanceColor=new Zi(A.array,A.itemSize,A.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&m.geometry.setAttribute(x,c[x]);mt.prototype.copy.call(_,m),this.parser.assignFinalMaterial(_),d.push(_)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}},Xf="glTF",qr=12,Hf={JSON:1313821514,BIN:5130562},Hu=class{constructor(e){this.name=Ke.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,qr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Xf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-qr,r=new DataView(e,qr),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===Hf.JSON){let l=new Uint8Array(e,qr+o,a);this.content=n.decode(l)}else if(c===Hf.BIN){let l=qr+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Vu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ke.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let u in o){let h=qu[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=qu[u]||u.toLowerCase();if(o[u]!==void 0){let f=n.accessors[e.attributes[u]],d=er[f.componentType];l[h]=d.name,c[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){s.decodeDracoFile(u,function(d){for(let m in d.attributes){let v=d.attributes[m],g=c[m];g!==void 0&&(v.normalized=g)}h(d)},a,l,Yt,f)})})}},Gu=class{constructor(){this.name=Ke.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Wu=class{constructor(){this.name=Ke.KHR_MESH_QUANTIZATION}},Pa=class extends Ei{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=s-t,h=(n-t)/u,f=h*h,d=f*h,m=e*l,v=m-l,g=-2*d+3*f,p=d-f,y=1-g,_=p-f+h;for(let x=0;x!==a;x++){let A=o[v+x+a],M=o[v+x+c]*u,w=o[m+x+a],E=o[m+x]*u;r[x]=y*A+_*M+g*w+p*E}return r}},DM=new Xt,Xu=class extends Pa{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return DM.fromArray(r).normalize().toArray(r),r}},Tn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},er={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Vf={9728:Wt,9729:Gt,9984:Wl,9985:_r,9986:Ss,9987:kn},Gf={33071:Jn,33648:Tr,10497:qi},vu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},qu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ui={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},UM={CUBICSPLINE:void 0,LINEAR:ks,STEP:Fs},Mu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function NM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new $s({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Bn})),i.DefaultMaterial}function ss(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ui(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function OM(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,u=e.length;l<u;l++){let h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){let h=e[l];if(n){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(f)}if(s){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(f)}if(r){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let u=l[0],h=l[1],f=l[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function FM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function kM(i){let e,t=i.extensions&&i.extensions[Ke.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+bu(t.attributes):e=i.indices+":"+bu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+bu(i.targets[n]);return e}function bu(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Yu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function BM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var zM=new ke,$u=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new LM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new ha(this.options.manager):this.textureLoader=new pa(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Br(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return ss(r,a,s),ui(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,u]of o.children.entries())r(u,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ke.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(Ii.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=vu[s.type],a=er[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new pt(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=vu[s.type],l=er[s.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,f=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0,v,g;if(d&&d!==h){let p=Math.floor(f/d),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,_=t.cache.get(y);_||(v=new l(a,p*d,s.count*d/u),_=new Rr(v,d/u),t.cache.add(y,_)),g=new Cr(_,c,f%d/u,m)}else a===null?v=new l(s.count*c):v=new l(a,f,s.count*c),g=new pt(v,c,m);if(s.sparse!==void 0){let p=vu.SCALAR,y=er[s.sparse.indices.componentType],_=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,A=new y(o[1],_,s.sparse.count*p),M=new l(o[2],x,s.sparse.count*c);a!==null&&(g=new pt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let w=0,E=A.length;w<E;w++){let b=A[w];if(g.setX(b,M[w*c]),c>=2&&g.setY(b,M[w*c+1]),c>=3&&g.setZ(b,M[w*c+2]),c>=4&&g.setW(b,M[w*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return u.magFilter=Vf[f.magFilter]||Gt,u.minFilter=Vf[f.minFilter]||kn,u.wrapS=Gf[f.wrapS]||qi,u.wrapT=Gf[f.wrapT]||qi,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Wt&&u.minFilter!==Gt,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=s.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;let f=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(c).then(function(h){return new Promise(function(f,d){let m=f;t.isImageBitmapLoader===!0&&(m=function(v){let g=new Ft(v);g.needsUpdate=!0,f(g)}),t.load(Ii.resolveURL(h,r.path),m,void 0,d)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),ui(h,o),h.userData.mimeType=o.mimeType||BM(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Ke.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[Ke.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[Ke.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Pr,jt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new ji,jt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return $s}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[Ke.KHR_MATERIALS_UNLIT]){let h=s[Ke.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new Ie(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Yt),a.opacity=f[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,_t)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=vt);let u=r.alphaMode||Mu.OPAQUE;if(u===Mu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Mu.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==St&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new xe(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==St&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==St){let h=r.emissiveFactor;a.emissive=new Ie().setRGB(h[0],h[1],h[2],Yt)}return r.emissiveTexture!==void 0&&o!==St&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,_t)),Promise.all(l).then(function(){let h=new o(a);return r.name&&(h.name=r.name),ui(h,r),t.associations.set(h,{materials:e}),r.extensions&&ss(s,h,r),h})}createUniqueName(e){let t=ut.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[Ke.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Wf(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],u=kM(l),h=s[u];if(h)o.push(h.promise);else{let f;l.extensions&&l.extensions[Ke.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=Wf(new ht,l,t),s[u]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let u=o[c].material===void 0?NM(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let d=0,m=u.length;d<m;d++){let v=u[d],g=o[d],p,y=l[d];if(g.mode===Tn.TRIANGLES||g.mode===Tn.TRIANGLE_STRIP||g.mode===Tn.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new $i(v,y):new je(v,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===Tn.TRIANGLE_STRIP?p.geometry=du(p.geometry,xa):g.mode===Tn.TRIANGLE_FAN&&(p.geometry=du(p.geometry,Vr));else if(g.mode===Tn.LINES)p=new qs(v,y);else if(g.mode===Tn.LINE_STRIP)p=new Xs(v,y);else if(g.mode===Tn.LINE_LOOP)p=new Qo(v,y);else if(g.mode===Tn.POINTS)p=new ea(v,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&FM(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),ui(p,r),g.extensions&&ss(s,p,g),t.assignFinalMaterial(p),h.push(p)}for(let d=0,m=h.length;d<m;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&ss(s,h[0],r),h[0];let f=new It;r.extensions&&ss(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,m=h.length;d<m;d++)f.add(h[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new wt(Ji.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Vs(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ui(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,u=o.length;l<u;l++){let h=o[l];if(h){a.push(h);let f=new ke;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new jo(a,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,f=s.channels.length;h<f;h++){let d=s.channels[h],m=s.samplers[d.sampler],v=d.target,g=v.node,p=s.parameters!==void 0?s.parameters[m.input]:m.input,y=s.parameters!==void 0?s.parameters[m.output]:m.output;v.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",y)),l.push(m),u.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){let f=h[0],d=h[1],m=h[2],v=h[3],g=h[4],p=[];for(let y=0,_=f.length;y<_;y++){let x=f[y],A=d[y],M=m[y],w=v[y],E=g[y];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();let b=n._createAnimationTracks(x,A,M,w,E);if(b)for(let T=0;T<b.length;T++)p.push(b[T])}return new Zs(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let u=l[0],h=l[1],f=l[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,zM)});for(let d=0,m=h.length;d<m;d++)u.add(h[d]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new Ir:l.length>1?u=new It:l.length===1?u=l[0]:u=new mt,u!==l[0])for(let h=0,f=l.length;h<f;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=o),ui(u,r),r.extensions&&ss(n,u,r),r.matrix!==void 0){let h=new ke;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new It;n.name&&(r.name=s.createUniqueName(n.name)),ui(r,n),n.extensions&&ss(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);let l=u=>{let h=new Map;for(let[f,d]of s.associations)(f instanceof jt||f instanceof Ft)&&h.set(f,d);return u.traverse(f=>{let d=s.associations.get(f);d!=null&&h.set(f,d)}),h};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,c=[];Ui[r.path]===Ui.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(Ui[r.path]){case Ui.weights:l=si;break;case Ui.rotation:l=ri;break;case Ui.position:case Ui.scale:l=oi;break;default:n.itemSize===1?l=si:l=oi;break}let u=s.interpolation!==void 0?UM[s.interpolation]:ks,h=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){let m=new l(c[f]+"."+Ui[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Yu(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof ri?Xu:Pa;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function HM(i,e,t){let n=e.attributes,s=new nn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new O(c[0],c[1],c[2]),new O(l[0],l[1],l[2])),a.normalized){let u=Yu(er[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new O,c=new O;for(let l=0,u=r.length;l<u;l++){let h=r[l];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],d=f.min,m=f.max;if(d!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),f.normalized){let v=Yu(er[f.componentType]);c.multiplyScalar(v)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new ln;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Wf(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(let o in n){let a=qu[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return Je.workingColorSpace!==Yt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Je.workingColorSpace}" not supported.`),ui(i,e),HM(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?OM(i,e.targets,t):i})}var VM=new Ia,GM=i=>new Promise((e,t)=>VM.load(i,e,void 0,t));function Zu(i){i.scene.updateMatrixWorld(!0);let e=[];if(i.scene.traverse(r=>{if(!r.isMesh)return;let o=r.geometry.clone().applyMatrix4(r.matrixWorld);for(let a of Object.keys(o.attributes))["position","normal","color"].includes(a)||o.deleteAttribute(a);e.push(o)}),!e.length)return null;let t=e.every(r=>r.index),n=e.every(r=>!r.index),s=e.length===1?e[0]:t||n?ns(e):ns(e.map(r=>r.index?r.toNonIndexed():r));if(s&&!s.attributes.color){let r=new Float32Array(s.attributes.position.count*3).fill(1);s.setAttribute("color",new pt(r,3))}return s}async function qf(){let i={manifest:null,chars:{},clips:null,upperBones:null,items:{},parts:{},box:null,props:{},decorAlias:{},runGroundSpeed:ae.runGroundSpeed},e;try{let t=await fetch(ae.glbDir+"manifest.json",{cache:"no-store"});if(!t.ok)return i;e=await t.json()}catch{return i}return i.manifest=e,i.decorAlias=e.decorAlias||{},e.runGroundSpeed&&e.runGroundSpeed.gameMetersPerSec&&(i.runGroundSpeed=e.runGroundSpeed.gameMetersPerSec),await Promise.all((e.files||[]).map(async t=>{let n;try{n=await GM(ae.glbDir+t.file)}catch(s){console.warn("GLB load failed",t.file,s);return}switch(t.kind){case"character":i.chars[t.id]={gltf:n,info:t};break;case"animations":i.clips=n.animations,i.upperBones=t.upperBodyBones||null;break;case"item":i.items[t.id]={geo:Zu(n),info:t};break;case"itembox":i.box=Zu(n);break;case"prop":i.props[t.file]=Zu(n);break;case"part":{let s=null;n.scene.traverse(r=>{!s&&r.isSkinnedMesh&&(s=r)}),s&&(i.parts[t.id]={geo:s.geometry,info:t});break}default:break}})),i}function WM(i){if(!i)return 0;let e=t=>t>0?Math.min(1,t/rt.boostFade):0;return Math.max(e(i.boostT||0),e(i.padT||0)*rt.padStrength)}function Yf(i){let e=new wt(rt.fov,i,rt.near,rt.far),t=new O,n=new O,s=new O,r=new O,o=!1,a=0,c=0,l=0,u=rt.shakeAmp,h=rt.shakeTime,f=null,d=0,m=!1,v=[0,0,0],g=[0,0,0];function p(x,A,M,w={}){let E=rt.back,b=rt.lookAhead,T=rt.sideFollow,R=Math.cos(A.heading),V=Math.sin(A.heading),G=w.state==="Down";G&&f!=="Down"&&(c=h=rt.shakeTime,u=rt.shakeAmp);let N=WM(w);N>0&&!m&&(c=h=rt.boostShakeTime,u=rt.boostShakeAmp),m=N>0,d+=(N-d)*(1-Math.exp(-M/(N>d?rt.fovInLag:rt.fovOutLag))),f=w.state,a+=((G?rt.downDrop:0)-a)*(1-Math.exp(-M/rt.downDropLag));let P=E+rt.boostBack*d;x.toWorld(A.s-P*R,A.d-P*V*T,rt.height-a-rt.boostDrop*d,v),x.toWorld(A.s+b*R,A.d+b*V*T,rt.lookHeight-a*.5,g),s.set(v[0],v[1],v[2]),r.set(g[0],g[1],g[2]),o||(t.copy(s),n.copy(r),o=!0);let D=1-Math.exp(-M/rt.lag);if(t.lerp(s,D),n.lerp(r,D),e.position.copy(t),c>0){c-=M,l+=M;let U=u*Math.max(0,c/h);e.position.x+=Math.sin(l*rt.shakeFreq)*U,e.position.y+=Math.cos(l*rt.shakeFreq*1.3)*U}e.lookAt(n);let B=rt.fov+(rt.fovBoost-rt.fov)*d*d*(3-2*d);Math.abs(B-e.fov)>.001&&(e.fov=B,e.updateProjectionMatrix())}function y(){o=!1,a=0,c=0,d=0,m=!1,e.fov=rt.fov,e.updateProjectionMatrix()}let _=()=>d;return{cam:e,update:p,snap:y,get boostK(){return _()}}}var tr=ae.propColors,pn=new ke,La=new Xt,Yr=new O,$f=new O,Da=new un,XM=new ke().makeScale(0,0,0),Zf=new O(1,1,1);function qM(i){let e=new Ti;for(let t=0;t<10;t++){let n=t/10*Math.PI*2+Math.PI/2,s=t%2?i*.45:i;t?e.lineTo(Math.cos(n)*s,Math.sin(n)*s):e.moveTo(Math.cos(n)*s,Math.sin(n)*s)}return new oa(e,{depth:i*.3,bevelEnabled:!1}).center()}function jf(i,e,t,n=null){let s=[0,0,0],r=new hn(new Ys(ae.shadowRadius,20).rotateX(-Math.PI/2),new St({color:0,transparent:!0,opacity:ae.shadowOpacity,depthWrite:!1}),t+64);r.renderOrder=1,r.frustumCulled=!1,i.add(r);let o=t*Math.max(ae.starsPerRunner,ae.starsStunned),a=new hn(qM(ae.starSize),new St({color:tr.star}),o);a.frustumCulled=!1,i.add(a);let c=new aa(.07,0),l=new hn(c,new St({color:tr.splash,transparent:!0,opacity:.85}),ae.splashPool);l.frustumCulled=!1,i.add(l);let u=Array.from({length:ae.splashPool},()=>({life:0,p:new O,v:new O})),h=0,f=null,d=0,m,v;if(n&&n.box){m=n.box.clone(),m.computeBoundingBox();let P=m.boundingBox,D=new O,B=new O;if(P.getSize(D),P.getCenter(B),m.translate(-B.x,-B.y,-B.z),ae.boxGlbFit){let U=ae.boxSize/Math.max(D.x,D.z,.001);m.scale(U,U,U)}v=zn()}else m=new qt(ae.boxSize,ae.boxSize,ae.boxSize),v=new Kt({color:tr.box,emissive:new Ie(tr.box).multiplyScalar(.25)});function g(P){f&&d>=P||(f&&(f.removeFromParent(),f.dispose()),d=Math.max(P,8),f=new hn(m,v,d),f.frustumCulled=!1,i.add(f))}let p=new hn(new wi(ae.projectileRadius,10,8),new St({color:tr.water_shot,transparent:!0,opacity:.9}),ae.maxProjectiles),y=new hn(new wi(ae.projectileRadius*1.4,10,8),new Kt({color:tr.projectile}),ae.maxProjectiles);for(let P of[p,y])P.frustumCulled=!1,i.add(P);let _=ae.speedLines,x=new ht,A=new Float32Array(_*6);x.setAttribute("position",new pt(A,3));let M=new ji({color:16777215,transparent:!0,opacity:0,depthTest:!1}),w=new qs(x,M);w.frustumCulled=!1,w.renderOrder=10,e.add(w),e.parent||i.add(e);let E=Array.from({length:_},(P,D)=>({a:D/_*Math.PI*2+D*1.7,r:0,z:0})),b=(()=>{let P=12345;return()=>(P=P*16807%2147483647)/2147483647})();for(let P of E)P.r=.9+b()*1.6,P.z=-2-b()*18,P.a+=b();let T=0,R=(()=>{let P=ae.boostTrailLen,D=.16,B=[.45,.75],U=[],z=[],oe=[];[-.22,.22].forEach((Me,Re)=>{let te=B[Re],le=U.length/3;U.push(Me,te-D/2,0,Me,te+D/2,0,Me,te-D/4,P,Me,te+D/4,P),z.push(0,0,0,1,1,0,1,1),oe.push(le,le+2,le+1,le+1,le+2,le+3)});let de=new ht;return de.setAttribute("position",new Ze(U,3)),de.setAttribute("uv",new Ze(z,2)),de.setIndex(oe),de})(),V=new vn({uniforms:{uColor:{value:new Ie(ae.boostTrailColor)},uAlpha:{value:0},uTime:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 uColor; uniform float uAlpha; uniform float uTime; varying vec2 vUv; void main(){ float a = (1.0 - vUv.x) * (1.0 - abs(vUv.y * 2.0 - 1.0)) * (0.7 + 0.3 * sin(vUv.x * 18.0 - uTime * 30.0)); gl_FragColor = vec4(uColor, a * uAlpha); }",transparent:!0,depthWrite:!1,blending:Oo,side:vt}),G=new je(R,V);G.frustumCulled=!1,G.visible=!1,i.add(G);function N(P){for(let D=0;D<ae.splashParticles;D++){let B=u[h];h=(h+1)%u.length,B.life=ae.splashLife,B.p.copy(P);let U=b()*Math.PI*2,z=.5+b();B.v.set(Math.cos(U),z,Math.sin(U)).multiplyScalar(ae.splashSpeed*(.5+b()*.6))}}return{spawnSplash:N,update({track:P,runners:D,states:B,world:U,dt:z,time:oe,player:de,actors:Me,boostK:Re=0,playerIdx:te=0}){let le=0;for(let Z=0;Z<B.length;Z++){let L=B[Z];if(!L)continue;P.toWorld(L.s,L.d,.03,s);let pe=Math.max(.45,1-(L.h||0)*.5);pn.makeScale(pe,1,pe).setPosition(s[0],s[1],s[2]),r.setMatrixAt(le++,pn)}let be=U&&U.boxes||[];for(let Z=0;Z<be.length&&le<r.count;Z++){let L=be[Z];L.active&&(P.toWorld(L.s,L.d,.03,s),pn.makeScale(.9,1,.9).setPosition(s[0],s[1],s[2]),r.setMatrixAt(le++,pn))}r.count=le,r.instanceMatrix.needsUpdate=!0;let j=0;for(let Z=0;Z<D.length;Z++){let L=D[Z];if(!L||L.state!=="Down"||!Me)continue;Me.starWorld(Z,Yr);let pe=L.stunned?ae.starsStunned:ae.starsPerRunner,re=ae.starOrbitR*(L.stunned?ae.starStunOrbitMul:1);Zf.setScalar(L.stunned?ae.starStunScale:1);for(let H=0;H<pe;H++){let q=oe*ae.starOrbitSpeed+H/pe*Math.PI*2;Da.set(0,q*2,0),La.setFromEuler(Da),pn.compose($f.set(Yr.x+Math.cos(q)*re,Yr.y+Math.sin(q*2)*.05,Yr.z+Math.sin(q)*re),La,Zf),a.setMatrixAt(j++,pn)}}a.count=j,a.instanceMatrix.needsUpdate=!0;let he=0;for(let Z of u){if(Z.life<=0)continue;Z.life-=z,Z.v.y-=9.8*z,Z.p.addScaledVector(Z.v,z);let L=Math.max(.01,Z.life/ae.splashLife);pn.makeScale(L,L,L).setPosition(Z.p),l.setMatrixAt(he++,pn)}if(l.count=he,l.instanceMatrix.needsUpdate=!0,be.length){g(be.length),f.count=d;for(let Z=0;Z<d;Z++){let L=be[Z];if(!L||!L.active){f.setMatrixAt(Z,XM);continue}P.toWorld(L.s,L.d,ae.boxHover+Math.sin(oe*2+Z)*ae.boxBob,s),Da.set(n&&n.box?0:.4,oe*ae.boxSpin+Z,n&&n.box?0:.3),La.setFromEuler(Da),pn.compose($f.set(s[0],s[1],s[2]),La,Yr.set(1,1,1)),f.setMatrixAt(Z,pn)}f.instanceMatrix.needsUpdate=!0}else f&&(f.count=0);let ye=U&&U.projectiles||[],ge=0,Pe=0;for(let Z of ye){P.toWorld(Z.s,Z.d,Z.h??.9,s),pn.makeTranslation(s[0],s[1],s[2]);let L=!Z.kind||/water/.test(Z.kind);L&&ge<ae.maxProjectiles?p.setMatrixAt(ge++,pn):!L&&Pe<ae.maxProjectiles&&y.setMatrixAt(Pe++,pn)}p.count=ge,y.count=Pe,p.instanceMatrix.needsUpdate=!0,y.instanceMatrix.needsUpdate=!0;let ie=Math.max(ae.speedLineAlphaBoost*Re,de&&de.draft?ae.speedLineAlphaDraft:0);if(T+=(ie-T)*Math.min(1,z*10),M.opacity=T,w.visible=T>.02,w.visible){for(let Z=0;Z<_;Z++){let L=E[Z];L.z+=ae.speedLineSpeed*(1+Re)*z,L.z>-1&&(L.z-=20);let pe=Math.cos(L.a)*L.r*1.6,re=Math.sin(L.a)*L.r,H=ae.speedLineLen*(1+Re);A.set([pe,re,L.z,pe*.9,re*.9,L.z-H],Z*6)}x.attributes.position.needsUpdate=!0}if(V.uniforms.uAlpha.value=ae.boostTrailAlpha*Re,V.uniforms.uTime.value=oe,G.visible=!!(Re>.03&&Me&&Me.list[te]),G.visible){let Z=Me.list[te].root;G.position.copy(Z.position),G.quaternion.copy(Z.quaternion)}},worldOf(P,D,B,U){return P.toWorld(D.s,D.d,B,s),U.set(s[0],s[1],s[2])}}}function Kf(i,{forceLow:e=!1}={}){let t=window.devicePixelRatio||1,n=!1,s=0,r=0,o=li.fpsWarmup,a=0,c=()=>i.setPixelRatio(Math.min(t,n?ae.lowPixelRatio:ae.maxPixelRatio)),l=u=>{n=u,c()};return c(),e&&l(!0),{get low(){return n},get pixelRatio(){return i.getPixelRatio()},shouldRender(u){if(!n)return a=u,!0;let h=1e3/li.lowFps-2;return u-a>=h?(a=u,!0):!1},sample(u){if(!n){if(o>0){o-=u;return}u>.25||(s+=u,r++,s>=li.fpsWindow&&(r/s<li.fpsLow&&l(!0),s=0,r=0))}},setLow:l}}function Jf(i=window){let e=new Set,t=r=>{let o=r.target&&r.target.tagName;o==="INPUT"||o==="SELECT"||o==="TEXTAREA"||(["ArrowLeft","ArrowRight","Space","ShiftLeft","ShiftRight","KeyZ"].includes(r.code)&&r.preventDefault(),e.add(r.code))},n=r=>e.delete(r.code),s=()=>e.clear();return i.addEventListener("keydown",t),i.addEventListener("keyup",n),i.addEventListener("blur",s),{read(r){let o=(e.has("ArrowRight")?1:0)-(e.has("ArrowLeft")?1:0);return{tick:r,steer:o,jump:e.has("Space"),slide:e.has("ShiftLeft")||e.has("ShiftRight"),use:e.has("KeyZ")}},dispose(){i.removeEventListener("keydown",t),i.removeEventListener("keyup",n),i.removeEventListener("blur",s)}}}function ju(){return"ontouchstart"in window||(navigator.maxTouchPoints||0)>0||/[?&]touch=1/.test(location.search)}function Qf(i,{showKeys:e=!ju()}={}){let t=document.createElement("div");t.id="touch";let n=E=>e?`<kbd>${E}</kbd>`:"";t.innerHTML=`
    <div id="steerZone"><div id="steerBase"><div id="steerKnob"></div></div></div>
    <button id="btnUse" class="tbtn empty" aria-label="\uC544\uC774\uD15C \uC0AC\uC6A9"><canvas class="ico" width="64" height="64"></canvas><span class="lbl">\uC544\uC774\uD15C \uC5C6\uC74C</span><b class="cnt"></b>${n("Z")}</button>
    <button id="btnSlide" class="tbtn" aria-label="\uC2AC\uB77C\uC774\uB529"><span class="lbl">\uC2AC\uB77C\uC774\uB529</span>${n("Shift")}</button>
    <button id="btnJump" class="tbtn" aria-label="\uC810\uD504"><span class="lbl">\uC810\uD504</span>${n("Space")}</button>`,i.appendChild(t);let s=t.querySelector("#steerZone"),r=t.querySelector("#steerBase"),o=t.querySelector("#steerKnob"),a=t.querySelector("#btnUse"),c=t.querySelector("#btnSlide"),l=t.querySelector("#btnJump"),u=(E,b,T,R)=>{let V=T*Math.PI/180;E.style.width=E.style.height=b+"px";let G=Qe.buttonArcInset+R*Math.cos(V),N=Qe.buttonArcInset+R*Math.sin(V);E.style.right=`calc(env(safe-area-inset-right) + ${G-b/2}px)`,E.style.bottom=`calc(env(safe-area-inset-bottom) + ${N-b/2}px)`};u(l,Qe.buttonSizeMain,0,0),u(c,Qe.buttonSize,Qe.buttonArcDeg.slide,Qe.buttonArcRadius),u(a,Qe.buttonSizeItem,Qe.buttonArcDeg.use,Qe.buttonArcRadius);let h=a.querySelector(".ico"),f=a.querySelector(".lbl"),d=a.querySelector(".cnt"),m=h.getContext("2d"),v="",g=null,p=0,y=0,_={},x=(E,b)=>{let T=_[E]={held:!1,latch:!1,id:null};b.addEventListener("pointerdown",V=>{T.held=!0,T.latch=!0,T.id=V.pointerId,b.classList.add("on");try{b.setPointerCapture(V.pointerId)}catch{}V.preventDefault()});let R=V=>{T.id!==null&&V.pointerId!==T.id||(T.held=!1,T.id=null,b.classList.remove("on"))};b.addEventListener("pointerup",R),b.addEventListener("pointercancel",R)};x("use",a),x("jump",l),x("slide",c);let A=E=>{let b=_[E],T=b.held||b.latch;return b.latch=!1,T},M=E=>{o.style.transform=`translateX(${E}px)`};s.addEventListener("pointerdown",E=>{if(g===null){g=E.pointerId,p=E.clientX;try{s.setPointerCapture(E.pointerId)}catch{}r.style.left=E.clientX-50+"px",r.style.top=E.clientY-50+"px",r.classList.add("on"),M(0),E.preventDefault()}}),s.addEventListener("pointermove",E=>{if(E.pointerId!==g)return;let b=E.clientX-p;b=Math.max(-Qe.steerRadius,Math.min(Qe.steerRadius,b)),y=Math.abs(b)<Qe.steerDeadzone?0:b/Qe.steerRadius,M(b)});let w=E=>{E.pointerId===g&&(g=null,y=0,r.classList.remove("on"))};return s.addEventListener("pointerup",w),s.addEventListener("pointercancel",w),{el:t,setVisible(E){t.style.display=E?"":"none"},setItem(E,b,T){let R=E?`${E.id}:${E.uses}`:"";R!==v&&(v=R,a.classList.toggle("empty",!E),f.textContent=E?b:"\uC544\uC774\uD15C \uC5C6\uC74C",d.textContent=E&&E.uses!=null?`\xD7${E.uses}`:"",m.clearRect(0,0,64,64),E&&T&&m.drawImage(T,0,0,64,64),h.style.display=E&&T?"":"none")},pulseItem(){a.classList.remove("pulse"),a.offsetWidth,a.classList.add("pulse")},rects(){return{use:a.getBoundingClientRect(),jump:l.getBoundingClientRect(),slide:c.getBoundingClientRect(),steer:s.getBoundingClientRect()}},read(E){return{tick:E,steer:y,jump:A("jump"),slide:A("slide"),use:A("use")}}}}function ep(){let i=t=>t.preventDefault();document.addEventListener("touchmove",i,{passive:!1}),document.addEventListener("gesturestart",i),document.addEventListener("contextmenu",i),document.addEventListener("dblclick",i);let e=0;document.addEventListener("touchend",t=>{let n=performance.now();n-e<300&&!(t.target.closest&&t.target.closest(".allow-tap"))&&t.preventDefault(),e=n},{passive:!1})}function Ku(i,e){let t={tick:i,steer:0,jump:!1,slide:!1,use:!1};for(let n of e){let s=n.read(i);t.steer+=s.steer,t.jump||(t.jump=s.jump),t.slide||(t.slide=s.slide),t.use||(t.use=s.use)}return t.steer=Math.max(-1,Math.min(1,t.steer)),t}var $r=Object.fromEntries(Object.values(Nn).map(i=>[i.id,i.name])),YM=[["speed","\uC18D\uB3C4"],["accel",kt&&kt.model==="hp"?"\uD68C\uBCF5":"\uAC00\uC18D"],["power","\uD798"],["tough","\uB9F7\uC9D1"]];function $M(i){let e=Nn[i]||{};return kt&&kt.model==="hp"&&e.statsHp||e.stats||{}}var tp=i=>i>Qe.hpWarn?"#5ad16a":i>Qe.hpDanger?"#f5c518":"#e5484d",ZM={bat:"\uBC30\uD2B8 \uD718\uB450\uB974\uAE30",watergun:"\uBB3C\uCD1D \uC3D8\uAE30",soap:"\uBE44\uB204 \uB193\uAE30",shellpack:"\uB4F1\uAECD\uC9C8 \uBA54\uAE30",helmet:"\uC548\uC804\uBAA8 \uC4F0\uAE30",spring:"\uB300\uC810\uD504",megaphone:"\uD655\uC131\uAE30",drink:"\uB4DC\uB9C1\uD06C \uB9C8\uC2DC\uAE30"},np=i=>ZM[i]||`${Ua[i]||i} \uC4F0\uAE30`,Ua={bat:"\uC57C\uAD6C\uBC30\uD2B8",watergun:"\uBB3C\uCD1D",shellpack:"\uB4F1\uAECD\uC9C8 \uBC30\uB0AD",helmet:"\uC548\uC804\uBAA8",soap:"\uBE44\uB204",drink:"\uC5D0\uB108\uC9C0 \uB4DC\uB9C1\uD06C",spring:"\uC2A4\uD504\uB9C1 \uC2E0\uBC1C",megaphone:"\uD655\uC131\uAE30"},mn=(i,e,t,n)=>{let s=document.createElement(i);return e&&(s.id=e),t&&(s.className=t),n&&(s.innerHTML=n),s};function ip(i,{debug:e=!1}={}){let t=mn("div","hud2"),n=mn("div","rankBox",null,'<span id="rankN">-</span><span id="rankOf">/8</span><div id="lapT"></div><div id="hpBar"><div id="hpFill"></div><span id="hpTxt"></span></div>'),s=mn("canvas","minimap"),r=mn("div","slots",null,'<div class="slot" id="slotHand"><small>\uC190</small><b>-</b><i></i></div><div class="slot" id="slotBody"><small>\uBAB8</small><b>-</b><i></i></div>'),o=mn("div","tags"),a=mn("div","countdown"),c=mn("div","perf"),l=mn("div","toast");t.append(n,s,r,o,a,l,c),i.appendChild(t),c.style.display=e?"":"none";let u=Math.min(window.devicePixelRatio||1,2),h=Qe.minimapSize;s.width=s.height=h*u,s.style.width=s.style.height=h+"px";let f=s.getContext("2d"),d=null,m=null;function v(j){let he=1/0,ye=-1/0,ge=1/0,Pe=-1/0;for(let Q=0;Q<j.N;Q++){let I=j.pos[Q*3],S=j.pos[Q*3+2];he=Math.min(he,I),ye=Math.max(ye,I),ge=Math.min(ge,S),Pe=Math.max(Pe,S)}let ie=10,Z=(h-ie*2)/Math.max(ye-he,Pe-ge,1),L=ie+(h-ie*2-(ye-he)*Z)/2,pe=ie+(h-ie*2-(Pe-ge)*Z)/2;m=(Q,I)=>[(L+(Q-he)*Z)*u,(pe+(I-ge)*Z)*u],d=document.createElement("canvas"),d.width=d.height=h*u;let re=d.getContext("2d");re.lineJoin="round";let H=()=>{re.beginPath();for(let Q=0;Q<=j.N;Q++){let[I,S]=m(j.pos[Q%j.N*3],j.pos[Q%j.N*3+2]);Q?re.lineTo(I,S):re.moveTo(I,S)}};re.strokeStyle="rgba(255,255,255,.9)",re.lineWidth=7*u,H(),re.stroke(),re.strokeStyle="rgba(120,96,70,.9)",re.lineWidth=4*u,H(),re.stroke();let[q,ne]=m(j.pos[0],j.pos[2]);re.fillStyle="#fff",re.fillRect(q-3*u,ne-3*u,6*u,6*u)}let g=[0,0,0];function p(j,he,ye,ge){f.clearRect(0,0,s.width,s.height),d&&f.drawImage(d,0,0);let Pe=he.map((ie,Z)=>Z).filter(ie=>ie!==ge).concat([ge]);for(let ie of Pe){let Z=ye[ie];if(!Z)continue;j.toWorld(Z.s,Z.d,0,g);let[L,pe]=m(g[0],g[2]),re=ie===ge;f.beginPath(),f.arc(L,pe,(re?5.5:4)*u,0,Math.PI*2),f.fillStyle=ae.idColors[ie%8],f.fill(),f.lineWidth=(re?2.5:1.2)*u,f.strokeStyle="#fff",f.stroke()}}let y=[];function _(j,he,ye){o.innerHTML="",y=j.map((ge,Pe)=>{let ie=mn("div",null,"tag",`<i style="background:${ae.idColors[Pe%8]}"></i><span>${ye&&ye[Pe]?sp(ye[Pe]):`${Pe+1} ${$r[ge.charId]||ge.charId||""}`}</span><b class="thp"><u></u></b>`);return o.appendChild(ie),ie.style.display="none",Pe===he&&ie.classList.add("me"),ie})}let x=new O,A=new O;function M(j,he,ye,ge,Pe){let ie=window.innerWidth,Z=window.innerHeight;he.getWorldDirection(A);for(let L=0;L<y.length;L++){let pe=y[L];if(L===ye){pe.style.display="none";continue}j.overheadWorld(L,x);let re=x.distanceTo(ge),H=x.clone().sub(he.position).dot(A)>0;if(re>Qe.nameDist||!H){pe.style.display="none";continue}x.project(he),pe.style.display="",pe.style.transform=`translate(${(x.x+1)/2*ie}px, ${(1-x.y)/2*Z}px) translate(-50%, -100%)`,pe.style.opacity=String(Math.max(.35,1-re/Qe.nameDist));let q=Pe[L],ne=pe.querySelector(".thp");if(q&&q.hpMax>0){let Q=Math.max(0,q.hp/q.hpMax);ne.style.display="block",ne.firstChild.style.width=(Q*100).toFixed(0)+"%",ne.firstChild.style.background=q.stunned?"#9aa0b4":tp(Q)}else ne.style.display="none"}}let w=r.querySelector("#slotHand"),E=r.querySelector("#slotBody"),b="";function T(j){let he=JSON.stringify([j.hand,j.body]);if(he!==b){b=he;for(let[ye,ge]of[[w,j.hand],[E,j.body]])ye.querySelector("b").textContent=ge?Ua[ge.id]||ge.id:"-",ye.querySelector("i").textContent=ge&&ge.uses!=null?`\xD7${ge.uses}`:"",ye.classList.toggle("full",!!ge)}}let R=0,V=null;function G(j,he,ye){if(j==="countdown"){let ge=Math.max(1,Math.ceil(he));ge!==V&&(a.textContent=String(ge),a.classList.remove("pop"),a.offsetWidth,a.classList.add("pop"),V=ge),a.style.display="",R=Qe.countdownGoTime}else R>0&&j==="race"?(V!=="GO"&&(a.textContent="GO!",a.classList.remove("pop"),a.offsetWidth,a.classList.add("pop"),V="GO"),R-=ye,a.style.display=""):a.style.display="none"}let N=n.querySelector("#hpBar"),P=n.querySelector("#hpFill"),D=n.querySelector("#hpTxt"),B=0;function U(j,he){if(!(j.hpMax>0)){N.style.display="none";return}N.style.display="block";let ye=Math.max(0,Math.min(1,j.hp/j.hpMax));P.style.width=(ye*100).toFixed(1)+"%",P.style.background=j.stunned?"#9aa0b4":tp(ye),D.textContent=j.stunned?"\uAE30\uC808":`${Math.ceil(j.hp)} / ${Math.round(j.hpMax)}`,B>0&&(B-=he,B<=0&&N.classList.remove("flash"))}function z(j){j>0&&(N.classList.remove("flash"),N.offsetWidth,N.classList.add("flash"),B=Qe.hpFlashTime)}let oe=0;function de(j){l.textContent=j,l.style.display="",oe=1.2}let Me=0,Re=0,te=0,le=0;function be(j,he,ye){if(Me+=j,Re++,le=Math.max(le,j*1e3),Me<.5)return;te=Re/Me,Me=0,Re=0;let ge=he.calls>li.drawCalls||he.triangles>li.triangles;c.innerHTML=`${te.toFixed(0)} fps \xB7 \uCD5C\uB300 ${le.toFixed(0)}ms<br><span class="${ge?"warn":""}">\uB4DC\uB85C\uC6B0\uCF5C ${he.calls}/${li.drawCalls} \xB7 \uC0BC\uAC01\uD615 ${he.triangles}</span><br>${ye}`,le=0}return{el:t,setTrack(j){v(j)},setRunners(j,he,ye=null){_(j,he,ye),b="",V=null,R=0},showToast:de,flashDamage:z,update({dt:j,track:he,runners:ye,states:ge,playerIdx:Pe,phase:ie,countdown:Z,actors:L,camera:pe,info:re,perfExtra:H}){let q=ye[Pe];if(!q)return;n.querySelector("#rankN").textContent=q.rank||"-",n.querySelector("#rankOf").textContent=`/${ye.length}`;let ne=he.laps||3;n.querySelector("#lapT").textContent=q.finished?"\uC644\uC8FC!":`\uBC14\uD034 ${Math.min((q.lap||0)+1,ne)} / ${ne}`,p(he,ye,ge,Pe),T(q);let Q=new O;L.overheadWorld(Pe,Q),M(L,pe,Pe,Q,ye),U(q,j),G(ie,Z,j),oe>0&&(oe-=j,oe<=0&&(l.style.display="none")),e&&be(j,re,H||"")}}}function jM(i){let e=Nn[i]||{name:i},t=$M(i),n=YM.map(([s,r])=>`<span class="st"><em>${r}</em><s>${"<i></i>".repeat(t[s]||0)}${'<i class="off"></i>'.repeat(Math.max(0,5-(t[s]||0)))}</s></span>`).join("");return`<button class="pickBtn allow-tap" data-id="${i}"><b>${e.name}</b><small>${e.type||""} \xB7 ${e.job||""}</small><span class="stats">${n}</span></button>`}var sp=i=>String(i??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function rp(i,e=["daon","sora"]){let t=mn("div","pick","screen",`
    <h1>\uB09C\uC7A5 \uB7EC\uC2DC</h1><p>\uCE90\uB9AD\uD130\uB97C \uACE0\uB974\uC138\uC694</p>
    <div class="row">
      ${e.map(jM).join("")}
    </div>
    <p class="hint">\u2190 \u2192 \uC870\uD5A5 \xB7 Space \uC810\uD504 \xB7 Shift \uC2AC\uB77C\uC774\uB529 \xB7 Z \uC544\uC774\uD15C</p>
    <button id="btnPickBack" class="allow-tap ghost small">\u2190 \uCC98\uC74C\uC73C\uB85C</button>`),n=mn("div","result","screen",`<h2>\uACB0\uACFC</h2><ol id="resultList"></ol>
    <div class="row"><button id="btnRestart" class="allow-tap">\uB2E4\uC2DC \uD558\uAE30</button><button id="btnRepick" class="allow-tap ghost">\uCE90\uB9AD\uD130 \uBC14\uAFB8\uAE30</button></div>`),s=mn("div","rotate",null,'<div><div class="phone"></div><p>\uAC00\uB85C\uB85C \uB3CC\uB824 \uC8FC\uC138\uC694</p></div>');return i.append(t,n,s),n.style.display="none",{onPick(r){t.querySelectorAll(".pickBtn").forEach(o=>o.addEventListener("click",()=>r(o.dataset.id)))},onRestart(r){n.querySelector("#btnRestart").addEventListener("click",r)},onRepick(r){n.querySelector("#btnRepick").addEventListener("click",r)},showPick(r){t.style.display=r?"":"none"},onPickBack(r){t.querySelector("#btnPickBack").addEventListener("click",r)},showResult(r,o,a={}){let c=n.querySelector("#resultList"),l=d=>{let m=a.names&&a.names[d.idx];return m?`${sp(m)} \xB7 ${$r[d.charId]||d.charId}`:`${d.idx+1}\uBC88 ${$r[d.charId]||d.charId}`};c.innerHTML=r.map(d=>`<li class="${d.idx===o?"me":""}"><i style="background:${ae.idColors[d.idx%8]}"></i>${l(d)}${d.idx===o?" (\uB098)":""}</li>`).join("");let u=n.querySelector("#btnRestart"),h=n.querySelector("#btnRepick");u.textContent=a.restart===void 0?"\uB2E4\uC2DC \uD558\uAE30":a.restart||"",u.style.display=a.restart===null?"none":"",h.textContent=a.repick===void 0?"\uCE90\uB9AD\uD130 \uBC14\uAFB8\uAE30":a.repick||"",h.style.display=a.repick===null?"none":"";let f=n.querySelector(".note");f||(f=mn("p",null,"note"),n.appendChild(f)),f.textContent=a.note||"",n.style.display=""},hideResult(){n.style.display="none"},isPortrait(){return window.matchMedia("(orientation: portrait)").matches}}}var op="nanjang-rush-v1";function ap(){try{return JSON.parse(localStorage.getItem(op)||"{}")||{}}catch{return{}}}function KM(){try{let i=ap();i.hintsSeen=!0,localStorage.setItem(op,JSON.stringify(i))}catch{}}function JM(){return!!ap().hintsSeen||/[?&]hint=0/.test(location.search)}function QM(i){let e=i.width/2,t=i.left+e,n=i.top+e,s=i.bottom-e*.3;return{left:t-Math.sqrt(Math.max(0,e*e-(s-n)*(s-n)))+2+8,top:s,height:0}}function cp(i){let e=document.createElement("div");e.id="hint",i.appendChild(e);let t=0,n=!1,s=(o,a,c,l)=>{let u=l==="center"||l==="top"?(c.left+c.right)/2:c.left-8,h=l==="center"?c.top+c.height*.55:l==="top"?c.top-8:c.top+c.height/2;return`<div class="hintTip ${o} ${l}" style="left:${u}px;top:${h}px">${a}</div>`};function r(){n&&(n=!1,e.style.display="none",KM())}return{show(o,a){JM()||(n=!0,t=Qe.hintTime,e.innerHTML=s("steer",`\uC67C\uCABD \uD654\uBA74\uC744 \uB204\uB978 \uCC44 \uC88C\uC6B0\uB85C \uB04C\uC5B4 \uC870\uD5A5${a?"<br><kbd>\u2190</kbd><kbd>\u2192</kbd>":""}`,o.steer,"center")+s("use",`\uC0C1\uC790\uB97C \uBA39\uC73C\uBA74 \uC5EC\uAE30\uC11C \uC0AC\uC6A9${a?" <kbd>Z</kbd>":""}`,o.use,"right")+s("slide",`\uC2AC\uB77C\uC774\uB529${a?" <kbd>Shift</kbd>":""}`,o.slide,"right")+s("jump",`\uC810\uD504${a?" <kbd>Space</kbd>":""}`,QM(o.jump),"right"),e.style.display="block")},update(o,a){n&&(t-=o,(t<=0||a&&(a.steer||a.jump||a.slide||a.use))&&r())},close:r}}function lp(i,e){let t={},n=e&&e.items||{},s=Qe.iconSize,r=new Un(s,s,{colorSpace:_t}),o=new Gs;o.add(new Ks(16777215,9476264,2.2));let a=new Ci(16777215,1.6);a.position.set(1,2,3),o.add(a);let c=new wt(30,1,.01,50),l=new Uint8Array(s*s*4),u=i.getRenderTarget(),h=i.getClearColor(new Ie),f=i.getClearAlpha();i.setClearColor(0,0);for(let[d,m]of Object.entries(n)){if(!m.geo)continue;let v=new je(m.geo,zn());v.rotation.set(-.5,.8,.6),o.add(v);let g=new nn().setFromObject(v),p=g.getCenter(new O),y=g.getSize(new O).length()/2;c.position.set(p.x,p.y,p.z+y/Math.tan(Ji.degToRad(15))*1.05),c.lookAt(p),i.setRenderTarget(r),i.clear(),i.render(o,c),i.readRenderTargetPixels(r,0,0,s,s,l),o.remove(v);let _=document.createElement("canvas");_.width=_.height=s;let x=_.getContext("2d"),A=x.createImageData(s,s);for(let M=0;M<s;M++)A.data.set(l.subarray((s-1-M)*s*4,(s-M)*s*4),M*s*4);x.putImageData(A,0,0),t[d]=_}return i.setRenderTarget(u),i.setClearColor(h,f),r.dispose(),t}var Zr={L:{bits:1,ecc:[0,7,10,15,20,26,18],blocks:[0,1,1,1,1,1,2]},M:{bits:0,ecc:[0,10,16,26,18,24,16],blocks:[0,1,1,1,2,2,4]}},up=6;function dp(i){let e=(16*i+128)*i+64;if(i>=2){let t=Math.floor(i/7)+2;e-=(25*t-10)*t-55,i>=7&&(e-=36)}return e}var hp=(i,e)=>Math.floor(dp(i)/8)-Zr[e].ecc[i]*Zr[e].blocks[i];function Ju(i,e){let t=0;for(let n=7;n>=0;n--)t=t<<1^(t>>>7)*285,t^=(e>>>n&1)*i;return t&255}function eb(i){let e=new Array(i).fill(0);e[i-1]=1;let t=1;for(let n=0;n<i;n++){for(let s=0;s<e.length;s++)e[s]=Ju(e[s],t),s+1<e.length&&(e[s]^=e[s+1]);t=Ju(t,2)}return e}function tb(i,e){let t=new Array(e.length).fill(0);for(let n of i){let s=n^t.shift();t.push(0);for(let r=0;r<e.length;r++)t[r]^=Ju(e[r],s)}return t}function nb(i){if(i===1)return[];let e=Math.floor(i/7)+2,t=i*4+17,n=Math.ceil((i*4+4)/(e*2-2))*2,s=[6];for(let r=t-7;s.length<e;r-=n)s.splice(1,0,r);return s}var ib=[(i,e)=>(i+e)%2===0,(i,e)=>e%2===0,i=>i%3===0,(i,e)=>(i+e)%3===0,(i,e)=>(Math.floor(i/3)+Math.floor(e/2))%2===0,(i,e)=>i*e%2+i*e%3===0,(i,e)=>(i*e%2+i*e%3)%2===0,(i,e)=>((i+e)%2+i*e%3)%2===0];function fp(i,e="M"){let t=Array.from(new TextEncoder().encode(i)),n=1,s=N=>12+t.length*8<=hp(N,e)*8;for(;n<=up&&!s(n);)n++;if(n>up){if(e!=="L")return fp(i,"L");throw new Error("QR: \uAE00\uC790\uAC00 \uB108\uBB34 \uAE40")}let r=[],o=(N,P)=>{for(let D=P-1;D>=0;D--)r.push(N>>>D&1)};o(4,4),o(t.length,8);for(let N of t)o(N,8);let a=hp(n,e)*8;o(0,Math.min(4,a-r.length)),o(0,(8-r.length%8)%8);for(let N=236;r.length<a;N^=253)o(N,8);let c=[];for(let N=0;N<r.length;N+=8){let P=0;for(let D=0;D<8;D++)P=P<<1|r[N+D];c.push(P)}let l=Zr[e].blocks[n],u=Zr[e].ecc[n],h=Math.floor(dp(n)/8),f=l-h%l,d=Math.floor(h/l),m=eb(u),v=[];for(let N=0,P=0;N<l;N++){let D=d-u+(N<f?0:1),B=c.slice(P,P+D);P+=D;let U=tb(B,m);N<f&&B.push(0),v.push(B.concat(U))}let g=[];for(let N=0;N<v[0].length;N++)for(let P=0;P<v.length;P++)(N!==d-u||P>=f)&&g.push(v[P][N]);let p=n*4+17,y=Array.from({length:p},()=>new Array(p).fill(!1)),_=Array.from({length:p},()=>new Array(p).fill(!1)),x=(N,P,D)=>{y[P][N]=D,_[P][N]=!0};for(let N=0;N<p;N++)x(6,N,N%2===0),x(N,6,N%2===0);let A=(N,P)=>{for(let D=-4;D<=4;D++)for(let B=-4;B<=4;B++){let U=N+B,z=P+D,oe=Math.max(Math.abs(B),Math.abs(D));U>=0&&U<p&&z>=0&&z<p&&x(U,z,oe!==2&&oe!==4)}};A(3,3),A(p-4,3),A(3,p-4);let M=nb(n),w=M.length-1;for(let N=0;N<M.length;N++)for(let P=0;P<M.length;P++)if(!(N===0&&P===0||N===0&&P===w||N===w&&P===0))for(let D=-2;D<=2;D++)for(let B=-2;B<=2;B++)x(M[N]+B,M[P]+D,Math.max(Math.abs(B),Math.abs(D))!==1);let E=N=>{let P=Zr[e].bits<<3|N,D=P;for(let z=0;z<10;z++)D=D<<1^(D>>>9)*1335;let B=(P<<10|D)^21522,U=z=>(B>>>z&1)!==0;for(let z=0;z<=5;z++)x(8,z,U(z));x(8,7,U(6)),x(8,8,U(7)),x(7,8,U(8));for(let z=9;z<15;z++)x(14-z,8,U(z));for(let z=0;z<8;z++)x(p-1-z,8,U(z));for(let z=8;z<15;z++)x(8,p-15+z,U(z));x(8,p-8,!0)};E(0);let b=0;for(let N=p-1;N>=1;N-=2){N===6&&(N=5);for(let P=0;P<p;P++)for(let D=0;D<2;D++){let B=N-D,U=(N+1&2)===0,z=U?p-1-P:P;!_[z][B]&&b<g.length*8&&(y[z][B]=(g[b>>>3]>>>7-(b&7)&1)!==0,b++)}}let T=N=>{for(let P=0;P<p;P++)for(let D=0;D<p;D++)!_[P][D]&&ib[N](D,P)&&(y[P][D]=!y[P][D])},R=()=>{let N=0,P=0;for(let B=0;B<2;B++)for(let U=0;U<p;U++){let z=1;for(let oe=1;oe<p;oe++){let de=B?y[oe][U]:y[U][oe],Me=B?y[oe-1][U]:y[U][oe-1];de===Me?(z++,z===5?N+=3:z>5&&N++):z=1}}for(let B=0;B<p-1;B++)for(let U=0;U<p-1;U++){let z=y[B][U];z===y[B][U+1]&&z===y[B+1][U]&&z===y[B+1][U+1]&&(N+=3)}for(let B=0;B<p;B++)for(let U=0;U<p;U++)y[B][U]&&P++;let D=p*p;return N+=(Math.ceil(Math.abs(P*20-D*10)/D)-1)*10,N},V=0,G=1/0;for(let N=0;N<8;N++){T(N),E(N);let P=R();P<G&&(G=P,V=N),T(N)}return T(V),E(V),{size:p,version:n,mask:V,get:(N,P)=>y[P][N]}}function pp(i,e,t=4){let n=fp(e),s=n.size+8;i.width=i.height=s*t;let r=i.getContext("2d");r.fillStyle="#fff",r.fillRect(0,0,s*t,s*t),r.fillStyle="#000";for(let o=0;o<n.size;o++)for(let a=0;a<n.size;a++)n.get(a,o)&&r.fillRect((a+4)*t,(o+4)*t,t,t);return n}var gp="nanjang-rush-v1";function xp(){try{return JSON.parse(localStorage.getItem(gp)||"{}")||{}}catch{return{}}}function mp(i,e){try{let t=xp();t[i]=e,localStorage.setItem(gp,JSON.stringify(t))}catch{}}var Qu=i=>String(i??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),sb={self:"\uBC29\uC7A5",p2p:"\uC9C1\uC811",relay:"\uC911\uACC4"},rb=[["easy","\uC26C\uC6C0"],["normal","\uBCF4\uD1B5"],["hard","\uC5B4\uB824\uC6C0"]];function _p(i,{pickable:e=["daon","sora"]}={}){let t=document.createElement("div");t.id="lobbyRoot",t.innerHTML=`
    <div id="title" class="screen">
      <h1>\uB09C\uC7A5 \uB7EC\uC2DC</h1>
      <label class="nick allow-tap">\uB2C9\uB124\uC784 <input id="nickInput" maxlength="${Qe.nickMax}" autocomplete="off" spellcheck="false"></label>
      <div class="row">
        <button id="btnSolo" class="allow-tap">\uD63C\uC790 \uD558\uAE30</button>
        <button id="btnMulti" class="allow-tap">\uAC19\uC774 \uD558\uAE30</button>
      </div>
      <div class="row sub" id="multiRow" style="display:none">
        <button id="btnCreate" class="allow-tap">\uBC29 \uB9CC\uB4E4\uAE30</button>
        <span class="joinBox"><input id="codeInput" class="allow-tap" inputmode="numeric" pattern="[0-9]*" maxlength="4" placeholder="\uBC29 \uCF54\uB4DC 4\uC790\uB9AC" autocomplete="off"><button id="btnJoin" class="allow-tap">\uBC29 \uCC38\uAC00</button></span>
      </div>
      <p class="msg" id="titleMsg"></p>
    </div>
    <div id="lobby" class="screen" style="display:none">
      <div class="lobbyGrid">
        <div class="lobbyLeft">
          <small>\uBC29 \uCF54\uB4DC</small>
          <div id="roomCode">----</div>
          <canvas id="roomQr"></canvas>
          <small id="inviteHint">QR\uC744 \uCC0D\uAC70\uB098 \uCF54\uB4DC\uB97C \uC785\uB825\uD574 \uCC38\uAC00</small>
        </div>
        <div class="lobbyRight">
          <ol id="memberList"></ol>
          <div class="row tight" id="charRow">${e.map(d=>`<button class="charBtn allow-tap" data-id="${d}">${Qu((Nn[d]||{}).name||d)}</button>`).join("")}</div>
          <div class="row tight" id="hostRow">
            <label class="allow-tap">AI \uB09C\uC774\uB3C4 <select id="aiSel">${rb.map(([d,m])=>`<option value="${d}">${m}</option>`).join("")}</select></label>
          </div>
          <div class="row tight">
            <button id="btnReady" class="allow-tap">\uC900\uBE44</button>
            <button id="btnStart" class="allow-tap">\uC2DC\uC791</button>
            <button id="btnLeave" class="allow-tap ghost">\uB098\uAC00\uAE30</button>
          </div>
          <p class="msg" id="lobbyMsg"></p>
          <p class="hostNote" id="hostNote">\uBC29\uC7A5\uC740 \uD654\uBA74\uC744 \uB044\uAC70\uB098 \uC571\uC744 \uB0B4\uB9AC\uBA74 \uBC29\uC774 \uB2EB\uD799\uB2C8\uB2E4</p>
        </div>
      </div>
    </div>
    <div id="netToast"></div>`,i.appendChild(t);let n=d=>t.querySelector("#"+d),s=n("nickInput");s.value=xp().nick||"",s.addEventListener("change",()=>mp("nick",s.value.trim().slice(0,Qe.nickMax))),n("btnMulti").addEventListener("click",()=>{n("multiRow").style.display=""});let r=n("codeInput");r.addEventListener("input",()=>{r.value=r.value.replace(/\D/g,"").slice(0,4)});let o=null,a=d=>{let m=n("netToast");m.textContent=d,m.style.display="block",clearTimeout(o),o=setTimeout(()=>{m.style.display="none"},Qe.netToastMs)},c={},l=(d,m)=>{c[d]=m},u=(d,...m)=>c[d]&&c[d](...m),h=()=>{let d=s.value.trim().slice(0,Qe.nickMax)||Qe.defaultNick;return mp("nick",d),d};n("btnSolo").addEventListener("click",()=>u("solo")),n("btnCreate").addEventListener("click",()=>u("create",h())),n("btnJoin").addEventListener("click",()=>{/^\d{4}$/.test(r.value)?u("join",r.value,h()):n("titleMsg").textContent="\uBC29 \uCF54\uB4DC 4\uC790\uB9AC\uB97C \uC785\uB825\uD574 \uC8FC\uC138\uC694"}),r.addEventListener("keydown",d=>{d.key==="Enter"&&n("btnJoin").click()}),t.querySelectorAll(".charBtn").forEach(d=>d.addEventListener("click",()=>u("char",d.dataset.id))),n("btnReady").addEventListener("click",()=>u("ready")),n("btnStart").addEventListener("click",()=>u("start")),n("btnLeave").addEventListener("click",()=>u("leave")),n("aiSel").addEventListener("change",()=>u("settings",{aiLevel:n("aiSel").value}));let f="";return{on:l,toast:a,getNick:h,showTitle(d,m=""){n("title").style.display=d?"":"none",n("titleMsg").textContent=m,d&&(n("lobby").style.display="none")},setTitleMsg(d){n("titleMsg").textContent=d},showLobby(d){n("lobby").style.display=d?"":"none",d&&(n("title").style.display="none")},lobbyVisible:()=>n("lobby").style.display!=="none",titleVisible:()=>n("title").style.display!=="none",setLobbyMsg(d){n("lobbyMsg").textContent=d},render(d,{meId:m,isHost:v,invite:g}){if(n("roomCode").textContent=d.code||"----",g&&g!==f){f=g;try{pp(n("roomQr"),g,Qe.qrPx)}catch(x){console.warn("QR",x)}}let p=d.members||[];n("memberList").innerHTML=p.map((x,A)=>`
        <li class="${x.id===m?"me":""}">
          <i style="background:${ae.idColors[A%8]}"></i>
          <b>${Qu(x.nick||"???")}</b>${x.host?'<em class="badge">\uBC29\uC7A5</em>':""}
          <span class="ch">${Qu((Nn[x.charId]||{}).name||x.charId||"")}</span>
          <span class="path p-${x.path||"wait"}">${sb[x.path]||"\uC5F0\uACB0 \uC911"}</span>
          <span class="rd ${x.ready?"on":""}">${x.ready?"\uC900\uBE44":"\uB300\uAE30"}</span>
        </li>`).join("")+`<li class="ai">\uBE48\uC790\uB9AC ${Math.max(0,8-p.length)}\uBA85\uC740 AI\uAC00 \uCC44\uC6C1\uB2C8\uB2E4</li>`;let y=p.find(x=>x.id===m)||{};t.querySelectorAll(".charBtn").forEach(x=>x.classList.toggle("on",x.dataset.id===y.charId)),n("btnReady").textContent=y.ready?"\uC900\uBE44 \uCDE8\uC18C":"\uC900\uBE44",n("btnReady").classList.toggle("on",!!y.ready),n("btnStart").style.display=v?"":"none",n("btnReady").style.display=v?"none":"",n("hostRow").style.display=v?"":"none",n("hostNote").style.display=v?"":"none",n("aiSel").value=d.settings&&d.settings.aiLevel||"normal";let _=p.length>0&&p.every(x=>x.ready);n("btnStart").classList.toggle("dim",!_)}}}var ob={4001:"host-left",4002:"full",4005:"no-room",4006:"version",4007:"bad-hello"},ab={u:0,r:1},cb=["u","r"];function lb(i){let e=1;for(let r of i)e+=4+r.bytes.byteLength;let t=new Uint8Array(e),n=new DataView(t.buffer);t[0]=i.length;let s=1;for(let r of i)t[s]=r.dest,t[s+1]=ab[r.channel],n.setUint16(s+2,r.bytes.byteLength,!0),t.set(r.bytes,s+4),s+=4+r.bytes.byteLength;return t}function ub(i){let e=new DataView(i.buffer,i.byteOffset,i.byteLength),t=i[0],n=i[1],s=[],r=2;for(let o=0;o<n&&r+3<=i.length;o++){let a=e.getUint16(r+1,!0);s.push({from:t,channel:cb[i[r]]||"r",bytes:i.slice(r+3,r+3+a)}),r+=3+a}return s}function yp(i,{nick:e,version:t,WebSocketImpl:n=globalThis.WebSocket,setIntervalFn:s=setInterval,clearIntervalFn:r=clearInterval}={}){return new Promise((o,a)=>{let c=new n(i);c.binaryType="arraybuffer";let l=!1,u=!1,h=[],f=!1,d=null,m=null,v={selfId:0,hostId:0,isHost:!1,peers:new Map,stats:{sentFrames:0,sentMsgs:0,sentBytes:0,recvFrames:0},onPeers:null,onSignal:null,onRelay:null,onClose:null,sendSignal(y,_){u||c.send(JSON.stringify({t:"signal",to:y,data:_}))},sendRelay(y,_,x){return u||c.readyState!==1?!1:(h.push({dest:y,channel:_,bytes:x}),f||(f=!0,queueMicrotask(g)),!0)},close({bye:y=!0}={}){if(!u){u=!0,d&&r(d);try{y&&c.readyState===1&&c.send(JSON.stringify({t:"bye"})),c.close(1e3)}catch{}}}};function g(){if(f=!1,u||c.readyState!==1||!h.length){h=[];return}for(;h.length;){let y=0,_=1;for(;y<h.length&&y<255&&(y===0||_+4+h[y].bytes.byteLength<=Be.relayFrameMax);)_+=4+h[y].bytes.byteLength,y++;let x=h.splice(0,y),A=lb(x);c.send(A),v.stats.sentFrames++,v.stats.sentMsgs+=x.length,v.stats.sentBytes+=A.byteLength}}let p=y=>{v.peers=new Map(y.map(_=>[_.id,_])),v.onPeers&&v.onPeers(v.peers)};c.onopen=()=>c.send(JSON.stringify({t:"hello",nick:e,v:t})),c.onmessage=y=>{if(typeof y.data!="string"){if(v.stats.recvFrames++,v.onRelay)for(let x of ub(new Uint8Array(y.data)))v.onRelay(x.from,x.channel,x.bytes);return}if(y.data==="pong")return;let _;try{_=JSON.parse(y.data)}catch{return}_.t==="welcome"?(l=!0,v.selfId=_.id,v.hostId=_.hostId,v.isHost=_.id===_.hostId,v.peers=new Map(_.peers.map(x=>[x.id,x])),d=s(()=>{c.readyState===1&&c.send("ping")},Be.keepAliveMs),d&&d.unref&&d.unref(),o(v)):_.t==="peers"?p(_.peers):_.t==="signal"?v.onSignal&&v.onSignal(_.from,_.data):_.t==="refused"?m=_:_.t==="closed"&&(m=m||{reason:_.reason})},c.onclose=y=>{let _=u;u=!0,d&&r(d);let x={code:y.code,reason:m&&m.reason||ob[y.code]||"disconnected",hostVersion:m&&m.hostVersion};if(!l){let A=new Error(`\uBC29 \uC811\uC18D \uC2E4\uD328: ${x.reason}`);Object.assign(A,x),a(A);return}!_&&v.onClose&&v.onClose(x)},c.onerror=()=>{}})}var hb={ordered:!1,maxRetransmits:0},db={ordered:!0};function vp({room:i,RTC:e=globalThis.RTCPeerConnection,setTimeoutFn:t=setTimeout,clearTimeoutFn:n=clearTimeout,forceRelay:s=!1}={}){let r=new Map,o=!1,a=!1,c=!!e&&!s,l={onMessage:null,onPeer:null,onClose:null,selfId:i.selfId,hostId:i.hostId,isHost:i.isHost,stats:i.stats,send(M,w,E){let b=r.get(M);if(!b||b.state==="closed")return!1;if(b.state!=="open")return w==="r"&&b.queue.push(E),w==="r";if(b.path==="relay")return i.sendRelay(M,w,E);let T=w==="u"?b.chU:b.chR;if(!T||T.readyState!=="open"||w==="u"&&T.bufferedAmount>Be.uBufferMax)return!1;try{return T.send(E),!0}catch{return!1}},path:M=>{let w=r.get(M);return w&&w.state==="open"?w.path:null},peers:()=>[...r.keys()],lockPaths(M){o=!!M},close(M){if(!a){a=!0,i.close(M);for(let w of r.values())d(w,!1);r.clear()}}},u=M=>{l.onPeer&&l.onPeer(M.id,{state:M.state,path:M.state==="open"?M.path:null,nick:M.nick})};function h(M,w){let E={id:M,nick:w,state:"connecting",path:null,pc:null,chU:null,chR:null,queue:[],timer:null,wantP2p:!1};return r.set(M,E),u(E),E}function f(M){let w=M.pc;if(M.pc=null,M.chU=null,M.chR=null,w){w.onicecandidate=w.ondatachannel=w.onconnectionstatechange=null;try{w.close()}catch{}}}function d(M,w=!0){M.timer&&n(M.timer),M.timer=null,f(M),M.state!=="closed"&&(M.state="closed",w&&u(M))}function m(M,w){if(M.state==="closed")return;M.timer&&n(M.timer),M.timer=null,M.path=w,w==="relay"&&f(M),M.state="open",u(M);let E=M.queue;M.queue=[];for(let b of E)l.send(M.id,"r",b)}let v=M=>M.chU&&M.chR&&M.chU.readyState==="open"&&M.chR.readyState==="open";function g(M,w,E){w.binaryType="arraybuffer",E==="u"?M.chU=w:M.chR=w,w.onopen=()=>{!v(M)||M.state!=="connecting"||(l.isHost?M.wantP2p&&m(M,"p2p"):(i.sendSignal(M.id,{path:"p2p"}),m(M,"p2p")))},w.onmessage=b=>{l.onMessage&&M.state!=="closed"&&M.path!=="relay"&&l.onMessage(M.id,E,new Uint8Array(b.data))},w.onclose=()=>p(M)}function p(M){if(!(M.state!=="open"||M.path!=="p2p")){if(o){d(M);return}f(M),M.path="relay",u(M)}}function y(M){let w=new e({iceServers:[{urls:Be.stunUrls}]});return M.pc=w,w.onicecandidate=E=>{E.candidate&&i.sendSignal(M.id,{ice:E.candidate.toJSON?E.candidate.toJSON():E.candidate})},w.onconnectionstatechange=()=>{(w.connectionState==="failed"||w.connectionState==="closed")&&M.state==="open"&&p(M)},w}async function _(M){if(!c){i.sendSignal(M.id,{path:"relay"}),m(M,"relay");return}M.timer=t(()=>{M.state==="connecting"&&(i.sendSignal(M.id,{path:"relay"}),m(M,"relay"))},Be.p2pTimeoutMs);try{let w=y(M);g(M,w.createDataChannel("u",hb),"u"),g(M,w.createDataChannel("r",db),"r");let E=await w.createOffer();await w.setLocalDescription(E),i.sendSignal(M.id,{sdp:{type:w.localDescription.type,sdp:w.localDescription.sdp}})}catch{M.state==="connecting"&&(i.sendSignal(M.id,{path:"relay"}),m(M,"relay"))}}async function x(M,w){let E=r.get(M);if(!(!E||E.state==="closed"||!w))try{if(w.path){if(!l.isHost)return;if(w.path==="relay"){if(E.state==="open"&&E.path==="p2p"&&o)return;E.state==="open"?(f(E),E.path="relay",u(E)):m(E,"relay")}else E.state==="connecting"&&(E.wantP2p=!0,v(E)&&m(E,"p2p"))}else if(w.noRtc)!l.isHost&&E.state==="connecting"&&(i.sendSignal(E.id,{path:"relay"}),m(E,"relay"));else if(w.sdp)if(w.sdp.type==="offer"){if(!l.isHost)return;if(!c){i.sendSignal(M,{noRtc:!0});return}f(E);let b=y(E);b.ondatachannel=R=>{(R.channel.label==="u"||R.channel.label==="r")&&g(E,R.channel,R.channel.label)},await b.setRemoteDescription(w.sdp);let T=await b.createAnswer();await b.setLocalDescription(T),i.sendSignal(M,{sdp:{type:b.localDescription.type,sdp:b.localDescription.sdp}})}else E.pc&&await E.pc.setRemoteDescription(w.sdp);else w.ice&&E.pc&&await E.pc.addIceCandidate(w.ice)}catch{}}function A(M){if(a)return;let w=l.isHost?[...M.values()].filter(b=>b.id!==i.selfId):[...M.values()].filter(b=>b.id===i.hostId),E=new Set(w.map(b=>b.id));for(let b of[...r.values()])E.has(b.id)||(d(b),r.delete(b.id));for(let b of w){if(r.has(b.id))continue;let T=h(b.id,b.nick);l.isHost?T.timer=t(()=>{T.state==="connecting"&&m(T,"relay")},Be.p2pTimeoutMs+Be.hostPathGraceMs):_(T)}}return i.onPeers=A,i.onSignal=x,i.onRelay=(M,w,E)=>{let b=r.get(M);!b||b.state==="closed"||b.state==="open"&&b.path!=="relay"||l.onMessage&&l.onMessage(M,w,E)},i.onClose=M=>{if(!a){a=!0;for(let w of r.values())d(w,!1);r.clear(),l.onClose&&l.onClose(M)}},l.start=()=>A(i.peers),l}var Mp=["Run","Jump","Slide","Stagger","Down","GetUp","Slip","Respawn","Finish"],bp=["None","Stagger","Down","Slip"],wn={boost:1,draft:2,invuln:4,stunned:8},Et={hello:1,lobby:2,refuse:3,op:4,ping:5,pong:6,start:7,events:8,status:9,result:10},Sp={countdown:1,go:2,itemGet:3,itemUse:4,projectile:5,hit:6,lap:7,finish:8,peerLeft:9,aiTakeover:10,boxUsed:11},fb=Object.fromEntries(Object.entries(Sp).map(([i,e])=>[e,i])),Tp=Object.keys(Nt),wp=Object.keys(sn).filter(i=>sn[i]&&typeof sn[i]=="object"),nr=255;function rs(i){if(i==null)return 0;let e=Tp.indexOf(i);return e>=0?e+1:(e=wp.indexOf(i),e>=0?128+e:0)}function os(i){return i===0?null:i>=128?wp[i-128]??null:Tp[i-1]??null}var Hn=(i,e,t)=>i<e?e:i>t?t:i,Ep=Math.PI/180,pb=new TextEncoder,mb=new TextDecoder,gn=i=>new DataView(i.buffer,i.byteOffset,i.byteLength),Ap=4+2*Be.inputRedundancy,ir={jump:1,slide:2,use:4};function Rp(i,e){let t=new Uint8Array(Ap),n=gn(t);n.setUint32(0,i>>>0,!0);for(let s=0;s<Be.inputRedundancy;s++){let r=e[s];n.setInt8(4+s*2,r?Math.round(Hn(r.steer||0,-1,1)*127):0),n.setUint8(5+s*2,r?(r.jump?ir.jump:0)|(r.slide?ir.slide:0)|(r.use?ir.use:0):0)}return t}function Cp(i){if(i.byteLength!==Ap)return null;let e=gn(i),t=e.getUint32(0,!0),n=[];for(let s=Be.inputRedundancy-1;s>=0;s--){let r=t-s;if(r<1)continue;let o=e.getUint8(5+s*2);n.push({tick:r,steer:e.getInt8(4+s*2)/127,jump:!!(o&ir.jump),slide:!!(o&ir.slide),use:!!(o&ir.use)})}return n}var jr=8,gb=i=>8+jr*i;function xb(i){return(i.boostT>0?wn.boost:0)|(i.draft?wn.draft:0)|(i.invuln?wn.invuln:0)|(i.stunned?wn.stunned:0)}function Ip(i,e,t){let n=Be.q,s=t.length,r=new Uint8Array(gb(s)),o=gn(r);o.setUint32(0,i>>>0,!0),o.setUint32(4,e>>>0,!0);for(let a=0;a<s;a++){let c=t[a],l=8+a*jr;o.setUint16(l,Hn(Math.round(c.s/n.s),0,65535),!0),o.setInt8(l+2,Hn(Math.round(c.d/n.d),-127,127)),o.setUint8(l+3,Hn(Math.round(c.h/n.h),0,255)),o.setUint8(l+4,Hn(Math.round(c.speed/n.speed),0,255)),o.setInt8(l+5,Hn(Math.round(c.heading/Ep/n.headingDeg),-127,127)),o.setUint8(l+6,Math.max(0,Mp.indexOf(c.state))|xb(c)<<4),o.setUint8(l+7,Hn(c.lap,0,15)<<4|Hn(c.rank,0,15))}return r}function Pp(i,e){return gn(i).setUint32(4,e>>>0,!0),i}function Lp(i){if(i.byteLength<8||(i.byteLength-8)%jr)return null;let e=Be.q,t=gn(i),n=(i.byteLength-8)/jr,s=[];for(let r=0;r<n;r++){let o=8+r*jr,a=t.getUint8(o+6),c=t.getUint8(o+7),l=t.getInt8(o+2);s.push({s:t.getUint16(o,!0)*e.s,d:l*e.d,h:t.getUint8(o+3)*e.h,speed:t.getUint8(o+4)*e.speed,heading:t.getInt8(o+5)*e.headingDeg*Ep,state:Mp[a&15]||"Run",flags:a>>4,lap:c>>4,rank:c&15,dClamped:Math.abs(l)===127})}return{tick:t.getUint32(0,!0),ack:t.getUint32(4,!0),runners:s}}function sr(i,e){let t=pb.encode(JSON.stringify(e)),n=new Uint8Array(1+t.length);return n[0]=i,n.set(t,1),n}function rr(i){try{return JSON.parse(mb.decode(i.subarray(1)))}catch{return null}}function Dp(i,e){let t=new Uint8Array(10),n=gn(t);return t[0]=Et.ping,t[1]=i,n.setFloat64(2,e,!0),t}function Up(i,e,t){let n=new Uint8Array(18),s=gn(n);return n[0]=Et.pong,n[1]=i,s.setFloat64(2,e,!0),s.setFloat64(10,t,!0),n}function th(i){let e=gn(i);return{seq:i[1],t0:e.getFloat64(2,!0),hostTime:i.byteLength>=18?e.getFloat64(10,!0):0}}var rn=i=>Hn(Math.round(i||0),0,255),eh=i=>i??nr;function nh(i,e){let t=[Et.events,i&255,i>>>8&255,i>>>16&255,i>>>24&255,0],n=0;for(let s of e){let r=Sp[s.type];if(!(!r||n===255))switch(n++,t.push(r),s.type){case"countdown":t.push(rn(s.n));break;case"go":break;case"itemGet":t.push(rn(s.runner),rs(s.item),eh(s.box));break;case"itemUse":t.push(rn(s.runner),rs(s.item));break;case"boxUsed":t.push(rn(s.runner),eh(s.box));break;case"projectile":t.push(s.id&255,s.id>>>8&255,rn(s.runner),rs(s.item));break;case"hit":t.push(rn(s.target),eh(s.by),rs(s.item),(s.blocked?1:0)|(s.stun?2:0)|(s.pierced?4:0),Math.max(0,bp.indexOf(s.result)),s.reason==="invuln"?nr:rs(s.reason),rn(s.dmg));break;case"lap":t.push(rn(s.runner),rn(s.lap));break;case"finish":t.push(rn(s.runner),rn(s.place));break;case"peerLeft":case"aiTakeover":t.push(rn(s.runner));break;default:break}}return t[5]=n,Uint8Array.from(t)}function Np(i){let e=gn(i),t=e.getUint32(1,!0),n=i[5],s=[],r=6;for(let o=0;o<n&&r<i.length;o++){let a=fb[i[r++]];switch(a){case"countdown":s.push({type:a,n:i[r++]});break;case"go":s.push({type:a});break;case"itemGet":s.push({type:a,runner:i[r],item:os(i[r+1]),...i[r+2]===nr?{}:{box:i[r+2]}}),r+=3;break;case"itemUse":s.push({type:a,runner:i[r],item:os(i[r+1])}),r+=2;break;case"boxUsed":s.push({type:a,runner:i[r],...i[r+1]===nr?{}:{box:i[r+1]}}),r+=2;break;case"projectile":s.push({type:a,id:i[r]|i[r+1]<<8,runner:i[r+2],item:os(i[r+3])}),r+=4;break;case"hit":{let c=i[r+3],l=i[r+5];s.push({type:a,target:i[r],by:i[r+1]===nr?null:i[r+1],item:os(i[r+2]),blocked:!!(c&1),result:bp[i[r+4]]||"None",reason:l===nr?"invuln":os(l),dmg:i[r+6],stun:!!(c&2),...c&4?{pierced:!0}:{}}),r+=7;break}case"lap":s.push({type:a,runner:i[r],lap:i[r+1]}),r+=2;break;case"finish":s.push({type:a,runner:i[r],place:i[r+1]}),r+=2;break;case"peerLeft":case"aiTakeover":s.push({type:a,runner:i[r++]});break;default:return{tick:t,events:s}}}return{tick:t,events:s}}function Op(i,e){let t=new Uint8Array(5+e.length*5),n=gn(t);return t[0]=Et.status,n.setUint32(1,i>>>0,!0),e.forEach((s,r)=>{let o=5+r*5;t[o]=s.hpMax>0?Hn(Math.ceil(s.hp/s.hpMax*255),0,255):255,t[o+1]=s.hand?rs(s.hand.id):0,t[o+2]=s.hand?rn(s.hand.uses):0,t[o+3]=s.body?rs(s.body.id):0,t[o+4]=s.body?rn(s.body.uses):0}),t}function Fp(i){let e=gn(i),t=[];for(let n=5;n+5<=i.length;n+=5)t.push({hpRatio:i[n]/255,hand:i[n+1]?{id:os(i[n+1]),uses:i[n+2]}:null,body:i[n+3]?{id:os(i[n+3]),uses:i[n+4]}:null});return{tick:e.getUint32(1,!0),runners:t}}function kp(i,e){let t=e.length,n=new Uint8Array(2+i.length+1+t*4),s=gn(n);n[0]=Et.result,n[1]=i.length,i.forEach((o,a)=>{n[2+a]=o});let r=2+i.length;return n[r]=t,e.forEach((o,a)=>s.setUint32(r+1+a*4,o>>>0,!0)),n}function Bp(i){let e=gn(i),t=i[1],n=Array.from(i.subarray(2,2+t)),s=2+t,r=i[s],o=[];for(let a=0;a<r;a++)o.push(e.getUint32(s+1+a*4,!0));return{order:n,finishTicks:o}}var En=1/fn.tickHz,Kr=1e3/fn.tickHz,ih={tick:0,steer:0,jump:!1,slide:!1,use:!1},sh=1e9,zp=new Set(["Stagger","Down","GetUp","Slip","Respawn","Finish"]),Na=i=>Math.max(1,Math.round(fn.tickHz/i)),_b=new Set(["itemGet","itemUse","hit"]);function yb(i,e){switch(i){case"Slide":return Dt.slideTime;case"Stagger":return Ut.staggerMax;case"Down":return e?kt.hp.stunTime:kt.hp.knockdownTime;case"GetUp":return Ut.getUpTime;case"Slip":return Ut.slipTime;default:return 0}}function Hp({transport:i,code:e="",nick:t="",charId:n="daon",version:s=String(Be.protocol),now:r=()=>performance.now(),getTrack:o,setTimeoutFn:a=setTimeout}={}){let c=i.isHost,l=i.selfId,u=i.hostId,h=new Map,f=(p,y)=>{for(let _ of h.get(p)||[])_(y)},d={role:c?"host":"guest",code:e,selfId:l,hostId:u,phase:"lobby",lobby:{code:e,phase:"lobby",members:[],settings:{aiLevel:"normal",trackId:null}},world:null,myIndex:-1,lineup:null,results:null,startAt:0,clock:{offset:0,rtt:0,samples:0},stats:{snapshots:0,staleDropped:0,inputsSent:0,snaps:0,smooths:0,corrSum:0,corrMax:0,dryTicks:0,skippedInputs:0},on(p,y){return h.has(p)||h.set(p,new Set),h.get(p).add(y),()=>h.get(p).delete(y)},path:p=>i.path(p),relayStats:()=>i.stats||null,leave(p={}){d.phase!=="closed"&&(d.phase="closed",i.close(p.abrupt?{bye:!1}:void 0))}},m=p=>{d.phase!=="closed"&&(d.phase="closed",f("closed",{reason:p}))};return i.onClose=p=>m(p.reason||"disconnected"),c?v():g(),d;function v(){let p=new Map,y=new Map;p.set(l,{id:l,nick:t,charId:n,ready:!0,host:!0,path:"self"});let _=null,x=!1,A=[],M=Na(Be.snapshotHz),w=Na(Be.relaySnapshotHz),E=Na(Be.statusHz),b=()=>{d.lobby={code:e,phase:d.phase,members:[...p.values()].map(V=>({...V})),settings:{...d.lobby.settings}};let R=sr(Et.lobby,d.lobby);for(let V of y.values())V.joined&&i.send(V.id,"r",R);f("lobby",d.lobby)};function T(R){if(!_||R.seat<0)return;let V=_.runners[R.seat];V.ai=d.lobby.settings.aiLevel||Be.aiTakeoverLevel,_.aiState[R.seat]=Aa(),d.lineup[R.seat]={...d.lineup[R.seat],peer:null,ai:V.ai};let G=nh(_.tick,[{type:"peerLeft",runner:R.seat},{type:"aiTakeover",runner:R.seat}]);for(let N of y.values())N.seat>=0&&N!==R&&i.send(N.id,"r",G)}i.onPeer=(R,V)=>{if(V.state==="closed"){let P=y.get(R);y.delete(R),P&&d.phase==="race"&&T(P),p.delete(R)&&b();return}let G=y.get(R);if(G||(G={id:R,joined:!1,path:null,seat:-1,queue:[],lastTick:0,ack:0,last:ih,rateSec:0,rateN:0},y.set(R,G)),V.state!=="open")return;G.path=V.path;let N=p.get(R);N&&N.path!==V.path&&(N.path=V.path,b())},i.onMessage=(R,V,G)=>{let N=y.get(R);if(!(!N||!G.length)){if(V==="u"){if(N.seat<0||d.phase!=="race")return;let P=Math.floor(r()/1e3);if(P!==N.rateSec&&(N.rateSec=P,N.rateN=0),++N.rateN>Be.inputRateMax)return;let D=Cp(G);if(!D)return;for(let B of D)B.tick>N.lastTick&&(N.queue.push(B),N.lastTick=B.tick);return}switch(G[0]){case Et.hello:{let P=rr(G);if(!P)return;let D=null;if(P.v!==s?D="version":d.phase!=="lobby"?D="in-race":p.size>=Be.maxPlayers&&(D="full"),D){i.send(R,"r",sr(Et.refuse,{reason:D,hostVersion:s}));return}N.joined=!0,p.set(R,{id:R,nick:String(P.nick||"").slice(0,12),charId:P.charId||"daon",ready:!1,host:!1,path:N.path}),b();break}case Et.op:{let P=rr(G),D=p.get(R);if(!P||!D||d.phase!=="lobby")return;typeof P.ready=="boolean"&&(D.ready=P.ready),typeof P.charId=="string"&&(D.charId=P.charId),b();break}case Et.ping:{let P=th(G);i.send(R,"r",Up(P.seq,P.t0,r()));break}default:break}}},d.setReady=()=>{},d.setChar=R=>{p.get(l).charId=R,b()},d.setSettings=R=>{Object.assign(d.lobby.settings,R),b()},d.allReady=()=>[...p.values()].every(R=>R.ready),d.start=(R={})=>{if(d.phase!=="lobby")throw new Error("\uB85C\uBE44\uAC00 \uC544\uB2D8");if(!R.force&&!d.allReady())throw new Error("\uC900\uBE44\uD558\uC9C0 \uC54A\uC740 \uCC38\uAC00\uC790\uAC00 \uC788\uC74C");let V=R.trackId??d.lobby.settings.trackId,G=o(V),N=R.aiLevel||d.lobby.settings.aiLevel||"normal",P=R.aiChars&&R.aiChars.length?R.aiChars:["daon"],D=R.seed??Math.random()*4294967295>>>0|1,B=[];for(let z of p.values())B.push({charId:z.charId,ai:null,peer:z.id,nick:z.nick});for(let z=0;B.length<Be.maxPlayers;z++)B.push({charId:P[z%P.length],ai:N,peer:null,nick:""});_=Qs(G,{seed:D,runners:B.map(z=>({charId:z.charId,ai:z.ai}))}),x=!1,d.world=_,d.lineup=B,d.results=null,d.myIndex=0,d.startAt=r()+Be.startLeadMs,d.phase="race",Object.assign(d.lobby.settings,{trackId:V,aiLevel:N}),i.lockPaths(!0);let U=sr(Et.start,{seed:D,trackId:V,startAt:d.startAt,lineup:B,settings:d.lobby.settings});for(let z of y.values())z.seat=z.joined?B.findIndex(oe=>oe.peer===z.id):-1,z.queue.length=0,z.lastTick=0,z.ack=0,z.last=ih,z.seat>=0&&i.send(z.id,"r",U);b(),f("start",{world:_,myIndex:0,lineup:B,trackId:V,seed:D,startAt:d.startAt})},d.returnToLobby=()=>{if(d.phase==="race"){d.phase="lobby",_=null,d.world=null,i.lockPaths(!1);for(let R of p.values())R.host||(R.ready=!1);for(let R of y.values())R.seat=-1;b()}},d.step=R=>{if(d.phase!=="race"||!_||r()<d.startAt)return!1;let V=_.phase==="race";A.length=0,A[0]=R||ih;for(let U of y.values())if(!(U.seat<0)){if(V){for(;U.queue.length>Be.inputQueueMax;)U.ack=U.queue.shift().tick,d.stats.skippedInputs++;U.queue.length?(U.last=U.queue.shift(),U.ack=U.last.tick):d.stats.dryTicks++}A[U.seat]=U.last}Ra(_,A);let G=_.tick,N=null,P=null,D=null;_.events.length&&(N=nh(G,_.events)),(G%E===0||_.events.some(U=>_b.has(U.type)))&&(P=Op(G,_.runners));let B=_.phase==="done"&&!x;for(let U of y.values())U.seat<0||(N&&i.send(U.id,"r",N),P&&i.send(U.id,"r",P),G%(U.path==="relay"?w:M)===0&&(D=D||Ip(G,0,_.runners),i.send(U.id,"u",Pp(D.slice(),U.ack))));if(B){x=!0,d.results=_.results.slice();let U=kp(d.results,_.runners.map(z=>z.finishTick));for(let z of y.values())z.seat>=0&&i.send(z.id,"r",U);f("result",{results:d.results})}return!0},b()}function g(){let p=!1,y=null,_=null,x=null,A=-1,M=0,w=[],E=[],b=-1,T=null,R=null,V=null,G=!1,N=0,P=Be.histTicks,D=new Array(P),B=new Array(P),U={s:0,d:0,left:0},z=Math.max(1,Math.round(Be.smoothTime*fn.tickHz)),oe=1/0,de=Be.q,Me=Math.PI/180,Re=H=>i.send(u,"r",sr(Et.op,H));d.setReady=H=>Re({ready:!!H}),d.setChar=H=>Re({charId:H}),d.setSettings=()=>{},d.start=()=>{throw new Error("\uBC29\uC7A5\uB9CC \uC2DC\uC791\uD560 \uC218 \uC788\uC74C")},d.returnToLobby=()=>{},d.allReady=()=>d.lobby.members.every(H=>H.ready);function te(H){d.phase==="closed"||H>=Be.pingCount||(i.send(u,"r",Dp(H,r())),a(()=>te(H+1),Be.pingIntervalMs))}i.onPeer=(H,q)=>{if(H===u){if(q.state==="closed"){a(()=>m("host-lost"),Be.hostLostGraceMs);return}q.state==="open"&&(y=q.path,p||(p=!0,i.send(u,"r",sr(Et.hello,{v:s,nick:t,charId:n})),te(0)))}},i.onMessage=(H,q,ne)=>{if(!(H!==u||!ne.length)){if(q==="u"){j(ne);return}switch(ne[0]){case Et.lobby:{let Q=rr(ne);if(!Q)return;d.lobby=Q,Q.phase==="lobby"&&d.phase==="race"&&(d.phase="lobby",d.world=null,_=null,G=!1),f("lobby",d.lobby);break}case Et.refuse:{let Q=rr(ne)||{reason:"refused"};f("refused",Q),d.leave();break}case Et.pong:{let Q=th(ne),I=r(),S=I-Q.t0;d.clock.samples++,S<oe&&(oe=S,d.clock.rtt=S,d.clock.offset=Q.hostTime+S/2-I),f("clock",d.clock);break}case Et.start:{let Q=rr(ne);Q&&le(Q);break}case Et.events:if(_)for(let Q of Np(ne).events)w.push(Q);break;case Et.status:_&&be(Fp(ne));break;case Et.result:_&&w.push({type:"result",...Bp(ne)});break;default:break}}};function le(H){x=o(H.trackId),_=Qs(x,{seed:H.seed,runners:H.lineup.map(q=>({charId:q.charId,ai:q.ai}))}),A=H.lineup.findIndex(q=>q.peer===l),M=H.startAt-d.clock.offset,w=[],E=[],b=-1,T=null,R=null,G=!1,N=0,U.left=0,V={track:x,dt:En,tick:0,time:0,events:[],finishOrder:[],runners:[]},d.world=_,d.myIndex=A,d.lineup=H.lineup,d.results=null,d.startAt=M,d.lobby.settings=H.settings||d.lobby.settings,d.phase="race",i.lockPaths(!0),f("start",{world:_,myIndex:A,lineup:H.lineup,trackId:H.trackId,seed:H.seed,startAt:M})}function be(H){H.runners.forEach((q,ne)=>{let Q=_.runners[ne];Q&&(Q.hp=q.hpRatio*Q.hpMax,Q.hand=q.hand,Q.body=q.body)}),R&&(R.hp=_.runners[A].hp)}function j(H){if(!_)return;let q=Lp(H);if(!q||q.runners.length!==_.runners.length)return;if(q.tick<=b){d.stats.staleDropped++;return}b=q.tick,d.stats.snapshots++;let ne=r(),Q=q.tick*Kr-ne;for(T===null||Math.abs(Q-T)>Be.timelineResetMs?T=Q:T+=(Q-T)*Be.timelineGain,q.at=ne,E.push(q);E.length>2&&ne-E[0].at>Be.snapshotKeepMs;)E.shift();G&&q.ack>=1&&ge(q)}let he=H=>({...H});function ye(H,q){Math.abs(x.deltaS(H.s,q.s))>de.s*.6&&(H.s=q.s),!q.dClamped&&Math.abs(H.d-q.d)>de.d*.6&&(H.d=q.d),Math.abs(H.speed-q.speed)>de.speed*.6&&(H.speed=q.speed),Math.abs(H.heading-q.heading)>de.headingDeg*Me*.6&&(H.heading=q.heading),H.draft=!!(q.flags&wn.draft),H.stunned=!!(q.flags&wn.stunned),q.flags&wn.boost?H.boostT<=0&&(H.boostT=ot.drink.time):H.boostT=0,zp.has(q.state)?(H.state!==q.state&&(yt(H,q.state,sh),H.h=q.h,H.vh=0),H.stateDur=sh,H.finished=q.state==="Finish"):zp.has(H.state)?(yt(H,q.state,q.state==="Slide"?Dt.slideTime:0),H.h=q.h,H.vh=0,H.finished=!1):Math.abs(H.h-q.h)>Be.hAdoptDiff&&(H.h=q.h,H.vh=0,q.h<=0&&H.state==="Jump"&&yt(H,"Run"))}function ge(H){let q=H.runners[A],ne=H.ack;if(ne>N)return;let Q=U.left/z,I=R.s+U.s*Q,S=R.d+U.d*Q,k=D[ne%P];if(k&&k.tick===ne){R=he(k.r),ye(R,q),k.r=he(R);for(let ce=ne+1;ce<=N;ce++){let ue=B[ce%P];if(!ue||ue.tick!==ce)break;V.events.length=0,Wr(R,ue,V),D[ce%P]={tick:ce,r:he(R)}}}else ye(R,q);let ee=x.deltaS(R.s,x.wrapS(I)),F=S-R.d,W=Math.hypot(ee,F);d.stats.corrSum+=W,W>d.stats.corrMax&&(d.stats.corrMax=W),W>=Be.snapDist?(U.s=0,U.d=0,U.left=0,d.stats.snaps++):(U.s=ee,U.d=F,U.left=z,d.stats.smooths++)}let Pe=H=>T!==null?(H+T)/Kr:(H-M)/Kr;function ie(H,q,ne){let Q=null,I=null;for(let k=E.length-1;k>=0;k--)if(E[k].tick<=q){Q=E[k],I=E[k+1]||null;break}Q||(Q=E[0],I=null,q=Q.tick);let S=Q.runners[H];if(I){let k=I.runners[H],ee=(q-Q.tick)/(I.tick-Q.tick),F=ee<.5?S:k;ne.s=x.wrapS(S.s+x.deltaS(S.s,k.s)*ee),ne.d=S.d+(k.d-S.d)*ee,ne.h=S.h+(k.h-S.h)*ee,ne.speed=S.speed+(k.speed-S.speed)*ee,ne.heading=S.heading+(k.heading-S.heading)*ee,ne.state=F.state,ne.flags=F.flags,ne.lap=F.lap,ne.rank=F.rank}else{let k=Math.min(q-Q.tick,Be.extrapolateMs/Kr)*En,ee=S.state!=="Down"&&S.state!=="Respawn",F=x.widthAt(S.s)/2;ne.s=ee?x.wrapS(S.s+S.speed*Math.cos(S.heading)*k):S.s,ne.d=ee?Math.max(-F,Math.min(F,S.d+S.speed*Math.sin(S.heading)*k)):S.d,ne.h=S.h,ne.speed=S.speed,ne.heading=S.heading,ne.state=S.state,ne.flags=S.flags,ne.lap=S.lap,ne.rank=S.rank}return ne}function Z(H,q,ne){let Q=!!(ne&wn.stunned);H.state!==q?(H.state=q,H.stateT=0):H.stateT+=En,H.stateDur=yb(q,Q),H.stunned=Q,H.invuln=!!(ne&wn.invuln),H.draft=!!(ne&wn.draft),ne&wn.boost?H.boostT=Math.max(H.boostT-En,2*En):H.boostT=0,q==="Finish"&&(H.finished=!0)}function L(H){let q=_.runners;switch(H.type){case"go":_.phase="race",_.countdown=0,A>=0&&(R=he(q[A]),wa(R),G=!0,N=0,U.left=0);break;case"itemGet":case"boxUsed":{let ne=H.box===void 0||H.box===null?null:_.boxes[H.box];ne&&(ne.active=!1,ne.respawnT=ot.boxRespawn);break}case"itemUse":{let ne=q[H.runner];H.item==="bat"?ne.action={kind:"Swing",t:0,done:!1}:H.item==="watergun"?ne.action={kind:"Shoot",t:0,done:!0}:H.item==="drink"&&(ne.boostT=ot.drink.time);break}case"projectile":{let ne=q[H.runner],Q=ot.watergun;_.projectiles.push({id:H.id,kind:H.item,owner:H.runner,s:x.wrapS(ne.s+Q.muzzle*Math.cos(ne.heading)),d:ne.d+Q.muzzle*Math.sin(ne.heading),h:ne.h+Q.h,vs:Q.speed*Math.cos(ne.heading),vd:Q.speed*Math.sin(ne.heading),dist:0,radiusMul:1});break}case"hit":if(H.item==="watergun"&&H.by!==null){let ne=_.projectiles.findIndex(Q=>Q.owner===H.by);ne>=0&&_.projectiles.splice(ne,1)}break;case"lap":H.runner!==A&&(q[H.runner].lap=H.lap);break;case"finish":{let ne=q[H.runner];ne.finished=!0,ne.place=H.place,_.finishOrder.includes(H.runner)||_.finishOrder.push(H.runner);break}case"aiTakeover":q[H.runner].ai=d.lobby.settings.aiLevel||Be.aiTakeoverLevel;break;case"result":_.results=H.order,_.phase="done",H.order.forEach((ne,Q)=>{let I=q[ne];I&&(I.finished=!0,I.place=Q+1,I.finishTick=H.finishTicks[ne]||0)}),G=!1,d.results=H.order,f("result",{results:H.order});break;default:break}}let pe={},re=()=>Na(y==="relay"?Be.relayInputHz:Be.inputHz);d.step=H=>{let q=r();if(d.phase!=="race"||!_||q<M)return!1;if(_.events.length=0,w.length){let S=w;w=[];for(let k of S)L(k),_.events.push(k)}let ne=Pe(q);if(_.tick=Math.max(_.tick,Math.floor(ne)),_.phase==="countdown"?_.countdown=Math.max(0,Jt.countdownSec-Math.max(0,ne)*En):_.time=Math.max(_.time,ne*En-Jt.countdownSec),G){N++;let S={tick:N,steer:H?Math.round(Math.max(-1,Math.min(1,H.steer||0))*127)/127:0,jump:!!(H&&H.jump),slide:!!(H&&H.slide),use:!!(H&&H.use)};if(B[N%P]=S,N%re()===0){let k=[S];for(let ee=1;ee<Be.inputRedundancy;ee++){let F=B[(N-ee+P)%P];k.push(F&&F.tick===N-ee?F:null)}i.send(u,"u",Rp(N,k))&&d.stats.inputsSent++}V.tick=_.tick,V.time=_.time,V.events.length=0,Wr(R,S,V),D[N%P]={tick:N,r:he(R)},U.left>0&&U.left--}let Q=ne-Be.interpDelayMs/Kr,I=E.length?E[E.length-1]:null;for(let S=0;S<_.runners.length;S++){let k=_.runners[S];if(k.action&&(k.action.t+=En,k.action.kind==="Swing"?(k.action.t>=ot.bat.windup&&(k.action.done=!0),k.action.t>=ot.bat.swingTime&&(k.action=null)):k.action.t>=ot.watergun.shootTime&&(k.action=null)),S===A&&G){let ee=U.left/z;k.s=x.wrapS(R.s+U.s*ee),k.d=R.d+U.d*ee,k.h=R.h,k.vh=R.vh,k.speed=R.speed,k.heading=R.heading,k.padT=R.padT,k.dashT=R.dashT,k.offroad=R.offroad,k.zoneCap=R.zoneCap;let F=I?I.runners[A]:null;Z(k,R.state,F?F.flags:0),R.stateDur<sh/2&&R.stateDur>0&&(k.stateDur=R.stateDur),F&&(k.lap=F.lap,k.rank=F.rank)}else I&&(ie(S,Q,pe),k.s=pe.s,k.d=pe.d,k.h=pe.h,k.speed=pe.speed,k.heading=pe.heading,Z(k,pe.state,pe.flags),(S===A||!_.runners[S].finished||pe.lap>k.lap)&&(k.lap=pe.lap),k.rank=pe.rank)}if(_.projectiles.length){let S=ot.watergun;_.projectiles=_.projectiles.filter(k=>(k.s=x.wrapS(k.s+k.vs*En),k.d+=k.vd*En,k.dist+=S.speed*En,k.dist<=S.range&&Math.abs(k.d)<=x.widthAt(k.s)/2))}for(let S of _.boxes)S.active||(S.respawnT-=En,S.respawnT<=0&&(S.active=!0));return!0}}}var vb=(i="")=>`${i}/${Be.protocol}`,Vp=()=>typeof location<"u"?location.search:"";function Gp(i,e=Vp()){let n=new URLSearchParams(e).get(Be.relayParam)||i||Be.workerUrl;if(!n){let s=new Error("Worker \uC8FC\uC18C\uAC00 \uC5C6\uC74C (tuning NET.workerUrl \uB610\uB294 ?relay=)");throw s.reason="no-worker",s}return n.replace(/\/+$/,"")}function Wp(i=Vp()){let e=new URLSearchParams(i).get(Be.roomParam);return e&&/^\d{4}$/.test(e)?e:null}function Xp(i,e=typeof location<"u"?location.origin+location.pathname:"./"){return`${e}?${Be.roomParam}=${i}`}var Mb=(i,e,t)=>`${i.replace(/^http/,"ws")}/room/${e}/ws${t?`?host=${encodeURIComponent(t)}`:""}`;async function qp(i,e,t){let{nick:n="",charId:s="daon",appVersion:r="",getTrack:o,workerUrl:a,deps:c={}}=t,l=vb(r),u=Gp(a),h=await yp(Mb(u,i,e),{nick:n,version:l,...c}),f=vp({room:h,...c}),d=Hp({transport:f,code:i,nick:n,charId:s,version:l,getTrack:o,...c});return f.start(),d}async function Yp(i={}){let e=Gp(i.workerUrl),n=await(i.deps&&i.deps.fetchFn||fetch)(`${e}/room/new`,{method:"POST"});if(!n.ok){let o=new Error(`\uBC29 \uB9CC\uB4E4\uAE30 \uC2E4\uD328 (${n.status})`);throw o.reason="room-new",o}let{code:s,hostKey:r}=await n.json();return qp(s,r,i)}function $p(i,e={}){return qp(String(i),null,e)}var Zp=["./assets/tracks/sports-ground.json","./assets/tracks/oval-test.json"],rh=new URLSearchParams(location.search).get("track"),Oa=["daon","sora"],jp=8,Kp="normal",bb="m2",Jp=new URLSearchParams(location.search),Sb=Jp.get("debug")==="1";async function Tb(){let i=rh&&/^[\w-]+$/.test(rh)?[`./assets/tracks/${rh}.json`,...Zp]:Zp;for(let e of i)try{let t=await fetch(e,{cache:"no-store"});if(t.ok)return await t.json()}catch{}throw new Error("\uD2B8\uB799 JSON\uC744 \uCC3E\uC9C0 \uBABB\uD568")}var wb={daon:{speed:3,accel:3,power:3,tough:3},sora:{speed:5,accel:3,power:2,tough:2}};function Eb(i,e){let t=e%4,n=Math.floor(e/4);return{s:i.wrapS(-2-n*2.5),d:(t-1.5)*2}}function Ab(i,e,t){let n=i.json.racingLine||[],s=0;if(n.length){let o=i.wrapS(e.s+6),a=n[0],c=1/0;for(let l of n){let u=Math.abs(i.deltaS(o,l.s));u<c&&(c=u,a=l)}s=a.d}let r=Math.max(-1,Math.min(1,(s-e.d)*.4-e.heading*2));return{tick:t,steer:r,jump:!1,slide:!1,use:!1}}async function Rb(){let i=document.getElementById("app");ep();let e=rf(await Tb()),t=new $o({antialias:!0,powerPreference:"high-performance"});i.appendChild(t.domElement);let n=Kf(t,{forceLow:Jp.get("low")==="1"}),s=await qf(),r=Ef();r.add(Af(e));let o=Rf(e,s);r.add(o.group);let a=Yf(1),c=jf(r,a.cam,jp,s),l=Jf(),u=document.getElementById("ui")||i,h=Qf(u);h.setVisible(!0);let f=ip(u,{debug:Sb});f.setTrack(e);let d=rp(u,Oa),m=cp(u),v=lp(t,s),g=null,p=_p(u,{pickable:Oa}),y=null,_=!1,x=null,A=null,M,w,E=!1,b="countdown",T=0,R=3,V=0,G=!1,N=[],P=[],D=0,B="daon",U=!0,z=F=>({s:F.s,d:F.d,h:F.h||0,heading:F.heading||0});function oe(F){B=F;let W=[];for(let ce=0;ce<jp;ce++)W.push(ce===0?{charId:F,ai:null}:{charId:Oa[(ce-1)%Oa.length],ai:Kp});M=Qs(e,{seed:Date.now()&65535|1,runners:W}),E=M.phase===void 0,E&&(M=Qs(e,{seed:1,runners:W.map((ce,ue)=>({...ce,id:ue,stats:wb[ce.charId],...Eb(e,ue)}))}),M.runners.forEach((ce,ue)=>{ce.charId=W[ue].charId,ce.ai=W[ue].ai}),b="countdown",T=Qe.m0CountdownSec),M.runners.forEach((ce,ue)=>{ce.charId===void 0&&(ce.charId=W[ue].charId)}),w&&w.dispose(),w=yu(r,M.runners,s),f.setRunners(M.runners,D),N=M.runners.map(z),P=M.runners.map(z),a.snap(),R=3,V=0,G=!1,d.hideResult()}let de=()=>E?b:M.phase;function Me(){return E?T:typeof M.countdown=="number"?M.countdown>10?M.countdown/fn.tickHz:M.countdown:R}function Re(F){switch(F.type||F.kind){case"countdown":R=F.n;break;case"hit":{let W=M.runners[F.target];W&&F.item==="watergun"&&!F.blocked&&c.spawnSplash(c.worldOf(e,W,1,new O)),F.target===D&&(f.flashDamage(F.dmg),F.stun&&f.showToast("\uAE30\uC808!"));break}case"itemUse":F.item==="drink"&&w&&w.showDrink(F.runner),F.item==="drink"&&F.runner===D&&f.showToast("\uC5D0\uB108\uC9C0 \uB4DC\uB9C1\uD06C! \uAC00\uC18D");break;case"itemGet":F.runner===D&&(f.showToast(`${Ua[F.item]||F.item} \uD68D\uB4DD`),h.pulseItem());break;case"finish":F.runner===D&&f.showToast(`${F.place}\uC704\uB85C \uC644\uC8FC!`);break;default:break}}function te(){if(_){M=y.world||M;let ce=g=Ku(M.tick+1,[l,h]);if(!y.step(ce))return!1;M=y.world;for(let ue of M.events||[])Re(ue);return!0}let F=M.tick+1,W=M.runners.map((ce,ue)=>ue===D?g=Ku(F,[l,h]):E?Ab(e,ce,F):{tick:F,steer:0,jump:!1,slide:!1,use:!1});if(E&&b!=="race")return!1;Ra(M,W);for(let ce of M.events||[])Re(ce);return E&&M.runners[D].finished&&(b="done"),!0}function le(){let F=M.results;return Array.isArray(F)&&F.length?F.map((W,ce)=>{let ue=typeof W=="number"?W:W.runner??W.id??ce,Se=M.runners[ue]||{};return{idx:ue,charId:Se.charId,place:W.place??ce+1,ai:Se.ai}}).sort((W,ce)=>W.place-ce.place):M.runners.map((W,ce)=>({idx:ce,charId:W.charId,place:W.rank||ce+1,ai:W.ai})).sort((W,ce)=>W.place-ce.place)}let be=()=>m.show(h.rects(),!ju());d.onPick(F=>{U=!1,d.showPick(!1),oe(F),be()}),d.onPickBack(()=>{d.showPick(!1),p.showTitle(!0)}),d.onRestart(()=>{if(_){y&&y.role==="host"&&y.returnToLobby();return}oe(B),be()}),d.onRepick(()=>{if(_){ge("\uB098\uAC14\uC2B5\uB2C8\uB2E4");return}d.hideResult(),U=!0,d.showPick(!0)});let j={"no-worker":"\uC11C\uBC84 \uC5F0\uACB0 \uC548 \uB428 (\uC911\uACC4 \uC11C\uBC84 \uC8FC\uC18C\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4)","no-room":"\uC5C6\uB294 \uBC29\uC785\uB2C8\uB2E4",full:"\uBC29\uC774 \uAF49 \uCC3C\uC2B5\uB2C8\uB2E4",version:"\uAC8C\uC784 \uBC84\uC804\uC774 \uB2E4\uB985\uB2C8\uB2E4. \uC0C8\uB85C \uACE0\uCE68\uD574 \uC8FC\uC138\uC694",disconnected:"\uC5F0\uACB0\uC774 \uB04A\uACBC\uC2B5\uB2C8\uB2E4","room-new":"\uBC29\uC744 \uB9CC\uB4E4\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4","host-left":"\uBC29\uC7A5\uC774 \uBC29\uC744 \uB2EB\uC558\uC2B5\uB2C8\uB2E4",timeout:"\uC11C\uBC84 \uC5F0\uACB0 \uC548 \uB428 (\uC751\uB2F5 \uC5C6\uC74C)","host-lost":"\uBC29\uC7A5\uACFC \uC5F0\uACB0\uC774 \uB04A\uACBC\uC2B5\uB2C8\uB2E4","in-race":"\uC774\uBBF8 \uB808\uC774\uC2A4 \uC911\uC778 \uBC29\uC785\uB2C8\uB2E4"},he=F=>j[F]||`\uC5F0\uACB0 \uC2E4\uD328 (${F||"\uC54C \uC218 \uC5C6\uC74C"})`;async function ye(F){try{F&&"wakeLock"in navigator&&!A&&(A=await navigator.wakeLock.request("screen"),A.addEventListener("release",()=>{A=null})),!F&&A&&(await A.release(),A=null)}catch{}}document.addEventListener("visibilitychange",()=>{y&&document.visibilityState==="visible"&&ye(!0)});function ge(F){let W=y;if(y=null,_=!1,x=null,W)try{W.leave()}catch{}ye(!1),d.hideResult(),U=!0,D=0,oe(B),p.showLobby(!1),p.showTitle(!0,F||""),F&&p.toast(F)}function Pe(){y&&p.render(y.lobby,{meId:y.selfId,isHost:y.role==="host",invite:Xp(y.code)})}function ie(F){y=F,F.on("lobby",W=>{y===F&&(Pe(),W.phase==="lobby"&&_&&(_=!1,d.hideResult(),U=!0,p.showLobby(!0)))}),F.on("start",W=>{y===F&&Z(W)}),F.on("closed",({reason:W})=>{y===F&&ge(he(W))}),F.on("refused",({reason:W})=>{y===F&&ge(he(W))}),p.showLobby(!0),Pe(),ye(!0)}function Z({world:F,myIndex:W,lineup:ce}){_=!0,U=!1,E=!1,M=F,D=W,B=ce[W]&&ce[W].charId||B,x=ce.map(ue=>ue.ai?null:ue.nick||null),w&&w.dispose(),w=yu(r,M.runners,s),f.setRunners(M.runners,D,x),N=M.runners.map(z),P=M.runners.map(z),a.snap(),R=3,V=0,G=!1,d.hideResult(),p.showLobby(!1),be()}let L=()=>e;async function pe(F,W,ce){p.setTitleMsg(F==="create"?"\uBC29\uC744 \uB9CC\uB4DC\uB294 \uC911\u2026":`${W}\uBC88 \uBC29\uC5D0 \uB4E4\uC5B4\uAC00\uB294 \uC911\u2026`);try{let ue={nick:ce,charId:B,getTrack:L,appVersion:bb},Se=!1,Ve=F==="create"?Yp(ue):$p(W,ue);Ve.then(_e=>{Se&&_e.leave()},()=>{});let me=await Promise.race([Ve,new Promise((_e,Fe)=>setTimeout(()=>{Se=!0;let ze=new Error("timeout");ze.reason="timeout",Fe(ze)},Qe.netConnectTimeoutMs))]);p.setTitleMsg(""),ie(me),me.role==="host"&&me.setSettings({trackId:e.id,aiLevel:Kp})}catch(ue){console.warn("net",ue),p.setTitleMsg(he(ue.reason)),p.toast(he(ue.reason))}}p.on("solo",()=>{p.showTitle(!1),d.showPick(!0)}),p.on("create",F=>pe("create",null,F)),p.on("join",(F,W)=>pe("join",F,W)),p.on("char",F=>{B=F,y&&y.setChar(F)}),p.on("ready",()=>{if(!y)return;let F=y.lobby.members.find(W=>W.id===y.selfId);y.setReady(!(F&&F.ready))}),p.on("settings",F=>{y&&y.setSettings(F)}),p.on("start",()=>{if(!(!y||y.role!=="host"))try{y.start({trackId:e.id})}catch{if(window.confirm("\uC900\uBE44\uD558\uC9C0 \uC54A\uC740 \uC0AC\uB78C\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uADF8\uB798\uB3C4 \uC2DC\uC791\uD560\uAE4C\uC694?"))try{y.start({trackId:e.id,force:!0})}catch(F){p.setLobbyMsg(String(F.message||F))}}}),p.on("leave",()=>ge("")),window.addEventListener("keydown",F=>{F.code==="KeyR"&&!U&&!_&&!(F.target&&F.target.tagName==="INPUT")&&oe(B),F.code==="Backquote"&&(f.el.querySelector("#perf").style.display=f.el.querySelector("#perf").style.display?"":"none")}),oe(B),d.showPick(!1),p.showTitle(!0);{let F=Wp();F&&pe("join",F,p.getNick())}let re=()=>{let F=window.innerWidth,W=window.innerHeight;t.setSize(F,W),a.cam.aspect=F/W,a.cam.updateProjectionMatrix()};window.addEventListener("resize",re),window.addEventListener("orientationchange",re),re();let H=1/fn.tickHz,q=0,ne=performance.now(),Q=0,I=[],S=(F,W,ce,ue)=>(ue.s=e.wrapS(F.s+e.deltaS(F.s,W.s)*ce),ue.d=F.d+(W.d-F.d)*ce,ue.h=F.h+(W.h-F.h)*ce,ue.heading=F.heading+(W.heading-F.heading)*ce,ue);function k(F){requestAnimationFrame(k),n.shouldRender(F)&&ee(F)}function ee(F){let W=Math.min(.25,(F-ne)/1e3);ne=F,Q+=W,n.sample(W);let ce=!_&&(U||d.isPortrait());if(ce)q=0;else{E&&b==="countdown"&&(T-=W,T<=0&&(b="race")),q+=W;let _e=0;for(;q>=H&&_e<fn.maxTicksPerFrame;){let Fe=M.runners.map(z);te()&&(N=Fe,P=M.runners.map(z)),q-=H,_e++}_e===fn.maxTicksPerFrame&&(q=0)}let ue=ce?1:q/H;for(let _e=0;_e<M.runners.length;_e++)I[_e]=S(N[_e]||P[_e],P[_e],ue,I[_e]||{});I.length=M.runners.length;let Se=de(),Ve=M.runners[D];if(w.update(e,M.runners,I,ce?0:W,Q,Se),o.update(M.time??M.tick/fn.tickHz,M),a.update(e,I[D],W,Ve),c.update({track:e,runners:M.runners,states:I,world:M,dt:ce?0:W,time:Q,player:Ve,actors:w,boostK:a.boostK,playerIdx:D}),t.render(r,a.cam),Ve){let _e=Ve.hand;h.setItem(_e,_e?np(_e.id):"",_e?v[_e.id]:null)}m.update(ce?0:W,g),g=null;let me=t.info.render;if(f.update({dt:W,track:e,runners:M.runners,states:I,playerIdx:D,phase:Se,countdown:Me(),actors:w,camera:a.cam,info:me,perfExtra:`\uD53D\uC140\uBE44 ${n.pixelRatio} \xB7 ${n.low?"\uC800\uC0AC\uC591 30fps":"60fps"} \xB7 ${E?"M0 world":"M1 world"} \xB7 ${w.list.filter(_e=>_e.kind==="glb").length}/${w.list.length} GLB`}),Se==="done"&&!G&&(V+=W,V>1.2))if(G=!0,_){let _e=y&&y.role==="host";d.showResult(le(),D,{names:x,restart:_e?"\uB85C\uBE44\uB85C":null,repick:"\uB098\uAC00\uAE30",note:_e?"":"\uBC29\uC7A5\uC774 \uB85C\uBE44\uB85C \uB3CC\uC544\uAC00\uAE38 \uAE30\uB2E4\uB9AC\uB294 \uC911\u2026"})}else d.showResult(le(),D)}requestAnimationFrame(k),window.__nr={get world(){return M},get session(){return y},get actors(){return w},track:e,renderer:t,scene:r,camera:a.cam,get m0(){return E},perf:n,newRace:oe,CHAR_NAMES:$r,step(F=16.7){ne=performance.now()-F,ee(performance.now())},ff(F){for(let W=0;W<F;W++){let ce=M.runners.map(z);te()&&(N=ce,P=M.runners.map(z))}return M.tick}}}Rb().catch(i=>{console.error(i),document.body.insertAdjacentHTML("beforeend",`<pre style="color:#b00;padding:16px">${String(i.stack||i)}</pre>`)});
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
