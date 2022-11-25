import { screen, act, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';

describe('teste questions e notFound', () => {
   it('Teste página notFound', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    act(() => history.push('/ronaldo'));
    expect(history.location.pathname).toBe('/ronaldo')
    screen.getByText('NotFound')
   })

  
   it('Teste de integração do componente Question', async () => {
    const initialState = {
        player: {
            name: 'Miguel',
            assertions: 0,
            score: 0,
            gravatarEmail: 'dasdasdas',
            src: 'https://www.gravatar.com/avatar/63373b41cf913e9f9b3226b4a0452737'
          }
    }
    global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve({
            response_code: 0,
            results: [
              {
                "category": "Geography",
                "type": "boolean",
                "difficulty": "easy",
                "question": "The Republic of Malta is the smallest microstate worldwide.",
                "correct_answer": "False",
                "incorrect_answers": [
                  "True"
                ]
              },
              {
                "category": "Science & Nature",
                "type": "multiple",
                "difficulty": "hard",
                "question": "In quantum physics, which of these theorised sub-atomic particles has yet to be observed?",
                "correct_answer": "Graviton",
                "incorrect_answers": [
                  "Z boson",
                  "Tau neutrino",
                  "Gluon"
                ]
              },
              {
                "category": "Science: Computers",
                "type": "multiple",
                "difficulty": "medium",
                "question": "Generally, which component of a computer draws the most power?",
                "correct_answer": "Video Card",
                "incorrect_answers": [
                  "Hard Drive",
                  "Processor",
                  "Power Supply"
                ]
              },
              {
                "category": "Entertainment: Video Games",
                "type": "multiple",
                "difficulty": "easy",
                "question": "What is the most expensive weapon in Counter-Strike: Global Offensive?",
                "correct_answer": "Scar-20/G3SG1",
                "incorrect_answers": [
                  "M4A1",
                  "AWP",
                  "R8 Revolver"
                ]
              },
              {
                "category": "Entertainment: Japanese Anime & Manga",
                "type": "multiple",
                "difficulty": "hard",
                "question": "Who was the Author of the manga Uzumaki?",
                "correct_answer": "Junji Ito",
                "incorrect_answers": [
                  "Noboru Takahashi",
                  "Akira Toriyama",
                  "Masashi Kishimoto",
                ],
              },
            ],
          }),
        }));

        const { history } = renderWithRouterAndRedux(<App />, initialState);
        

        act(() => history.push('/game'));
        await screen.findByText("The Republic of Malta is the smallest microstate worldwide.")
        screen.getByText(/timeleft: 30/i);
        screen.getByRole('heading', { name: /geography/i })
        const score = screen.getByTestId('header-score');
        expect(score).toHaveTextContent(0)
    
        const trueBtn = screen.getByRole('button', { name: /true/i })
        expect(trueBtn).toBeInTheDocument();
        const falseBtn = screen.getByTestId('correct-answer')
        act(() => userEvent.click(falseBtn))


        await waitFor(() => {
          const attScore = screen.getByTestId('header-score');
          expect(attScore).toHaveTextContent(39);
        });         
        
        const nextBtn = screen.getByRole('button', { name: /next/i})
        expect(trueBtn).toBeDisabled();
        expect(falseBtn).toBeDisabled();
        expect(trueBtn).toHaveStyle('border: 3px solid red')
        expect(falseBtn).toHaveStyle('border: 3px solid rgb(6, 240, 15)');
        expect(nextBtn).toBeInTheDocument();
        userEvent.click(nextBtn);
  
        
       
        screen.getByRole('heading', { name: /in quantum physics, which of these theorised sub\-atomic particles has yet to be observed\?/i});
        const answer = screen.getByRole('button', { name: /graviton/i })
        userEvent.click(answer)
        await screen.findByText(/timeleft: 29/i);

        await waitFor(() => {
          const attScore = screen.getByTestId('header-score');
          expect(attScore).toHaveTextContent(136);
        });    
        const nextBtn2 = screen.getByRole('button', { name: /next/i });
        userEvent.click(nextBtn2);
        
        const answer2 = screen.getByRole('button', { name: /Video Card/i })
        userEvent.click(answer2);
        

        await waitFor(() => {
          const attScore = screen.getByTestId('header-score');
          expect(attScore).toHaveTextContent(204);
        });  
        const nextBtn3 = screen.getByRole('button', { name: /next/i });
        userEvent.click(nextBtn3)
        
        const answer3 = screen.getByRole('button', { name: /awp/i })
        userEvent.click(answer3)
        const nextBtn4 = screen.getByRole('button', { name: /next/i } )
        userEvent.click(nextBtn4);
       

        const answer4 = screen.getByRole('button', { name: /junji ito/i })
        userEvent.click(answer4);
        const nextBtn5 = screen.getByRole('button', { name: /next/i } );
        userEvent.click(nextBtn5);
        screen.getByRole('heading', { name: /feedback/i });
        expect(history.location.pathname).toBe('/feedback');
        
   })

})