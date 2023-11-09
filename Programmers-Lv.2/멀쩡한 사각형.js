from collections import deque

def solution(s):
    answer = 1001
    length = len(s)
    stringList = list(s)
   
    for i in range(1, length//2 + 2):
       
        stringDeque = deque(stringList)
        prevDeque = deque()
        
        while stringDeque:
            string = ""
            for v in range(i):
                if len(stringDeque) == 0:
                    break
                string += stringDeque.popleft()
                
            if len(prevDeque) == 0:
                prevDeque.append([1, string])
            else:
                count, prevString = prevDeque.pop()
                if prevString == string:
                    prevDeque.append([count+1, string])
                else:
                    prevDeque.append([count, prevString])
                    prevDeque.append([1, string])
        
        result = ""
        
        while prevDeque:
            count, string = prevDeque.popleft()
            if count == 1:
                result += f"{string}"
            else:
                result += f"{count}{string}"
    
        answer = min(answer, len(result))
        
    return answer
