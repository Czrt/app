$(function() {
    $('.xunhuan ul li').eq(2).click(function() {
        $(this).parent().prev().css('background-position', '-128px -179px');
        $('.xunhuan ul li a').removeClass('active4');
        $(this).children().addClass('active4');
        $('.xunhuan-1').css('display', 'none');
    })
    $('.xunhuan ul li').eq(1).click(function() {
        $(this).parent().prev().css('background-position', '0 -179px');
        $('.xunhuan ul li a').removeClass('active4');

        $(this).children().addClass('active4');
        $('.xunhuan-1').css('display', 'none');

    })
    $('.xunhuan ul li').eq(0).click(function() {
        $(this).parent().prev().css('background-position', '-64px -179px');
        $('.xunhuan ul li a').removeClass('active4');

        $(this).children().addClass('active4');
        $('.xunhuan-1').css('display', 'none');
    })
    $('.xunhuan>a').click(function() {
        $(this).next().toggle();
    })
    audio.volume = 0.5;

    $('.song').mouseover(function() {
        $(this).children('.song-1').css('display', 'block');
    }).mouseout(function() {
        $(this).children('.song-1').css('display', 'none');
    })


    // title
    var index = 0;
    setInterval(function() {
        var text = '酷狗音乐心做し_小缘__高音质在线试听_心做し歌词 | 歌曲下载_';
        var str = text.slice(index);
        $('title').text(str);
        index++;
        if (text.length - index < 12) {
            index = 0;
        }
        // console.log(index);
    }, 800);

    // 
    $('.controls>span').click(function() {
        $(this).toggleClass('active5');
        $(this).parent().toggleClass('active6');
    })

    // 


    $('.geci-zhu').scroll(function() {
        var Y1 = $(this).scrollTop();
        var Y2 = $(this).get(0).scrollHeight;
        var bili = Y1 / Y2;
        var top = $(this).height() * bili;
        $('.gun').css('top', top);
    })

    // 歌词

    var ci = 0;
    setInterval(function() {
        $('.geci-zhu').children().removeClass();
        $('.geci-zhu').children().eq(ci).addClass('active7');
        ci++;
    }, 2000)

})
var audio = document.querySelector('audio');
var zong = document.querySelector('.zong');
var curr = document.querySelector('.curr');
var bar = document.querySelector('.bar');
// 
var tiao = document.querySelector('.tiao');
var qiu = document.querySelector('.qiu');
var a1 = document.querySelectorAll('.a1');
// 
var songBar = document.querySelector('.song-bar');
var songBarTiao = document.querySelector('.song-bar-tiao');
var songBarQiu = document.querySelector('.song-bar-qiu');
var songSpan = document.querySelector('#pop');

window.onload = function() {
    a1[1].onclick = function() {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
        a1[1].classList.toggle('active1');
    }

    // 音频进度
    audio.oncanplay = function() {
        zong.innerHTML = shi(audio.duration);
        if (audio.autoplay) {
            a1[1].classList.add('active1');
        }
    }
    audio.ontimeupdate = function() {
        curr.innerHTML = shi(this.currentTime);
        var bili = this.currentTime / this.duration;
        // console.log(bili, bar.offsetWidth);
        qiu.style.left = bili * bar.offsetWidth + 'px';
        tiao.style.width = bili * bar.offsetWidth + 'px';
        console.log(audio.ended);
        if (audio.ended) {
            a1[1].classList.toggle('active1');
        }
    }
    qiu.onmousedown = function(ent) {
        var e = ent || window.event;
        var start = e.pageX;
        var start1 = qiu.offsetLeft;
        window.onmousemove = function(ment) {
            var me = ment || window.event;
            var end = me.pageX;
            var X = end - start;
            var left = X + start1;
            if (left < 0) {
                left = 0;
            }
            if (left > bar.offsetWidth) {
                left = bar.offsetWidth;
            }
            qiu.style.left = left + 'px';
            var bili = left / bar.offsetWidth;
            // console.log(bili);
            audio.currentTime = audio.duration * bili;
        }
        window.onmouseup = function() {
            window.onmousemove = 'null';
        }
        return false;
    }
    // / 点击移动到音频指定位置
    bar.onclick = function(ent) {
        var e = ent || window.event;
        var X = e.pageX - bar.offsetLeft;
        console.log(X);
        var bili = X / bar.offsetWidth;
        console.log(bili);
        audio.currentTime = audio.duration * bili;
        tiao.style.width = X + 'px';
        qiu.style.left = X + 'px';
        audio.play();
    }
    audio.volume = 0.5;
    console.log(audio.volume);
    songSpan.onclick = function() {
        if (audio.muted) {
            audio.muted = false;
            audio.volume = 0.5;
            songBarQiu.style.bottom = songBar.offsetHeight / 2;
            songBarTiao.style.height = songBar.offsetHeight / 2;
        } else {
            audio.muted = true;
            audio.volume = 0;
            songBarQiu.style.bottom = 0;
            songBarTiao.style.height = 0;
        }
    }
    audio.onvolumechange = function() {
        if (audio.volume == 0) {
            audio.muted = true;
        } else {
            audio.muted = false;
        }
        var bili = audio.volume / 1;
        songBarQiu.style.bottom = songBar.offsetHeight * bili + 'px';
        songBarTiao.style.height = songBar.offsetHeight * bili + 'px';
        console.log(audio.volume);
    }
    //音量控制
    songBarQiu.onmousedown = function(ent) {
        var e = ent || window.event;
        var Y = e.pageY + 43;
        console.log(audio.volume);
        window.onmousemove = function(ment) {
            var me = ment || window.event;
            var YY = Y - me.pageY;
            if (YY < 0) {
                YY = 0;
            }
            if (YY > songBar.offsetHeight) {
                YY = songBar.offsetHeight;
            }
            var bili = YY / songBar.offsetHeight;
            audio.volume = bili * 1;
            console.log(audio.volume);
            songBarQiu.style.bottom = YY + 'px';
            songBarTiao.style.height = YY + 'px';
        }
        window.onmouseup = function() {
            window.onmousemove = 'null';
            console.log(audio.volume)
        }
        return false;
    }
    console.log(audio.volume)

}

function shi(t) {
    var minute = Math.floor(t / 60);
    minute = minute < 10 ? '0' + minute : minute;
    var second = Math.floor(t % 60);
    second = second < 10 ? '0' + second : second;
    return minute + ':' + second;
}