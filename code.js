function divideAndConquerSum(a) {
    if(a.length === 0) {
        return 0;
    }
    if(a.length === 1) {
        return a[0];
    }

    var length = a.length;
    var sectionOne = Math.round(length/3);
    var sectionTwo = sectionOne * 2;
    
    return divideAndConquerSum(a.slice(0,sectionOne)) + divideAndConquerSum(a.slice(sectionOne,sectionTwo)) + divideAndConquerSum(a.slice(sectionTwo));
}
