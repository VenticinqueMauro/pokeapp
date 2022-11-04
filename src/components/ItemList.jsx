import React, { useEffect, useState } from 'react'
import { Item } from './Item'
import { Loader } from './Loader'
import titulo from '../img/pokemonTitle.png'
import { Pagination } from './Pagination'

export const ItemList = () => {

    const [pokemons, setPokemons] = useState([])
    const [offset, setOffset] = useState(0)
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true)


    useEffect(() => {

        const callApi = async () => {
            await fetch(`https://pokeapi.co/api/v2/pokemon?limit=12&offset=${offset}`)
                .then(response => response.json())
                .then(data => {
                    setPokemons(data.results)
                    setLoading(false)
                })
        }

        callApi()

    }, [offset])



    return (
        <div className='flex flex-col mx-auto max-w-7xl'>
            <h1 className='m-10 mx-auto'>
                <img src={titulo} alt='pokemon' width={500} />
            </h1>
            {
                loading
                    ?
                    <Loader />
                    :

                    // LISTADO DE POKEMONS 
                    <>
                        <ul className='grid grid-cols-1 gap-2 md:grid-cols-3 '>
                            {
                                pokemons.map((pokemon, i) => {
                                    return (
                                        <li key={i} className='flex flex-col justify-center w-64 p-1 m-3 mx-auto bg-transparent border border-amber-400 rounded-xl Card'>
                                            <Item pokemon={pokemon} />
                                        </li>
                                    )
                                })
                            }
                        </ul>

                        {/* PAGINATION  */}
                        <div className='flex justify-center m-5'>
                            <Pagination page={page} setPage={setPage} offset={offset} setOffset={setOffset} />
                        </div>
                    </>
            }
        </div>
    )
}
