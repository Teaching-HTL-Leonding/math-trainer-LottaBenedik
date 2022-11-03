import { Component, OnInit } from '@angular/core';
import { LogicService, Question } from '../logic.service';


@Component({
  selector: 'app-exercising',
  templateUrl: './exercising.component.html',
  styleUrls: ['./exercising.component.css']
})
export class ExercisingComponent {

  seeAnswers:boolean = false;

  constructor(public exercise: LogicService) { }

  questions:Question[] = this.exercise.generateQuestions();

  public checkAnswers():void{
    if(this.seeAnswers ===false){
      this.seeAnswers = true;
    }
    else{
      this.seeAnswers = false;
    }

  }

  public restart():void{
    this.questions = this.exercise.generateQuestions();
    this.seeAnswers = false;
  }

}
