

//console.log("hello");

var submit = $(".submit");

submit.on("click", logIn);

function logIn(){
  var username = $('.username').val();
  var password = $('.password').val();

  if (username== "rachelxie"){
    //console.log("hello");
    window.location.href = "https://uoft-hacks-introspect-mood-tracker.rachelx1.repl.co/";
  }
}
