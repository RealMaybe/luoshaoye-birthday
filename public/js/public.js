/* footer */
$(() => {
    /* nav 动态添加on */
    let bodyId = $("body").attr("id");
    $("nav.nav").find("a").each(function() {
        let className = $(this).attr("class");
        if (bodyId == className) {
            $(this).addClass("on");
        }
    });
})