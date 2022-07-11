function isUnique(ah) {
    return new Set(ah).size === ah.length;
}

console.log(isUnique('Sam'));
console.log(isUnique('Saam'));
console.log(isUnique('Ssam'));

//O(n)