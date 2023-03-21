import React, {useState} from 'react'
import ReactPaginate from 'react-paginate';
import './Paginate.scss';

type SelectedItem = { selected: number };
type ItemsPerPage = { itemsPerPage: number };
type CurrentItems = { currentItems: number[] };

const itemCounts = 120
const items: number[] = []

for(let i = 0; i < itemCounts;i++){
  items.push(i)
}

function Items({ currentItems }: CurrentItems) {
  return (
    <>
      {currentItems &&
        currentItems.map((item: number) => (
          <div key={item}>
            <h3>Item #{item}</h3>
          </div>
        ))}
    </>
  );
}

const Paginate = ({ itemsPerPage }: ItemsPerPage) => {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event: SelectedItem) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    // console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
      />
    </>
  );
}

export default Paginate