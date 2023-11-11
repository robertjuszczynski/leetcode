/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const result = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    return result == result.split("").reverse().join("");
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))