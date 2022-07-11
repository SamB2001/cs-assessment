function longestWord(arr){
    let longest = arr.reduce(
        function (a, b) {
            return a.length > b.length ? a : b;
        }
    );
    return longest.length
}

console.log(longestWord(["hi", "hello"]));
// -> 5

//O(n)