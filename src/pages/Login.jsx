import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import ButtonSettings from '../components/ButtonSettings';
import { sendUserInfos } from '../redux/actions/index';
import fetchTriviaToken from '../services/fetchTriviaToken';
import * as S from './styles/Login.style';
import logo from '../assets/images/logotrivia.svg';

class Login extends React.Component {
  state = {
    name: '',
    email: '',
  };

  handleInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  validateForm = () => {
    const { name, email } = this.state;
    return name.length > 0 && email.length > 0;
  };

  handleClick = async () => {
    const { dispatch, history } = this.props;
    dispatch(sendUserInfos(this.state));
    const token = await fetchTriviaToken();
    // o setItem não pode receber stringify pois já é uma string!
    localStorage.setItem('token', token);
    history.push('/game');
  };

  render() {
    const { name, email } = this.state;
    const { history } = this.props;

    return (
      <S.loginStyle>
        <img src={ logo } alt="" />
        <S.formContainer>
          <S.formInputs
            type="text"
            placeholder="Name"
            data-testid="input-player-name"
            maxLength="14"
            value={ name }
            name="name"
            onChange={ this.handleInputChange }
          />
          <S.formInputs
            type="text"
            placeholder="Email"
            data-testid="input-gravatar-email"
            value={ email }
            name="email"
            onChange={ this.handleInputChange }
          />
          <S.loginBtn
            type="button"
            disabled={ !this.validateForm() }
            onClick={ this.handleClick }
            data-testid="btn-play"
          >
            Play
          </S.loginBtn>
        </S.formContainer>

        <ButtonSettings
          history={ history }
        />

      </S.loginStyle>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired,
};

export default connect()(Login);
