const array: Array<number> = [1, 2, 3, 4, 5];
const arrayString: string[] = ["a", "b", "c", "d", "e"];
const arrayBoolean: boolean[] = [true, false, true, false, true];
const arrayMixed: (string | number | boolean)[] = ["a", 1, true, "b", 2, false];


const result = array.find((element) => element === 7);

const result2 = array.filter((element) => element > 2);

const result3 = array.map((element) => element === 1);

const result4 = array.forEach((element) => console.log(element));

const result5 = array.reduce((total, element) => total + element, 0);


console.log(result5);