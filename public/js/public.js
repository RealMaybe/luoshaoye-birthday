/* 网页和H5+App兼容性 */
const storage = window.plus && window.plus.storage ? { setItem: function(e, t) { plus.storage.setItem(e, t) }, getItem: function(e) { return plus.storage.getItem(e) }, removeItem: function(e) { plus.storage.removeItem(e) }, clear: function() { plus.storage.clear() } } : { setItem: function(e, t) { window.localStorage.setItem(e, t) }, getItem: function(e) { return window.localStorage.getItem(e) }, removeItem: function(e) { window.localStorage.removeItem(e) }, clear: function() { window.localStorage.clear() } };
storage.getSessionItem = function(e) { return window.sessionStorage.getItem(e) }, storage.setSessionItem = function(e, t) { window.sessionStorage.setItem(e, t) }, storage.removeSessionItem = function(e) { window.sessionStorage.removeItem(e) }, storage.clearSession = function() { window.sessionStorage.clear() };

/* footer */
$(() => {
    /* 内容渲染 */
    let footerContent = `
        <div>
            <span class="btn on"></span>
            <!-- page -->
            <nav class="page_btn nav">
                <a href="./index.html" class="index"></a>
                <a href="./sign.html" class="sign"></a>
                <a href="./user.html" class="user"></a>
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
    "closed" === footerState ? ($("footer").css("bottom", "-3.125rem"), $(".btn").removeClass("on")) : ($("footer").css("bottom", "0"), $(".btn").addClass("on")), $(".btn").click(function() { $(this).hasClass("on") ? $("footer").animate({ bottom: "-3.125rem" }, 500, function() { storage.setItem("footerState", "closed") }) : $("footer").animate({ bottom: "0" }, 500, function() { storage.setItem("footerState", "open") }), $(this).toggleClass("on") });
});