var ary=[];
function submit(){
  var names;
  for(var d=1;d<=10;d++){
   names=
    document.getElementById("ti_"+d).value;
    ary.push(names);
  }
  document.getElementById("display1").innerHTML=ary;
}

function show(){
  document.getElementById("display2").innerHTML=ary;
  names_of_people.sort();
}
var s=[]
function search(){
  var s= document.gatElementById("ti_2").value;
  var found=0;
  var j;
  for(j=0; j<names_of_people.length; j++)
    {
      if(s==names_of_people[j]){
        found=found+1
      }
    }
  document.getElementById("display2").innerHtml="name found "++found+" time/s";
  console.log("found name "++found+" time/s";)
}
