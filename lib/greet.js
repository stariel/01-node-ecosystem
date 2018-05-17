function greet(name) {
    if(typeof name !== 'string') {
        return null;
    }
    else {
        return `Hello, ${name}`;
    }
}

module.exports = greet;