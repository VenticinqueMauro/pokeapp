import React, { useEffect, useState } from 'react'

export const SearchType = ({ setType }) => {

    const [types, setTypes] = useState([])

    useEffect(() => {

        const callApiTypes = async () => {
            await fetch('https://pokeapi.co/api/v2/type/')
                .then(response => response.json())
                .then(data => {
                    setTypes(data.results)
                })
        }

        callApiTypes()

    }, [])



    return (
            <div className="m-2 dropdown">
                <label tabIndex={0} className="m-1 text-white bg-transparent border btn btn-sm border-amber-400 hover:border-amber-400">Pokemon Types</label>
                <ul tabIndex={0} className="p-2 text-white bg-black shadow dropdown-content menu rounded-box w-52">
                    <li
                        onClick={() => setType('')}
                    ><a>All</a>
                    </li>
                    {
                        types.map((type, i) => {
                            return (
                                <li key={i}
                                    onClick={() => setType(type.name)}
                                >
                                    <a>{type.name !== 'shadow' && type.name !== 'unknown' && type.name}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
    )
}
