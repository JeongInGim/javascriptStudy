const today = new Date('2023-05');
const currentMonth = today.getMonth() + 1;

const header = () => (
    // 제목 넘기기
    document.getElementById('title').innerHTML = `<h1>${currentMonth}월 달력</h1>`
);

export default header;