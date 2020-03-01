
export interface QA {
    text: string;
    option: string[];
    correctAnswer: string;
    userAnswer?: string;
}

export type QuestionStatus = 'Correct' | 'Incorrect' | 'NowAnswered';
