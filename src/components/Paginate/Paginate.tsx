import React, {useState} from 'react'
import ReactPaginate from 'react-paginate';
import './Paginate.scss';

type SelectedItem = { selected: number };
type ItemsPerPage = { itemsPerPage: number, itemCounts: number };
type CurrentItems = { currentItems: number[] };


function Items({ currentItems }: CurrentItems) {
  return (
    <ul className='paginate__list'>
      {currentItems &&
        currentItems.map((item: number) => (
          <div className='paginate__item' key={item}>
            {item}
          </div>
        ))}
    </ul>
  );
}

const Paginate = ({ itemsPerPage, itemCounts }: ItemsPerPage) => {
  const maxDisplayCounts = 100
  const moreThanCount = itemCounts > maxDisplayCounts ? `${maxDisplayCounts}+` : itemCounts
  const items: number[] = []

  for(let i = 1; i <= itemCounts;i++){
    items.push(i)
  }

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event: SelectedItem) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="arrow_forward"
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel=""
        containerClassName='navigate__container'
        pageClassName='navigate__page'
        breakClassName='navigate__break'
        previousClassName='navigate__previous'
        nextClassName='navigate__next'
        nextLinkClassName='material-icons'
      />
      <div>{`${itemOffset + 1} - ${endOffset} из ${moreThanCount} вариантов аренды`}</div>
    </>
  );
}

export default Paginate