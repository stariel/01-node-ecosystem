[![Build Status](https://travis-ci.com/stariel/01-node-ecosystem.svg?branch=master)](https://travis-ci.com/stariel/01-node-ecosystem)


## Functions

The greet function has an arity of one. It accepts a string input. If the input is not a string is input, the function will return null. If the input is a string the function will return 'hello <string>'.

The add method has an arity of two. It accepts two numbers as parameters. If the input is not two numbers, the function will return null. If the input is two numbers they will be summed, and the function will return the sum.

The sum method has an arity of two. It accepts two numbers as parameters. If the input is not two numbers, the function will return null. If the input is two numbers the second number will be subtracted from the first and the function will return the resulting number.

## Testing

### Greet Module Tests
The tests ensure that the input is a string, if it is not they return null.

### Arithmetic Module Tests
The tests ensure that both inputs are numbers.