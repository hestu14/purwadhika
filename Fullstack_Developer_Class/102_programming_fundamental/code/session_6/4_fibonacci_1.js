function fibonacci(num) {
    var a = 1,
        b = 0,
        temp; // temp = temporary, penampung sementara

    while (num >= 0) {
        temp = a;
        a = a + b; // nilai a di tambah dengan nilai b
        console.log(`a = a + b | a = ${a} + ${b}`);
        b = temp;
        num--;
    }

    return b;
}

console.log(fibonacci(5));
