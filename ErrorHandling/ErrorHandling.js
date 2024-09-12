try {
    
    const dividend = Number(window.prompt("Enter a Dividend "))
    const divisor = Number(window.prompt("Enter a Divisor: "))

    if (divisor === 0) {
        throw new Error("You can't divide by 0");
    }
    if (isNaN(dividend) || isNaN(divisor)) {
        throw new Error("please input numbers!!!");
    }

    const result = dividend / divisor;
    console.log(result);

} catch (error) {
    console.error(error);
    
}
console.log("Tasks complete!!!");
