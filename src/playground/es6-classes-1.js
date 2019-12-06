class Person {
  constructor(name = "unKnown", age = 0) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    return `Hi, I am ${this.name} !`
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old`
  }
}


class Student extends Person {
  constructor(name, age, major) {
    super(name, age)
    this.major = major
  }
  getDescription() {
    let description = super.getDescription();
    if (this.hasMjor()) {
      description = description + `my major is ${this.major}`
    }
    return description

  }
  hasMjor() {
    return !!this.major;
  }
}

class Traveler extends Person {
  constructor(name, age, homelocation) {
    super(name, age)
    this.homelocation = homelocation;
  }

  hasLocation() {
    return !!this.homelocation;
  }
  greeting() {
    let greet = super.greeting()
    if (this.hasLocation) {
      greet += `I am from ${this.homelocation}.`
    }
    return greet
  }
}

const t = new Traveler('Mary', 24, 'China')
console.log(t.greeting());
const other = new Traveler(undefined, undefined, 'Korea')
console.log(other.greeting());