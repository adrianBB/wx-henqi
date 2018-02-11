// zuopin.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        loadingshow: false,
        load: true,
        list: [
            { "image": "http://www6.cc01.com.cn/heiqi/images/zuopin01.jpg", "name": "不动明王" },
            { "image": "http://www6.cc01.com.cn/heiqi/images/zuopin02.jpg", "name": "SCHOOL作品" },
            { "image": "http://www6.cc01.com.cn/heiqi/images/zuopin03.jpg", "name": "纹身遮盖" },
            { "image": "http://www6.cc01.com.cn/heiqi/images/zuopin04.jpg", "name": "樱花" },
            { "image": "http://www6.cc01.com.cn/heiqi/images/zuopin01.jpg", "name": "不动明王" },
            { "image": "http://www6.cc01.com.cn/heiqi/images/zuopin02.jpg", "name": "SCHOOL作品" },
            { "image": "http://www6.cc01.com.cn/heiqi/images/zuopin03.jpg", "name": "纹身遮盖" },
            { "image": "http://www6.cc01.com.cn/heiqi/images/zuopin04.jpg", "name": "樱花" },
            
        ],
    },
    previewImage: function (e) {
        var current = e.target.dataset.src;
        var imglist = [];
        for (let i in this.data.list) {
            imglist.push(this.data.list[i].image);
        };
        wx.previewImage({
            current: current,
            urls: imglist
        });
        
    },

    onReachBottom: function () {
        if (this.data.load) {

            this.setData({
                load: false,
                loadingshow: true,
            });
            var _this = this;

            setTimeout(function () {
                var item = [
                    { "image": "http://www6.cc01.com.cn/heiqi/images/zuopin01.jpg", "name": "不动明王" },
                    { "image": "http://www6.cc01.com.cn/heiqi/images/zuopin02.jpg", "name": "SCHOOL作品" },
                    { "image": "http://www6.cc01.com.cn/heiqi/images/zuopin03.jpg", "name": "纹身遮盖" },
                    { "image": "http://www6.cc01.com.cn/heiqi/images/zuopin04.jpg", "name": "樱花" },

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