class Cat {
  name: string;
  age = 20;

  constructor(name: string) {
    this.name = name;
  }
}

class Dog {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

// TS jest typowany strukturalnie - wiec interesuje go kształt danych
// Typ Dog zawiera sie w typie Cat wiec takie przypisanie jest poprawne z perspektywy TS.
const myDog: Dog = new Cat("mruczek");

