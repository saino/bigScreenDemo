define([],function(){

    var jsonData = [
    /***********************************************  书籍  *************************************************/
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
            name : "世界经典童话故事选集(插画名作典藏版)(全二册)",         //书名
            author : "(德)格林兄弟等著 (瑞士)德里泽特等绘",                      //作者
            brief : "本书辑选了由11位国际插画大师绘制精美插画的10篇世界儿童耳熟能详的经典童话故事。这其中有格林兄弟从德国民间文学搜集整理来的《奇幻森林历险记》《灰姑娘》《三种语言》《渔夫和妻子》《蜂王》，也有意大利、挪威、罗马尼亚、法国等国家或地区口头流传的民间文学故事记录下来的《睡美人》《毛发新娘》《被施了魔法的猪》《美女与野兽》，还有像丹麦著名儿童文学作家安徒生这样根据自身经历创作的《冷杉树》。书中精选的每一篇童话均由来自瑞士、法国、意大利和美国的著名艺术家绘制插图。这些令人尊敬的艺术家运用各自具有代表性的独特的艺术表现手法，把每个童话故事都栩栩如生地呈现在人们面前，使本书具有跨越年龄的值得典藏的艺术价值。",
            categories : "少儿读物",
            cover : "images/bookCover/shijiexuanji.jpg", //封面图片
            initial : "S",              //首字母
            pagesNum : 356,               //书的总页数
            publishTime : "2016-01-01", //出版时间
            publisher : "广西师范大学出版社",    //出版社
            type : 1,                   //类别(1:图书  2:报纸 3:刊物)
            url : "http://www.agoodme.com/#/preview/tid=1564408c4268ba2a"                   //图书的二维码地址
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
        },

        {
            name : "不负时光",         //书名
            author : "杨泳",                      //作者
            brief : "人生就是一场旅途，人们在旅途中相遇、相知、相爱，从此活在当下，不负时光。旅行达人杨泳闲暇之余行遍山河，在她的旅途中，有与自己的相遇，与闺蜜共处的美丽时光，与知心爱人的相偎相依。她写的是风景，更是人生。字里行间蕴含的正能量，不但与读者分享旅途的温暖，还提供了不少的独家TIPS，是一本有爱有故事的旅行手册。",
            categories : "年青读物",
            cover : "images/bookCover/bufushiguang.jpg", //封面图片
            initial : "B",              //首字母
            pagesNum : 316,               //书的总页数
            publishTime : "2016-05-01", //出版时间
            publisher : "广西师范大学出版社",    //出版社
            type : 1,                   //类别(1:图书  2:报纸 3:刊物)
            url : "http://www.agoodme.com/#/preview/tid=15644099fcc1dd06"                   //图书的二维码地址
        },
        {
            name : "不朽的钢琴家",         //书名
            author : "[美]哈罗德•C.勋伯格著 顾连理、吴佩华译",                      //作者
            brief : "从莫扎特“像油在流”的神奇连音，到贝多芬海洋般汹涌澎湃；从克拉拉•舒曼“铅笔素描般清晰”的触键，到鲁宾斯坦火山般浓艳的演奏——《不朽的钢琴家》一书栩栩如生地刻画了有史以来最伟大的钢琴家群像。荣获普利茨奖的评论家兼作家哈罗德•勋伯格生动地介绍了每一位艺术家的表演风格，甚至他们令人捉摸不透的癖好。作者搜遍每一片材料，将其一一罗列，并加以分析阐释。勋伯格充满智慧、幽默风趣的文风令本书超越了音乐的范畴，即使是对音乐一窍不通的人也会忍不住一看到底。",
            categories : "年青读物",
            cover : "images/bookCover/buxiuqinjia.jpg", //封面图片
            initial : "B",              //首字母
            pagesNum : 544,               //书的总页数
            publishTime : "2014-06-01", //出版时间
            publisher : "广西师范大学出版社",    //出版社
            type : 1,                   //类别(1:图书  2:报纸 3:刊物)
            url : "http://www.agoodme.com/#/preview/tid=1564409fb97ef841"                   //图书的二维码地址
        },
        {
            name : "敦煌",         //书名
            author : "《生活月刊》 编",                      //作者
            brief : "敦煌定若远,一信动经年。要真正理解中国，认识中国，特别是中国古代艺术史，敦煌都是不可或缺的。然而，一直以来，对于普罗大众来说，敦煌以及其背后的历史似乎遥不可及。但实际上，敦煌不仅属于学界，更属于我们每一个人，要“继续敦煌”，实有必要让敦煌走出学界，走进大众。2010年和2013年，《生活》杂志的采编团队几次前往敦煌、兰州等地，对几代“敦煌人”进行了全面、深入的采访。这本书是4年多追踪历程的结集，将呈现一场冥冥之中的相遇——一座洞窟与一个（群）人的相遇，千年佛国与数十载人生的相遇。莫高窟与她的守望者们，在荒漠中相互召唤并彼此守候。他们的守护延长了莫高窟的生命，而在敦煌，他们也找到自我，找到艺术、文化乃至人生的新路。《敦煌：众人受到召唤》为四色图文书，既有敦煌研究院提供的珍贵图片，又有《生活》摄影师实地拍摄的图片，精美、大气、有意境，富含人文张力和表现力。",
            categories : "年青读物",
            cover : "images/bookCover/dunhuangzhaohuan.jpg", //封面图片
            initial : "X",              //首字母
            pagesNum : 324,               //书的总页数
            publishTime : "2015-09-01", //出版时间
            publisher : "广西师范大学出版社",    //出版社
            type : 1,                   //类别(1:图书  2:报纸 3:刊物)
            url : "http://www.agoodme.com/#/preview/tid=156440aa5cf283bb"                   //图书的二维码地址
        },
        {
            name : "我的动物，我的家人",         //书名
            author : "(英)鲍尔丁 著  朱虹博 译",                      //作者
            brief : "BBC知名女主持人克莱尔•鲍尔丁的处女作，一本与动物相依相伴的温馨读物，一个“问题少女”变身名流的华丽成长史，一部处处散发着浓郁英伦风情的家族轻喜剧。克莱尔在一个有着贵族血统的特殊家庭里长大，刚出生时，就有一条名叫糖果的斗牛犬全心守护她，是她最知心的玩伴。18个月大时，没有任何大人的陪伴，她便开始了骑马参加比赛的生涯，18岁时已经拿到多项业余赛马冠军称号。她的爸爸是英国冠军驯马师，家里养着英国王室的赛马，英国女王也是他们家的座上宾。天生一副不服输的性格，克莱尔是个名副其实的“女汉子”和“问题少女”，因为打架、偷窃被迫转学，在学校拉帮结派，把幼小的弟弟一个人放在高高的草垛，弟弟因此摔伤，18岁时收到61岁老人的求婚信…… 这些奇葩的事情层出不穷，让家人操碎了心。在她眼里，每个动物都是不可或缺的家庭成员。她从动物身上，学到了爱、包容与责任，这些素质帮助她一点点克服自卑和缺点，使她逐渐接纳不完美的自己，从人见人怕的“校霸”到众望所归的“宿管”，从遭学校拒绝的“问题少女”，进入世界一流名校剑桥大学，最终成为全英家喻户晓的知名主持人。",
            categories : "年青读物",
            cover : "images/bookCover/wodejiaren.jpg", //封面图片
            initial : "W",              //首字母
            pagesNum : 308,               //书的总页数
            publishTime : "2015-04-01", //出版时间
            publisher : "广西师范大学出版社",    //出版社
            type : 1,                   //类别(1:图书  2:报纸 3:刊物)
            url : "http://www.agoodme.com/#/preview/tid=156440d97beec624"                   //图书的二维码地址
        },
        {
            name : "心之道:致焦虑的年代",         //书名
            author : "[美]阿伦•瓦兹 著  李沁云 译",                      //作者
            brief : "《心之道》是一本西方人写的东方哲学类著作。作者针对现代人面对的危机，即一个人如何生活在一个他永远不能从中获得安全感的世界，从东方禅学思想的角度提供了一个可能的解答。他指出这个问题本身包含着它的解答——人们恰恰应该接受生活中充满痛苦与不安全感的事实，而不应该拒绝和逃避它们。为了有一个充实的人生，人们应该拥抱现在，活在当下。",
            categories : "年青读物",
            cover : "images/bookCover/xinzhiniandai.jpg", //封面图片
            initial : "X",              //首字母
            pagesNum : 224,               //书的总页数
            publishTime : "2015-04-01", //出版时间
            publisher : "广西师范大学出版社",    //出版社
            type : 1,                   //类别(1:图书  2:报纸 3:刊物)
            url : "http://www.agoodme.com/#/preview/tid=156440ddff60c6d5"                   //图书的二维码地址
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
            name : "《南京保卫战》",         //书名
            author : "马振犊等",                      //作者
            brief : "《南京大屠杀史料集》全套共25卷约1200余万字，本书所收集的材料为中国国民党军队在1937年12月为保卫当时的首都南京而与来犯的日本军队进行顽强作战的历史档案材料，包括目前能搜集到的中方有关南京保卫战的作战计划、战斗方案、作战命令及其执行情况、蒋介石以及国民党高级将领之间的往来军事函电、各参战部队的战斗详报和战役总结，当年南京保卫战的相关报道评论，以及南京保卫战参战人员的回忆录资料等等。",
            categories : "年青读物",
            cover : "images/bookCover/nanjingbaowei.jpg", //封面图片
            initial : "N",              //首字母
            pagesNum : 483,               //书的总页数
            publishTime : "2015-07", //出版时间
            publisher : "江苏人民出版社",    //出版社
            type : 1,                   //类别(1:图书  2:报纸 3:刊物)
            url : "http://glipc.gb.gli.cn/index.html?bid=100"                   //图书的二维码地址
        },
        {
            name : "《东京审判》",         //书名
            author : "杨夏鸣",                      //作者
            brief : "作为《南京大屠杀史料集》的第七册，这一册里收集是史料主要为东京审判的内容，包括审判中的法律文件以及南京大屠杀的各种证据。",
            categories : "年青读物",
            cover : "images/bookCover/dongjingshenpan.jpg", //封面图片
            initial : "D",              //首字母
            pagesNum : 622,               //书的总页数
            publishTime : "2015-07", //出版时间
            publisher : "江苏人民出版社",    //出版社
            type : 1,                   //类别(1:图书  2:报纸 3:刊物)
            url : "http://glipc.gb.gli.cn/index.html?bid=101"                   //图书的二维码地址
        },
        {
            name : "名家访谈实录",         //书名
            author : "与神对话栏目组",                      //作者
            brief : "“与神对话”栏目是中国创世神话项目重点文艺创作工程，专注于文化创作访谈的网络视听融媒体平台。该栏目集专访、实录、互动、花絮、合作为一体，全终端、融媒体展现中国当代文化名家风采。",
            categories : "年青读物",
            cover : "images/bookCover/mingjiafangtan.jpg", //封面图片
            initial : "D",              //首字母
            pagesNum : 13,               //书的总页数
            publishTime : "2014-09", //出版时间
            publisher : "与神对话栏目组",    //出版社
            type : 1,                   //类别(1:图书  2:报纸 3:刊物)
            url : "http://www.agoodme.com/#/preview/tid=1567a9e4761e3a46"                   //图书的二维码地址
        },
        {
            name : "晚清之后是民国",         //书名
            author : "赵焰",                      //作者
            brief : "本书系在全国颇有影响的“晚清三部曲”（《晚清有个李鸿章》、《晚清有个曾国藩》、《晚清有个袁世凯》）续篇，由晚清而入民国，由个案扩及群像，从大历史角度描述自袁世凯去世后，中国社会各方面的嬗变。古老的东方帝国，在一跃成为亚洲最早的共和国之后，不但没有新生，反而陷入内斗的泥淖，一切都在崩溃：政治和军事，经济和文化，信心和信仰……最后不得不以再度集权的方式，画了一个简单的句号。真实的北洋民国是怎样一种状态？内外各种势力如何博弈？世道人心如何演化？历史走向是否可以掌控？这一切与国民性有何关联？作者从容织出一张历史的网，其间，偶然与必然交错，变幻与恒定交织，振奋与悲怆交替。",
            categories : "银发读物",
            cover : "images/bookCover/wanqingminguo.jpg", //封面图片
            initial : "W",              //首字母
            pagesNum : 432,               //书的总页数
            publishTime : "2014-06-01", //出版时间
            publisher : "广西师范大学出版社",    //出版社
            type : 1,                   //类别(1:图书  2:报纸 3:刊物)
            url : "http://www.agoodme.com/#/preview/tid=156440caac927cc7"                   //图书的二维码地址
        },
        {
            name : "宋：现代的拂晓时辰",         //书名
            author : "吴钩",                      //作者
            brief : "人们对宋朝的评价，几乎可以分成对立的两派。那么，到底宋王朝是“积贫积弱”、“皇权专制的高峰”，还是宋朝乃“现代的拂晓时辰”呢？本书作者通过对海量的各类记述宋朝的文献和各种各样的宋画的解析，从生活、社会、经济、法政四个层面展示了中国封建历史上可能最为文明、现代且具有划时代意义的时代，驳斥了关于宋王朝“积贫积弱”“皇权专制的高峰”的传统论断，还宋朝文明以本来面目。作者以“现代性”为线索，在书中布了一个大局：“瓦舍勾栏”，描述宋人过着像宋瓷一样的精致生活；“契约时代”，展示宋人从身份社会到契约社会；“全民皆商”，细描了中国的重商主义年代；“共治天下”则充分体现了宋朝制度的分权与制衡之美。此书内容之博达，作者用意之良苦，可以想见！他非常严谨地论述了封建历史走到宋朝开始走向近代化这一论题，彻底颠覆了一些史学家对宋朝“积贫积弱”“太窝囊”的判断。该书既适合专业人士，也适合大众阅读，文笔优美，观点新颖，有趣并充满见解。 比如宋代开封的城市白领不在家中做饭，而是“叫外卖”；比如《清明上河图》展示的酒店业“灯箱广告”；比如南宋杭州出现的“猫粮专卖店”；比如宋代大城市的“证券交易所”；比如诞生于宋代的纸币；比如宋朝高度发达的契约；比如宋代立法的“民主审议程序”；比如非常缜密的宋代司法程序；比如十分讲求分权制衡的权力构造……这些历史细节组合起来，便展现出一种非常“现代化”的宋朝社会景象，让生活于现代社会的我们有一种“似曾相识”的感觉。这不仅是重新认识宋朝，也是重新认识中国历史的开始。",
            categories : "银发读物",
            cover : "images/bookCover/songxianshichen.jpg", //封面图片
            initial : "S",              //首字母
            pagesNum : 560,               //书的总页数
            publishTime : "2015-09-01", //出版时间
            publisher : "广西师范大学出版社",    //出版社
            type : 1,                   //类别(1:图书  2:报纸 3:刊物)
            url : "http://www.agoodme.com/#/preview/tid=156440bac7830951"                   //图书的二维码地址
        },
        {
            name : "人生，何以至此（语文一生）",         //书名
            author : "刘心武",                      //作者
            brief : "《人生，何以至此》是著名作家刘心武继《刘心武文存》后精心推出的人文读本，全书共分五个部分：人生，何以至此；世界，不仅仅走过；天若有情；跟自己约谈；草木奇葩的理想国。文章篇幅长短不一，内容丰富，既有长篇的叙事怀人之文，也有短小精悍的议论文；既有对中国传统文化的思考，又有对西方社会文化的体认。随感随想，随想随写，信手拈来，然而每一篇都有动人的力量。",
            categories : "银发读物",
            cover : "images/bookCover/renshengzhici.jpg", //封面图片
            initial : "R",              //首字母
            pagesNum : 364,               //书的总页数
            publishTime : "2016-01-01", //出版时间
            publisher : "广西师范大学出版社",    //出版社
            type : 1,                   //类别(1:图书  2:报纸 3:刊物)
            url : "http://www.agoodme.com/#/preview/tid=156440afd3716925"                   //图书的二维码地址
        },
        {
            name : "糖尿病",         //书名
            author : "吕晓红、刘颖 主编",                      //作者
            brief : "糖尿病怎么防？怎么治？吕晓红、刘颖主编的这本《专家与您面对面：糖尿病》从“未病先防，既病防变”的理念出发，分别从基础知识、发病信号、鉴别诊断、综合治疗、康复调养和预防保健六个方面进行介绍，告诉您关于糖尿病您需要知道的有多少，您能做的有哪些。",
            categories : "银发读物",
            cover : "images/bookCover/zhuanjianiaobing.jpg", //封面图片
            initial : "Z",              //首字母
            pagesNum : 192,               //书的总页数
            publishTime : "2016-01-01", //出版时间
            publisher : "中国医药科技出版社",    //出版社
            type : 1,                   //类别(1:图书  2:报纸 3:刊物)
            url : "http://www.agoodme.com/#/preview/tid=156440e5ba6e0368"                   //图书的二维码地址
        },
        {
            name : "腰椎间盘突出症",         //书名
            author : "刘红旗、尤蔚 主编",                      //作者
            brief : "腰椎间盘突出怎么防？怎么治？本书从“未病先防，既病防变”的理念出发，分别从基础知识、发病信号、鉴别诊断、综合治疗、康复调养和预防保健六个方面进行介绍，告诉您关于腰椎间盘突出症您需要知道的有多少，您能做的有哪些。",
            categories : "银发读物",
            cover : "images/bookCover/zhuanjiachuzheng.jpg", //封面图片
            initial : "Z",              //首字母
            pagesNum : 144,               //书的总页数
            publishTime : "2016-01-01", //出版时间
            publisher : "中国医药科技出版社",    //出版社
            type : 1,                   //类别(1:图书  2:报纸 3:刊物)
            url : "http://www.agoodme.com/#/preview/tid=156440ea4805486a"                   //图书的二维码地址
        },
        {
            name : "胃的呐喊",         //书名
            author : "崔栖滢",                      //作者
            brief : "从韩医的角度结合现代医学提出“痰积症”的理论，并指出“痰积症”不仅会造成胃肠疾病，还会引发诸多全身性相关疾病，如糖尿病、高血压病、肝病等。提醒读者不要把胃仅仅当作一个装食物的“饭桶”，应该要精心呵护它。作者指出“痰积症”多因为饮食过量、不注意饮食卫生等原因造成。而痰积症不及时治疗会引起不知原因的胃痛甚至恶变。《胃的呐喊:“饭桶”大逆袭(全彩版)》会告诉读者一些具体方法，主要是如何摒弃不良生活方式，建立科学、健康的生活方式，以改善和恢复人体的自身机制抵抗疾病。",
            categories : "银发读物",
            cover : "images/bookCover/weidenahan.jpg", //封面图片
            initial : "W",              //首字母
            pagesNum : 209,               //书的总页数
            publishTime : "2016-05-01", //出版时间
            publisher : "中国医药科技出版社",    //出版社
            type : 1,                   //类别(1:图书  2:报纸 3:刊物)
            url : "http://www.agoodme.com/#/preview/tid=156440d3155de8d0"                   //图书的二维码地址
        },

        /***********************************************  报纸  *************************************************/
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
            name : "ME日报",         //书名
            author : "ME STUDIO",                      //作者
            brief : "2016年7月27日小米在北京国家会议中心隆重举办新品发布会，虽然声势浩大，但依然槽点多多。",
            categories : "热门推荐",
            cover : "images/newspaperCover/MEribao-2016-7-28.png", //封面图片
            initial : "M",              //首字母
            pagesNum : 11,               //书的总页数
            publishTime : "2016-07-28", //出版时间
            publisher : "ME",    //出版社
            type : 2,                   //类别(1:图书  2:报纸 3:刊物)
            url : "http://www.agoodme.com/#/preview/tid=156551bfe30e1ccb"                   //图书的二维码地址
        },
        {
            name : "ME日报",         //书名
            author : "ME STUDIO",                      //作者
            brief : "里约奥运美女TOP10，谁是你的爱？",
            categories : "热门推荐",
            cover : "images/newspaperCover/MEribao-2016-7-29.png", //封面图片
            initial : "M",              //首字母
            pagesNum : 13,               //书的总页数
            publishTime : "2016-07-29", //出版时间
            publisher : "ME",    //出版社
            type : 2,                   //类别(1:图书  2:报纸 3:刊物)
            url : "http://www.agoodme.com/#/preview/tid=156551d6c903a2a1"                   //图书的二维码地址
        },
        {
            name : "ME日报",         //书名
            author : "ME STUDIO",                      //作者
            brief : "近日，姚笛在热门综艺节目《跨界歌王》中亮相，却被网友骂得很惨……",
            categories : "热门推荐",
            cover : "images/newspaperCover/MEribao-2016-7-26.png", //封面图片
            initial : "M",              //首字母
            pagesNum : 12,               //书的总页数
            publishTime : "2016-07-26", //出版时间
            publisher : "ME",    //出版社
            type : 2,                   //类别(1:图书  2:报纸 3:刊物)
            url : "http://www.agoodme.com/#/preview/tid=156551ea147293c3"                   //图书的二维码地址
        },
        {
            name : "ME日报",         //书名
            author : "ME STUDIO",                      //作者
            brief : "文章自编自导的《陆垚知马俐》公映了，谁都能看出这是文章对马伊琍道歉表决心的产物……",
            categories : "热门推荐",
            cover : "images/newspaperCover/MEribao-2016-7-21.png", //封面图片
            initial : "M",              //首字母
            pagesNum : 13,               //书的总页数
            publishTime : "2016-07-21", //出版时间
            publisher : "ME",    //出版社
            type : 2,                   //类别(1:图书  2:报纸 3:刊物)
            url : "http://www.agoodme.com/#/preview/tid=156551fc323adf37"                   //图书的二维码地址
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
            name : "ME周刊",         //书名
            author : "ME STUDIO",                      //作者
            brief : "就凭这些，Pokemon Go竟然也敢刷了我的屏",
            categories : "热门推荐",
            cover : "images/newspaperCover/MEzhoukan-2016-7-15.png", //封面图片
            initial : "M",              //首字母
            pagesNum : 12,               //书的总页数
            publishTime : "2016-07-15", //出版时间
            publisher : "ME",    //出版社
            type : 2,                   //类别(1:图书  2:报纸 3:刊物)
            url : "http://www.agoodme.com/#/preview/tid=15655212cadbdbca"                   //图书的二维码地址
        },
        {
            name : "ME商城",         //书名
            author : "ME STUDIO",                      //作者
            brief : "在家也能开冰店！最全制冰模具刨冰机大公开",
            categories : "热门推荐",
            cover : "images/newspaperCover/MEshangcheng-2016-8-2.png", //封面图片
            initial : "M",              //首字母
            pagesNum : 18,               //书的总页数
            publishTime : "2016-08-02", //出版时间
            publisher : "ME",    //出版社
            type : 2,                   //类别(1:图书  2:报纸 3:刊物)
            url : "http://www.agoodme.com/#/preview/tid=15655219a1e7e6e4"                   //图书的二维码地址
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
        },

    /***********************************************  刊物  *************************************************/

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
            name : "ME环球指南",         //书名
            author : "ME STUDIO",                      //作者
            brief : "带你直击全球时尚中心——意大利",
            categories : "热门推荐",
            cover : "images/journalCover/MEhuanqiuzhinan-2016-6-29.png", //封面图片
            initial : "M",              //首字母
            pagesNum : 68,               //书的总页数
            publishTime : "2016-06-29", //出版时间
            publisher : "ME",    //出版社
            type : 3,                   //类别(1:图书  2:报纸 3:刊物)
            url : "http://www.agoodme.com/#/preview/tid=1565525fcc3d7a58"                   //图书的二维码地址
        },
        {
            name : "ME环球指南",         //书名
            author : "ME STUDIO",                      //作者
            brief : "直击2016秋冬时装最新趋势",
            categories : "热门推荐",
            cover : "images/journalCover/MEhuanqiuzhinan-2016-8-1.png", //封面图片
            initial : "M",              //首字母
            pagesNum : 61,               //书的总页数
            publishTime : "2016-08-01", //出版时间
            publisher : "ME",    //出版社
            type : 3,                   //类别(1:图书  2:报纸 3:刊物)
            url : "http://www.agoodme.com/#/preview/tid=1565526d1de0534d"                   //图书的二维码地址
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
            name : "上海服饰",         //书名
            author : "ME STUDIO",                      //作者
            brief : "《上海服饰》创刊于1986年。由上海世纪出版集团上海科学技术出版社主办，面向全国发行的，是一本全新的针对国内大、中、小型城市职业女性的服饰美容杂志。丰富的编辑内容，以期做到欣赏性与实用性相结合，让女性读者既能从美感的图片中获得享受，又能获得穿着打扮的启发，更能培养出高品味，高情趣。",
            categories : "热门推荐",
            cover : "images/journalCover/shanghaifushi-2016-6-28.png", //封面图片
            initial : "S",              //首字母
            pagesNum : 11,               //书的总页数
            publishTime : "2016-06-28", //出版时间
            publisher : "ME",    //出版社
            type : 3,                   //类别(1:图书  2:报纸 3:刊物)
            url : "http://www.agoodme.com/#/preview/tid=1565528889618d85"                   //图书的二维码地址
        },
        {
            name : "上海服饰",         //书名
            author : "ME STUDIO",                      //作者
            brief : "《上海服饰》创刊于1986年。由上海世纪出版集团上海科学技术出版社主办，面向全国发行的，是一本全新的针对国内大、中、小型城市职业女性的服饰美容杂志。丰富的编辑内容，以期做到欣赏性与实用性相结合，让女性读者既能从美感的图片中获得享受，又能获得穿着打扮的启发，更能培养出高品味，高情趣。",
            categories : "热门推荐",
            cover : "images/journalCover/shanghaifushi-2016-7-29.png", //封面图片
            initial : "S",              //首字母
            pagesNum : 9,               //书的总页数
            publishTime : "2016-07-29", //出版时间
            publisher : "ME",    //出版社
            type : 3,                   //类别(1:图书  2:报纸 3:刊物)
            url : "http://www.agoodme.com/#/preview/tid=1565529b09d5ba50"                   //图书的二维码地址
        },
        {
            name : "车迷",         //书名
            author : "ME STUDIO",                      //作者
            brief : "《车迷》杂志由上海科学技术出版社正式创办于2000年1月，月刊，国际标准大16开，116面全彩印刷，面向全国发行。作为目前国内权威的汽车专业杂志之一，《车迷》以其专业的试车报告、迅速及时地反映国内外汽车动态和信息、传播汽车知识和汽车文化、精美的图文制作赢得了包括汽车爱好者、汽车专业人士、车主、潜在汽车购买者在内的广大读者的喜爱。",
            categories : "热门推荐",
            cover : "images/journalCover/chemi-2016-3-28.png", //封面图片
            initial : "C",              //首字母
            pagesNum : 18,               //书的总页数
            publishTime : "2016-03-28", //出版时间
            publisher : "ME",    //出版社
            type : 3,                   //类别(1:图书  2:报纸 3:刊物)
            url : "http://www.agoodme.com/#/preview/tid=156552a4a76f7f48"                   //图书的二维码地址
        },
        {
            name : "咔啪先锋摄影",         //书名
            author : "ME STUDIO",                      //作者
            brief : "《咔啪》先锋摄影，影像技术之战的瞭望者，12月刊内容抢先知。尖端影像技术的发展总是在一片硝烟弥漫中展开，从1981《CAPA》在日本创刊起到今天《咔啪》在中国走过的一年，在29年影像技术革新之战中，我们作为瞭望者的角色因为不倦的思考，勤奋的探索而备受瞩目！我们一直是广大影友眼睛、喉舌、把玩器材的手指，和拍摄创意的锦囊。继续我们的拍和之旅吧，12月可没有寒冷的迹象！”",
            categories : "热门推荐",
            cover : "images/journalCover/kapaxianfengsheying-2016-3-21.png", //封面图片
            initial : "K",              //首字母
            pagesNum : 15,               //书的总页数
            publishTime : "2016-03-21", //出版时间
            publisher : "ME",    //出版社
            type : 3,                   //类别(1:图书  2:报纸 3:刊物)
            url : "http://www.agoodme.com/#/preview/tid=156552adbdca613c"                   //图书的二维码地址
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
    ];
    return jsonData;
});