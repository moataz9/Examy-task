// Exam Manager App
// Provides functions to add, edit, delete, and list exam questions

class ExamManager {
  constructor() {
    this.questions = [];
  }

  // Add a new question
  addQuestion(question) {
    this.questions.push(question);
    return this.questions.length - 1; // return index
  }

  // Edit a question by index
  editQuestion(index, newQuestion) {
    if (index >= 0 && index < this.questions.length) {
      this.questions[index] = newQuestion;
      return true;
    }
    return false;
  }

  // Delete a question by index
  deleteQuestion(index) {
    if (index >= 0 && index < this.questions.length) {
      this.questions.splice(index, 1);
      return true;
    }
    return false;
  }

  // List all questions
  listQuestions() {
    return this.questions;
  }
}

export default ExamManager;
