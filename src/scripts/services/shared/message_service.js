(function(){
    app.service('messageService', function(){

        var self = this;

        self.SUCCESS_MESSAGES = {
            REGISTER_CONFIRMATION:{
                title: 'Verify Email Address',
                description: 'Thanks for registering!<br/> Please check your email and follow the instructions to verify your email address.',
                success: true
            }
        };

        self.ERROR_MESSAGES = {
            EMAIL_ALREADY_EXISTS:{
                title: 'Email address already Exists',
                description: 'Emails address already exists. Please try another.'
            },
            LOGIN_FAILED:{
                title: 'LOGIN FAILED',
                description: 'The login details provided do not match our records.'
            }
        };



    });


}).call(this);