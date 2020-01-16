//所有接口的基地址
var BASEURL = "http://localhost:8000";

//用来保存所有的接口信息
var APIList = {
    user_login: BASEURL + '/admin/login',
    user_logout: BASEURL + '/admin/logout',
    user_getInfo: BASEURL + '/admin/getuser'
};