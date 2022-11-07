import React, { useEffect, useState } from 'react'
import { Item } from './Item'
import { Loader } from './Loader'
import titulo from '../img/pokemonTitle.png'
import { Pagination } from './Pagination'
import { SearchType } from './SearchType'
import { SearchName } from './SearchName'

export const ItemList = () => {

    const [pokemons, setPokemons] = useState([])
    const [offset, setOffset] = useState(0)
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true)
    const [pokemonsType, setPokemonsType] = useState([])
    const [type, setType] = useState('')
    const [allPokemons, setAllPokemons] = useState([])
    const [name, setName] = useState('')

    const [isSearch, setIsSearch] = useState(false)
    const [fueBuscado, setFueBuscado] = useState(false)

    useEffect(() => {

        const callApi = async () => {
            await fetch(`https://pokeapi.co/api/v2/pokemon?limit=12&offset=${offset}`)
                .then(response => response.json())
                .then(data => {
                    setPokemons(data.results)
                    setLoading(false)
                })
        }

        type === '' && callApi()

    }, [offset])

    useEffect(() => {

        const callApiType = async () => {
            await fetch(`https://pokeapi.co/api/v2/type/${type}/`)
                .then(response => response.json())
                .then(data => {
                    setPokemonsType(data.pokemon)
                }
                )
                .catch(err => console.log('error', err))
        }

        type !== '' && callApiType()

    }, [type])

    const filterPokemonsName = allPokemons.filter(pokemon => pokemon.name.toLowerCase() === name)

    useEffect(() => {

        const callApiAllPokemons = async () => {
            await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
                .then(response => response.json())
                .then(data => {
                    setAllPokemons(data.results);
                })
        }

        callApiAllPokemons()

    }, [name])

    // allPokemons.some(pokemon => pokemon.name.toLowerCase() === name)

    return (
        <div className='flex flex-col mx-auto max-w-7xl'>
            <h1 className='m-10 mx-auto'>
                <img src={titulo} alt='pokemon' width={500} />
            </h1>

            <div className='flex items-center justify-around'>
                <SearchType type={type} setType={setType} />
                <SearchName setName={setName} isSearch={isSearch} setIsSearch={setIsSearch} setFueBuscado={setFueBuscado} />
            </div>

            <div className="p-4 divider"></div>
            {
                loading
                    ?
                    <Loader />
                    :

                    // LISTADO DE POKEMONS POR NOMBRE
                    <div>
                        <div>
                            {
                                filterPokemonsName.length > 0
                                    ?
                                    filterPokemonsName.map((pokemon, i) => {
                                        return (
                                            <li key={i} className='flex flex-col justify-center w-64 p-1 m-3 mx-auto bg-transparent border border-amber-400 rounded-xl Card pokemonsName'>
                                                <Item pokemon={pokemon} />
                                            </li>
                                        )
                                    })
                                    :
                                    fueBuscado && filterPokemonsName.length === 0
                                    &&
                                    <div className='p-2 text-xl text-center underline text-error underline-offset-4'>
                                        Pokemon Not Found, try Again
                                        <div className="p-4 divider"></div>
                                    </div>
                            }
                        </div>

                        <ul className='grid grid-cols-1 gap-2 md:grid-cols-3'>
                            {
                                type === ''
                                    ?
                                    pokemons.map((pokemon, i) => {
                                        return (
                                            <li key={i} className='flex flex-col justify-center w-64 p-1 m-3 mx-auto bg-transparent border border-amber-400 rounded-xl Card'>
                                                <Item pokemon={pokemon} />
                                            </li>
                                        )
                                    })
                                    :
                                    pokemonsType.map((pokemon, i) => {
                                        return (
                                            <li key={i} className='flex flex-col justify-center w-64 p-1 m-3 mx-auto bg-transparent border border-amber-400 rounded-xl Card'>
                                                <Item pokemon={pokemon.pokemon} />
                                            </li>
                                        )
                                    })
                            }
                        </ul>

                        {/* PAGINATION  */}

                        {
                            type === ''
                            &&
                            <div className='flex justify-center m-5'>
                                <Pagination page={page} setPage={setPage} offset={offset} setOffset={setOffset} />
                            </div>
                        }
                    </div>
            }
        </div >
    )
}
