# challenege1

# Description

This app allows a user to type in three perameters (N, P, Q).

* N needs to be a positive number
* P and Q have to be single digit numbers greater than 1
* P and Q can't be the same number

Inputing these numbers will allow the user to see a string from 1 - N. Every number divisible by "P" will be "WAT" and ever number divisible by "Q" will be "SON". Numbers that are divisible, but contain "P" or "Q" will be displayed as a normal number. If a number is divisible by both "P" and "Q" with will output "WATSON".

# Example

#### Input
    node index.js N P Q

#### Output
    (string of numbers and uppercase chars)

#### Input
    node index.js 10 3 4

#### Output
    1 2 3 4 5 WAT 7 SON WAT 10 11 WATSON 13