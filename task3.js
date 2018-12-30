function fillNegatives(resultArr, N, toFillNumber){
    if(N === 0){
        return resultArr;
    }
    
    resultArr.push(toFillNumber);
    resultArr.push(-toFillNumber);
    
    return fillNegatives(resultArr, N - 2, toFillNumber + 1);
}


function solution(N) {
    const resultArr = [];
    if(!isPair(N)){
        resultArr[0] = 0;
        N--;
    }
    
    return fillNegatives(resultArr, N, 1);
}

function isPair(N){
    return N % 2 === 0;
}