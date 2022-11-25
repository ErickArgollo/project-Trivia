import styled from 'styled-components';

export const containerAll = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

export const logoTrivia = styled.img`
position: relative;
margin-top: 180px;
width: 177.79px;
height: 178.76px;
@media (max-width: 768px) {
    top: -130px;
  }
  
  @media (max-width: 375px) {
    top: -75px;
    z-index: 1;
  } 

`;
export const containerRanking = styled.div`
width: 489px;
height:auto;
background: white;
display: flex;
flex-direction: column;
align-items: center;
margin-top: -80px;
margin-bottom: 30px;
padding-bottom: 30px;
border-radius: 10px;
@media (max-width: 768px) {
    width: 90%;
    position: relative;
    top: -40px;
  } 

  @media (max-width: 375px) {
    top: -30px;
    z-index: 0;
    
  } 
`;

export const titleRanking = styled.h1`
color: #3C1B7A ;
font-weight: 700;
font-size: 30px;
line-height: 150%;
margin-top: 100px;
@media (max-width: 768px) {
    margin-top: 20px;
  } 
`;

export const ulRanking = styled.ul`
display: flex;
flex-direction: column;
gap: 20px;
width: 100%;
align-items: center;
justify-content: center;
align-content: center;
margin-right: 43px;
`;
export const rowRanking = styled.li`
display: flex;
width: 386px;
flex-direction: row;
justify-content: space-between;
@media (max-width: 768px) {
    width: 90%;
  } 
`;

export const buttonPlay = styled.button`
color: #2FC18C;
width: 386px;
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
@media (max-width: 768px) {
    width: 90%;
  } 
`;

export const nameAndImage = styled.div`
width: 202px;
height: 51px;
display: flex;
flex-direction: row;
background: #EBEBEB;
border-radius: 100px;
`;

export const personalImagem = styled.img`
width: 37px;
height: 37px;
border-radius: 18px;
margin-top: 10px;
margin-left: 10px;
`;

export const personalName = styled.p`
font-weight: 400;
font-size: 16px;
line-height: 150%;
margin-left: 15px;
`;

export const points = styled.div`
width: 184px;
height: 55px;
background: #FFFFFF;
position: relative;
display:flex;
flex-direction: row;
height: 51px;
box-shadow: 0px 4px 10px;
border-radius: 100px;
align-items: center;
`;

export const starImage = styled.img`
width: 29.88px;
height: 29.88px;
margin-left: 15px;
`;

export const personalScore = styled.p`
font-weight: 700;
font-size: 16px;
line-height: 150%;
margin-left: 15px;
`;
