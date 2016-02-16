(function(){
    //var API_URL = 'your_server_url';
    var API_URL = 'http://127.0.0.1:1980';
    app.constant('API',{

        USER:{
            FIND_BY_ID: API_URL+'/user/findById',
            LOGIN: API_URL +'/user/login',
            REGISTER: API_URL + '/user/register'
        }
    });
    app.constant('CONSTANT',{
        //var API_URL = 'your_server_url';
        API_URL : 'http://127.0.0.1:1980'
    });

    app.constant('RESPONSE_CODE',{
        success: 200,
        notFound: 404,
        error: 500

    });
}).call(this);