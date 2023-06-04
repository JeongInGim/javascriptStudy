import header from "./calendar/header.js"
import body from "./calendar/body.js"

// const today = new Date();
// const currentYear = today.getFullYear();
// const currentMonth = today.getMonth() + 1;

// const fullFirstDate = new Date(today.setDate(1));
// const firstDate = fullFirstDate.getDate();
// const fullLastDate = new Date(currentYear, currentMonth, 0);
// const lastDate = fullLastDate.getDate();

// 제목 넘기기
header()
// document.getElementById('title').innerHTML = `<h1>${currentMonth}월 달력</h1>`;

body()

// // 첫 주의 배열
// // const firstDay = fullFirstDate.getDay(); // 1(monday)
// const firstWeek = [];
// // let lastDayOfFirstWeek = null; 

// for (let i = 0; i < firstDate; i++) {
//     firstWeek.push("");
// }
// const blank = firstWeek.length;
// for (let i = 1; i < (8 - blank); i++) {
//     firstWeek.push(i);
// }

// // 둘째 주 배열
// const secondWeek = [];
// const startOfSecondWeek = firstWeek[6] + 1;
// for (let i = startOfSecondWeek; i < startOfSecondWeek + 7; i++) {
//     secondWeek.push(i);
// }

// // 셋째 주 배열
// const thirdWeek = [];
// const startOfThirdWeek = secondWeek[6] + 1;
// for (let i = startOfThirdWeek; i < startOfThirdWeek + 7; i++) {
//     thirdWeek.push(i);
// }

// // 넷째 주 배열
// const fourthWeek = [];
// const startOfFourthWeek = thirdWeek[6] + 1;
// for (let i = startOfFourthWeek; i < startOfFourthWeek + 7; i++) {
//     fourthWeek.push(i);
// }

// // 다섯째 주 배열
// const fifthWeek = [];
// const startOfFifthWeek = fourthWeek[6] + 1;
// for (let i = startOfFifthWeek; i <= lastDate; i++) {
//     fifthWeek.push(i);
// }

// const lastDay = fullLastDate.getDay();
// for (let i = 0; i < (6 - lastDay); i++) {
//     fifthWeek.push('');
// }

// // 배열 전달
// let firstArr = '';
// for (let i = 0; i < 7; i++) {
//     firstArr += `<td> ${firstWeek[i]} </td>`
// }
// document.getElementById('firstWeek').innerHTML = firstArr;

// let secondArr = '';
// for (let i = 0; i < 7; i++) {
//     secondArr += `<td> ${secondWeek[i]} </td>`
// }
// document.getElementById('secondWeek').innerHTML = secondArr;

// let thirdArr = '';
// for (let i = 0; i < 7; i++) {
//     thirdArr += `<td> ${thirdWeek[i]} </td>`
// }
// document.getElementById('thirdWeek').innerHTML = thirdArr;

// let fourthArr = '';
// for (let i = 0; i < 7; i++) {
//     fourthArr += `<td> ${fourthWeek[i]} </td>`
// }
// document.getElementById('fourthWeek').innerHTML = fourthArr;

// let fifthArr = '';
// for (let i = 0; i < 7; i++) {
//     fifthArr += `<td> ${fifthWeek[i]} </td>`
// }
// document.getElementById('fifthWeek').innerHTML = fifthArr;

