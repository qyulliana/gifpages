import React, {useState} from 'react'
import './gifgriditem.css';
import search from './icono/search-outline.svg'

const AddCategory = ({setCategories}) => {

const [inputValue, setInputValue]= useState()

const handleInputChange= (e) => {
setInputValue(e.target.value)
}

const handleSubmit= (e) => {
e.preventDefault();
if( inputValue.trim().length > 2){
setCategories( cats => [inputValue, ...cats]);
setInputValue('');

}


}

    return (
    <>
    <form onSubmit={handleSubmit}>
    <div className={'container-input'}>
    <input type='text'
           value={inputValue}
           onChange={handleInputChange}         />
    <img width={'30px'} src={search}/>
    </div>
    </form>

    </>

    )

}

export default AddCategory