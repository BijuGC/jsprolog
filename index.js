//Author : BijuGC

function setSideBySide(){
  var t = document.body.className;
  t = t.replace(/sidebyside|longform/g, "").trim();
  t = t + " sidebyside";
  document.body.className = t;
  $('sidebysidelink').className = 'hide';
  $('longformlink').className = '';
  return false;
}

function setLongForm(){
  var t = document.body.className;
  t = t.replace(/sidebyside|longform/g, "").trim();
  t = t + " longform";
  document.body.className = t;
  $('sidebysidelink').className = '';
  $('longformlink').className = 'hide';
    return false;
}

function setBigFont(){
  var t = document.body.className;
  t = t.replace(/bigfont/g, "").trim();
  t = t + " bigfont";
  document.body.className = t;
  $('fontbiglink').className = 'hide';
  $('fontnormallink').className = '';  
  return false;
}

function setNormalFont(){
  var t = document.body.className;
  t = t.replace(/bigfont/g, "").trim();
  document.body.className = t;
  $('fontbiglink').className = '';
  $('fontnormallink').className = 'hide';
  return false;
}


function env_cls(){
  $('output').value = "";
}

function env_print(str){
  $('output').value += str;
}

function env_getShowparse(){
  return $('showparse').checked;
}

function env_getRules(){
  return $('rules').value;
}

function env_getStdRules(){
  return $('stdrules').value;
}

function env_getConsultRules(){
  return $('consultrules').value;
}

function env_getQuery(){
  return $('query').value;;
}

var env = {};
env.cls = env_cls;
env.print = env_print;
env.getShowparse = env_getShowparse;
env.getStdRules = env_getStdRules;
env.getConsultRules = env_getConsultRules;
env.getRules = env_getRules;
env.getQuery = env_getQuery;


function consult(){
  $('consultfile').click();
}

function consultchange(){
  var ff = $('consultfile');

  for(var i=0; i < ff.files.length; i++){
    var oFile = ff.files[i];
      var oFReader = new FileReader();
      oFReader.onload = fileReaderLoad;
      oFReader.fileName = oFile.name;
      oFReader.readAsText(oFile);
  }
}

function selectrulechange(){
   $('rules').className = 'hide';
   $('stdrules').className = 'hide';
   $('consultrules').className = 'hide';
   
   if($('selectrule1').checked) $('rules').className = '';
   else if($('selectrule2').checked) $('stdrules').className = '';
   else if($('selectrule3').checked) $('consultrules').className = '';
}

 
function fileReaderLoad(oFREvent) {
  if($('consultrules').value.trim()) $('consultrules').value +=  '\n\n\n';
  else $('consultrules').value = '';
  $('consultrules').value += '# Consult File: ' + oFREvent.target.fileName + '\n' + oFREvent.target.result + '\n'
  $('selectrule3').checked = true;  
  selectrulechange();
}

function bodyKeypress(event){
  if(event.ctrlKey && event.keyCode == 13){
   freeform();
   return false;
  }
}
