module.exports = function check(str, bracketsConfig) {
     
    let stack = [];

    let left = {
        '{': '}',
        '[': ']',
        '(': ')'
    };

    let right = {
        '}': true,
        ']': true,
        ')': true
    }

    for (let i = 0; i < str.length; i++) {

        let char = str[i];

        if (left[char]) {
            stack.push(char);
        } else if (right[char]) {
            if (left[stack.pop()] !== char) return false;
        }
    }
    return stack.length === 0;
}