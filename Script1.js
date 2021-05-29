console.log("this is my script");

 function gettoken(){ var result; console.log("inside the gettoken function");
       fetch("http://localhost:12345/get_token").then
      (function (response)  { result =response.text(); return result;})
       .then(function (result){ let token = document.createElement("SPAN");
       token.innerHTML = result;
       document.getElementById("here").appendChild(token);
console.log("at the end of functiom");
  // 
})}

function Register(){
var user ={
    "username" : String(document.getElementById("name").value),
    "data" : String(document.getElementById("data").value),
  "token" : String(document.getElementById("token").value),
}
     fetch("http://localhost:12345/register",{
     method: 'POST',
     headers:{
         'content-type': 'application/json',
          
     },
     
     body:JSON.stringify(user)
    }).then(function (response,reject){  console.log(response.status);if (response.ok) { alert ("successfully registered");}
     else { return reject();}
              })
     .catch(function(error){alert("Error in registering");})
                                                    
  }



 
 function Getdata(){ var result3;var token2 ={
                     "token" : String(document.getElementById("token2").value)}

     fetch("http://localhost:12345/get_data",{
        method: 'POST',
        headers:{
            'content-type': 'application/json',
        },
        body:JSON.stringify(token2) 
    }).then(function (response,reject) { console.log(response.status);
        if (response.ok){  console.log("first then ");
          result3 =response.text();
          return result3;}  else {return reject();}

         }).then(
            function (result3){console.log("second then");
                 var Obj=document.createElement("DIV");
                 Obj.innerHTML=  result3;
                 document.getElementById("output").appendChild(Obj);
             
         }).catch(function(error){alert("This is not registered Token");})
    
}


