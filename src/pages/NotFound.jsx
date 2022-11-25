import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import * as S from './styles/NotFound.style';

class NotFound extends React.Component {
  componentDidMount() {
    const { history } = this.props;
    const TIME = 3000;
    setInterval(() => history.push('/'), TIME);
  }

  render() {
    return (
      <S.notFoundContainer>
        <S.title>Página não encontrada</S.title>
        <S.redirectText>Redirecionando para página principal...</S.redirectText>
      </S.notFoundContainer>

    );
  }
}

NotFound.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default connect()(NotFound);
