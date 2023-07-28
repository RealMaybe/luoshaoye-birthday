$(document).ready(function() {
    var t = new Date,
        e = t.getMonth(),
        h = t.getFullYear();

    function a(t, e) {
        var h = new Date(e, t).getDay(),
            a = new Date(e, t + 1, 0).getDate(),
            n = "<table>";
        n += '<thead><tr><th colspan="7">' + e + "年 " + (t + 1) + "月</th></tr>", n += "<tr><th>周日</th><th>周一</th><th>周二</th><th>周三</th><th>周四</th><th>周五</th><th>周六</th></tr></thead>", n += "<tbody>";
        for (var r = 1, l = 0; l < 6; l++) {
            n += "<tr>";
            for (var o = 0; o < 7; o++)
                if (0 === l && o < h) n += "<td></td>";
                else {
                    if (r > a) break;
                    var c = "",
                        d = new Date;
                    e === d.getFullYear() && t === d.getMonth() && r === d.getDate() && (c = "highlight"), n += '<td class="' + c + '">' + r + "</td>", r++
                }
            n += "</tr>"
        }
        n += "</tbody></table>", $("#calendar").html(n)
    }
    a(e, h), $("#prevMonth").click(function() {
        h = 0 === e ? h - 1 : h, a(e = 0 === e ? 11 : e - 1, h)
    }), $("#nextMonth").click(function() {
        h = 11 === e ? h + 1 : h, a(e = (e + 1) % 12, h)
    })
});