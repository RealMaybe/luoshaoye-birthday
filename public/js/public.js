/* 网页和H5+App兼容性 本地存储 */
const storage = window.plus && window.plus.storage ? { setItem: function(e, t) { plus.storage.setItem(e, t) }, getItem: function(e) { return plus.storage.getItem(e) }, removeItem: function(e) { plus.storage.removeItem(e) }, clear: function() { plus.storage.clear() } } : { setItem: function(e, t) { window.localStorage.setItem(e, t) }, getItem: function(e) { return window.localStorage.getItem(e) }, removeItem: function(e) { window.localStorage.removeItem(e) }, clear: function() { window.localStorage.clear() } };
storage.getSessionItem = function(e) { return window.sessionStorage.getItem(e) }, storage.setSessionItem = function(e, t) { window.sessionStorage.setItem(e, t) }, storage.removeSessionItem = function(e) { window.sessionStorage.removeItem(e) }, storage.clearSession = function() { window.sessionStorage.clear() };

$(() => {
    /* footer */
    /* 内容 */
    let footerContent = `
        <div>
            <span id="switch" class="switch btn on"></span>
            <!-- page -->
            <nav class="page_btn nav">
                <a href="./index.html" class="index">首页</a>
                <a href="./message.html" class="message">信息</a>
                <a href="./user.html" class="user">我的</a>
            </nav>
        </div>`;
    $("footer").html(footerContent);

    /* nav 动态添加on */
    let bodyId = $("body").attr("id");
    $("nav.nav").find("a").each(function() {
        let className = $(this).attr("class");
        if (bodyId == className) {
            $(this).addClass("on");
        }
    });

    /* footer 隐藏显示 */
    let footerState = storage.getItem("footerState");
    "closed" === footerState ? ($("footer").css("bottom", "-3.125rem"), $("#switch").removeClass("on")) : ($("footer").css("bottom", "0"), $("#switch").addClass("on")), $("#switch").click(function() { $(this).hasClass("on") ? $("footer").animate({ bottom: "-3.125rem" }, 500, function() { storage.setItem("footerState", "closed") }) : $("footer").animate({ bottom: "0" }, 500, function() { storage.setItem("footerState", "open") }), $(this).toggleClass("on") });


    /* time */
    function time(time) {
        let now_time = new Date().getTime();
        let target_time = new Date(time /* "2024-08-12 0:0:0" */ ).getTime();
        let difference = (target_time - now_time) / 1000;

        let day = parseInt(difference / 60 / 60 / 24);
        let hour = parseInt(difference / 60 / 60 % 24);
        let minute = parseInt(difference / 60 % 60);
        let second = parseInt(difference % 60);

        let seconds = numZero(parseInt(second % 60));
        let minutes = numZero(parseInt(minute % 60));
        let hours = numZero(parseInt(hour % 60));
        let days = numZero(parseInt(day));

        return [days, hours, minutes, seconds]
    };
    time();

    /* 数字如果小于零则一直显示0 */
    function numZero(num) {
        if (num > 0) {
            return num = num;
        } else if (num <= 0) {
            return num = 0;
        }
    };

    // $(".day").html(time());
    // let birthDay_time = setInterval(time, 1000);
});