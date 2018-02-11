// caselist.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        loadingshow: false,
        load: true,
        list: [
            { "url": "../casepage/casepage", "image": "http://www6.cc01.com.cn/heiqi/images/case01.jpg", "title": "激光洗纹身", "desc": "黑色纹身的清洗一般是3次以上，每次需间隔两个月左右！黑色纹身的清洗一般是3次以上，每次需间隔两个月左右！" },
            { "url": "../casepage/casepage", "image": "http://www6.cc01.com.cn/heiqi/images/case02.jpg", "title": "失败纹身遮盖", "desc": "遮盖前后的对比！遮盖前后的对比！遮盖前后的对比！" },
            { "url": "../casepage/casepage", "image": "http://www6.cc01.com.cn/heiqi/images/case03.jpg", "title": "激光洗纹身", "desc": "不破坏毛囊，不损伤正常皮肤，不留疤痕；高效激光瞬间爆破。" },
            { "url": "../casepage/casepage", "image": "http://www6.cc01.com.cn/heiqi/images/case01.jpg", "title": "激光洗纹身", "desc": "黑色纹身的清洗一般是3次以上，每次需间隔两个月左右！黑色纹身的清洗一般是3次以上，每次需间隔两个月左右！" },
            { "url": "../casepage/casepage", "image": "http://www6.cc01.com.cn/heiqi/images/case02.jpg", "title": "失败纹身遮盖", "desc": "遮盖前后的对比！遮盖前后的对比！遮盖前后的对比！" },
            { "url": "../casepage/casepage", "image": "http://www6.cc01.com.cn/heiqi/images/case03.jpg", "title": "激光洗纹身", "desc": "不破坏毛囊，不损伤正常皮肤，不留疤痕；高效激光瞬间爆破。" },
            { "url": "../casepage/casepage", "image": "http://www6.cc01.com.cn/heiqi/images/case01.jpg", "title": "激光洗纹身", "desc": "黑色纹身的清洗一般是3次以上，每次需间隔两个月左右！黑色纹身的清洗一般是3次以上，每次需间隔两个月左右！" },
            { "url": "../casepage/casepage", "image": "http://www6.cc01.com.cn/heiqi/images/case02.jpg", "title": "失败纹身遮盖", "desc": "遮盖前后的对比！遮盖前后的对比！遮盖前后的对比！" },
            { "url": "../casepage/casepage", "image": "http://www6.cc01.com.cn/heiqi/images/case03.jpg", "title": "激光洗纹身", "desc": "不破坏毛囊，不损伤正常皮肤，不留疤痕；高效激光瞬间爆破。" },
        ]
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
                    { "url": "../casepage/casepage", "image": "http://www6.cc01.com.cn/heiqi/images/case01.jpg", "title": "激光洗纹身", "desc": "黑色纹身的清洗一般是3次以上，每次需间隔两个月左右！黑色纹身的清洗一般是3次以上，每次需间隔两个月左右！" },
                    { "url": "../casepage/casepage", "image": "http://www6.cc01.com.cn/heiqi/images/case02.jpg", "title": "失败纹身遮盖", "desc": "遮盖前后的对比！遮盖前后的对比！遮盖前后的对比！" },
                    { "url": "../casepage/casepage", "image": "http://www6.cc01.com.cn/heiqi/images/case03.jpg", "title": "激光洗纹身", "desc": "不破坏毛囊，不损伤正常皮肤，不留疤痕；高效激光瞬间爆破。" },
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