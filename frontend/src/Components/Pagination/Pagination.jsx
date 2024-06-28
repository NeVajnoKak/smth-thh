import React, { useState } from 'react'

const Pagination = ({pagesLength}) => {
    const [activePage , setActivePage] = useState(1)

    const pages = Array(pagesLength).fill().map((e, i) => i + 1)
    const four = 4;

    const [prevPage , setPrevPage] = useState(4)
    const [nextPage , setNextPage] = useState(pages.length - 1)

    const handlePages = (page) => {
        setActivePage(page)
    }

    const handleNextPages = () => {

    }


    return (
        <>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className={`page-item ${activePage === 1 ? 'disabled' : ''}`}>
                        <a className="page-link" onClick={() => handlePages(activePage-1)} aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    {pages.slice(prevPage-four,prevPage).map(page => (
                        <li key={page} className={`page-item ${activePage === page ? 'active': ''}`}><a className="page-link" onClick={() => handlePages(page)}>{page}</a></li>
                    ))}
                    <li className='page-item'><a className="page-link" onClick={() => handleNextPages(activePage+1)}>...</a></li>
                    {pages.slice(nextPage).map(page => (
                        <li key={page} className={`page-item ${activePage === page ? 'active': ''}`}><a className="page-link" onClick={() => handlePages(page)}>{page}</a></li>
                    ))}
                    <li className={`page-item ${activePage === pages.length  ? 'disabled' : ''}`}>
                        <a className="page-link" onClick={() => handlePages(activePage + 1)} aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Pagination