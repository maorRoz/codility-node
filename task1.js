function solution(N) {
    return calc([null,1],N, 2);
}

function calc(solutionBank,N, valueToCalculate){
    if(solutionBank[N]){
        return solutionBank[N];
    }
    
    solutionBank[valueToCalculate] = Number.MAX_SAFE_INTEGER;
    
    if(isPair(valueToCalculate))
    {
        solutionBank[valueToCalculate] = solutionBank[valueToCalculate / 2] + 1;   
    }
    
    solutionBank[valueToCalculate] = Math.min(solutionBank[valueToCalculate], solutionBank[valueToCalculate - 1] + 1);
    
    return calc(solutionBank, N, valueToCalculate + 1);
    
}

function isPair(value){
    return value % 2 === 0;
}
