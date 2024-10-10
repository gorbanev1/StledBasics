import React from 'react';

import './App.css';
import styled from "styled-components";

function App() {
    return (
        <div className="App">
            <Box>
                <StyledBtn as={Link} href={"#"}>LinkComponent</StyledBtn>
                <StyledBtn as="a" href={"#"}>Link</StyledBtn>
                <StyledBtn>kkkkk</StyledBtn>
                <SuperButton>Sup</SuperButton>
            </Box>
        </div>
    );
}

export default App;


const StyledBtn = styled.button`
  border: none;
  background-color: #34ff44;
  padding: 10px 20px;
  border-radius: 5px;
  color: snow;
  font-size: 2rem;
  font-weight: bold;

  &:hover {
    background-color: #1b14dc;
  }

  &:last-child {
    background-color: #aaa;
  }
`
const Link = styled.a`
  color: #acb;
  font-size: 2rem;
  font-weight: bold;
  background-color: transparent;
  padding: 0;
`

const SuperButton = styled(StyledBtn)`
  border-radius: 5px;
  background-color: #181818;
`
const Box = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  button{
    cursor: pointer;
  }
  ${Link}{
    cursor: zoom-in;
  }
`


