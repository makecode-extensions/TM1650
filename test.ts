let item = 0
item = 0
basic.forever(() => {
    FourDigitDisplay.show(item)
    item += 2
    basic.pause(1000)
})
