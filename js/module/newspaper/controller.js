// 文件名称: controllers.js
//
// 创 建 人: liubiao
// 创建日期: 2016/07/18 09:58
// 描    述: controllers.js
define([
    'module/book/views/newspaper'
],function(NewspaperView){
    return {
        newspaper : function(){
            app.page.show(NewspaperView);
        }
    };
});