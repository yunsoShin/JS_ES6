function calculate(expression) {
    // 후위 표기법으로 변환
    const postfix = convertToPostfix(expression);
    const stack = [];
  
    for (let i = 0; i < postfix.length; i++) {
      const token = postfix[i];
  
      if (/\d+/.test(token)) { // 피연산자일 경우.
        stack.push(Number(token));
      } else { // 연산자일 경우
        const operand2 = stack.pop();
        const operand1 = stack.pop();
        let result;
  
        switch (token) {
          case '+':
            result = operand1 + operand2;
            break;
          case '-':
            result = operand1 - operand2;
            break;
          case '*':
            result = operand1 * operand2;
            break;
          case '/':
            result = operand1 / operand2;
            break;
        }
  
        stack.push(result);
      }
    }
  
    return stack.pop();
  }
  
  function convertToPostfix(expression) {
    const infix = expression.match(/\d+|[+\-*/()]/g);
    const precedence = { '+': 1, '-': 1, '*': 2, '/': 2 };
    const stack = [];
    const postfix = [];
  
    for (let i = 0; i < infix.length; i++) {
      const token = infix[i];
  
      if (/\d+/.test(token)) { // 피연산자일 경우
        postfix.push(token);
      } else if (/[+\-*/]/.test(token)) { // 연산자일 경우
        while (stack.length > 0 && stack[stack.length - 1] !== '(' && precedence[stack[stack.length - 1]] >= precedence[token]) {
          postfix.push(stack.pop());
        }
        stack.push(token);
      } else if (token === '(') { // 왼쪽 괄호일 경우
        stack.push(token);
      } else if (token === ')') { // 오른쪽 괄호일 경우
        while (stack.length > 0 && stack[stack.length - 1] !== '(') {
          postfix.push(stack.pop());
        }
        stack.pop();
      }
    }
  
    while (stack.length > 0) {
      postfix.push(stack.pop());
    }
  
    return postfix;
  }
