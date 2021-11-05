// Form validator //
$(function(){
    var $registerForm = $("#signupform");
    if($registerForm.length){
        $registerForm.validate({
            rules:{
                firstname:{
                    required: true
                },
                lastname:{
                    required: true
                },
                email:{
                    required: true
                },
                password:{
                    required: true
                }
            },
            messages:{
                firstname:{
                    required: 'First name is required'
                },
                lastname:{
                    required: 'Last name is required'
                },
                email:{
                    required: 'Email is required'
                },
                password:{
                    required: 'Password is required'
                }
            }
        })
    }
})




$(function(){
    var $registerForm = $("#loginform");
    if($registerForm.length){
        $registerForm.validate({
            rules:{
                email:{
                    required: true
                },
                password1:{
                    required: true
                }
            },
            messages:{
                email:{
                    required: 'Email is required'
                },
                password1:{
                    required: 'Password is required'
                }
            }
        })
    }
})
// End of Form Validator //




