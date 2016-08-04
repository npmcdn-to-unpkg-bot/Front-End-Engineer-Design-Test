// Java Script 表單驗證 Code(jQuery)

// 變數名稱
var username = $("#username").val();
var password = $("#password").val();
var email = $("#email").val();
var phone = $("#phone").val();
var address $("#address").val();

//please input the test email to see is valid
//var strEmail = “foxfirejack@gmail.com”;
//Regular expression Testing
emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;

// 修改狀態
$('#select').chenge(function(){
  
  return
});

// 確認紐
$('#AddSumbit').click(function(){

  //validate ok or not?
  if(email.search(emailRule)!= -1){
	  alert("true");
  } else {
	  alert("false");
	  return
  }​

  //validate name?
  if (name.username.value == "") 
     alert("未輸入姓名");
 	 return
  }

  //validate phone?
  if (phone.phone.value == "")
  	 alert("未輸入電話號碼");
 	 return
  } 

  alert('資料成功送出!!');

});
 
