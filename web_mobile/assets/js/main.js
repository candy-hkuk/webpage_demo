$("#fb_login").click(function(){
	alert("logging in");
});

$("#btn-logout").click(function(){
	alert("logging out");
});

$("#fb_register").click(function(){
	alert("getting registered");
});

$("#goToGame").click(function(){
	alert("going to game");
});

$("#play-game-only").click(function(){
	alert("trying game");
});

$("#play-game-with-code").click(function(){
	alert("playing game");
	$.post(
		"apiTest/checkCode.php",
		{
			redeem_code: $("#redeem_code").val()
		},
		function (data){
			alert(data);
		}
	);
});