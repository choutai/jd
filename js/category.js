//页面加载完成执行的代码
window.addEventListener('load', function () {
    var jdCategory = new JdCategory();
    jdCategory.initLeftSlide();
    jdCategory.initRightSlide();
    jdCategory.leftCeiling();

});

var JdCategory = function () {

}
//原型
JdCategory.prototype = {
    initLeftSlide: function () {
        //左边滚动
        var swiper = new Swiper('.category-left .swiper-container', {
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: true,
            scrollbar: {
                el: '.swiper-scrollbar',
            },
            mousewheel: true,
        });

    },
    //左侧点击吸顶效果
    leftCeiling: function () {
        //1.给所有li添加点击事件
        //当需要给很多子元素加重复的事件的时候可以给父元素添加使用事件,捕获到子元素
        var ul = document.querySelector('.category-left ul');
        var lis = ul.children;
        //2.给所有li添加一个index索引
        for (var i = 0; i < lis.length; i++) {
            lis[i].index = i;
        }
        //给ul添加点击事件
        ul.addEventListener('click', function (e) {
            //触发事件的子元素是a
            var li = e.target.parentNode;
            //4.获取当前点击li的索引
            var index = li.index;
            //5.获取当前点击li和高度
            var liHeight = li.offsetHeight;
            //6.计算当前需要位移的距离
            var distanceY = -index * liHeight;
            //7.判断当前位移的距离是否大于最大位移的距离
            var maxDistanceY = document.querySelector('.category-left').offsetHeight - ul.offsetHeight;
            if (distanceY > maxDistanceY) {
                ul.parentNode.parentNode.style.transform = 'translate3d(0px, ' + distanceY + 'px, 0px)';
            } else {
                ul.parentNode.parentNode.style.transform = 'translate3d(0px,' + maxDistanceY + 'px,0px)';
            }
            //10.给当前位移的元素添加一个过渡效果慢慢位移
            ul.parentNode.parentNode.style.transitionDuration = '300ms';
            //11.给所有的li删除active,给当前的li添加active
            for(var i = 0; i < lis.length; i++){ 
                lis[i].classList.remove('active');
            }
            li.classList.add('active');
            
        });

    },
    initRightSlide: function () {
        //右边滚动
        var swiper = new Swiper('.category-right .swiper-container', {
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: true,
            scrollbar: {
                el: '.swiper-scrollbar',
            },
            mousewheel: true,
        });
    }
}