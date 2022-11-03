import React from 'react'

export const Pagination = ({ page, setPage, offset, setOffset }) => {
    return (
        <div className="btn-group">
            <button disabled={offset === 0 && true} className="btn btn-sm hover:text-amber-500"
                onClick={() => {
                    setOffset(offset >= 15 && offset - 15)
                    setPage(page >= 2 && page - 1)
                }}>
                <i className="fa-solid fa-caret-left"></i>
            </button>
            <button className="btn btn-sm hover:text-amber-500">Page: {page}</button>
            <button className="btn btn-sm hover:text-amber-500"
                onClick={() => {
                    setOffset(offset + 15)
                    setPage(page + 1)
                }}>
                <i className="fa-solid fa-caret-right"></i>
            </button>
        </div>
    )
}
