// 用户模块
var user = {
    //用户登录
    login: function (username, password) {
        return $.post(APIList.user_login, {
            "user_name": username,
            "password": password
        });
    },
    //用户登出
    logout: function () {
        return $.post(APIList.user_logout);

    },
    //获取用户信息
    getInfo: function () {
        //请求接口地址,获取用户信息
        return $.get(APIList.user_getInfo);

    }
}
