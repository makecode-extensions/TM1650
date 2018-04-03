let item = 0
item = 0
basic.forever(() => {
    TM1650.showNumber(item)
    item += 1
    basic.pause(1000)
})
