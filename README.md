# Four Digit Display (TM1650)
makecode Four Digit Display (TM1650) Package for microbit  

Four Digit Display is a Module with four 7-segment LED, it can show number. It has TM1650 chip inside, control with a I2C bus.  

Author: shaoziyang  
Date:   2018.Mar  

![](https://raw.githubusercontent.com/microbit-makecode-packages/TM1650/master/icon.png)

## Usage

open your microbit makecode project, in Add Package, paste  

https://github.com/microbit-makecode-packages/TM1650  

to search box then search.

![](https://raw.githubusercontent.com/microbit-makecode-packages/TM1650/master/4-LED.jpg)

## API

- **on()**  
turn on the display.  

- **off()**  
turn off the display.  

- **clear()**  
clear content of the display.  

- **digit(num: number, bit: number)**  
show a digit number in given position.  

- **show(num: number)**  
show a interger number in display.  

- **ShowHex(num: number)**  
show a hex number.  

- **showDpAt(bit: number, show: boolean)**  
show or hide dot piont in give bit  
bit is dot piont position, [0 - 3]  
show, True will show DP, other will hide it  

- **setIntensity(dat: number)**  
set display intensity.  

## Demo

![](https://raw.githubusercontent.com/microbit-makecode-packages/TM1650/master/demo.jpg)

## License  

MIT

Copyright (c) 2018, microbit/micropython Chinese community  

## Supported targets  

* for PXT/microbit


[From microbit/micropython Chinese community](http://www.micropython.org.cn) 