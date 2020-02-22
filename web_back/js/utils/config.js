//所有接口的基地址
var BASEURL = "http://localhost:8000";      //本机地址
//var BASEURL = "http://192.168.200.1:8000"; 本机地址
//var BASEURL = "http://39.99.130.177:8000"; 有效期一个月,是阿里云上的一个主机

//用来保存所有的接口信息
var APIList = {
    //用户登录
    user_login: BASEURL + '/admin/login',

    //用户登出
    user_logout: BASEURL + '/admin/logout',

    //获取用户信息
    user_getInfo: BASEURL + '/admin/getuser',

    //获取文章分类
    category_get: BASEURL + '/admin/category_search',

    //删除文章分类
    category_del: BASEURL + '/admin/category_delete',

    //添加文章分类
    category_add: BASEURL + '/admin/category_add',

    //编辑文章分类
    category_edit: BASEURL + '/admin/category_edit',

    //获取文章
    article_get: BASEURL + '/admin/search'
};