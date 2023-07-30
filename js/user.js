$(document).ready(function() {
    function updateCalendar(e, a) {
        let h = new Date,
            n = e || h.getMonth(),
            l = a || h.getFullYear();

        function r(t, e) {
            let a = new Date(e, t).getDay(),
                h = new Date(e, t + 1, 0).getDate(),
                n = "<table>";
            n += '<thead><tr><th colspan="7">' + e + " 年 " + (t + 1) + " 月</th></tr>", n += "<tr><th>周日</th><th>周一</th><th>周二</th><th>周三</th><th>周四</th><th>周五</th><th>周六</th></tr></thead>", n += "<tbody>";
            for (let l = 1, r = 0; r < 6; r++) {
                n += "<tr>";
                for (let o = 0; o < 7; o++)
                    if (0 === r && o < a) n += "<td></td>";
                    else {
                        if (l > h) break;
                        let a = "",
                            r = new Date;
                        e === r.getFullYear() && t === r.getMonth() && l === r.getDate() && (a = "highlight"), n += '<td class="' + a + '">' + l + "</td>", l++
                    }
                n += "</tr>"
            }
            n += "</tbody></table>", $("#calendar").html(n)
        }
        r(n, l), $("#prevMonth").click(() => { l = 0 === n ? l - 1 : l, r(n = 0 === n ? 11 : n - 1, l) }), $("#nextMonth").click(() => { l = 11 === n ? l + 1 : l, r(n = (n + 1) % 12, l) }), $("#currentMonth").click(() => { updateCalendar(h.getMonth(), h.getFullYear()) })
    }
    updateCalendar(), setInterval(updateCalendar, 6e4);
});