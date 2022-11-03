import { Injectable } from '@angular/core';
import { first } from 'rxjs';

export class Question{
  constructor (
  public firstNumber:number,
  public secondNumber:number,
  public operator:string,
  public answer:number,
  public userAnswer?:number
  ){}
}
@Injectable({
  providedIn: 'root'
})
export class LogicService {

  numberOfDigits:number = 1;
  numberOfQuestions:number = 10;
  substractionSelected:boolean = true;
  multiplicationSelected:boolean = true;
  additionSelected:boolean = true;
  divisionSelected:boolean = true;

  digitMultiplier:number[] = [1, 10, 100, 1000, 10000];

  firstNumber:number = 0;
  secondNumber:number = 0;

  public generateQuestions():Question[]{
    let questions:Question[] = [];
    for (let i = 0; i < this.numberOfQuestions; i++) {
      this.firstNumber = this.generateRandomNumber();
      this.secondNumber = this.generateRandomNumber();
      let operator = this.calculateNumberOfPossibleOperators()[Math.floor(Math.random() * this.calculateNumberOfPossibleOperators().length)];
      let answer = this.calculateAnswer(operator);
      let newQuestion = new Question(this.firstNumber, this.secondNumber, operator, answer);
      questions.push(newQuestion);

    }

    return questions;
  }

  public calculateAnswer(operator:string):number{

    if (operator === '+'){
      return this.firstNumber + this.secondNumber;
    }
    if (operator === '-'){
      //checks if answer is negative
      if (this.firstNumber - this.secondNumber < 0){
        let temp = this.firstNumber;
        this.firstNumber = this.secondNumber;
        this.secondNumber = temp;
      }
      return this.firstNumber - this.secondNumber;
    }
    if (operator === '*'){
       return this.firstNumber * this.secondNumber;
    }
    if (operator === '/'){
      //checks if the answer is not a decimal number
      if (this.firstNumber % this.secondNumber !== 0){
        this.secondNumber = this.generateRandomNumber();
        this.firstNumber = this.generateRandomNumber();
        return this.calculateAnswer(operator);
      }
      return this.firstNumber / this.secondNumber;

    }

    return -100;
  }

  public calculateNumberOfPossibleOperators():string[]{
    let allpossibleOperators:string[] = [];
    if(this.substractionSelected){
      allpossibleOperators.push('-');
    }
    if(this.multiplicationSelected){
      allpossibleOperators.push('*');
    }
    if(this.additionSelected){
      allpossibleOperators.push('+');
    }
    if(this.divisionSelected){
      allpossibleOperators.push('/');
    }
    return allpossibleOperators;
  }

  public generateRandomNumber():number{
    let newNumber:number = Math.floor(Math.random() * this.digitMultiplier[this.numberOfDigits]);
    if(newNumber === 0){
      newNumber = this.generateRandomNumber();
    }

    return newNumber;

  }



  constructor() { }

}
