// Filename : lib.js
// Authors : BijuGC
// License : two-clause (non-advertising) BSD-style license.

if(!window.$){
  window.$ = function $(id){
    return document.getElementById(id);
  }
}

String.prototype.lc=String.prototype.toLowerCase;
String.prototype.uc=String.prototype.toUpperCase;
String.prototype.code=String.prototype.charCodeAt;
String.prototype.asc=String.prototype.charCodeAt;
String.prototype.chr = function chr(){
  if(arguments.length){
     return String.fromCharCode.apply(String,  arguments)
  }else{
     return String.fromCharCode.apply(String,  [this])
  }
}
;

if(![].last){
  Array.prototype.last = function last(){
    return this[this.length-1];
  }
}

if(![].top){
  Array.prototype.top = function top(){
    return this[this.length-1];
  }
}

Array.prototype.chr = function chr(){
  return String.fromCharCode.apply(String,  this)  
}
;

Number.prototype.chr = function chr(){
  return String.fromCharCode.apply(String,  [this])  
}
;

Array.prototype.joinl = function joinl(){
  return this.join('\n');
}
;

Array.prototype.joint = function joint(){
  return this.join('\t');
}
;

Array.prototype.joinb = function joinb(){
  return this.join('');
}
;

Array.prototype.joins = function joins(){
  return this.join(' ');
}
;

Array.prototype.joinc = function joinc(){
  return this.join(', ');
}
;

String.prototype.splitl = function splitl(){
  return this.split('\n');
}
;

String.prototype.splitt = function splitt(){
  return this.split('\t');
}
;

String.prototype.splitb = function splitb(){
  return this.split('');
}
;

String.prototype.splits = function splits(){
  return this.split(/\s+/);
}
;

String.prototype.splitc = function splitc(){
  return this.split(/,\s*/);
}
;

if(!"".pad) {
  String.prototype.pad = function pad(len, str){
    len = len*1 - this.length;
    if (len < 1) return this;
    var a = Array(len);
    a = a.join(str||' ');
    return this + a.substr(0, len-1);
  } 
}

if(!"".lpad) {
  String.prototype.lpad = function lpad(len, str){
    len = len*1 - this.length;
    if (len < 1) return this;
    var a = Array(len);
    a = a.join(str||' ');
    return a.substr(0, len-1) + this;
  } 
}

if(!"".trim) {
  String.prototype.trim = function trim(){
    return this.replace(/^\s+|\s+$/g,'');
  } 
}

if(!"".ltrim) {
  String.prototype.ltrim = function ltrim(){
    return this.replace(/^\s+/,'');
  } 
}

if(!"".rtrim) {
  String.prototype.rtrim = function rtrim(){
    return this.replace(/\s+$/,'');
  } 
}

function now(str){
 if(str) return new Date(str);
 return new Date;
}
