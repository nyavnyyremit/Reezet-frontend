import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';

const Wrapper = styled.header`
  height: 67px;
  background-color: white;
  border-bottom: solid 1px #ececec;
  display: flex;
  align-items: center;
`;

const Navigation = styled.nav`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  height: 100%;
`;

const MenuItem = styled(Link)`
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.8px;
  color: #003057;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 8px;
  margin: 0 14px;
  &.active {
    position: relative;
    color: #2b7bcd;
  }
  &.active:after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: #2b7bcd;
  }
`;

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <Navigation>
          {this.props.menuItems.map((item, index) => {
            return (
              <MenuItem key={`menu${index}`} to={item.url} activeClassName="active">{item.name}</MenuItem>
            )
          })}
        </Navigation>
      </Wrapper>
    );
  }
}

Header.propTypes = {
  menuItems: React.PropTypes.array
}

Header.defaultProps = {
  menuItems: [
  	{
	    url: '/attachment-list',
	    name: 'Attachments'
	  },
	  {
	    url: '/transaction-list',
	    name: 'Transactions'
	  },
  ]
}

export default Header;