const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth() + 1;

const fullFirstDate = new Date(today.setDate(1));
const firstDate = fullFirstDate.getDate();
const fullLastDate = new Date(currentYear, currentMonth, 0);
const lastDate = fullLastDate.getDate();

// 요일 인덱스(월~토 -> 0~6)
const firstDayIndex = fullFirstDate.getDay();

// 해당 달이 몇 주인지 구하기(for문 반복횟수로 이용됨)
const weeksInMonth = Math.ceil((firstDayIndex + lastDate)/7);

const body2 = () => {
    let count = 0;
    let date = 1;
    let html = '';
    html += `<th>일</th><th>월</th><th>화</th><th>수</th><th>목</th><th>금</th><th>토</th>`
    
    // 첫째주
    html += `<tr>`;
    for (let j = 0; j < 7; j++) {
        if (j < firstDayIndex) {
            html += `<td></td>`;
        } else {
            html += `<td>${date}</td>`;
            date++;
        }
        count++;
    }
    if (count % 7 === 0) {
        html += `</tr>`;
    }

    // 둘째주 ~ 마지막주
    for (let k = date; k < lastDate + 1; k++) {
        if (count % 7 === 0) {
            html += `<tr>`;
        }
        html += `<td>${date}</td>`;
        date++;
        count++;
        if (count % 7 === 0) {
            html += `</tr>`;
        }
    }

    // 마지막주 빈칸 채우기
    for (let l = 0; l < 6 - fullLastDate.getDay(); l++) {
        html += `<td></td>`;
        if (count % 7 === 0) {
            html += `</tr>`;
        }
    }
    // console.log(html);
    document.getElementById('calendar').innerHTML = html;
}

export default body2;