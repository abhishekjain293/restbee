$(document).ready(function() {
	jQuery.validator.addMethod("accept", function(value, element, param) {
  return value.match(new RegExp("^" + param + "$"));
});
jQuery.validator.addMethod("customemail", function(value, element) {
    return this.optional(element) || /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
}, "Wrong Value entered!.");
$.validator.addMethod('filesize', function (value, element, param) {
    return this.optional(element) || (element.files[0].size <= param)
}, 'File size must be less than {0}');
	$('form').each(function() {
    $(this).validate({
        rules: {
            name: {
				required: true,
				accept: "[a-zA-Z\ ]+",
			},
            email: {
                required: true,
                email: true,
				customemail:true
            },
            phone: {
                required: true,
                number: true,
				minlength: 10,
				maxlength: 11
            },
			social1: {
				required: true
			},
			cv_id: {
				required: true,
				extension: "pdf|docx|doc",
				filesize: 2097152
			},
			msg1: {
				required:true,
				maxlength:500,
				minlength:100
			},
			msg2: {
				required:true,
				maxlength:500,
				minlength:100
			}
        },
        messages: {
            name: {
				required: "Oh! No Name?",
				accept: "This name is too difficult to pronunce!"
			},
            email: {
				required:"Please Enter a E-Mail ID.",
				email: "Our system says, its invalid!",
				customemail: "Our system says, its invalid!"
			},
            phone: {
                required: "Please enter your contact number.",
                number: "This number does not exist. Please recheck!"
            },
			social1: {
				required: "Enter any social media profile link.",
				url: "This doesn't seems to be a correct link."
			},
			cv_id:{
				required: "Please upload your resume.",
				extension: "Accepted formats are .pdf, .docx or .doc",
				filesize: "Please upload resume of size no more than 2 MB."
			},
			msg1: {
				required: "We would love to know you more. Please.",
				maxlength: "Please cut it down to fit under 500 characters.",
				minlength: "Come on! Tell us a bit more ya."
			},
			msg2: {
				required: "Come On! Brag about your achievements.",
				maxlength: "Please cut it down to fit under 500 characters.",
				minlength: "Come on! Tell us a bit more ya."
			}
        },
		submitHandler: function(form) {
		var formData = new FormData($(form)[0]);
        $.ajax({
            url: 'apply_job.php',
            type: 'POST',
			data: formData,
			async: false,
			success: function(data2) {
				//$.each(data2, function(){
				if($.trim(data2)=="false")
				{
					$('div.jobapplication_reply').each(function(i){
					$(form).html("<div class='row' style='padding-top:80px;padding-bottom:80px'><div class='col-md-1'></div><div class='col-md-10'><h2 style='letter-spacing: 0.1em;line-height: 2;text-align: center;'>OoO! This doesn't happen often but <br>we got a glitch to solve.<br> Please try again in a moment.</h2></div><div class='col-md-1'></div></div>");
					});
				}
				if($.trim(data2)=="false1"){
					$('div.jobapplication_reply').each(function(i){
					$(form).html("<div class='row' style='padding-top:80px;padding-bottom:80px'><div class='col-md-1'></div><div class='col-md-10'><h2 style='letter-spacing: 0.06em;line-height: 2;text-align: center;'>Your application is already under <br>screening process!<br> Keep checking your mail.</h2></div><div class='col-md-1'></div></div>");
					});
				}
				if($.trim(data2)=="true"){
					$('div.jobapplication_reply').each(function(i){
					$(form).html("<div class='row' style='padding-top: 80px;padding-bottom:80px'><div class='col-md-1'></div><div class='col-md-10'><h2 style='letter-spacing: 0.06em;line-height: 2;text-align: center;'>Smart Move!<br>Your application is being processed at top priority.<br>Just Keep checking your mail ID.</h2></div><div class='col-md-1'></div></div>");
					});
					
				}
				
			},
			cache: false,
			contentType: false,
			processData: false
    });
    }

	});		
});
});
