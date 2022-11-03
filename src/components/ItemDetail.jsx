import { itMatchesOne } from 'daisyui/src/lib/postcss-prefixer/utils'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export const ItemDetail = () => {

    const { id } = useParams()

    const [pokemon, setPokemon] = useState([])
    const [loading, setLoading] = useState(true)
    const [type, setType] = useState('')
    const [img, setImg] = useState('')

    useEffect(() => {

        const callApi = async () => {
            await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
                .then(response => response.json())
                .then(data => {
                    setPokemon(data)
                    setType(data.types[0].type.name)
                    setImg(data.sprites.other.home.front_default)
                    setLoading(false)
                })
        }

        callApi()

    }, [id])

    console.log(pokemon);






    return (
        <div className='relative grid grid-cols-4 p-5 place-content-center'>
            {
                loading
                    ?
                    <p>Cargando...</p>
                    :
                    <>

                        {/* IMAGEN  */}

                        <div id='containerImgDetails' className='col-start-2'>
                            <div
                                className={type === 'fire' && 'fire' || type === 'water' && 'water' || type === 'electric' && 'electric' || type === 'bug' && 'bug' || type === 'grass' && 'grass' || type === 'poison' && 'poison' || type === 'fairy' && 'fairy' || type === 'normal' && 'normal' || type === 'dark' && 'dark' || type === 'ground' && 'ground'}>
                                <img src={img} alt={pokemon.name} />
                            </div>
                        </div>

                        {/* DESCRIPCION  */}

                        <div className='flex flex-col justify-center col-start-3 bg-blue-600'>
                            {/* TITULO */}

                            <h1 className='text-center text-black capitalize'>{pokemon.name}</h1>

                            {/* TIPO  */}
                            <div className='flex justify-evenly'>
                                <div className='text-center'>
                                    <p>Type:</p>
                                    <div className='flex justify-evenly'>
                                        {
                                            pokemon.types.map((item, i) => {
                                                return (
                                                    <p className='px-2' key={i}>{item.type.name}</p>
                                                )
                                            })
                                        }
                                    </div>
                                </div>

                                {/* HABILIDADES  */}

                                <div className='text-center'>
                                    <p>Abilities</p>
                                    <ul className='flex justify-evenly'>
                                        {
                                            pokemon.abilities.map((item, i) => {
                                                return (
                                                    <li key={i} className='px-2 capitalize'>
                                                        {item.ability.name}
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                            <hr />
                            {/* STATS  */}

                            <ul className='flex justify-evenly'>
                                <div>
                                    <li>ATK: {pokemon.stats[1].base_stat}</li>
                                    <li>DEF: {pokemon.stats[2].base_stat}</li>
                                    <li>S.DEF: {pokemon.stats[4].base_stat}</li>
                                    <li>S.ATK: {pokemon.stats[3].base_stat}</li>
                                </div>
                                <div>
                                    <li>HP: {pokemon.stats[0].base_stat}</li>
                                    <li>SPEED: {pokemon.stats[5].base_stat}</li>
                                    <li>HEIGHT: {pokemon.height}</li>
                                    <li>WEIGHT: {pokemon.weight}kg</li>
                                </div>
                            </ul>

                        </div>

                        {/* VOLVER  */}

                        <div className='col-span-2 col-start-2 text-center'>
                            <Link to='/'>VOLVER</Link>
                        </div>
                    </>
            }

            {/* {
                loading
                    ?
                    <p>Cargando..</p>
                    :
                    <>
                        <Link to='/' >Volver</Link>
                        <h1 className='capitalize'>{pokemon.name}</h1>
                        <img src={img} alt={pokemon.name} />
                        <p>Abilities</p>
                        <ul>
                            {
                                pokemon.abilities.map((item, i) => {
                                    return (
                                        <li key={i} className='capitalize'>
                                            {item.ability.name}
                                        </li>
                                    )
                                } )
                            }
                        </ul>
                        <p>Stats</p>
                        <ul>
                            <li>HP: {pokemon.stats[0].base_stat}</li>
                            <li>ATK: {pokemon.stats[1].base_stat}</li>
                            <li>DEF: {pokemon.stats[2].base_stat}</li>
                            <li>S.ATK: {pokemon.stats[3].base_stat}</li>
                            <li>S.DEF: {pokemon.stats[4].base_stat}</li>
                            <li>SPEED: {pokemon.stats[5].base_stat}</li>
                            <li>HEIGHT: {pokemon.height}</li>
                            <li>WEIGHT: {pokemon.weight}kg</li>
                        </ul>
                    </>
            } */}

        </div>
    )
}
