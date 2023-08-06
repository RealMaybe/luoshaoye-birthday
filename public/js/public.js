const $year = 2024,
    month = $(".month").text(),
    day = $(".day").text();

/* title */
"undefined" != typeof jQuery && $(document).ready(() => {
    let t = $("title").text() + ` - ${month}${day} - 洛少爷2024生日倒计时`;
    $("title").text(t)
});

$("#main.notice").after(`
<footer>
    <article class="support">
        <p>最后，我们要衷心感谢所有使用本软件的用户对我们的支持。你们的支持将是我们持续更新的最大动力。</p>
        <p>如果您觉得本软件对您有所帮助，并且希望为我们的后续开发提供一定的资金支持，我们将非常感激。请点击下方按钮，查看如何赞助我们的项目。</p>
        <div>
            <a href="https://afdian.net/order/create?plan_id=31afd1082ee511eead2d5254001e7c00&product_type=0&remark=%E9%A2%84%E7%A5%9D%E9%A1%B9%E7%9B%AE%E8%BF%9B%E5%B1%95%E9%A1%BA%E5%88%A9%EF%BC%81" _target="block">
                <img width="200" src="https://pic1.afdiancdn.com/static/img/welcome/button-sponsorme.jpg" alt="">
            </a>
        </div>
    </article>
    <p>洛少爷生日倒计时项目开发组</p>
</footer>
`);