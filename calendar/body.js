const today = new Date('2023-05');
const currentYear = today.getFullYear();
const currentMonth = today.getMonth() + 1;

const fullFirstDate = new Date(today.setDate(1));
const firstDate = fullFirstDate.getDate();
const fullLastDate = new Date(currentYear, currentMonth, 0);
const lastDate = fullLastDate.getDate();

const body = () => {
    // 첫 주의 배열
    const firstWeek = [];
    for (let i = 0; i < firstDate; i++) {
        firstWeek.push("");
    }
    const blank = firstWeek.length;
    for (let i = 1; i < (8 - blank); i++) {
        firstWeek.push(i);
    }

    // 둘째 주 배열
    const secondWeek = [];
    const startOfSecondWeek = firstWeek[6] + 1;
    for (let i = startOfSecondWeek; i < startOfSecondWeek + 7; i++) {
        secondWeek.push(i);
    }

    // 셋째 주 배열
    const thirdWeek = [];
    const startOfThirdWeek = secondWeek[6] + 1;
    for (let i = startOfThirdWeek; i < startOfThirdWeek + 7; i++) {
        thirdWeek.push(i);
    }

    // 넷째 주 배열
    const fourthWeek = [];
    const startOfFourthWeek = thirdWeek[6] + 1;
    for (let i = startOfFourthWeek; i < startOfFourthWeek + 7; i++) {
        fourthWeek.push(i);
    }

    // 다섯째 주 배열
    const fifthWeek = [];
    const startOfFifthWeek = fourthWeek[6] + 1;
    for (let i = startOfFifthWeek; i <= lastDate; i++) {
        fifthWeek.push(i);
    }

    const lastDay = fullLastDate.getDay();
    for (let i = 0; i < (6 - lastDay); i++) {
        fifthWeek.push('');
    }

    // 배열 전달
    
    const weeks = [ firstWeek, secondWeek, thirdWeek, fourthWeek, fifthWeek ];
    const weekList = document.querySelectorAll('.week');

    weekList.forEach((w, i) => {
        let weekArr = '';
        for (let j = 0; j < 7; j++) {
            weekArr += `<td> ${weeks[i][j]} </td>`;
        }
        console.log(weekArr);
        w.innerHTML = weekArr;
    })
} 

export default body;