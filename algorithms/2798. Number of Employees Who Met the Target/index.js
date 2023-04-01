function numberOfEmployeesWhoMetTarget(hours, target) {
    let s = 0;
    let e = hours.length - 1;
    let count = 0;
    while (s <= e) {
      if (s == e) {
        if (hours[s] >= target) {
          count = count + 1;
        }
      } else {
        if (hours[s] >= target) {
          count = count + 1;
        }
        if (hours[e] >= target) {
          count = count + 1;
        }
      }
  
      s = s + 1;
      e = e - 1;
    }
    return count;
  };