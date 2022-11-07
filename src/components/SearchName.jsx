import React from 'react'
import { useRef } from 'react'
import { BiSearch } from 'react-icons/bi'
import { ImCancelCircle } from 'react-icons/im'

export const SearchName = ({ setName, setIsSearch, isSearch, setFueBuscado }) => {

    const nameRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        setFueBuscado(true)
        if (!isSearch) {
            setName(nameRef.current.value.toLowerCase())
            setIsSearch(true)
        } else {
            nameRef.current.value = ''
            setName(nameRef.current.value.toLowerCase())
            setIsSearch(false)
            setFueBuscado(false)
        }
    }

    return (
        <div>
            <div className="form-control">
                <form className="input-group input-group-sm" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Search Pokemon" className="text-white placeholder-white bg-transparent input input-sm border-amber-400" ref={nameRef} />
                    <button className="bg-transparent btn btn-sm text-amber-400 border-amber-400 hover:border-amber-400 hover:bg-transparent" type='submit'>
                        {
                            !isSearch ? <BiSearch /> : <ImCancelCircle />
                        }
                    </button>
                </form>
            </div>
        </div>
    )
}
