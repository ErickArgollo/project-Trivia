import { act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';

describe('Testes da página de feedback', () => {
  it('Teste assertion baixo', () => {
    const initialState = {
      player: {
        name: 'Miguel',
        assertions: 1,
        score: 97,
        gravatarEmail: 'teste@teste.com',
      },
    };
    const { history } = renderWithRouterAndRedux(<App />, initialState);
    act(() => history.push('/feedback'));
    const score = screen.getByRole('heading', { name: /97/i });
    expect(score).toBeInTheDocument();
    const assertions = screen.getByRole('heading', { name: /1/i });
    expect(assertions).toBeInTheDocument();
    const message = screen.getByRole('heading', { name: /could be better\.\.\./i });
    expect(message).toBeInTheDocument();
    const buttonPlayAgain = screen.getByRole('button', { name: /play again/i });
    expect(buttonPlayAgain).toBeInTheDocument();
    const ranking = screen.getByRole('button', { name: /ranking/i });
    expect(ranking).toBeInTheDocument();
    userEvent.click(ranking);
  });
  it('Teste assertion alto', () => {
    const initialState = {
      player: {
        name: 'Miguel',
        assertions: 5,
        score: 210,
        gravatarEmail: 'teste@teste.com',
      },
    };
    const { history } = renderWithRouterAndRedux(<App />, initialState);
    act(() => history.push('/feedback'));
    const score = screen.getByRole('heading', { name: /210/i });
    expect(score).toBeInTheDocument();
    const assertions = screen.getByRole('heading', { name: /5/i });
    expect(assertions).toBeInTheDocument();
    const message = screen.getByRole('heading', { name: /well done!/i });
    expect(message).toBeInTheDocument();
    const buttonPlayAgain = screen.getByRole('button', { name: /play again/i });
    expect(buttonPlayAgain).toBeInTheDocument();
    const ranking = screen.getByRole('button', { name: /ranking/i });
    expect(ranking).toBeInTheDocument();
    userEvent.click(buttonPlayAgain);
  });
});
