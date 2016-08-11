// 文件名称: homeModel.js
//
// 创 建 人: liubiao
// 创建日期: 2016/7/22 14:54
// 描    述: home页数据

define(['module/home/model/homeData'],function(homeData){
    var HomeModel = function(){};

    //home页数据请求
    HomeModel.prototype.getHomeData = function(successCB, errorCB){
        //console.log(homeData, "sssssssss");

        successCB && successCB(homeData);

        //$.ajax({
        //    type: "POST",
        //    url: "http://dev.agoodme.com:8080/distr/api/home",
        //    dataType: "json",
        //    data: {
        //      mac: "AAAAABBBBBCCCCC"
        //    },
        //    async: true,
        //    success: function(data){
        //        console.log(data,"ttttttt");
        //        successCB && successCB(data);
        //    },
        //    error: function(err){
        //        errorCB && errorCB(err);
        //    }
        //});

    };



    var homeModel = new HomeModel();

    return homeModel;
});