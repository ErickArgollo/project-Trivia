import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class CategoryOptions extends Component {
  render() {
    const { option } = this.props;
    return (
      <option value={ option.id }>
        { option.name }
      </option>
    );
  }
}

CategoryOptions.propTypes = {
  option: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
