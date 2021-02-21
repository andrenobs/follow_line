let dif = 0
let last_p = 0
let D = 0
let p = 0
AlphaBot2.Run(Dir.stop, 0)
basic.pause(1000)
AlphaBot2.SensorCalibrated()
basic.forever(function () {
    p = AlphaBot2.readLine() - 2000
    D = p - last_p
    last_p = p
    dif = p / 20 + D / 5
    dif = Math.max(dif, -120)
    dif = Math.min(dif, 120)
    if (dif > 0) {
        AlphaBot2.MotorRun(Motors.M1, 50)
        AlphaBot2.MotorRun(Motors.M2, 50 - dif)
    } else {
        AlphaBot2.MotorRun(Motors.M1, 50 / dif)
        AlphaBot2.MotorRun(Motors.M2, 50)
    }
})
