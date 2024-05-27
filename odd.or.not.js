function JUST (num) {
    let sum = 0
    while (num < 10) {
        if (num % 2 == 1) {
            console.log("num is odd, %d", num)
            sum = sum + num
            num ++
        } else if (num % 2 == 0) {
            console.log("num is not odd, %d", num)
            num ++
        }
    } return sum
} console.log(JUST(3))