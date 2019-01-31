# # import RPi.GPIO as GPIO
# # import 
# # GPIO.setmode(GPIO.BOARD) 

# i = 0
# v = 4.6
# a = "motherfucker"

# while i < 5 :
import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BOARD)
GPIO.setup(7,GPIO.OUT)

#  Output to the module
for x in range(0,3):
    GPIO.outpt(7,True)
    # print ("Motor On")
    time.sleep(1)
    GPIO.outpt(7,False)
    # print ("Motor Off")
    time.sleep(1)

GPIO.cleanup()

