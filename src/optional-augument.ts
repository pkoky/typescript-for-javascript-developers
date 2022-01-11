export {};

let bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number, 
  weight: number,
  printable?: boolean
  ): number => weight / (height * height);


console.log(bmi(1.73, 65))