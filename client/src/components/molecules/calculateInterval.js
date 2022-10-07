const calculateInterval = (start, end) => {
  let startStr = new Date(start.join('-'));
  let endStr = new Date(end.join('-'));
  let result = [];
  let oneday = 1000 * 60 * 60 * 24;
  let diff = (endStr - startStr) / oneday;
  for (let i = diff; i >= 0; i--) {
    let tmp = startStr
      .toLocaleDateString()
      .split('. ')
      .map((el) => Number(el));
    result.push(tmp);
    startStr.setDate(startStr.getDate() + 1);
  }
  return result;
};

export default calculateInterval;
