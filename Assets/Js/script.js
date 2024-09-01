
function faultycalc(a, b) {
    const ans = "y"
    while (ans =="y") {
        var r = Math.random()
        if (r < 0.1) {
            console.log("1.Addition\n" +
                "2.Subtraction\n" +
                "3.Multiplication\n" +
                "4.Division")
            var a = prompt("Enter Your Choice (Numeric Value) : ")
            if (a == 1) {
                console.log(a - b)
            }

            else if (a == 2) {
                console.log(a / b)
            }

            else if (a == 3) {
                console.log(a + b)
            }

            else if (a == 4) {
                console.log(a ** b)
            }

            else {
                console.log("Oops! Wrong input!")
            }
        }
        else {
            console.log("1.Addition\n" +
                "2.Subtraction\n" +
                "3.Multiplication\n" +
                "4.Division")
            var a = prompt("Enter Your Choice (Numeric Value) : ")
            if (a == 1) {
                console.log(a + b)
            }

            else if (a == 2) {
                console.log(a - b)
            }

            else if (a == 3) {
                console.log(a * b)
            }

            else if (a == 4) {
                console.log(a / b)
            }

            else {
                console.log("Oops! Wrong input!")
            }
        }

    }
    ans = prompt("want to execute more ? [y/n]")
}

faultycalc(9,10)
