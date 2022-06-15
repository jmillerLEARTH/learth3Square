export function ShuffleArray(array) {
    
    
    
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    
    return [...array]
}

export function ArrArgHelper(arr){
    
    if(!Array.isArray(arr)) return [arr]
    else if(arr != undefined) return arr
    else console.warn("ArrArgHelper: Passed undefined arg");
}