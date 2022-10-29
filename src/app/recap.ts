// Key Typescript concepts

import { NgIfContext } from "@angular/common";

const username: string = "myuser";

const sum = (a:number, b:number) => {
  return a+b;
}

// sum("Hello", 2); // Type error
sum(1,2);

// Class declaration
class Person{
  age: number;
  name: string;
  private gender: string = "";

  constructor(age: number, name: string){
    this.age = age;
    this.name = name;
  }
}
const me = new Person(15, "Jonson");
// me.gender; // Access error

// A simplified way to declare a class with properties
class PersonSimple {
  constructor(age: number, name: string ){}
}
const you = new PersonSimple(10, "Janet");
