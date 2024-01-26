class Car {
  // color: string;
  // year: number;

  // constructor() {
  //   this.color = 'red';
  //   this.year = 2000;
  // }

  color = 'red';
  year = 2000;

  drive() {
    console.log('Vroom');
  }
}

const myCar = new Car();
myCar.drive();

console.log(myCar.color, myCar.year);
