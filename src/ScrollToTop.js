import React from 'react'
import styled from 'styled-components'

const ScrollToTop = () => {
  const onButtonClick = () => {
    window.scrollTo(0, 0);
  }

  return (
    <Button onClick={() => {onButtonClick()}}>Scroll To Top</Button>
  )
};

export default ScrollToTop;


const Button = styled.button`
  color: white;
  background-color: black;
  border-color: pink;
`;