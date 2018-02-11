// newslist.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        loadingshow: false,
        load: true,
        list: [
            { "url":"../newspage/newspage", "image": "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3170547136,117695243&fm=173&s=E22AB24720322386DB0D503603009064&w=218&h=146&img.JPEG", "title": "中国制造越造越强 外国网友：必买！钱都给你！", "date": "2017-08-01", "desc": "据央视财经报道，2016年，中国制造的防弹衣占据了全球防弹衣市场的70%。" },
            { "url": "../newspage/newspage", "image": "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3666631133,1725117302&fm=173&s=5412529146F2FFCA42101CD40300F0B2&w=218&h=146&img.JPEG", "title": "解放军驻吉布提保障基地投入使用", "date": "2017-08-02", "desc": "中国人民解放军驻吉布提保障基地成立暨部队出征仪式在广东湛江某军港码头举行。海轩摄" },
            { "url": "../newspage/newspage", "image": "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1094556367,2973832971&fm=173&s=16226AA1480A0CC6441CDC290300A0C2&w=442&h=318&img.JPEG", "title": "对华出口增长鼓励了韩国？文在寅放言萨德全面部署！", "date": "2017-08-03", "desc": "韩国《国民日报》近日报道消息称，韩国仁川市化妆品6月份销售出口额猛增40.8%，其中对华出口增长额更达到78%"},
            { "url": "../newspage/newspage", "image": "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3170547136,117695243&fm=173&s=E22AB24720322386DB0D503603009064&w=218&h=146&img.JPEG", "title": "中国制造越造越强 外国网友：必买！钱都给你！", "date": "2017-08-01", "desc": "据央视财经报道，2016年，中国制造的防弹衣占据了全球防弹衣市场的70%。" },
            { "url": "../newspage/newspage", "image": "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3666631133,1725117302&fm=173&s=5412529146F2FFCA42101CD40300F0B2&w=218&h=146&img.JPEG", "title": "解放军驻吉布提保障基地投入使用", "date": "2017-08-02", "desc": "中国人民解放军驻吉布提保障基地成立暨部队出征仪式在广东湛江某军港码头举行。海轩摄" },
            { "url": "../newspage/newspage", "image": "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1094556367,2973832971&fm=173&s=16226AA1480A0CC6441CDC290300A0C2&w=442&h=318&img.JPEG", "title": "对华出口增长鼓励了韩国？文在寅放言萨德全面部署！", "date": "2017-08-03", "desc": "韩国《国民日报》近日报道消息称，韩国仁川市化妆品6月份销售出口额猛增40.8%，其中对华出口增长额更达到78%" },
            { "url": "../newspage/newspage", "image": "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3170547136,117695243&fm=173&s=E22AB24720322386DB0D503603009064&w=218&h=146&img.JPEG", "title": "中国制造越造越强 外国网友：必买！钱都给你！", "date": "2017-08-01", "desc": "据央视财经报道，2016年，中国制造的防弹衣占据了全球防弹衣市场的70%。" },
            { "url": "../newspage/newspage", "image": "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3666631133,1725117302&fm=173&s=5412529146F2FFCA42101CD40300F0B2&w=218&h=146&img.JPEG", "title": "解放军驻吉布提保障基地投入使用", "date": "2017-08-02", "desc": "中国人民解放军驻吉布提保障基地成立暨部队出征仪式在广东湛江某军港码头举行。海轩摄" },
            { "url": "../newspage/newspage", "image": "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1094556367,2973832971&fm=173&s=16226AA1480A0CC6441CDC290300A0C2&w=442&h=318&img.JPEG", "title": "对华出口增长鼓励了韩国？文在寅放言萨德全面部署！", "date": "2017-08-03", "desc": "韩国《国民日报》近日报道消息称，韩国仁川市化妆品6月份销售出口额猛增40.8%，其中对华出口增长额更达到78%" },
        ]
    },
    onReachBottom:function(){
        if (this.data.load) {

            this.setData({
                load: false,
                loadingshow: true,
            });
            var _this = this;

            setTimeout(function () {
                var item = [
                    { "url": "../newspage/newspage", "image": "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3170547136,117695243&fm=173&s=E22AB24720322386DB0D503603009064&w=218&h=146&img.JPEG", "title": "中国制造越造越强 外国网友：必买！钱都给你！", "date": "2017-08-01", "desc": "据央视财经报道，2016年，中国制造的防弹衣占据了全球防弹衣市场的70%。" },
                    { "url": "../newspage/newspage", "image": "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3666631133,1725117302&fm=173&s=5412529146F2FFCA42101CD40300F0B2&w=218&h=146&img.JPEG", "title": "解放军驻吉布提保障基地投入使用", "date": "2017-08-02", "desc": "中国人民解放军驻吉布提保障基地成立暨部队出征仪式在广东湛江某军港码头举行。海轩摄" },
                    { "url": "../newspage/newspage", "image": "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1094556367,2973832971&fm=173&s=16226AA1480A0CC6441CDC290300A0C2&w=442&h=318&img.JPEG", "title": "对华出口增长鼓励了韩国？文在寅放言萨德全面部署！", "date": "2017-08-03", "desc": "韩国《国民日报》近日报道消息称，韩国仁川市化妆品6月份销售出口额猛增40.8%，其中对华出口增长额更达到78%" },
                    

                ];
                var newlist = _this.data.list;
                
                for (var i in item) {
                    newlist.push(item[i]);
                }
                _this.setData({
                    loadingshow: false,
                    load: true,
                    list: newlist
                });

            }, 1000)
        }
    }


})