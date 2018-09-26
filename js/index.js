/* 等页面加载完成后执行的代码 */
/* 页面执行完后才执行JS代码 */

// 求头部的JS代码
window.addEventListener('load', function () {
    //1.获取到头部
    var header = document.querySelector('#header');
    // console.log(header);

    //2.监听页面滚动出去事件
    window.addEventListener('scroll', function () {
        // console.log(1);

        // 3.获取滚动出去的距离(h5c3的写法 documentElement相当于html)
        var scrollTop = document.documentElement.scrollTop;
        // console.log(scrollTop);

        //4.获取轮播图的高度
        var slideHeight = document.querySelector('#slide').offsetHeight;

        //5.计算滚动出去的透明度值
        //透明度值 滚动的距离/轮播图的高度 
        var opacity = scrollTop / slideHeight;
        // console.log(opacity);

        //6.判断透明度大于1修改头部的背景颜色
        if (opacity > 1) {
            header.style.backgroundColor = 'rgb(222, 24, 27,1)';
            //透明度小于1
        } else {
            header.style.backgroundColor = 'rgba(222, 24, 27,' + opacity + ')';
        }

    });


    //求倒计时JS代码
    //1.未来时间
    // 月份是从0-11,所以月份要-1
    //1000是秒数
    var futureTime = Math.floor(new Date(2018, 8, 22, 12, 00, 00).getTime() / 1000);
    // console.log(futureTime);

    //2.当前时间
    var nowTime = Math.floor(new Date().getTime() / 1000);
    // console.log(nowTime);

    //3.倒计时时间 = 未来时间 - 当前时间
    var time = futureTime - nowTime;

    //4.找到所有的span
    // .down-time span 是后代选择器(包含选择器)
    var spans = document.querySelectorAll('.down-time span');


    //5.定时器
    setInterval(function () {
        if (time <= 0) {
            time = 7200;
        }
        //倒计时时间
        time--;
        // 6.求出当前小时的时间
        var hour = Math.floor(time / 3600);
        //7.求分钟
        var minute = Math.floor(time % 3600 / 60);
        //8.求秒数
        var seconds = Math.floor(time % 60);
        //9.获取span的文字
        //求十位和个位
        // 十位 /
        spans[0].innerHTML = Math.floor(hour / 10);
        // 个位 %
        spans[1].innerHTML = Math.floor(hour % 10);
        spans[3].innerHTML = Math.floor(minute / 10);
        spans[4].innerHTML = Math.floor(minute % 10);
        spans[6].innerHTML = Math.floor(seconds / 10);
        spans[7].innerHTML = Math.floor(seconds % 10);
    }, 1000);

    //轮播图的初始化代码
    var mySwiper = new Swiper('#slide .swiper-container', {
        direction: 'horizontal', // 水平切换选项
        autoplay: {
            delay: 1000, //轮播图的延迟
            stopOnLastSlide: false, // 如果设置为true，当切换到最后一个slide时停止自动切换。（loop模式下无效）
            disableOnInteraction: false //当用户滑动的时候禁止自动轮播图 不需要禁止就为false
        },
        loop: true, // 是否开启无缝轮播图 开启无轮播图  如果不开 刷回去倒退回去
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        }
    });

});