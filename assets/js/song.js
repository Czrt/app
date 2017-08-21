// $(function() {
//     $('audio').on("canplay", function() {
//         var time = Math.floor($('audio')[0].duration);
//         var minute = Math.floor(time / 60);
//         minute = minute < 10 ? '0' + minute : minute;
//         var second = Math.floor(time % 60);
//         second = second < 10 ? '0' + second : second;
//         $('.zong').text(minute + ':' + second);

//         $('audio').timeupdate(function() {
//             console.log($('audio').currentTime);
//         })
//     })

// })
var audio = document.querySelector('audio');
var zong = document.querySelector('.zong');
var curr = document.querySelector('.curr');
var bar = document.querySelector('.bar');
var tiao = document.querySelector('.tiao');
var qiu = document.querySelector('.qiu');
var a1 = document.querySelectorAll('.a1');

window.onload = function() {
    a1[1].onclick = function() {
        if (audio.paused) {
            audio.play();

        } else {
            audio.pause();
        }
        a1[1].classList.toggle('active1');
    }
    audio.oncanplay = function() {
        zong.innerHTML = shi(audio.duration);
    }
    audio.ontimeupdate = function() {
        curr.innerHTML = shi(this.currentTime);
        var bili = this.currentTime / this.duration;
        console.log(bili, bar.offsetWidth);
        qiu.style.left = bili * bar.offsetWidth - qiu.offsetWidth / 2 + 'px';
        tiao.style.width = bili * bar.offsetWidth + 'px';
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
            var bili = left / bar.offsetWidth;
            console.log(bili);
            audio.currentTime = audio.duration * bili;
            qiu.style.left = left + 'px';
        }
        window.onmouseup = function() {
            window.onmousemove = 'null';
        }
        return false;
    }
    bar.onclick = function(ent) {
        var e = ent || window.event;
        var X = e.pageX - bar.offsetLeft;
        console.log(X);
        var bili = X / bar.offsetWidth;
        console.log(bili);
        audio.currentTime = audio.duration * bili;
        tiao.style.width = X + 'px';
        qiu.style.left = X + 'px';

    }
}

function shi(t) {
    var minute = Math.floor(t / 60);
    minute = minute < 10 ? '0' + minute : minute;
    var second = Math.floor(t % 60);
    second = second < 10 ? '0' + second : second;
    return minute + ':' + second;
}