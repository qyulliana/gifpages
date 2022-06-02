import React from 'react';
import './gifgriditem.css';
import 'animate.css';

const GifGridItem = ( {id, title, url} ) => {
console.log({id, title, url})

 return(
    <div className={'card animate__animated animate__zoomIn'}>

    <img height={'400px'} width={'400px'} src={url} alt={title}/>
    <p className={'paragraph-card'}>{title}</p>
    </div>

)


}

export default GifGridItem