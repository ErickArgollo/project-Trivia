import md5 from 'crypto-js/md5';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPlayerImage } from '../redux/actions';
import * as S from './styles/Header.style';
import logo from '../assets/images/logotrivia.svg';
import Star from '../assets/images/Vector.png';
import ButtonSettings from './ButtonSettings';

class Header extends Component {
  state = {
    src: '',
  };

  componentDidMount() {
    this.getSrc();
  }

  getSrc = () => {
    const { player, dispatch } = this.props;
    const hash = md5(player.gravatarEmail).toString();
    const src = `https://www.gravatar.com/avatar/${hash}`;
    this.setState({
      src,
    }, () => {
      const { src: url } = this.state;
      dispatch(getPlayerImage(url));
    });
  };

  render() {
    const { player, history } = this.props;
    const { src } = this.state;
    if(!player.name){
      history.push('/')
    }
    return (
      <S.headerContainer>
        <S.logo src={ logo } alt="" />
        <S.userInfosContainer>
          <S.userPicture
            data-testid="header-profile-picture"
            src={ src }
            alt={ player.name }
          />
          <p data-testid="header-player-name">{player.name}</p>
        </S.userInfosContainer>
        <S.playerScoreContainer>
          <S.star src={ Star } alt="" />
          <p>Points:</p>
          <p data-testid="header-score">{player.score}</p>
        </S.playerScoreContainer>
        <S.buttonSettingsContainer>
          <ButtonSettings history={ history } />
        </S.buttonSettingsContainer>
      </S.headerContainer>
    );
  }
}

Header.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired,
  player: PropTypes.shape({
    gravatarEmail: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  player: state.player,
});

export default connect(mapStateToProps)(Header);
