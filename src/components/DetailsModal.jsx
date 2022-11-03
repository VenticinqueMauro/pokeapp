import React from 'react'

export const DetailsModal = ({pokemon}) => {
    return (
        <>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="relative modal-box">
                    <label htmlFor="my-modal-3" className="absolute btn btn-sm btn-circle right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{pokemon.name}</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                </div>
            </div>
        </>
    )
}
