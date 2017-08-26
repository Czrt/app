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
    // audio.volume = 0.5;

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
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!歌词
    var str = `
#[00:00.19]心做し- 小缘
#[00:00.85]词：蝶々P
#[00:01.02]曲：蝶々P
#[00:01.18]编曲：蝶々P
#[00:02.12]ねぇもしも全て
#[00:04.79]投げ捨てられたら
#[00:07.64]笑って生きることが
#[00:11.47]楽になるの
#[00:13.36]また胸が痛くなるから
#[00:17.67]もう何も言わないでよ
#[00:21.08]
#[00:47.76]ねぇもしも全て
#[00:50.53]忘れられたなら
#[00:53.30]泣かないで生きることも
#[00:57.12]楽になるの
#[00:58.57]
#[00:59.08]でもそんな事出来ないから
#[01:03.38]もう何も見せないでよ
#[01:07.20]
#[01:09.13]君にどれだけ近づいても
#[01:14.80]僕の心臓は一つだけ
#[01:20.74]酷いよ酷いよ
#[01:23.38]もういっそ僕の体を
#[01:26.17]壊して引き裂いて
#[01:29.10]好きなようにしてよ
#[01:32.04]叫んで藻掻いて
#[01:34.83]瞼を腫らしても
#[01:37.65]まだ君は僕の事を
#[01:40.52]抱きしめて離さない
#[01:43.43]もういいよ
#[01:44.81]
#[01:56.29]ねぇもしも僕の願いが
#[02:00.19]叶うなら
#[02:01.91]君と同じものが欲しいんだ
#[02:07.64]でも僕には存在しないから
#[02:11.99]じゃあせめて此処に来てよ
#[02:15.58]
#[02:43.55]君にどれだけ愛されても
#[02:49.06]僕の心臓は一つだけ
#[02:54.86]やめてよやめてよ
#[02:57.55]優しくしないでよ
#[03:00.44]どうしても僕には
#[03:03.37]理解ができないよ
#[03:06.36]痛いよ痛いよ
#[03:09.02]言葉で教えてよ
#[03:11.83]こんなの知らないよ
#[03:14.77]独りにしないで
#[03:17.81]酷いよ酷いよ
#[03:20.49]もういっそ僕の体を
#[03:23.29]壊して引き裂いて
#[03:26.23]好きなようにしてよ
#[03:29.05]叫んで藻掻いて
#[03:31.95]瞼を腫らしても
#[03:34.71]まだ君は僕の事を
#[03:37.65]抱きしめて離さない
#[03:40.55]もういいよ
#[03:42.43]
#[04:04.81]ねぇもしも僕に心があるなら
#[04:10.44]どうやってそれを
#[04:13.52]見つければいいの
#[04:16.14]少し微笑んで君が言う
#[04:20.63]それはねここにあるよ`;
    var div = document.querySelector('.geci-zhu');
    var arr = str.split('#');
    var times = [];
    var str1 = '';
    arr.forEach(function(value) {
        times.push(Time(value.slice(value.indexOf('[') + 1, value.lastIndexOf(']'))));
        str1 += '<p>' + value.slice(value.indexOf(']') + 1, value.length - 1) + '</p>'
    })
    div.innerHTML = str1;
    // console.log(times);
    var p = document.querySelectorAll('.geci-zhu p');
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



        var current = audio.currentTime * 1000;
        var gun = document.querySelector('.gun');
        // console.log(current);
        for (var i = 0; i < p.length; i++) {
            if (times[i] < current && current < times[i + 1]) {
                for (var j = 0; j < p.length; j++) {
                    p[j].className = '';
                }
                p[i].className = 'active7';
                if (i > 4 && i < p.length - 8) {
                    div.style.top = -34 * (i - 4) + 'px';
                    var bili = (34 * (i - 4)) / $('.geci-zhu').height();
                    var pop = $('.geci').height() * bili;
                    gun.style.top = pop + 'px';
                }
                if (i > p.length - 8) {
                    div.style.top = -(p.length - 11) * 34 + 'px';

                }
                break;
            }
        }
    }


    // ############################3333
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
    // audio.volume = 0.5;
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
            audio.volume = 0;
            audio.muted = true;
        } else {
            audio.muted = false;
        }
        // console.log(audio.volume);
        var bili = audio.volume / 1;
        songBarQiu.style.bottom = songBar.offsetHeight * bili + 'px';
        songBarTiao.style.height = songBar.offsetHeight * bili + 'px';
        // console.log(audio.volume);
    }
    //音量控制
    songBarQiu.onmousedown = function(ent) {
        var e = ent || window.event;
        var Y = e.pageY;
        var Y1 = 86 - songBarQiu.offsetTop;
        console.log(Y1);
        window.onmousemove = function(ment) {
            var me = ment || window.event;
            // console.log(me.pageY);
            var YY = Y - me.pageY + Y1;

            if (YY < 0) {
                YY = 0;
            }
            if (YY > songBar.offsetHeight) {
                YY = songBar.offsetHeight;
            }
            // console.log(YY);
            var bili = YY / songBar.offsetHeight;
            // console.log(bili);
            audio.volume = bili * 1;
            // console.log(audio.volume);
            songBarQiu.style.bottom = YY + 'px';
            songBarTiao.style.height = YY + 'px';
        }
        window.onmouseup = function() {
            window.onmousemove = 'null';
            // console.log(audio.volume)
        }
        return false;
    }
    // console.log(audio.volume)




}

function shi(t) {
    var minute = Math.floor(t / 60);
    minute = minute < 10 ? '0' + minute : minute;
    var second = Math.floor(t % 60);
    second = second < 10 ? '0' + second : second;
    return minute + ':' + second;
}

function Time(str) {
    var haomiao = str.slice(0, 2) * 60 * 1000 + str.slice(3, 5) * 1000 + str.slice(6) * 10;
    return haomiao;
}