// 用户模块
var user = {
    //用户登录
    login: function (username, password) {
        $.post("http://192.168.172.82:8000/admin/login", {
            "user_name": username,
            "password": password
        }).then(function (res) {
            console.log(res);
            if (res.code === 200) {
                //登录成功
                //跳转到首页
                window.location.href = "./index.html"
            } else {
                alert(res.msg);
            }
        });
    },
    //用户登出
    logout: function () {
        $.post("http://192.168.172.82:8000/admin/logout")
            .then(function (res) {
                if (res.code === 200) {
                    //登出成功,回到登录页
                    window.location.href = "./login.html"
                } else {
                    alert(res.msg);
                }
            });
    },
    //获取用户信息
    getInfo: function () {
        //请求接口地址,获取用户信息
        $.get("http://192.168.172.82:8000/admin/getuser")
            .then(function (res) {
                if (res.code === 200) {
                    //获取用户信息成功
                    //显示内容
                    $("#username").text(res.data.nickname);
                    $(".userImg").attr("src", res.data.user_pic);
                } else {
                    alert(res.msg);
                }
            });
    }
}