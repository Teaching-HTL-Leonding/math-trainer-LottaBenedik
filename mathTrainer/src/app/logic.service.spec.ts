import { LogicService } from "./logic.service";

describe ('LogicTest', () => {
  let decoder: LogicService;

  it('should create 10 questions and 1 digit per default', () => {
    decoder = new LogicService();
    expect(decoder.numberOfQuestions).toBe(10);
    expect(decoder.numberOfDigits).toBe(1);
  })
  it('should create 15 questions and 3 digits when changed', () => {
    decoder = new LogicService();
    decoder.numberOfQuestions = 15;
    decoder.numberOfDigits = 3;
    expect(decoder.numberOfQuestions).toBe(15);
    expect(decoder.numberOfDigits).toBe(3);
  })
})
