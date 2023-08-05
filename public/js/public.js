const $year = 2024,
    month = $(".month").text(),
    day = $(".day").text();

/* title */
"undefined" != typeof jQuery && $(document).ready(() => {
    let t = $("title").text() + ` - ${month}${day} - 洛少爷2024生日倒计时`;
    $("title").text(t)
});