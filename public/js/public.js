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
    $("footer#footer").html(footerContent);

    /* nav 动态添加on */
    let bodyId = $("body").attr("id");
    $("nav.nav").find("a").each(function() {
        let className = $(this).attr("class");
        if (bodyId == className) {
            $(this).addClass("on");
        }
    });
})