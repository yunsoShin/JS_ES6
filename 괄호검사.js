function isValidParentheses(s) {
  const stack = [];
  const map = { "(": ")", "[": "]", "{": "}" };

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      // 열린 괄호인 경우, 스택에 추가합니다.
      stack.push(s[i]);
    } else if (s[i] !== map[stack.pop()]) {
      // 닫힌 괄호인 경우, 스택에서 열린 괄호를 꺼내 짝을 검사합니다.ㄴㄴㄴSSS
      return false;
    }
  }

  return stack.length === 0; // 스택이 비어있는지 확인합니다.
}
