import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import fetchTriviaQuestions from '../services/fetchTriviaQuestions';
import Question from '../components/Question';
import * as S from './styles/Game.style';

class Game extends React.Component {
  state = {
    questions: [],
  };

  componentDidMount() {
    this.getApiQuestions();
  }

  filterSelectedOptions = async () => {
    const { history, selectedCategory, selectedDifficulty, selectedType } = this.props;
    const RESPONSE_CODE_ERROR = 3;
    const token = localStorage.getItem('token');
    const resp = await fetchTriviaQuestions(
      token,
      selectedCategory,
      selectedDifficulty,
      selectedType,
    );

    if (resp.response_code === RESPONSE_CODE_ERROR) {
      localStorage.removeItem('token');
      history.push('/');
    } else {
      this.setState({
        questions: resp.results,
      });
    }
  };

  getApiQuestions = async () => {
    const { history, selectedCategory, selectedDifficulty, selectedType } = this.props;
    const RESPONSE_CODE_ERROR = 3;
    const token = localStorage.getItem('token');
    if (selectedCategory !== 0 || selectedDifficulty !== null || selectedType !== null) {
      this.filterSelectedOptions();
    } else {
      const response = await fetchTriviaQuestions(token);
      if (response.response_code === RESPONSE_CODE_ERROR) {
        localStorage.removeItem('token');
        history.push('/');
      } else {
        this.setState({
          questions: response.results,
        });
      }
    }
  };

  render() {
    const { questions } = this.state;
    const { history } = this.props;
    return (
      <S.gameContainer>
        <Header history={ history } />

        {
          questions.length > 0 && <Question questions={ questions } history={ history } />
        }

      </S.gameContainer>
    );
  }
}

Game.propTypes = {
  history: PropTypes.shape().isRequired,
  selectedCategory: PropTypes.number.isRequired,
  selectedDifficulty: PropTypes.string.isRequired,
  selectedType: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  selectedCategory: state.player.selectedCategory,
  selectedDifficulty: state.player.selectedDifficulty,
  selectedType: state.player.selectedType,
});

export default connect(mapStateToProps)(Game);
