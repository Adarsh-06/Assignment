$(document).ready(function(){
			/*FIRST NAME*/
	$('.f-name').blur(function(){				
		if($('.f-name').val().length <= 0 ){
			$('.name-validation').removeClass('d-none');
		}else{
			$('.name-validation').addClass('d-none');
		}	
	});
			/*EMAIL VALIDATION*/
			
	$('.email').blur(function(){

		var email = $('.email').val();
		if(validateEmail(email)){
			$('.email-validation').addClass('d-none');
		}else{
			$('.email-validation').removeClass('d-none');
		}		
	});
		$('.pwd').blur(function(){
			if($('.pwd').val().length <=8){
				$('.pwd-validation').removeClass('d-none');
			}else{
				$('.pwd-validation').addClass('d-none');
			}
			
		});
		
								/*SUBMIT*/
								
		$('.submit-btn').click(function(){
			
			if($('.validation').not('.d-none').length > 0){
				alert('Please Fill required Values');
				return false;
			}else{
			
			var fname = $('.f-name').val(),
			dob = $('.birthday').val(),
			email = $('.email').val(),
			password = $('.pwd').val(),
			contact = $('.contact').val(),
			gender = $("input[name=gender]:checked").val(),
			developer =  $('.developer:checked').val(),
			address = $('.address').val(),
			city = $('.city :selected').text();
			
									
	var user = {
		fname : fname,
		dob : dob,
		email : email,
		password : password,
		contact : contact,
		gender : gender,
		developer :developer,
		address :	address,
		city : city,
		
	}
	
		console.log(user);
		
			$('.f-name').val('');
			$('.birthday').val('');
			$('.email').val('');
			$('.pwd').val('');
			$('.contact').val('');
			$("input[name=gender]:checked").val('');
			$('.developer:checked').val('');
			$('.address').val('');
			$('.city :selected').text('');	
	
	}
		
		
	});									
	


	/*REGEX FOR EMAIL FIELD (REGULAR EXPRESSION)*/								
		function validateEmail(email) {
			var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(email) ;
		};
  	
		
});













