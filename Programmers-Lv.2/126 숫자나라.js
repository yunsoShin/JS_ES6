def solution(record):
    answer = []
    messageList = []
    userList = {}
    for log in record:
        logList = log.split(" ")
        actionLog = ""
        if logList[0] == 'Enter':
            actionLog = "들어왔습니다."
            userList[logList[1]] = logList[2]
            messageList.append([logList[1], actionLog])
        elif logList[0] == 'Leave':
            actionLog = "나갔습니다."
            messageList.append([logList[1], actionLog])
        elif logList[0] == 'Change':
            userList[logList[1]] = logList[2]
            
        
        
    for userId, actionLog in messageList:
        nickName = userList[userId]
        answer.append(f"{nickName}님이 {actionLog}")
    
    return answer
