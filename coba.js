function main(n) {
    if (n % 2 !== 0) {
        console.log('Weird');
    } else if (n % 2 == 0 && n >= 2 && n <= 5) {
        console.log('Not weird');
    } else if (n % 2 == 0 && n >= 6 && n <= 20) {
        console.log('Weird');
    } else if (n % 2 == 0 && n >= 20) {
        console.log('Not weird');
    } else {
        console.log('Put a number');
    }
    return n;
}

console.log(main(3));