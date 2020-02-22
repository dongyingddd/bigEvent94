//把所有与文章分类相关的操作写在这里

var category = {
    //获取文章分类
    get: function () {
        return $.get(APIList.category_get);
    },
    //添加文章分类
    add: function (name, slug) {
        return $.post(APIList.category_add, { 'name': name, 'slug': slug });
    },
    //删除文章分类
    del: function (id) {
        return $.post(APIList.category_del, { 'id': id });
    },

    //编辑文章分类
    edit: function (id, name, slug) {
        return $.post(APIList.category_edit, { 'id': id, 'name': name, 'slug': slug });
    }
}