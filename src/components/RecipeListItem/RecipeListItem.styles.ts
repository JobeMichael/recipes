import styled from "styled-components";

export const MenuCard = styled.div`
  height: 380px;
  width: 250px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.4) 0 0 5px;
  transition: box-shadow 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  cursor: pointer;

  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;

export const ImageWrapper = styled.div`
  width: 250px;
`;

export const ItemCoverImage = styled.div<{ imageUrl: string }>`
  background: url(${({ imageUrl }) => imageUrl});
  width: 100%;
  height: 200px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  height: 100%;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Price = styled.div`
  display: flex;
  align-items: center;

  h5 {
    margin: 0 0 0 5px !important;
  }
`;
