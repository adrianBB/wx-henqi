// contact.js
Page({
    data: {    
        lo: 104.089417,
        la: 30.642123,    
        markers: [{
            latitude: 30.642123,
            longitude: 104.089417,
            title: '黑旗纹身'
        }]
        
        
    },
    call: function () {
        wx.makePhoneCall({
            phoneNumber: '10086'
        })
    },
    tomap:function(){
        wx.openLocation({
            latitude: 30.642123,
            longitude: 104.089417,
            name:"黑旗纹馆",
            address:"四川省成都市武侯区红瓦寺街学府花园锦学阁18楼B"
        });
        
        
    }
    
})