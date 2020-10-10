function fib(value: number): number 
{
    return value <= 1 ? value : fib(value -1) + fib(value - 2);
}

function displayMessage(message: string) 
{
    console.log(message);
    basic.showString(message, 130);
    basic.showIcon(IconNames.SmallDiamond);
    basic.clearScreen();
}

function hasDigit(num: number, digit: number): boolean 
{
    if (digit < 0 || digit > 9) 
    {
        displayMessage("Not digit.");
    } 
    else 
    {    
        let d = 0;

        while (num != 0) 
        {
            d = num % 10;
            
            if (d == digit) 
            {
                return true;
            }
            
            num = num / 10;
        }
    }

    return false;
}

function microFizzBuzz() 
{
    for (let i = 1; i <= 16; i++) 
    {
        if (hasDigit(i, 3)) 
        {
            displayMessage("MICRO:BIT");
        }
        else if (i%15 == 0) 
        {
            displayMessage("FIZZ-BUZZ");
        }
        else if (i%3 == 0) 
        {
            displayMessage("FIZZ");
        }
        else if (i%5 == 0) 
        {
            displayMessage("BUZZ");
        }
        else 
        {
            displayMessage("" + i);
        }
    }
}

microFizzBuzz();
