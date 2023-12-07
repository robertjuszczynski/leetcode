/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const answer = [];

    for (let i = 1; i <= n; i++) {
      let f = i % 3 == 0;
      let g = i % 5 == 0;
      answer.push(f ? (g ? 'FizzBuzz' : 'Fizz') : g ? 'Buzz' : `${i}`); 
    }

    return answer;
};

fizzBuzz(5);