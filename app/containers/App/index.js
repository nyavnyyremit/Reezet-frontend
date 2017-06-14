/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import styled from 'styled-components';

import Header from 'components/Header';
import Layout from './Layout';

const AppWrapper = styled.div`
  width: 100%;
  display: flex;
  min-height: 100%;
  flex-direction: column;
  flex: 1;
`;

export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <AppWrapper>
        <Header />
        <Layout>
          {React.Children.toArray(this.props.children)}
        </Layout>
      </AppWrapper>
    );
  }
}