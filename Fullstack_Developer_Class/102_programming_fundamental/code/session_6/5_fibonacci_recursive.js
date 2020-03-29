function fibonacci(num, indentation) {
    if (num <= 1) return 1;

    indentation++;

    let number_n1 = fibonacci(num - 1, indentation);
    let number_n2 = fibonacci(num - 2, indentation);
    let total = number_n1 + number_n2;

    let tabs = ">  ".repeat(indentation);

    console.log(
        `${tabs}fibonacci(${num} - 1) + fibonacci(${num} - 2) | ${number_n1} + ${number_n2} = ${total}`
    );
    return number_n1 + number_n2;
}

console.log(fibonacci(5, 1));
