$(() => {
    /* 轮播图 */
    function animation() {
        let n = 0;
        setInterval(function() { n += 1, $(".banner_img li").length <= n && (n = 0), $(".banner_img li").eq(n).show(1e3).siblings().hide(1e3), $(".banner_dot li").eq(n).addClass("on").siblings().removeClass("on") }, 5e3), $(".banner_dot li").on("click", function() { n = $(this).index(), $(".banner_img li").eq(n).show(500).siblings().hide(500), $(this).addClass("on").siblings().removeClass("on") })
    };
    animation();

    /* 计时器 */
    $("#timer .hisName>span").html($year), birthdayTimer();
    let birthday_time = setInterval(birthdayTimer, 1e3);

    function birthdayTimer() {
        let t = time($year + "-8-12 0:0:0");
        if (0 == t[4]) return $("#timer .exact_value").html("亲爱的洛少爷，<br>祝你生日快乐！").css("font-size", "2rem"), void clearInterval(birthday_time);
        $("#timer .day1").html(t[0] + 1), $("#timer .day").html(t[0]), $("#timer .hour").html(t[1]), $("#timer .min").html(t[2]), $("#timer .sec").html(t[3])
    }
})