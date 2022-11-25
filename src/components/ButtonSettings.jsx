import PropTypes from 'prop-types';
import React from 'react';
import * as S from './styles/ButtonSettings.style';

class ButtonSettings extends React.Component {
  clickSettingsButton = () => {
    const { history } = this.props;
    history.push('/settings');
  };

  render() {
    return (
      <S.buttonSettings
        type="button"
        onClick={ this.clickSettingsButton }
        data-testid="btn-settings"
        className="material-icons"
      >
        settings
      </S.buttonSettings>
    );
  }
}

ButtonSettings.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default ButtonSettings;
