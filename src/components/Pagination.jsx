import React from 'react'

export const Pagination = ({ page, setPage, offset, setOffset }) => {
    return (
        <div className="btn-group">
            <button disabled={offset === 0 && true} className="text-white bg-transparent border-amber-400 btn btn-sm hover:border-amber-300 hover:text-amber-400"
                onClick={() => {
                    setOffset(offset >= 12 && offset - 12)
                    setPage(page >= 2 && page - 1)
                }}>
                <i className="fa-solid fa-caret-left"></i>
            </button>
            <button className="text-white bg-transparent border-amber-400 btn btn-sm hover:border-amber-300 hover:text-amber-400">Page: {page}</button>
            <button className="text-white bg-transparent border-amber-400 btn btn-sm hover:border-amber-300 hover:text-amber-400"
                onClick={() => {
                        setOffset(offset + 12)
                        setPage(page + 1)
                }}>
                <i className="fa-solid fa-caret-right"></i>
            </button>
        </div>
    )
}
