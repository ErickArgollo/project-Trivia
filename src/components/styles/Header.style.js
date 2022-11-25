import styled from 'styled-components';

export const headerContainer = styled.header`
display: flex;
height: 113px;
background-color: white;
justify-content: space-around;
align-items: center;
@media (max-width: 768px) {
    width: 100%;
  }
`;

export const logo = styled.img`
width: 197.09px;
height: 198.18px;
position: relative;
top: 55px;
@media (max-width: 768px) {
    display: none;
  }
`;

export const userPicture = styled.img`
width: 37px;
height: 37px;
border-radius: 100%;
`;

export const userInfosContainer = styled.div`
display: flex;
align-items: center;
gap: 13px;

`;

export const playerScoreContainer = styled.div`
display: flex;
align-items: center;
gap: 10px;
`;

export const star = styled.img`
width: 30px;
height: 30px;
`;

export const buttonSettingsContainer = styled.div`
position: relative;
top: -5px;
color: black;
`;
