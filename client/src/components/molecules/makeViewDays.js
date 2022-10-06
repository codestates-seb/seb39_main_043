const makeViewDays = (standardDate) => {
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  const leapYear = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const notLeapYear = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const dateInfo = standardDate.split('-').map((el) => Number(el));
  let year = dateInfo[0];
  let month = dateInfo[1];
  let frontMonth = month === 1 ? 12 : month - 1;
  let isLeap = year % 4 === 0 ? true : false;

  const dayOfWeek = week[new Date(standardDate).getDay()];
  let addFrontCount = week.indexOf(dayOfWeek);

  let viewDays;

  if (isLeap) {
    viewDays = new Array(leapYear[month]).fill({ year: year, month: month, day: 1 });
    viewDays = viewDays.map((el, idx) => {
      let tmp = { year: year, month: el.month, day: 1 + idx };
      return tmp;
    });
    let frontMonthEndDate = leapYear[frontMonth];
    while (addFrontCount !== 0) {
      viewDays.unshift({ year: year, month: frontMonth, day: frontMonthEndDate-- });
      addFrontCount--;
    }
  } else {
    viewDays = new Array(notLeapYear[month]).fill({ year: year, month: month, day: 1 });
    viewDays = viewDays.map((el, idx) => {
      let tmp = { year: year, month: el.month, day: 1 + idx };
      return tmp;
    });
    let frontMonthEndDate = notLeapYear[frontMonth];
    while (addFrontCount !== 0) {
      viewDays.unshift({ year: year, month: frontMonth, day: frontMonthEndDate-- });
      addFrontCount--;
    }
  }
  let addEndCount = 1;
  while (viewDays.length < 35) {
    viewDays.push({ year: year, month: month + 1, day: addEndCount++ });
  }
  // console.log(viewDays);
  return viewDays;
};

// makeViewDays('2022-08-01');

export default makeViewDays;
