function solution(A, B) {
    const sqrtMemory = [null,null,0];
    for(let i = 3; i <= B; i++){
        const result = Math.sqrt(i);
        sqrtMemory[i] = Number.isInteger(result) ? sqrtMemory[result] + 1 : 0;
    }
    
    let maxSqrt = 0;
    for(let i = A; i <= B; i++){
        maxSqrt = sqrtMemory[i] > maxSqrt ? sqrtMemory[i] : maxSqrt;
    }
    
    return maxSqrt;
}
