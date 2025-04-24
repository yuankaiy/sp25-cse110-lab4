# Part 1 Answers
1. 20
2. 20
3. `var` should not be used because variables declared with var do not have block scope. This is bad because these variables are hoisted into different blocks and face unintended changes and access.
4. 20
5. The error that shows up is `ReferenceError: result is not defined`. This is because the `result` variable was declared using `let`, which has block scope. The variable was declared at line 5 inside the `if` statement, which is why it can not be accessed outside of the block.
6. The error that shows up is `TypeError: Assignment to constant variable`. This is because the `result` variable was declared using `constant`, which makes reassignment of the variable not allowed. If line 7 was not there and `result` was not reassigned, line 9 would print `20`. 
7. The error that shows up is `TypeError: Assignment to constant variable`. This is because the `result` variable was declared using `constant`, which makes reassignment of the variable not allowed. If line 7 was not there and `result` was not reassigned, line 13 would still result in an error because `result` is not declared in the same block scope.