import { act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';

describe('teste tela de jogo', () => {
  it('teste 1', () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve({
        response_code: 3,
        results: [],
      }),
    }));
    const { history } = renderWithRouterAndRedux(<App />);
    const buttonPlay = screen.getByRole('button', { name: /play/i });
    expect(buttonPlay).toBeDisabled();
    const inputName = screen.getByPlaceholderText(/nome/i);
    userEvent.type(inputName, 'Miguel');
    const inputEmail = screen.getByPlaceholderText(/email/i);
    userEvent.type(inputEmail, 'emailteste@gmail.com');

    userEvent.click(buttonPlay);
    act(() => history.push('/game'));
    const item = localStorage.getItem('token');
    expect(item).toBe(null);
    act(() => history.push('/'));
    expect(history.location.pathname).not.toBe('/game');
  });
});
