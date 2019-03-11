var myApp = angular.module("App", []);
myApp.controller("LoginController", function ($scope) {
    //创建用户名数据模型
    var temUserName = ["123","bjz", "lhf", "bjzlhf", "lhfbjz","刘会芳","包金兆"]
    var temPassword=["123","I Love You","i love you","我爱你","爱你"]
    $scope.loginManager = {
        errorMsg: null,//错误提示信息
        userClearMsg: null,//用户名清空提示
        passwordClearMMsg: null,//密码清空提示
        signIn: function (userName, password) {
            var _this = this;
            if (temUserName.indexOf(userName) == -1||temPassword.indexOf(password) == -1) {
                _this.errorMsg = "请输入你的小心肝"||"请输入正确的用户名或者密码";
                return;
            }
            location.href ="../Birthday/Birthday.html";
        },
        clearData: function (type, data) {
            var _this = this;
            //清空用户名
            if (type == "username" && typeof (data) != undefined && data.trim() == "") {
                _this.userClearMsg = "亲爱的，你把我的名字忘记了"||"用户名不能为空";
            }
            //清空密码
            if (type == "password" && typeof (data) != undefined && data.trim() == "") {
                _this.passwordClearMMsg = "你不爱我，┭┮﹏┭┮"||"密码不能为空";
            }

        },
        //输入内容
        inputMsg:function(type, data){
            var _this = this;
            _this.errorMsg=null;
            //清空用户名
            if (type == "username" && typeof (data) != undefined && data.trim() != "") {
                _this.userClearMsg = null;
            }
            //清空密码
            if (type == "password" && typeof (data) != undefined && data.trim() != "") {
                _this.passwordClearMMsg = null;
            }
        }
    }
})