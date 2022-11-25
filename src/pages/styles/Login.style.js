import styled from 'styled-components';

export const loginStyle = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
@media (max-width: 768px) {
    width: 100%;
  }
`;

export const loginBtn = styled.button`
width: 519px;
height: 45px;
background: #2FC18C;
border: none;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px;
color: white;
font-weight: 700;
:hover {
    cursor: pointer;
    border: 1px solid black;
}

:disabled {
    background-color: grey;
    cursor: auto;
}

@media (max-width: 768px) {
    width: 300px;
  }

`;

export const formContainer = styled.form`
width: 614px;
height: 266px;
background-color: white;
box-shadow: 1px 4px 13px 2px rgba(0, 0, 0, 0.2);
border-radius: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
padding-top: 20px;

@media (max-width: 768px) {
    width: 400px;
  }
`;

export const formInputs = styled.input`
width: 519px;
height: 45px;
border: 4px solid #E1E5EB;
background-color: white;
text-align: center;
::placeholder {
    font-weight: 700;
    padding-left: 5px;
    text-align: center;
}
@media (max-width: 768px) {
    width: 300px;
  }
`;
