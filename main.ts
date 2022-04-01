let 현재온도 = 0
let 날씨값 = 0
function 가을 () {
    music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once)
}
function 현재_온도측정_및_표시 () {
    현재온도 = input.temperature()
    basic.showNumber(현재온도)
}
function 멜로디_나타내기 () {
    if (날씨값 == 0) {
        봄()
    } else if (날씨값 == 1) {
        여름()
    } else if (날씨값 == 2) {
        가을()
    } else {
        겨울()
    }
}
function 온도값_분류 () {
    현재_온도측정_및_표시()
    if (현재온도 >= 32 && 현재온도 <= 32) {
        날씨값 = 0
    } else if (현재온도 >= 33) {
        날씨값 = 1
    } else if (현재온도 >= 31 && 현재온도 <= 31) {
        날씨값 = 2
    } else {
        날씨값 = 3
    }
}
function 봄 () {
    music.startMelody(music.builtInMelody(Melodies.Punchline), MelodyOptions.Once)
}
function 겨울 () {
    music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
}
function 여름 () {
    music.startMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Once)
}
basic.forever(function () {
    온도값_분류()
    멜로디_나타내기()
})
