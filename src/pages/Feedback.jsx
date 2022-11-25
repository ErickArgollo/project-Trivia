import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import logo from '../assets/images/logotrivia.svg';
import { resetGlobalState } from '../redux/actions';
import * as S from './styles/Feedback.style';

class Feedback extends React.Component {
  componentDidMount() {
    this.savePlayerScore();
  }

  savePlayerScore = () => {
    const { player } = this.props;
    const playerScore = {
      name: player.name,
      score: player.score,
      picture: player.src,
    };
    const ranking = JSON.parse(localStorage.getItem('ranking'));
    if (!ranking) {
      localStorage.setItem('ranking', JSON.stringify([playerScore]));
    } else {
      const newRank = [...ranking, playerScore];
      localStorage.setItem('ranking', JSON.stringify(newRank));
    }
  };

  playAgain = () => {
    const { history, dispatch } = this.props;
    localStorage.removeItem('token');
    dispatch(resetGlobalState());
    history.push('/');
  };

  render() {
    const { player: { assertions, score, src }, history } = this.props;
    const ASSERTIONS = 3;
    return (
      <S.feedBackPage>
        <S.logo src={ logo } alt="logo" />
        <S.userImage
          src={ src }
          alt="user"
          style={ assertions < ASSERTIONS ? { border: '4px solid #EA5D5D',
            filter: 'drop-shadow(0px 0px 9px #EA5D5D)' } : { border: '4px solid #2FC18C',
            filter: 'drop-shadow(0px 0px 9px #2FC18C)' } }
        />
        <S.feedBackContainer>
          <S.infos>
            {
              assertions < ASSERTIONS
                ? (
                  <h1
                    data-testid="feedback-text"
                    style={ { color: 'rgba(234, 93, 93, 1)' } }
                  >
                    PODIA SER MELHOR...
                  </h1>)
                : (
                  <h1
                    data-testid="feedback-text"
                    style={ { color: '#2FC18C' } }
                  >
                    MUITO BEM!
                  </h1>)
            }
            <p data-testid="feedback-total-score">
              Você acertou
              {' '}
              {assertions}
              {' '}
              questões!
            </p>
            <p data-testid="feedback-total-question">
              Um total de
              {' '}
              {score}
              {' '}
              pontos.
            </p>
          </S.infos>
        </S.feedBackContainer>
        <S.buttonsContainer>
          <S.playAgainBtn
            type="button"
            data-testid="btn-play-again"
            onClick={ this.playAgain }
          >
            JOGAR NOVAMENTE
          </S.playAgainBtn>
          <S.rankingBtn
            type="button"
            data-testid="btn-ranking"
            onClick={ () => history.push('/ranking') }
          >
            VER RANKING
          </S.rankingBtn>
        </S.buttonsContainer>
      </S.feedBackPage>
    );
  }
}

Feedback.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  player: PropTypes.shape({
    assertions: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  player: state.player,
});

export default connect(mapStateToProps)(Feedback);
