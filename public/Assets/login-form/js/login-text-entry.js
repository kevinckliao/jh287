
//Login-form POST userinfo
function sendUserInfo() {
	var logininfo = {
			usernum: $("#usernum").val(),
			username:$("#username").val(),
			password:$("#password").val()
	}

	// $('#target').html('sending..');

	$.ajax({
			url: '/login',
			type: 'post',
			dataType: 'json',
			contentType: 'application/json',
			success: function (data) {
					//$('#target').html(data.msg);
					//console.log(data);
			},
			data: JSON.stringify(logininfo)
	});

	$("#loginModal").modal('show');

	return false;
}


jQuery(document).ready(function() {
	
    /*
        Fullscreen background
    */
    $.backstretch([
                  "Assets/login-form/img/backgrounds/2.jpg"
	              , "Assets/login-form/img/backgrounds/3.jpg"
	              , "Assets/login-form/img/backgrounds/1.jpg"
	             ], {duration: 3000, fade: 750});
    
    /*
        Form validation
    */
    $('.login-form input[type="text"], .login-form input[type="password"], .login-form textarea').on('focus', function() {
    	$(this).removeClass('input-error');
    });
    
    $('.login-form').on('submit', function(e) {
			sendUserInfo();    	
    });
    
    
});
