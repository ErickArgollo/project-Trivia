/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import fetchTriviaCategorys from '../services/fetchTriviaCategorys';
import CategoryOptions from '../components/CategoryOptions';
import { selectedCategory, selectedDifficulty, selectedType } from '../redux/actions';
import logo from '../assets/images/logotrivia.svg';
import * as S from './styles/Settings.style';

class Settings extends React.Component {
  state = {
    categories: [],
    categorySelected: '0',
    difficultySelected: '',
    typeSelected: '',
  };

  componentDidMount() {
    this.getCategorys();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  getCategorys = async () => {
    const categories = await fetchTriviaCategorys();
    this.setState({
      categories: categories.trivia_categories,
    });
  };

  dispatchOptions = () => {
    const { dispatch, history } = this.props;
    const { categorySelected, difficultySelected, typeSelected } = this.state;
    dispatch(selectedCategory(categorySelected));
    dispatch(selectedDifficulty(difficultySelected));
    dispatch(selectedType(typeSelected));
    history.push('/');
  };

  render() {
    const { categories } = this.state;
    return (
      <S.settingsContainer>
        <S.settingsInfosContainer>
          <S.logo src={ logo } alt="" />
          <S.title>Configurações</S.title>
          <S.selects name="categorySelected" onChange={ this.handleChange } id="">
            <option value="0">All</option>
            {
              categories.map((e) => <CategoryOptions key={ e.id } option={ e } />)
            }
          </S.selects>
          <S.selects name="difficultySelected" id="" onChange={ this.handleChange }>
            <option value="">Todas</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </S.selects>
          <S.selects name="typeSelected" onChange={ this.handleChange }>
            <option value="multiple">Multiple</option>
            <option value="boolean">True or False</option>
          </S.selects>
          <S.apllyButton type="button" onClick={ this.dispatchOptions }>Aplicar</S.apllyButton>
        </S.settingsInfosContainer>
      </S.settingsContainer>
    );
  }
}

Settings.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired,
};
export default connect()(Settings);
