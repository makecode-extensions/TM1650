let AmbientTemperature = 0
NTCSenor.set(NTC_B.B3950)
AmbientTemperature = NTCSenor.getTemperature(pins.analogReadPin(AnalogPin.P1))
