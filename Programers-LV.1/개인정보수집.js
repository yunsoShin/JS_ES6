function solution(today, terms, privacies) {
    var answer = [];
    const result = {};
    
    

    for (const item of privacies) {
        const [key, value] = item.split(' ');
        result[value] = key;
    }


    console.log(terms[1].replace(/\s+/g, '').split(''));
    for(let i=0; i<terms.length; i++){
        
        const term = terms[i].replace(/\s+/g, '').split('').slice(1).join('');
        
        console.log(term);
    }
    
    console.log(terms);

    
    return terms;
}

function solution(today, terms, privacies) {
    var answer = [];
    const result = {};
    
    

    for (const item of privacies) {
        const [key, value] = item.split(' ');
        result[value] = key;
    }
    const onlynumPrivacies =privacies.map((element) => element.replace(/\D/g, ""));
    const onlynumTod ay = today.replace(/\D/g, "");
    const onlyAlphabetPrivacies = privacies.map(str => str.match(/[A-Z]/)[0]);
    
    const term = terms.map(a=>a.replace(/\s+/g, ''))
    
    for(let i=0; i<terms.length; i++){
        const num = term[i].split('').slice(1).join
        
    }
    
    
    
    
    
    return term;
}