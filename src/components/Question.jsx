/* eslint-disable max-len */
import PropTypes from 'prop-types';
import { Component } from 'react';
import { connect } from 'react-redux';
import { playerAssertions, playerScore } from '../redux/actions';
import * as S from './styles/Question.style';

class Question extends Component {
  state = {
    index: 0,
    allQuestions: [],
    showAnswers: false,
    timeLeft: 30,
    correctAnswer: '',
  };

  componentDidMount() {
    this.randomizeQuestions();
    this.cronometro();
  }

  difficultLevel = () => {
    const { index } = this.state;
    const { questions } = this.props;
    const answers = questions[index];
    const { difficulty } = answers;

    const hard = 3;
    const medium = 2;
    const easy = 1;
    // substituição do switch pelo if!
    if (difficulty === 'hard') {
      return hard;
    } if (difficulty === 'medium') {
      return medium;
    }
    return easy;
  };

  calculateScore = (target) => {
    const { timeLeft, correctAnswer } = this.state;
    const { dispatch } = this.props;
    const initialScore = 10;

    if (target === correctAnswer) {
      const sum = initialScore + ((timeLeft - 1) * this.difficultLevel());
      const assertionPoint = 1;
      dispatch(playerScore(sum));
      dispatch(playerAssertions(assertionPoint));
    }
  };

  cronometro = () => {
    this.setState({ timeLeft: 30 }, () => {
      const second = 1000;
      const idInterval = setInterval(() => {
        this.setState((prevState) => ({
          timeLeft: prevState.timeLeft - 1,
        }), () => {
          const { timeLeft, showAnswers } = this.state;
          if (timeLeft === 0 || showAnswers) {
            clearInterval(idInterval);
            this.setState({ showAnswers: true });
          }
        });
      }, second);
    });
  };

  randomizeQuestions = () => {
    const { questions } = this.props;
    const { index } = this.state;
    const allQ = [questions[index].correct_answer, ...questions[index].incorrect_answers];
    const allQsort = allQ.sort((a, b) => a.length - b.length);
    // stackoverflow > buscar monitoria para entender melhor!!
    for (let start = 0; start < allQ.length; start += 1) {
      const randomPosition = Math.floor((allQ.length - start) * Math.random());
      const randomItem = allQ.splice(randomPosition, 1);
      allQ.push(...randomItem);
    }

    this.setState({
      allQuestions: allQsort,
      correctAnswer: questions[index].correct_answer,
    });
  };

  toggleShowAnswers = ({ target }) => {
    this.setState((prev) => ({
      showAnswers: !prev.showAnswers,
    }), () => this.calculateScore(target.value));
  };

  changeIndex = () => {
    const { history } = this.props;
    const { index } = this.state;
    const MAX_INDEX = 4;

    if (index === MAX_INDEX) {
      history.push('/feedback');
    }

    this.setState((prev) => ({
      index: prev.index + 1,
      showAnswers: false,
    }), () => {
      this.cronometro();
      this.randomizeQuestions();
    });
  };

  render() {
    const { questions } = this.props;
    const { index, allQuestions, showAnswers, timeLeft } = this.state;

    return (
      <S.questionContainer>
        <S.questionInfos>
          <S.questionCategoryContainer>
            <S.questionCategory data-testid="question-category">{questions[index].category}</S.questionCategory>
          </S.questionCategoryContainer>
          <S.difficultyLevel>
            {questions[index].difficulty}
          </S.difficultyLevel>
          <S.questionText data-testid="question-text">{questions[index].question.replace(/&#039;/gi, '\'').replace(/&quot;/gi, '"')}</S.questionText>
          <S.timer>
            <span className="material-icons">
              timer
            </span>
            {' '}
            TimeLeft:
            {' '}
            { timeLeft }
          </S.timer>
        </S.questionInfos>
        <S.answersButtonContainer>
          <S.answersOptions data-testid="answer-options">
            {
              allQuestions.map((e, i) => {
                if (e === questions[index].correct_answer) {
                  return (
                    (
                      <S.answer
                        type="button"
                        data-testid="correct-answer"
                        style={ {
                          border: showAnswers && '3px solid rgb(6, 240, 15)',
                          backgroundColor: showAnswers && 'green',
                          fontWeight: showAnswers && '700',
                          color: showAnswers && 'white' } }
                        onClick={ this.toggleShowAnswers }
                        key={ e }
                        value={ e }
                        disabled={ showAnswers || timeLeft === 0 }
                      >
                        {questions[index].correct_answer}
                      </S.answer>)
                  );
                }
                return (
                  (
                    <S.answer
                      data-testid={ `wrong-answer-${i}` }
                      type="button"
                      key={ e }
                      value={ e }
                      style={ {
                        border: showAnswers && '3px solid red',
                        backgroundColor: showAnswers && 'red',
                        fontWeight: showAnswers && '700',
                        color: showAnswers && 'white' } }
                      onClick={ this.toggleShowAnswers }
                      disabled={ showAnswers || timeLeft === 0 }
                    >
                      {e}
                    </S.answer>
                  )
                );
              })
            }
          </S.answersOptions>
          <S.buttonNextContainer>
            {
              showAnswers && (
                <S.buttonNext
                  type="button"
                  data-testid="btn-next"
                  onClick={ this.changeIndex }
                >
                  Next
                </S.buttonNext>)
            }
          </S.buttonNextContainer>
        </S.answersButtonContainer>
      </S.questionContainer>
    );
  }
}

Question.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  questions: PropTypes.arrayOf(PropTypes.shape({
    question: PropTypes.string.isRequired,
    incorrect_answers: PropTypes.arrayOf(PropTypes.string).isRequired,
    correct_answer: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
  })).isRequired,
};

export default connect()(Question);
