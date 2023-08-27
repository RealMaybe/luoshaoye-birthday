const infoURL = "http://127.0.0.1:8121";

$(document).ready(function() {
    notice_renew();

    $("#notice_renew").click(notice_renew);

    function notice_renew() {
        $.ajax({
            url: infoURL + "/api/notice",
            type: "GET",
            success: function(response) {
                // 清空公告容器
                $("#show").empty();

                // 遍历公告数组，逐个渲染到页面
                response.forEach(function(date) {
                    let noticeItem = $("<li>");

                    // 创建公告日期条
                    let _date = $("<span>").text("[" + date + "]");
                    let _btn = $("<a>").text("更新公告").attr("href", "javascript:;");

                    // 添加公告日期条到公告项
                    noticeItem.append(_date, _btn);

                    // 添加公告项到容器
                    $("#show").append(noticeItem);
                });
            },
            error: function(error) {
                console.error(error);
                // 处理错误情况
            }
        });
    }
})