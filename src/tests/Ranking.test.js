import { screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';

describe('testes rankingpage', () => {
    it('teste1', () => {
        const initialState = {
            player: {
                name: 'dsadas',
                assertions: 0,
                score: 0,
                gravatarEmail: 'dsadsadsa',
                src: 'https://www.gravatar.com/avatar/9c0e98885486450aeece88107a8f2e67'
              }
        }
        localStorage.setItem('ranking', JSON.stringify([{"name":"Maria","score":0,"picture":"https://www.gravatar.com/avatar/9c0e98885486450aeece88107a8f2e67"},{"name":"Rose","score":94,"picture":"https://www.gravatar.com/avatar/436bbc64c668d545f715b0fe201587f2"}]))
        const { history } = renderWithRouterAndRedux(<App />, initialState);
        act(() => history.push('/ranking'));
        screen.getByText(/rose/i)
        screen.getByText(/94/i)
        screen.getByText(/maria/i)
        const userimg = screen.getAllByRole('img', { name: /user/i});
        expect(userimg).toHaveLength(2);
        const buttonPlayAgain = screen.getByRole('button', { name: /play again/i })
        userEvent.click(buttonPlayAgain);
        expect(history.location.pathname).not.toBe('/ranking');
        const rank = JSON.parse(localStorage.getItem('ranking'));
        expect(rank).toHaveLength(2)

        screen.logTestingPlaygroundURL()
    })
})