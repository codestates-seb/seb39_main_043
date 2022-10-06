const calculateInterval = (start, end) => {
  let startStr = new Date(start.join('-'));
  let endStr = new Date(end.join('-'));
  let result = [];
  let oneday = 1000 * 60 * 60 * 24;
  let diff = (endStr - startStr) / oneday;
  // console.log('diff', startStr, endStr, diff);
  for (let i = diff; i >= 0; i--) {
    let tmp = startStr
      .toLocaleDateString()
      .split('. ')
      .map((el) => Number(el));
    // console.log('tmp', tmp);
    result.push(tmp);
    startStr.setDate(startStr.getDate() + 1);
  }
  // console.log('result', result);
  return result;
};

// console.log(calculateInterval([2022, 10, 3], [2022, 10, 4]));

export default calculateInterval;
