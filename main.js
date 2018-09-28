var sscValue;
var sscmks;
var sscmks1;
var sscradio;
var sscper;
var sscyop;


var interValue;
var intermks;
var intermks1;
var interradio;
var interper;
var interyop;
var name;
 var rollno;
var email;
 var store;
 var co;

function getDetails(){
  sscValue=document.getElementById('sscValue').value;
  sscmks=document.getElementById('sscmks');
  sscmks1=document.getElementById('sscmks1');
  sscper=document.getElementById('sscper').value;
  sscyop=document.getElementById('sscyop').value;
  interValue=document.getElementById('interValue').value;
  intermks=document.getElementById('intermks');
  intermks1=document.getElementById('intermks1');
  interper=document.getElementById('interper').value;
  interyop=document.getElementById('interyop').value;
  console.log(sscValue);
  if(sscmks.checked) {
    sscradio=sscmks.value;
    console.log(value);
  }else{
    sscradio=sscmks1.value;
  console.log(sscradio);
  }
  console.log(interValue);
  if(intermks.checked) {
    interradio=intermks.value;
    console.log(interradio);
  }else{
    interradio=intermks1.value;
  console.log(interradio);
  }
console.log(sscValue+" "+sscradio+" "+sscper+" "+sscyop);
console.log(interValue+" "+interradio+" "+interper+" "+interyop);
name=document.getElementById('name').value;
  rollno=document.getElementById('rollno').value;
   email=document.getElementById('email').value;
   console.log(name+" "+rollno+" "+email);
   if (!window.indexedDB) {
     console.log("indexed db is not working...!");
   }
   var request=window.indexedDB.open("sahiDB",1);
   request.onerror=e=>{
     console.log(e);
 }
 request.onupgradeneeded=e=>{
   var dbname=e.target.result;
   dbname.createObjectStore("cse",{keyPath:"name"});
   console.log("upgraded...!");
 }
  request.onsuccess=e=>{
    var dbname=e.target.result;
 store=dbname.transaction("cse","readwrite").objectStore("cse");
 store.put(
   {
     "name":name,
     "rollno":rollno,
     "email":email
   }
 );
    console.log("success...!");
  }


}



























// var name;
// var rollno;
// var email;
// var store;
// function getDetails(){
//   name=document.getElementById('name').value;
//   rollno=document.getElementById('rollno').value;
//   email=document.getElementById('email').value;
//   console.log(name+" "+rollno+" "+email);
//   if (!window.indexedDB) {
//     console.log("indexed db is not working...!");
//   }
//   var request=window.indexedDB.open("sahiDB",1);
//   request.onerror=e=>{
//     console.log(e);
// }
// request.onupgradeneeded=e=>{
//   var dbname=e.target.result;
//   dbname.createObjectStore("cse",{keyPath:"name"});
//   console.log("upgraded...!");
// }
//  request.onsuccess=e=>{
//    var dbname=e.target.result;
// store=dbname.transaction("cse","readwrite").objectStore("cse");
// store.put(
//   {
//     "name":name,
//     "rollno":rollno,
//     "email":email
//   }
// );
//    console.log("success...!");
//  }
//
//
// }
