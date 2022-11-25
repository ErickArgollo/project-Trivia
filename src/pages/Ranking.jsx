/* eslint-disable react/jsx-key */
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { resetGlobalState } from '../redux/actions';
import * as S from './styles/Ranking.style';
import vector from '../assets/images/Vector.png';
import logo from '../assets/images/logotrivia.svg';

class Ranking extends React.Component {
  playAgain = () => {
    const { history, dispatch } = this.props;
    localStorage.removeItem('token');
    dispatch(resetGlobalState());
    history.push('/');
  };

  render() {
    const rankingList = JSON.parse(localStorage.getItem('ranking'))
      .sort((a, b) => b.score - a.score);
    return (
      <S.containerAll>
        <S.logoTrivia src={ logo } alt="" />
        <S.containerRanking>
          <S.titleRanking data-testid="ranking-title">Ranking</S.titleRanking>
          <S.ulRanking>
            {rankingList.map((e, i) => (
              <S.rowRanking key={ i }>
                <S.nameAndImage>
                  <S.personalImagem src={ e.picture } alt="user" />
                  <S.personalName data-testid={ `player-name-${i}` }>
                    {e.name}
                  </S.personalName>
                </S.nameAndImage>
                <S.points>
                  <S.starImage src={ vector } alt="" />
                  <S.personalScore data-testid={ `player-score-${i}` }>
                    {e.score}
                  </S.personalScore>
                </S.points>

              </S.rowRanking>
            ))}
          </S.ulRanking>

          <S.buttonPlay
            type="button"
            data-testid="btn-go-home"
            onClick={ this.playAgain }
          >
            Play Again
          </S.buttonPlay>
        </S.containerRanking>
      </S.containerAll>
    );
  }
}

Ranking.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect()(Ranking);
