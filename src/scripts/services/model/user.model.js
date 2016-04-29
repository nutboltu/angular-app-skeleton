(function () { 
    app.service('userModel', function ($window) {  

        var self = this;  

        self.setUserInfo = function(userInfo){
            $window.localStorage.setItem('userInfo', JSON.stringify(userInfo));
        };

        self.setLoggedInToken= function(token){
            $window.localStorage.setItem('token', token);
        };

        self.getLoggedInId = function(){ 
            return JSON.parse($window.localStorage.getItem('userInfo'))._id; 
        };  

        self.getLoggedInToken = function(){ 
            return $window.localStorage.getItem('token'); 
        };
              
        self.getLoggedInEmail = function(){ 
            return JSON.parse($window.localStorage.getItem('userInfo')).email; 
        };  

        self.getLoggedInName = function(){

            var userInfo = JSON.parse($window.localStorage.getItem('userInfo'));
            return userInfo.firstName + ' '+  userInfo.lastName ; 
        };  

        self.getLoggedInFirstName = function(){
            return JSON.parse($window.localStorage.getItem('userInfo')).firstName;
        };  

        self.getLoggedInLastName = function(){
            return JSON.parse($window.localStorage.getItem('userInfo')).lastName;
        };

        self.getLoggedInUser = function(){
            var userInfo =  JSON.parse($window.localStorage.getItem('userInfo'));
            return {
                _id: userInfo._id,
                name: userInfo.firstName+' '+userInfo.lastName,
                email: userInfo.email,
                contactNo: userInfo.contactNo
            };
        };

        self.getAllInformation = function(){

            return JSON.parse($window.localStorage.getItem('userInfo'));
        };

        self.getFriendList = function(){

            return JSON.parse($window.localStorage.getItem('userInfo')).friendList;
        };

        self.isAuthenticated = function(){ 
            return  !!$window.localStorage.getItem('token'); 
        };   

        self.clearSession = function(){ 
            $window.localStorage.clear(); 
        };  
    }); 

}).call(this);