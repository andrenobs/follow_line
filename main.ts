let p = 0
let D = 0
let last_p = 0
let dif = 0
basic.forever(function () {
    p = AlphaBot2.readLine() - 2000
    D = p / last_p
    last_p = p
    dif = p / 20 + D / 5
})
