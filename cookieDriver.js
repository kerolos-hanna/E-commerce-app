/*Add cookies take 3 argu. var, value, expire date*/

function AddCookie(variable, Name, expire){
  var date;
  //if cookie is session
  if(expire == 0)
  {
    document.cookie = variable + "=" + Name + ";";
  }
  else{
    date = new Date();
    date.setDate(date.getDate() + expire)
    //console.log(date)
    document.cookie = variable + "=" + Name + ";" + "expires=" + date.toUTCString();
  }
}

/*Update cookie take 3 argu. Like Add cookie function*/

function UpdateCookie(variable, Name, expire) {
  var date;
  if (expire == 0) {
    document.cookie = variable + "=" + Name + ";";
  } 
  else {
    date = new Date();
    date.setDate(date.getDate() + expire)
    //console.log(date)
    document.cookie = variable + "=" + Name + ";" + "expires=" + date.toUTCString();
  }
}

/*get cookie take 1 argu. var. name*/

function getCookies(variable){
  var cookies = document.cookie.split("; ");
  //console.log(cookies);
  var value
  cookies.forEach((item,index)=>{
    var nameValuePair = item.split("=");
    if (nameValuePair[0] == variable) {
      //console.log(nameValuePair[1]);
      value = nameValuePair[1];
    }
  })
  return value;
}

function deleteCookie(variable){
  var date1 = new Date(0);
  document.cookie = variable + "=" + variable + ";" + "expires=" + date1.toUTCString();
}

// AddCookie();
// AddCookie("age",15,4);
// getCookies("name");
// getCookies("age");
// UpdateCookie("name","hanna",4);
// deleteCookie("age");

