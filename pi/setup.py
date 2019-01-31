import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BOARD)
GPIO.setup(7,GPIO.OUT)

#  Output to the module
for x in range(0,3):
    GPIO.outpt(7,True)
    print ("Module On")
    time.sleep(1)
    GPIO.outpt(7,False)
    print ("Module Off")
    time.sleep(1)

GPIO.cleanup()

