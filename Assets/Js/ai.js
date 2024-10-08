
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function faultycalc(a, b) {
    let ans = "y";
    const askQuestion = () => {
        rl.question("Enter Your Choice (Numeric Value) : ", (choice) => {
            var r = Math.random();
            if (r < 0.1) {
                console.log("1.Addition\n" +
                    "2.Subtraction\n" +
                    "3.Multiplication\n" +
                    "4.Division");
                if (choice == 1) {
                    console.log(a - b);
                } else if (choice == 2) {
                    console.log(a / b);
                } else if (choice == 3) {
                    console.log(a + b);
                } else if (choice == 4) {
                    console.log(a ** b);
                } else {
                    console.log("Oops! Wrong input!");
                }
            } else {
                console.log("1.Addition\n" +
                    "2.Subtraction\n" +
                    "3.Multiplication\n" +
                    "4.Division");
                if (choice == 1) {
                    console.log(a + b);
                } else if (choice == 2) {
                    console.log(a - b);
                } else if (choice == 3) {
                    console.log(a * b);
                } else if (choice == 4) {
                    console.log(a / b);
                } else {
                    console.log("Oops! Wrong input!");
                }
            }
            rl.question("want to execute more ? [y/n] ", (answer) => {
                if (answer.toLowerCase() === 'y') {
                    askQuestion();
                } else {
                    rl.close();
                }
            });
        });
    };
   
}

faultycalc(90, 8)