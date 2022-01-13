import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {  setCurrentPage } from '../../redux/actions';
import { createPages } from '../../utils';
import Button from './Button';

function Pagination() {
  const currentPage = useSelector(state => state.tasks.currentPage);
  const totalCount = useSelector(state => state.tasks.totalCount);
  const dispatch = useDispatch();

  const pagesCount = Math.ceil(totalCount / 3);
  const pages = [];
  createPages(pages, pagesCount, currentPage);

  return (
    <div>
      <StyledButton padding onClick={() => dispatch(setCurrentPage(1))}>{'<<'}</StyledButton>
      <StyledButton padding onClick={
        () => dispatch(setCurrentPage(currentPage <= 1 ? pagesCount : currentPage - 1))
      }>
        {'<'}
      </StyledButton>

      {pages.map((page, index)=><StyledButton
        padding 
        key={index}
        page={page}
        currentPage={currentPage}
        onClick={() => dispatch(setCurrentPage(page))}
      >
        {page}
      </StyledButton>)}

      <StyledButton padding onClick={
        () => dispatch(setCurrentPage(currentPage >= pagesCount ? pagesCount : currentPage + 1))
      }>
        {'>'}
      </StyledButton>
      <StyledButton padding onClick={() => dispatch(setCurrentPage(pagesCount))}>{'>>'}</StyledButton>
    </div>
  );
}

const StyledButton = styled(Button)`
  display: inline;
  background: ${({page, currentPage}) => currentPage === page && currentPage ? 'var(--secondary-color)' : 'transparent'};

  & + & {
    margin-left: 10px;
  }
`;

export default Pagination;
