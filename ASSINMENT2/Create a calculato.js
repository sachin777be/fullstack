function calculator(caclu, a, b) {
    switch (caclu) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        return a / b;
      default:
        return 'Invalid operator';
    }
  }
  console.log(calculator('*',8,9))