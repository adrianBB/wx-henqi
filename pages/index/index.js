//index.js

Page({
    
    data: {
        navshow:false,
        banner:[
            { "image": "http://www6.cc01.com.cn/heiqi/images/banner.jpg", "url": "" },
            {"image": "http://www6.cc01.com.cn/heiqi/images/banner.jpg", "url": "" },
            { "image": "http://www6.cc01.com.cn/heiqi/images/banner.jpg", "url": "" },
            { "image": "http://www6.cc01.com.cn/heiqi/images/banner.jpg", "url": "" },
        ],
        zuopin:[           
            { "image": "http://www6.cc01.com.cn/heiqi/images/zuopin01.jpg", "name": "不动明王", },
            { "image": "http://www6.cc01.com.cn/heiqi/images/zuopin02.jpg", "name": "SCHOOL作品",},
            { "image": "http://www6.cc01.com.cn/heiqi/images/zuopin03.jpg", "name": "纹身遮盖", },
            { "image": "http://www6.cc01.com.cn/heiqi/images/zuopin04.jpg", "name": "樱花",},
        ],
        case:[
            { "url": "../casepage/casepage", "image": "http://www6.cc01.com.cn/heiqi/images/case01.jpg", "title": "激光洗纹身", "desc":"黑色纹身的清洗一般是3次以上，每次需间隔两个月左右！黑色纹身的清洗一般是3次以上，每次需间隔两个月左右！"},
            { "url": "../casepage/casepage", "image": "http://www6.cc01.com.cn/heiqi/images/case02.jpg", "title": "失败纹身遮盖", "desc":"遮盖前后的对比！遮盖前后的对比！遮盖前后的对比！"},
            { "url": "../casepage/casepage", "image": "http://www6.cc01.com.cn/heiqi/images/case03.jpg", "title": "激光洗纹身", "desc":"不破坏毛囊，不损伤正常皮肤，不留疤痕；高效激光瞬间爆破。"},
        ]
    },
   
    previewImage: function (e) {
        var current = e.target.dataset.src;
        var imglist=[];
        for (let i in this.data.zuopin){
            imglist.push(this.data.zuopin[i].image);
        };
        wx.previewImage({
            current: current,
            urls: imglist
        })
    },
    shownav:function(){
       if(this.data.navshow){
           this.setData({
               navshow:false
           })
       }else{
           this.setData({
               navshow: true
           })
       }
       
    },
    hidenav:function(){
        this.setData({
            navshow: false
        });
        
    }

})
