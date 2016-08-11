// 文件名称: typeModelData.js
//
// 创 建 人: liubiao
// 创建日期: 2016/7/26 10:10
// 描    述: 类型列表页数据

define(['module/book/model/data'],function(jsonData){
    var TypeModel = function(){};

    //home页数据请求

    TypeModel.prototype.getTypeData = function(options, successCB, errorCB){

        var resData = {
            data: {
                contents: [],
                count: 0
            },
            meta: {
                message : "ok",
                success : true
            }
        };
        var contentsData = [];
        for(var i=0; i<jsonData.length; i++){
            if((jsonData[i].type == options.type ) && (options.key == "ALL" || jsonData[i].initial == options.key)
                && ((jsonData[i].categories.indexOf(options.label)>-1) || options.label == "全部图书")){

                contentsData.push(jsonData[i]);

            }
        }
        resData.data.contents = contentsData;
        resData.data.count = contentsData.length;

        successCB && successCB(resData);

    };



    var typeModel = new TypeModel();

    return typeModel;
});