import React from 'react'
import styled from 'styled-components'

const ScrollToTop = () => {
  const onButtonClick = () => {
    window.scrollTo({top: 0, left: 0, behavior: "smooth"});
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