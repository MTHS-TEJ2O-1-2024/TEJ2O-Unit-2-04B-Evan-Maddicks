/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Evan M
 * Created on: Sep 2024
 * This program will show the current temperature
*/

let temperature = input.temperature()

basic.clearScreen()
basic.showIcon(IconNames.Happy)
basic.pause(1000)

input.temperature()

input.onButtonPressed(Button.A, function() {
    let temperature = input.temperature()
basic.showString('The current temperature is:')
basic.showNumber(temperature)})
