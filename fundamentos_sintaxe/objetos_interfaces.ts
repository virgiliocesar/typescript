interface People {
  name: string;
  age: number;
  address?: string;
  city?: string;
}

const person: People = {
  name: "John",
  age: 30,
};
const person2: People = {
  name: "John",
  age: 30,
  address: "123 Main St",
  city: "New York",
};

const arrayPerson: People[] = [person, person2];
const arrayPerson2: Array<People> = [person, person2];
const arrayNumber: number[] = [1, 2, 3, 4, 5];
const arrayString: string[] = ["a", "b", "c", "d", "e"];
const arrayBoolean: boolean[] = [true, false, true, false, true];
const arrayMixed: (string | number | boolean)[] = ["a", 1, true, "b", 2, false];

console.log(arrayPerson);