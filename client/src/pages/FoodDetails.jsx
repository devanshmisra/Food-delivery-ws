import { CircularProgress, Rating } from "@mui/material";
import React from 'react'
import styled from "styled-components";
import Button from "../components/Button";
import {FavoriteRounded } from "@mui/icons-material"; 


const Container = styled.div`
  padding: 20px 30px;
  padding-bottom: 200px;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  @media (max-width: 768px) {
    padding: 20px 16px;
  }
  background: ${({ theme }) => theme.bg};
  `;

const Wrapper = styled.div`
flex: 1;
  max-width: 1400px;
  display: flex;
  width:100%;
  padding:12px;
  @media only screen and (max-width: 750px) {
    flex-direction: column;
    
  }
`;
const ImageWrapper = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:center;
`;
const Image = styled.img`
max-width: 500px;
  width: 100%;
  max-height: 500px;
  border-radius: 12px;
  object-fit: cover;
  @media (max-width: 768px) {
    max-width: 400px;
    height: 400px;
  }
`;
const Details = styled.div`
display:flex;
gap:18px;
flex-direction: column;
  padding: 4px 10px;
  flex:1;
`;
const Title = styled.div`
font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;
const Desc = styled.div`
font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
`;
const Name = styled.div``;
const Price = styled.div`
display: flex;
  align-items: center;
  gap: 8px;
  font-size: 22px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
`;
const Span = styled.div`
font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 60};
  text-decoration: line-through;
  text-decoration-color: ${({ theme }) => theme.text_secondary + 50};
`;
const Percent = styled.div`
font-size: 16px;
  font-weight: 500;
  color: green;
`;
const Ingridents = styled.div`
  font-size: 16px;
  font-weight: 500;
  diaplay: flex;
  flex-direction: column;
  gap: 24px;
`;
const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;
const Item = styled.div`
  background: ${({ theme }) => theme.primary + 20};
  color: ${({ theme }) => theme.primary};
  font-size: 14px;
  padding: 4px 12px;
  display: flex;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`;
const ButtonWrapper = styled.div`
  display: flex;
  gap: 16px;
  padding: 32px 0px;
  @media only screen and (max-width: 700px) {
   flex-direction:column;
    gap: 16px;
    padding: 12px 0px;
  }
`;

const FoodDetails = () => {
  return (
    <Container>
      <Wrapper>
        <ImageWrapper>
          <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Desserts.jpg/520px-Desserts.jpg"/>
        </ImageWrapper>
        <Details>
          <div>
            <Title>Title</Title>
            <Name>Name</Name>
          </div>
          <Rating value={3.5}/>
          <Price>
          ₹120<Span> ₹300</Span>
            <Percent>40% off</Percent>
          </Price>
          <Desc>Product Desc</Desc>
          <Ingridents>
            Ingridents
            <Items>
              <Item>Ingrident 1</Item>
              <Item>Ingrident 2</Item>
            </Items>
          </Ingridents>
          <ButtonWrapper>
            <Button text="Add to Cart" full outlined/>
            <Button text="Order Now" full />
            <Button leftIcon={<FavoriteRounded sx={{ fontSize: "22px", color: "red" }} />}
            full outlined/>
          </ButtonWrapper>
        </Details>
      </Wrapper>
    </Container>
  );
};

export default FoodDetails;