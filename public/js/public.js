/* H5+ API */
let storage = {};
window.plus ? document.addEventListener("plusready", function() { storage = { setItem: function(e, t) { plus.storage.setItem(e, t) }, getItem: function(e) { return plus.storage.getItem(e) }, removeItem: function(e) { plus.storage.removeItem(e) }, clear: function() { plus.storage.clear() }, getSessionItem: function(e) { return window.sessionStorage.getItem(e) }, setSessionItem: function(e, t) { window.sessionStorage.setItem(e, t) }, removeSessionItem: function(e) { window.sessionStorage.removeItem(e) }, clearSession: function() { window.sessionStorage.clear() } } }) : (storage = { setItem: function(e, t) { window.localStorage.setItem(e, t) }, getItem: function(e) { return window.localStorage.getItem(e) }, removeItem: function(e) { window.localStorage.removeItem(e) }, clear: function() { window.localStorage.clear() }, getSessionItem: function(e) { return window.sessionStorage.getItem(e) }, setSessionItem: function(e, t) { window.sessionStorage.setItem(e, t) }, removeSessionItem: function(e) { window.sessionStorage.removeItem(e) }, clearSession: function() { window.sessionStorage.clear() } });

/* public item */
const $year = 2024;
const infoURL = "http://127.0.0.1:8121/api";

/* title */
"undefined" != typeof jQuery && $(document).ready(() => {
    let t = $("title").text() + " - 洛少爷" + $year + "生日倒计时";
    $("title").text(t)
});

/* footer */
/* 内容 */
const footerContent = `
<div>
    <span id="switch" class="btn on"></span>
    <!-- page -->
    <nav class="page_btn nav">
        <a href="./index.html" class="index">首页</a>
        <a href="./interactive.html" class="interactive">交互</a>
        <a href="./message.html" class="message">信息</a>
        <a href="./user.html" class="user">我的</a>
    </nav>
</div>`;
$("footer").html(footerContent);

/* nav 动态添加on */
let bodyId = $("body").attr("id");
$("nav.nav").find("a").each(function() {
    let a = $(this).attr("class");
    bodyId == a && $(this).addClass("on")
});

/* footer 隐藏显示 */
"closed" == storage.getItem("footerState") ? ($("footer").css("bottom", "-3.125rem"), $("#switch").removeClass("on")) : ($("footer").css("bottom", "0"), $("#switch").addClass("on"));

$("#switch").click(function() { $(this).hasClass("on") ? $("footer").animate({ bottom: "-3.125rem" }, 500, function() { storage.setItem("footerState", "closed") }) : $("footer").animate({ bottom: "0" }, 500, function() { storage.setItem("footerState", "open") }), $(this).toggleClass("on") });

/* 数字如果小于零则一直显示0 */
function numZero(n) { return n > 0 ? n : n <= 0 ? 0 : void 0 }

/* time */
function time(e) {
    let n = (new Date).getTime(),
        t = (new Date(e).getTime() - n) / 1e3,
        r = parseInt(t / 60 / 60 / 24),
        a = parseInt(t / 60 / 60 % 24),
        p = parseInt(t / 60 % 60),
        s = parseInt(t % 60),
        I = numZero(parseInt(s % 60)),
        m = numZero(parseInt(p % 60)),
        u = numZero(parseInt(a % 60)),
        o = numZero(parseInt(r)) + u + m + I;
    return [numZero(parseInt(r)), u, m, I, o]
}