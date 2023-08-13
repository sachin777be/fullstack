function minimumSwitches(A) {
    let switches = 0;
    let bulbsOn = 0;
    for (let i = 0; i < A.length; i++) {
      if ((A[i] + bulbsOn) % 2 === 0) {
        switches++;
        bulbsOn++;
      }
    }
    return switches;
  }
  console.log(minimumSwitches([0, 0, 0, 0]));