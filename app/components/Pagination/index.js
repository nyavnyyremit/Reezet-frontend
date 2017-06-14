import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: 16px;
  line-height: 1;
  margin-top: 30px;
`;

const Pages = styled.div`
  color: #003057;
`;

const Page = styled.button`
  margin: 0 20px 0 0;
  padding: 0;
  cursor: pointer;
  &.active {
    color: #2b7bcd;
  }
`;

function range(start, count) {
  return Array.apply(0, Array(count))
    .map(function (element, index) { 
      return index + start;  
  });
}

function getPager(totalItems, currentPage, pageSize) {
    currentPage = currentPage || 1;
    const totalPages = Math.ceil(totalItems / pageSize);
    const size = 5;
    let startPage = currentPage - Math.floor(size / 2);
    let endPage = currentPage + Math.floor(size / 2);
    if (startPage <= 0) {
      endPage -= (startPage - 1);
      startPage = 1;
    }
    if (endPage > totalPages) {
      endPage = totalPages;
      if (endPage - size + 1 > 0) {
        startPage = endPage - size + 1;
      } else {
        startPage = 1;
      }
    }
    const pages = range(startPage, endPage-startPage+1);
    return {
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      pages: pages
    }
  }

//todo refactor
class Pagination extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      currentPage: this.props.pagination.page,
      pager: getPager(this.props.pagination.total, this.props.pagination.page+1, this.props.pagination.itemsPerPage)
    }
    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    //todo compare change
    this.setState({currentPage: nextProps.pagination.page, pager: getPager(nextProps.pagination.total, nextProps.pagination.page+1, nextProps.pagination.itemsPerPage)});
  }

  onChange(newValue) {
    const currentValue = this.state.currentPage;
    let pager = this.state.pager;
    if (currentValue != newValue) {
      this.props.onChange(newValue);
      pager = getPager(this.props.pagination.total, newValue+1, this.props.pagination.itemsPerPage);
    }
    this.setState({currentPage: newValue, pager});
  }

  render() {
    if (this.props.pagination.total <= this.props.pagination.itemsPerPage) return null;
    return(
      <Wrapper>
        <Pages>
          {this.state.pager.pages.map((page, index) =>
            <Page key={index} onClick={() => this.onChange(page-1)} className={this.state.pager.currentPage===page?'active':''}>
              {page}
            </Page>
          )}
        </Pages>
      </Wrapper>
    )
  }
}

Pagination.propTypes = {
  currentPage: React.PropTypes.number,
  pagination: React.PropTypes.object,
  onChange: React.PropTypes.func,
}

export default Pagination;