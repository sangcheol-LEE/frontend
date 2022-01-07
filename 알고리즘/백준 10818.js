// 최소 최대 값 구하는 문제

const a = "5\n1 2 3 4 5";

const v = a.split("\n");

console.log(v);

const numbers = v[1].split(" ").map(Number)

console.log(numbers);


console.log(Math.max(...numbers) , Math.min(...numbers))


console.log(numbers)



