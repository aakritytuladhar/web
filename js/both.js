
function handleClick(){
	   var p=document.signup.password.value;
	   var cp=document.signup.Cpassword.value;
	   if(p!=cp){
	     alert("Please enter same password in confirm password as password");
	     return false;
	   }
	}