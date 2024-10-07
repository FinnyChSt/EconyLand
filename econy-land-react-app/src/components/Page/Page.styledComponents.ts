import styled from "styled-components";
import HomeBackground from '../../assets/home-background.png';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-image: url(${HomeBackground});
  background-size: cover;
`;