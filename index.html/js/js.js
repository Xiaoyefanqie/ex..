$(window).on('load', function() {
    var $items = $('.item');
    var $circles = $('.circle');
    var $leftBtn = $('#btn-left');
    var $rightBtn = $('#btn-right');
    var $content = $('.content');
    var index = 0;
    var timer = null;

    // 清除class的函数
    var clearClass = function() {
        $items.each(function(i) {
            $(this).removeClass('active');
            $circles.eq(i).removeClass('white').attr('num', i);
        });
    };

    // 只显示一个class的函数
    function move() {
        clearClass();
        $items.eq(index).addClass('active');
        $circles.eq(index).addClass('white');
    }

    // 点击右边按钮切换下一张图片
    $rightBtn.on('click', function() {
        index = (index < $items.length - 1) ? index + 1 : 0;
        move();
    });

    // 点击左边按钮切换上一张图片
    $leftBtn.on('click', function() {
        index = (index > 0) ? index - 1 : $items.length - 1;
        move();
    });

    // 开始定时器，实现轮播
    timer = setInterval(function() {
        $rightBtn.click();
    }, 6000);

    // 点击圆点时，跳转到对应图片
    $circles.on('click', function() {
        var pointIndex = $(this).attr('num');
        index = parseInt(pointIndex, 10);
        move();
    });

    // 鼠标移入清除定时器，并开启一个三秒的定时器（此功能在原始代码中未启用，已注释）
    $content.on('mouseover', function() {
        clearInterval(timer);
        // 如果需要启用，请取消以下代码的注释
        // timer = setInterval(function() { $rightBtn.click(); }, 3000);
    });

    // 鼠标移出又开启定时器
    $content.on('mouseleave', function() {
        clearInterval(timer);
        timer = setInterval(function() {
            $rightBtn.click();
        }, 3000);
    });
});