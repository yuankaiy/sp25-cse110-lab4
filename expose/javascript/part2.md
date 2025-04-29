# Part 2 Answers
1. Line 12 would print out `3` (since this is the length of the passed in array). This is because variables decalred with `var` do not have block scope. Because of this, the variable `i` is able to be accessed outside of the `if` statement.
2. Line 13 would print out `150`. This is because `discountedPrice` was reassigned to `300 * (1 - 0.5)` in the final iteration of the for loop. Also, because the variable  `discountedPrice` is declared using `var`, the variable can be accessed outside of the `for` loop block scope.
3. Line 14 would print out `150`. This is because `finalPrice` was reassigned to `150` in the final iteration of the for loop. `finalPrice` is declared in the same block scope of line 14 and is reassigned through the `for` loop.
4. This function will return the array `[ 50, 100, 150 ]`. This function takes in an array of values and a discount percentage (a decimal number) and each value in the array is discounted based on the discount percentage (and rounded to a whole number). In this example, the given array is `[ 100, 200, 300 ]` and the discount percentage is `0.5`. 
5. The error at line 12 is `ReferenceError: i is not defined`. This is because `i` was declared with `let`, which means the variable is in the block scope of where it was decalred (in the `for` loop). `i` can not be accessed at line 12.
6. The error at line 13 is `ReferenceError: discountedPrice is not defined`. This is because `discountedPrice` was declared with `let`, which means the variable is in the block scope of where it was decalred (in the `for` loop). `discountedPrice` can not be accessed at line 13.
7. `150` is printed out from Line 14. This is because `finalPrice` was reassigned to `150` in the final iteration of the for loop. Additionally, `finalPrice` is declared using `let` and in the same scope as line 14.
8. This function will return the array `[ 50, 100, 150 ]`. This function takes in an array of values and a discount percentage (a decimal number) and each value in the array is discounted based on the discount percentage (and rounded to a whole number). In this example, the given array is `[ 100, 200, 300 ]` and the discount percentage is `0.5`. 
9. The error at line 11 is `ReferenceError: i is not defined`. This is because `i` was declared with `let`, which means the variable is in the block scope of where it was decalred (in the `for` loop). `i` can not be accessed at line 11.
10. At line 12, `3` is printed. This is because `length` holds the value of `prices.length` (the length of the input array). `length` is in the same scope as line 12 and the variable was not reassigned so there's no errors (since `length` is decalred with `const`).
11. This function will return the array `[ 50, 100, 150 ]`. This function takes in an array of values and a discount percentage (a decimal number) and each value in the array is discounted based on the discount percentage (and rounded to a whole number). In this example, the given array is `[ 100, 200, 300 ]` and the discount percentage is `0.5`.
12. - A. `student.name`
    - B. `student['Grad Year']`
    - C. `student.greeting()`
    - D. `student['Favorite Teacher']['name']`
    - E. `student.courseLoad[0]`
13. - A. '32' (This is because integers map to their string representations. When at least one operand is a string, the addition symbol goes from arithmetic adding to concatenation.)
    - B. 1 (This is because subtraction only works with numbers and is not overloaded with something like concatenation. `'3'` is then interpreted as a numerical value and used in `3-2`.)
    - C. 0 (This is because in numerical operations, `null` is treated as `0`.)
    - D. '3null' (This is exaclty like what was descibed in 13A. When an operand during a `+` operation is a string.)
    - E. 4 (This is because `true` is converted to `1` in numeric operations.)
    - F. 0 (This is because both `null` and `false` are `0` in numeric conversions.)
    - G. '3undefined' (This is because if any of the operands in a `+` operation is a string, a concatenation is done between the operands, after each are converted to strings.)
    - H. NaN (This is because `'3'` can be turned into a number but `undefined` can not be turned into a number. With the `-` operation, each operand must be converted into a number, or else you would get Not-a-Number or NaN.)
14. - A. `true` (A comparison between a string and a number converts the string into a number.)
    - B. `false` (A comparison between two strings compares the Unicode values, character by character starting from the left.)
    - C. `true` (A comparison between a number and string turns the string into a number.)
    - D. `false` (A strict equality symbol `===` compares not only value but also types. `2` and `'2'` are different types.)
    - E. `false` (`true` is converted to the numeric value of `1` when compared.)
    - F. `true` (Strict equality `===` checks value and type. `Boolean(2)` is interpreted as a `true` boolean value, which is of the same value and type as `true`.)
15. `==` is a equality operator while `===` is a **strict** equality operator. `==` compares two values after type conversions/coersions. `===` compares two values without type conversions and checks if the two values are of the same type and value.
16. [part2-question16.js](part2-question16.js)
17. This returns the array `[ 2, 4, 6 ]`. In this example, `callback` isn't used to handle asynchronous operations, but rather it is used to pass in the function `doSomething`. With this, `callback` is called on each element of the input `array`, the values are doubled, and stored in `newArr`.
18. [part2-question18.js](part2-question18.js)
19. The order that the numbers are printed out are `1`, `4`, `3`, `2`. `1` and `4` are printed first as they do not have a `setTimeout` affecting their execution.`3` comes before `2` because the delay set for `console.log(3)` is `0` while the delay set for `console.log(2)` is `1000`. This means to execute the line 0ms and 1000ms after the function is executed, respectively. 