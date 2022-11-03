import React, { useEffect, useState } from 'react'
import { IconContext } from "react-icons";
import { GiFairyWings, GiPsychicWaves, GiGroundSprout, GiStonePile, GiAngelWings } from 'react-icons/gi'
import { Link } from 'react-router-dom';


export const Item = ({ pokemon }) => {

    const [pokemonInfo, setPokemonInfo] = useState([])
    const [img, setImg] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const callApi = async () => {
            await fetch(pokemon.url)
                .then(response => response.json())
                .then(data => {
                    setPokemonInfo(data)
                    // setImg(data.sprites.other.home.front_default)
                    setImg(data.sprites.other.dream_world.front_default)
                    setLoading(false)
                })
        }

        callApi()
    }, [pokemon])

    return (
        <div className='flex flex-col justify-evenly rounded-xl'>
            {
                loading
                    ?
                    <p>Cargando..</p>
                    :
                    <>
                        <div className='flex flex-col justify-evenly'>
                            {/* IMAGEN  */}
                            <div className='mx-auto'>
                                <Link to={`/details/${pokemonInfo.id}`}>
                                    <img className='p-1 mb-5 scale-125' src={img} alt={pokemon.name} width='150' />
                                </Link>
                            </div>
                            
                            {/* TITULO  */}
                            <p className='mt-2 mb-1 text-2xl text-center text-white capitalize Text'>{pokemon.name}</p>

                            {/* HP  */}
                            <progress className="w-32 h-1 mx-auto mt-1 progress-error" value={pokemonInfo.stats[0].base_stat} max="100"></progress>
                            <label className='mt-1 text-xs text-center text-white Text'>HP: {pokemonInfo.stats[0].base_stat}</label>

                            {/* TIPO  */}
                            <div className='flex items-center justify-center pb-2 mt-1'>
                                {
                                    pokemonInfo.types.map((pokemon, i) => {
                                        return (
                                            <p key={i} className='flex items-center px-2 pt-2 text-white capitalize text-md Text'>
                                                {pokemon.type.name === 'fire' && <i className="text-red-500 fa-solid fa-fire-flame-curved"></i>}
                                                {pokemon.type.name === 'water' && <i className="text-blue-400 fa-solid fa-droplet"></i>}
                                                {pokemon.type.name === 'bug' && <i className="fa-solid fa-bug text-amber-500"></i>}
                                                {pokemon.type.name === 'poison' && <i className="fa-solid fa-skull-crossbones text-violet-400"></i>}
                                                {pokemon.type.name === 'grass' && <i className="text-green-500 fa-solid fa-seedling"></i>}

                                                <IconContext.Provider value={{ color: "#d3d1d1" }}>
                                                    {pokemon.type.name === 'flying' && <GiAngelWings />}
                                                </IconContext.Provider>

                                                {pokemon.type.name === 'electric' && <i className="text-blue-600 fa-sharp fa-solid fa-bolt"></i>}

                                                <IconContext.Provider value={{ color: "#a33939" }}>
                                                    {pokemon.type.name === 'ground' && <GiGroundSprout />}
                                                </IconContext.Provider>

                                                <IconContext.Provider value={{ color: "#a33939" }}>
                                                    {pokemon.type.name === 'fighting' && <i className="text-orange-300 fa-solid fa-hand-back-fist"></i>}
                                                </IconContext.Provider>

                                                {pokemon.type.name === 'steel' && <i className="fa-solid fa-gear text-slate-500"></i>}
                                                {pokemon.type.name === 'ice' && <i className="text-blue-200 fa-solid fa-snowflake"></i>}
                                                {pokemon.type.name === 'ghost' && <i className="fa-solid fa-ghost text-slate-50"></i>}
                                                {pokemon.type.name === 'normal' && <i className="fa-solid fa-circle-dot text-slate-200"></i>}

                                                <IconContext.Provider value={{ color: "rebeccapurple" }}>
                                                    {pokemon.type.name === 'psychic' && <GiPsychicWaves />}
                                                </IconContext.Provider>

                                                {pokemon.type.name === 'dragon' && <i className="text-red-700 fa-solid fa-dragon"></i>}
                                                {pokemon.type.name === 'dark' && <i className="text-black fa-solid fa-circle-half-stroke"></i>}

                                                <IconContext.Provider value={{ color: "pink" }}>
                                                    {pokemon.type.name === 'fairy' && <GiFairyWings />}
                                                </IconContext.Provider>

                                                {pokemon.type.name === 'rock' && <GiStonePile />} {pokemon.type.name}
                                            </p>
                                        )
                                    })}
                            </div>
                        </div>
                    </>
            }
        </div>
    )
}
