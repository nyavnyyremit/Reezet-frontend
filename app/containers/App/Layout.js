import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.main`
  background-color: #f6f6f6;
  min-height: 100%;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  &.hidden {
  	display: none;
  }
`;

const Content = styled.div`
	max-width: 1440px;
	width: 100%;
`;

const Layout = ({ children }) => {
  return (
    <Wrapper>
    	<Content>
      	{React.Children.toArray(children)}
      </Content>
    </Wrapper>
  )
}

export default Layout;