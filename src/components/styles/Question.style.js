import styled from 'styled-components';

export const questionContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
gap: 50px;
@media (max-width: 768px) {
    position: relative;
    top: -180px;
  }
`;

export const questionInfos = styled.div`

width: 439px;
height: 286px;
background-color: white;
border-radius: 10px;
position: relative;
text-align: center;
display: flex;
flex-direction: column;
justify-content: space-between;
@media (max-width: 768px) {
    width: 90%;
  }
`;

export const questionCategoryContainer = styled.div`
position: absolute;
top: -30px;
left: 10px;
background-color: #F9BA18;
width: 413px;
height: 45px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 100px;
@media (max-width: 768px) {
    width: 100%;
    left: 0;
  }

`;

export const questionCategory = styled.h3`
font-family: 'Epilogue';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 150%;
letter-spacing: 0.10em;
color: white;
`;

export const questionText = styled.h2`
font-family: 'Epilogue';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 150%;
`;

export const answersButtonContainer = styled.div`
height: 400px;
display: flex;
flex-direction: column;
@media (max-width: 768px) {
    position: relative;
    top: -40px;
  }

`;

export const answersOptions = styled.div`
width: 400px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
height: 87%;
@media (max-width: 768px) {
    width: 100%;
  }
`;

export const buttonNextContainer = styled.div`
height: 13%;

`;

export const difficultyLevel = styled.h3`
text-transform: uppercase;
color: red;
`;

export const timer = styled.div`
height: 40px;
color: black;
font-weight: 600;
display: flex;
justify-content: center;
gap: 5px;
align-items: center;
background: #EA5D5D;
`;

export const answer = styled.button`
height: 64px;
background: #FFFFFF;
border-radius: 100px;
font-weight: 400;
font-family: 'Epilogue';
@media (max-width: 768px) {
    width: 300px;
  }
`;

export const buttonNext = styled.button`
width: 100%;
height: 100%;
background: #2FC18C;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
color: white;
border: none;
font-weight: 700;
:hover {
    cursor: pointer;
    border: 1px solid black;
}
@media (max-width: 768px) {
    width: 300px;
  }

`;
