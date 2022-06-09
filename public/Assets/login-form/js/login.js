
//Login-form POST userinfo
function sendUserInfo() {
	var loginInfo = {
			username:$("#username").val(),
			password:$("#password").val()
	};

	$.ajax({
			url: '/login',
			type: 'post',
			dataType: 'json',
			contentType: 'application/json',
			success: function (data) {},
			data: JSON.stringify(loginInfo)
	});
}


jQuery(document).ready(function() {
    /*
        Fullscreen background
    */
    $.backstretch([
				"Assets/login-form/img/backgrounds/2.jpg"
			, "Assets/login-form/img/backgrounds/3.jpg"
			, "Assets/login-form/img/backgrounds/1.jpg" ], 
				{duration: 3000, fade: 750}
		);
    /*
        Form validation
    */
    $('.login-form input[type="text"], .login-form input[type="password"], .login-form textarea').on('focus', function() {
    	$(this).removeClass('input-error');
    });
    
    $('#btn-login').on('click', function(e) {
        //console.log('LOGIN button clicked !');
        // e.preventDefault();
		sendUserInfo();    	
    });
});
