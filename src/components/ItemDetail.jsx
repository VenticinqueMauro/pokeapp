import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { IconContext } from "react-icons";
import { GiFairyWings, GiPsychicWaves, GiGroundSprout, GiStonePile, GiAngelWings, GiCrossedAxes, GiAxeSwing, GiPoisonGas, GiShield, GiShieldBounces } from 'react-icons/gi'
import { MdCancel } from 'react-icons/md'
import { Loader } from './Loader';

export const ItemDetail = () => {

    const { id } = useParams()

    const [pokemon, setPokemon] = useState([])
    const [loading, setLoading] = useState(true)
    const [type, setType] = useState('')
    const [img, setImg] = useState('')
    const [atk, setAtk] = useState()
    const [def, setDef] = useState()
    const [sAtk, setSAtk] = useState()
    const [sDef, setSDef] = useState()
    // const [speed, setSpeed] = useState()
    // const [height, setHeight] = useState()
    // const [weight, setWeight] = useState()
    

    const callApi = async () => {
        await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => response.json())
            .then(data => {
                setPokemon(data)
                setType(data.types[0].type.name)
                setImg(data.sprites.other.home.front_default)
                setAtk(pokemon.stats[1].base_stat)
                setDef(pokemon.stats[2].base_stat)
                setSAtk(pokemon.stats[3].base_stat)
                setSDef(pokemon.stats[4].base_stat)
                // setSpeed(pokemon.stats[5].base_stat)
                // setHeight(pokemon.height)
                // setWeight(pokemon.weight)
                setTimeout(() => {
                    setLoading(false)
                }, 2000)
            })
    }
    useEffect(() => {

    callApi()

    })


    // const Atk = pokemon.stats[1].base_stat;
    // const Def = pokemon.stats[2].base_stat;
    // const SpecialDef = pokemon.stats[4].base_stat;
    // const SpecialAtk = pokemon.stats[3].base_stat;
    // const Speed = pokemon.stats[5].base_stat;
    // const Height = pokemon.height;
    // const Weigh = pokemon.weight;

    // className={type === 'fire' && 'fire' || type === 'water' && 'water' || type === 'electric' && 'electric' || type === 'bug' && 'bug' || type === 'grass' && 'grass' || type === 'poison' && 'poison' || type === 'fairy' && 'fairy' || type === 'normal' && 'normal' || type === 'dark' && 'dark' || type === 'ground' && 'ground'}




    return (
        <div className={`flex flex-col items-center justify-center w-screen min-h-screen containerItemDetail${type}`}>
            {
                loading
                    ?
                    <div className='z-10 mx-auto my-auto'>
                        <Loader />
                    </div>
                    :
                    <div className='flex flex-col items-center justify-center rounded-3xl md:flex md:flex-row md:justify-center containerDetail'>

                        {/* IMAGEN  */}

                        <div>
                            <img className='mx-auto' src={img} alt={pokemon.name} width={300} />
                        </div>

                        {/* DESCRIPCION  */}

                        <div className='flex flex-col justify-around containerInfo'>

                            {/* TITULO */}
                            <div className='flex flex-col text-white'>
                                <h1 className='text-3xl text-center capitalize lg:p-2 lg:text-4xl'>{pokemon.name}</h1>
                                <progress className="w-40 h-1 mx-auto mt-1 progress-error" value={pokemon.stats[0].base_stat} max="100"></progress>
                                <label className='mt-1 text-sm text-center text-white Text'>HP: {pokemon.stats[0].base_stat}</label>
                            </div>

                            {/* TIPO - HABILIDADES */}
                            <div className='flex justify-evenly'>
                                <div className='flex flex-col items-center text-center'>
                                    <p className='mb-2 badge'>Type</p>
                                    <div className='flex items-center justify-evenly'>
                                        {
                                            pokemon.types.map((item, i) => {
                                                return (
                                                    <p className='px-2 text-lg' key={i} style={{ textShadow: '0px 0px 2px #000' }}>
                                                        {item.type.name === 'fire' && <i className="text-red-500 fa-solid fa-fire-flame-curved"></i>}
                                                        {item.type.name === 'water' && <i className="text-blue-400 fa-solid fa-droplet"></i>}
                                                        {item.type.name === 'bug' && <i className="fa-solid fa-bug text-amber-500"></i>}
                                                        {item.type.name === 'poison' && <span className='text-[#4c2a70]'><GiPoisonGas /></span>}
                                                        {item.type.name === 'grass' && <i className="text-green-500 fa-solid fa-seedling"></i>}

                                                        <IconContext.Provider value={{ color: "#d3d1d1" }}>
                                                            {item.type.name === 'flying' && <span className='text-[#dddddd]'><GiAngelWings /></span>}
                                                        </IconContext.Provider>

                                                        {item.type.name === 'electric' && <i className="text-blue-600 fa-sharp fa-solid fa-bolt"></i>}

                                                        <IconContext.Provider value={{ color: "#a33939" }}>
                                                            {item.type.name === 'ground' && <GiGroundSprout />}
                                                        </IconContext.Provider>

                                                        <IconContext.Provider value={{ color: "#a33939" }}>
                                                            {item.type.name === 'fighting' && <i className="text-orange-300 fa-solid fa-hand-back-fist"></i>}
                                                        </IconContext.Provider>

                                                        {item.type.name === 'steel' && <i className="fa-solid fa-gear text-slate-500"></i>}
                                                        {item.type.name === 'ice' && <i className="text-blue-200 fa-solid fa-snowflake"></i>}
                                                        {item.type.name === 'ghost' && <i className="fa-solid fa-ghost text-slate-50"></i>}
                                                        {item.type.name === 'normal' && <i className="fa-solid fa-circle-dot text-slate-200"></i>}

                                                        <IconContext.Provider value={{ color: "rebeccapurple" }}>
                                                            {item.type.name === 'psychic' && <GiPsychicWaves />}
                                                        </IconContext.Provider>

                                                        {item.type.name === 'dragon' && <i className="text-red-700 fa-solid fa-dragon"></i>}
                                                        {item.type.name === 'dark' && <i className="text-black fa-solid fa-circle-half-stroke"></i>}

                                                        <IconContext.Provider value={{ color: "pink" }}>
                                                            {item.type.name === 'fairy' && <GiFairyWings />}
                                                        </IconContext.Provider>

                                                        {item.type.name === 'rock' && <GiStonePile />}
                                                    </p>
                                                )
                                            })
                                        }
                                    </div>
                                </div>

                                {/* HABILIDADES  */}

                                <div className='text-center'>
                                    <p className='mb-2 badge'>Abilities</p>
                                    <ul className='flex justify-center'>
                                        {
                                            pokemon.abilities.map((item, i) => {
                                                return (
                                                    <li key={i} className='px-2 text-sm text-white capitalize'>
                                                        {item.ability.name}
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>

                            {/* DIVIDER  */}
                            <div className='mx-auto'>
                                <div className="mx-auto w-50 divider"></div>
                            </div>

                            {/* STATS  */}
                            <p className='mx-auto badge'>Stats</p>
                            <div className='flex px-4 justify-evenly'>
                                <ul>
                                    {/* ATAQUE  */}
                                    <p className='flex items-center justify-center m-2 text-lg font-bold text-white badge '>
                                        <span className='text-[#fff]'>
                                            <GiCrossedAxes />
                                        </span>
                                        <span className='text-sm '>ATK</span>
                                    </p>
                                    <div className='flex items-center justify-center m-2 '>
                                        <div className="radial-progress text-[#29ffed]" style={{ "--value": atk, "--size": "4rem" }}>
                                            <span className='font-bold text-white'>
                                                {atk}
                                            </span>
                                        </div>
                                    </div>

                                    {/* ATAQUE ESPECIAL  */}
                                    <p className='flex items-center justify-center m-2 text-lg font-bold text-white badge'>
                                        <span className='text-[#fff] px-1'>
                                            <GiAxeSwing />
                                        </span>
                                        <span className='text-sm'>S.ATK</span>
                                    </p>
                                    <div className='flex items-center justify-center m-2 '>
                                        <div className="radial-progress text-[#29ffed]" style={{ "--value": atk, "--size": "4rem" }}>
                                            <span className='text-xl font-bold text-white'>
                                                {sAtk}
                                            </span>
                                        </div>
                                    </div>

                                </ul>
                                <hr />
                                <ul>
                                    {/* DEFENSA  */}
                                    <p className='flex items-center justify-center m-2 text-lg font-bold text-white badge'>
                                        <span className='text-[#fff]'>
                                            <GiShield />
                                        </span>
                                        <span className='text-sm'>DEF</span>
                                    </p>
                                    <div className='flex items-center justify-center m-2 '>
                                        <div className="radial-progress text-[#29ffed]" style={{ "--value": atk, "--size": "4rem" }}>
                                            <span className='text-xl font-bold text-white'>
                                                {def}
                                            </span>
                                        </div>
                                    </div>

                                    {/* DEFENSA ESPECIAL  */}
                                    <p className='flex items-center justify-center m-2 text-lg font-bold text-white badge'>
                                        <span className='text-[#fff]'>
                                            <GiShieldBounces />
                                        </span>
                                        <span className='text-sm'>S.DEF</span>
                                    </p>
                                    <div className='flex items-center justify-center m-2 '>
                                        <div className="radial-progress text-[#29ffed]" style={{ "--value": atk, "--size": "4rem" }}>
                                            <span className='text-xl font-bold text-white'>
                                                {sDef}
                                            </span>
                                        </div>
                                    </div>
                                </ul>
                            </div>

                            {/* VOLVER  */}
                            <div className='mx-auto text-5xl text-white hover:text-[#282b31] ease-out duration-300'>
                                <Link to='/'>
                                    <MdCancel />
                                </Link>
                            </div>


                        </div>


                    </div>
            }

        </div>
    )
}
