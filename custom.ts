
/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace custom {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function foo(n: number, s: string, e: MyEnum): void {
        // Add code here
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value -1) + fib(value - 2);
    }

    function displayMessage(message: string) {
        console.log(message);
        basic.showString(message);
        basic.showIcon(IconNames.SmallDiamond);
        basic.clearScreen();
    }

    function hasDigit(num: number, digit: number): boolean {
        if (digit < 0 || digit > 9) {
            displayMessage("Not digit.");
        } 
        else {    
            let d = 0;

            while (num != 0) {
                d = num % 10;
                
                if (d == digit) {
                    return true;
                }
                
                num = num / 10;
            }
        }

        return false;
    }

    export function microFizzBuzz() {
        for (let i = 1; i <= 16; i++) {
            if (hasDigit(i, 3))
            {
                displayMessage("MICROBIT");
            }
            else if (i%15 == 0) {

                displayMessage("FIZZ-BUZZ");
            }
            else if (i%3 == 0) {
                displayMessage("FIZZ");
            }
            else if (i%5 == 0) {
                displayMessage("BUZZ");
            }
            else {
                displayMessage("" + i);
            }
        }
    }
    
}
