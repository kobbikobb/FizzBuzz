function doFizzBuzz() {
    const arr = getFizzBuzz();
    arr.forEach(element => console.log(element));
}

function getFizzBuzz() {
    const arr = [];

    for(var i=1; i<=100; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            arr.push('FizzBuzz');
        } else if(i % 3 === 0) {
            arr.push('Fizz');
        } else if(i % 5 === 0) {
            arr.push('Buzz');
        } else {
            arr.push(i);
        }
    }

    return arr;
}

module.exports = {
    doFizzBuzz,
    getFizzBuzz
} 
