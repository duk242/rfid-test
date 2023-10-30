input.onButtonPressed(Button.A, function () {
    MFRC522.write("Card1")
})
let Data = ""
let ID = 0
basic.showIcon(IconNames.Happy)
MFRC522.Init()
serial.redirect(
SerialPin.USB_TX,
SerialPin.USB_RX,
BaudRate.BaudRate115200
)
serial.writeString("Ready!")
basic.forever(function () {
    ID = MFRC522.getID()
    serial.writeString("ID: " + ID + "\t\t")
    Data = MFRC522.read()
    serial.writeString("Data: " + MFRC522.read() + "\r\n")
    if (ID) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
