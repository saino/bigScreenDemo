define([], function(){
    var homeData = {
        data: {
            Advertisement: [        //广告
                {
                    pic: "images/banner/banner-1.jpg"
                    //url: "www.jumei.com"
                },
                {
                    pic: "images/banner/banner-2.jpg"
                    //url: "www.jumei.com"
                },
                {
                    pic: "images/banner/banner-3.jpg"
                    //url: "www.baidu.com"
                },
                {
                    pic: "images/banner/banner-6.jpg"
                    //url: "www.baidu.com"
                },
                {
                    pic: "images/banner/banner-4.jpg"
                    //url: "www.baidu.com"
                },
                {
                    pic: "images/banner/banner-5.jpg"
                    //url: "www.baidu.com"
                },
                {
                    pic: "images/banner/banner-7.jpg"
                    //url: "www.baidu.com"
                }
            ],
            ContentCategory: {      //分类
                Book: [
                    {
                        label: "全部图书",
                        name: "全部图书",
                        type: 1
                    },
                    {
                        label: "少儿读物",
                        name: "少儿读物",
                        type: 1
                    },
                    {
                        label: "年青读物",
                        name: "年青读物",
                        type: 1
                    },
                    {
                        label: "银发读物",
                        name: "银发读物",
                        type: 1
                    }
                ],
                Newspaper: [
                    {
                        label: "热门推荐",
                        name: "热门推荐",
                        type: 2
                    }
                ],
                Publication: [
                    {
                        label: "热门推荐",
                        name: "热门推荐",
                        type: 3
                    }
                ]
            },
            ContentHot: {           //推荐
                Book: [
                    {
                        name : "嗨,这个有情有肉的世界",         //书名
                        author : "周小肉 绘著 麦洁文 周莲莲 译",                      //作者
                        brief : "一本从六岁到六十岁的读者都会爱上的“童画”；一本古今、中外、庄谐、雅俗熔于一炉、相映成趣的奇葩之作；童稚的人可以读出纯真无邪，成熟的人可以读出豁然开朗。全书为“一页一画一言”的形式，共分五个板块：致艺、致典、致静、致爱、致胃。作者以幽默的现代哲思对传统的中外名画、典籍故事进行了趣味重构，又用天真的笔触描绘出日常生活中的点滴美好与时光深处的温暖记忆，脑洞大开，视角独特，观察细致入微，笑点拳拳到肉。",         //图书描述
                        categories : "少儿读物",                //
                        cover : "images/bookCover/haizheshijie.jpg", //封面图片
                        initial : "H",              //首字母
                        pagesNum : 160,               //书的总页数
                        publishTime : "2016-5-1", //出版时间
                        publisher : "广西师范大学出版社",    //出版社
                        type : 1,                   //类别(1:图书  2:报纸 3:刊物)
                        url : "http://www.agoodme.com/#/preview/tid=1564401a2bd1cc6f"                   //图书的二维码地址
                    },
                    {
                        name : "时代漫画",         //书名
                        author : "《生活月刊》 编",                      //作者
                        brief : "《时代漫画：被时光尘封的1930年代中国创造力》介绍《时代漫画》的漫画家群体及出版人邵洵美的生平经历，记录这些八十多年前在民国轰轰烈烈的大时代、大都会中生活的人是如何走上创作之路，并以画笔和刊物揭露社会黑暗、讽刺万千世相、挥洒抗日热情的。同时收录《时代漫画》全39期的封面、封底及精彩内页，呈现民国老漫画的魅力和当时的社会风尚与艺术趣尚。《时代漫画》创刊于1934年，1937年因抗战终刊，是民国时期漫画传播的一大平台。《时漫》集结了一大批有名的漫画家，如鲁少飞、张光宇、张正宇、曹涵美、叶浅予、廖冰兄、丁聪和华君武等，可谓“一代漫画大师的摇篮”。出版者为时代图书公司，其核心人物为邵洵美。",
                        categories : "年青读物",
                        cover : "images/bookCover/shidaimanhua.jpg", //封面图片
                        initial : "X",              //首字母
                        pagesNum : 268,               //书的总页数
                        publishTime : "2015-09-01", //出版时间
                        publisher : "广西师范大学出版社",    //出版社
                        type : 1,                   //类别(1:图书  2:报纸 3:刊物)
                        url : "http://www.agoodme.com/#/preview/tid=15644054353b5597"                   //图书的二维码地址
                    },
                    {
                        name : "中国老故事(全12册)",         //书名
                        author : "亲近母语研究院 编著",                      //作者
                        brief : "《盘古开天辟地》《女娲抟土造人》《七仙女与董永》《嫦娥奔月》《姜子牙的鱼钩》《贴“福”字的来源》……这些老故事，世世代代流传，爷爷奶奶听过，爸爸妈妈讲过，饱含中国的历史与传统，是我们与祖先共同的记忆，也是被人渐忘的瑰宝。本套丛书由亲近母语研究院主编，他们从近万篇民间故事中精选结集，本着儿童性、经典性、当代性的原则，将美丽的中国幻想故事、古老的神话传说，以优美的现代母语重述，致力创造一套最适合当代儿童阅读的中国老故事丛书，给予每个儿童应有的中国记忆。",
                        categories : "少儿读物",
                        initial : "Q",              //首字母
                        cover : "images/bookCover/zhongguogushi.jpg", //封面图片
                        pagesNum : "/",               //书的总页数
                        publishTime : "2016-04-01", //出版时间
                        publisher : "广西师范大学出版社",    //出版社
                        type : 1,                   //类别(1:图书  2:报纸 3:刊物)
                        url : "http://www.agoodme.com/#/preview/tid=15644091c49c076a"                   //图书的二维码地址
                    }
                ],
                Newspaper: [
                    {
                        name : "ME日报",         //书名
                        author : "ME STUDIO",                      //作者
                        brief : "滴滴收购Uber，会得“垄断病”吗？",
                        categories : "热门推荐",
                        cover : "images/newspaperCover/MEribao-2016-8-2.png", //封面图片
                        initial : "M",              //首字母
                        pagesNum : 13,               //书的总页数
                        publishTime : "2016-08-02", //出版时间
                        publisher : "ME",    //出版社
                        type : 2,                   //类别(1:图书  2:报纸 3:刊物)
                        url : "http://www.agoodme.com/#/preview/tid=1565519fecc80e17"                   //图书的二维码地址
                    },
                    {
                        name : "ME周刊",         //书名
                        author : "ME STUDIO",                      //作者
                        brief : "没想到你是这样的陈冠希……",
                        categories : "热门推荐",
                        cover : "images/newspaperCover/MEzhoukan-2016-7-29.png", //封面图片
                        initial : "M",              //首字母
                        pagesNum : 18,               //书的总页数
                        publishTime : "2016-07-29", //出版时间
                        publisher : "ME",    //出版社
                        type : 2,                   //类别(1:图书  2:报纸 3:刊物)
                        url : "http://www.agoodme.com/#/preview/tid=156552073974b024"                   //图书的二维码地址
                    },
                    {
                        name : "ME商城",         //书名
                        author : "ME STUDIO",                      //作者
                        brief : "说服自己男朋友护肤这件事，真的比登天还难么？",
                        categories : "热门推荐",
                        cover : "images/newspaperCover/MEshangcheng-2016-7-25.png", //封面图片
                        initial : "M",              //首字母
                        pagesNum : 11,               //书的总页数
                        publishTime : "2016-07-25", //出版时间
                        publisher : "ME",    //出版社
                        type : 2,                   //类别(1:图书  2:报纸 3:刊物)
                        url : "http://www.agoodme.com/#/preview/tid=15655231a6ea062c"                   //图书的二维码地址
                    }
                ],
                Publication: [
                    {
                        name : "ME环球指南",         //书名
                        author : "ME STUDIO",                      //作者
                        brief : "跟随华语电影的镜头畅游纽约这座“奇迹之城”",
                        categories : "热门推荐",
                        cover : "images/journalCover/MEhuanqiuzhinan-2016-6-22.png", //封面图片
                        initial : "M",              //首字母
                        pagesNum : 49,               //书的总页数
                        publishTime : "2016-06-22", //出版时间
                        publisher : "ME",    //出版社
                        type : 3,                   //类别(1:图书  2:报纸 3:刊物)
                        url : "http://www.agoodme.com/#/preview/tid=1565525226949be9"                   //图书的二维码地址
                    },
                    {
                        name : "东方财经",         //书名
                        author : "ME STUDIO",                      //作者
                        brief : "《东方财经》杂志社由中国传媒信息投资有限公司主办、中国企业投资协会协办的新闻出版机构，于2003年9月份在香港注册成立，2013年，获特许在内地公开发行，每月1日出版。《东方财经》长期关注两岸四地及全球重大经济、政治、社会、文化新闻，致力于推进两岸交流与合作。《东方财经》立足大量实力阶层、高端读者及社会主流人群，以高水平的采编队伍和丰富的国际资讯，通过与拥有财产、权力、思想和未来的中国实力精英的良性互动，全面深入地报道财经界的重大事件，为读者提供深度预测解析和具可操作性的投资资讯。",
                        categories : "热门推荐",
                        cover : "images/journalCover/dongfangcaijing-2016-6-20.png", //封面图片
                        initial : "D",              //首字母
                        pagesNum : 61,               //书的总页数
                        publishTime : "2016-06-20", //出版时间
                        publisher : "ME",    //出版社
                        type : 3,                   //类别(1:图书  2:报纸 3:刊物)
                        url : "http://www.agoodme.com/#/preview/tid=156552767555e006"                   //图书的二维码地址
                    },
                    {
                        name : "时尚芭莎",         //书名
                        author : "ME STUDIO",                      //作者
                        brief : "《时尚芭莎》杂志是时尚杂志社的一本出品杂志。在大部分固定报亭和邮局都有的卖。《时尚芭莎》是一本服务于中国精英女性阶层的时尚杂志，传播来自时装、美和女性的力量。她不仅提供最新的时尚资讯；精辟的流行趋势报道；最受关注的人物专访和女性话题；还时刻与读者分享着当代女性生活的乐趣和智慧——做个现代、优雅代言人。",
                        categories : "热门推荐",
                        cover : "images/journalCover/shishangbasha-2015-11-11.png", //封面图片
                        initial : "S",              //首字母
                        pagesNum : 20,               //书的总页数
                        publishTime : "2015-11-11", //出版时间
                        publisher : "ME",    //出版社
                        type : 3,                   //类别(1:图书  2:报纸 3:刊物)
                        url : "http://www.agoodme.com/#/preview/tid=156552b8828d8c3b"                   //图书的二维码地址
                    }
                ]
            }

        },
        meta: {
            message: "ok",
            success: true
        }
    };

    return homeData;
});