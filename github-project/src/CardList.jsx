import React from 'react';
import S from 'styled-components';


const CardList = (props) => {
    return (
        <CardListWrapper>
        <StyledTitle>Github Followers Page!</StyledTitle>
            <CardContainer>
                    <StyledText>{props.ilyrisArray.login}</StyledText>
                    <StyledImage src={props.ilyrisArray.avatar_url}></StyledImage>>
            </CardContainer>
            {props.userArray.map( (users) => 
            <CardContainer>
                <StyledText>{users.login}</StyledText>
                <StyledImage src={users.avatar_url}></StyledImage>>
            </CardContainer>
            )}
        </CardListWrapper>
    );

}
export default CardList;

const StyledTitle = S.h1`
    font-size: 40px;
    letter-spacing: 1px;
    width: 100%;
`;
const CardListWrapper = S.section`
    display: flex;
    flex-flow: row wrap;
`;
const CardContainer = S.div`
  width: 30%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 10px;
  border: 1px solid #000;
  box-sizing: 1px 3px 5px #e3e3e3;
`;
const StyledText = S.p`
  font-size: 20px;
  letter-spacing: 1px;
  color: #000;
`;
const StyledImage = S.img`
    width: 100px;
    height: 100px;
    roder-radius: 15px;
`;