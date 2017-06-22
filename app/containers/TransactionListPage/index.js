
import React from 'react';
import styled from 'styled-components';

import Pagination from 'components/Pagination';

import { connect } from 'react-redux';
import { init, page } from './actions';

const ListWrapper = styled.div`
  margin-top: 45px;
`;

const Item = styled.div`
  display: flex;
  &>div {
    width: 33%;
  }
`;

const Download = styled.a`
  color: #aa7985;
`;

class TransactionListPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  
  componentDidMount() {
    this.props.onInit();
  }

  render() {
  	const list = this.props.list;
    return (
    	<div>
	      <h1>
	        Transactions
	      </h1>
	      {list &&
		      <ListWrapper>
		      	<div>
		      		{list.map((item) => 
              	<Item key={`item_${item._id}`}>
                  <div>{item._id}</div>
                  <div>{item.created_on}</div>
                  <Download href={item.path}>download</Download>
              	</Item>
              )}
		      	</div>
            {this.props.pagination &&
              <Pagination pagination={this.props.pagination} onChange={this.props.onPage} currentPage={this.props.currentPage}/>
            }
		      </ListWrapper>
	    	}
      </div>
    );
  }
}

TransactionListPage.propTypes = {
  list: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  pagination: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  currentPage: React.PropTypes.number,

  onInit: React.PropTypes.func,
  onPage: React.PropTypes.func,
}

const mapStateToProps = (state) => {
  const { list, pagination, currentPage } = state.get('transaction').toJS()
  return { list, pagination, currentPage };
};

const mapDispatchToProps = (dispatch) => ({
  onInit: () => dispatch(init()),
  onPage: (currentPage) => dispatch(page(currentPage)),
  dispatch,
});



export default connect(mapStateToProps, mapDispatchToProps)(TransactionListPage);