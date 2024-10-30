/**
 *
 * Nowość wprowadzona w 2015r. to słowo kluczowe "class"
 *
 * Piękno takich nowości w JavaScript polega na tym, że tak naprawdę pod spodem
 * JS zamieni tę klasę na faktyczną "funkcję konstruującą". Wiec zachowa swoją dotychczasową naturę.
 * można to zobaczyć np. w Babel'u: {@link https://babeljs.io/}
 *
 */

class NewCar {
  constructor(engine = "V8", name = "Aston Martin Vantage") {
    this.engine = engine;
    this.name = name;
  }

  makeSomeNoise() {
    console.log(
      `Wroom ${this.engine}, wroom - the ${this.name} is driving here`
    );
  }
}

new NewCar().makeSomeNoise();

const otherCar = new NewCar();

otherCar.engine = "V12";
otherCar.name = "Aston Martin DB11";

otherCar.makeSomeNoise();
