import React from 'react'
import './card.styles.css'
import {AnimateSharedLayout, motion} from 'framer-motion'
import { useState } from 'react'

function Card({character, characters}) {
    const [open,setOpen] = useState(false);

    
    return <AnimateSharedLayout>
    {
    open?
        <motion.div className='card-container-expanded' onClick = {()=>setOpen(false)} layoutId= "expandable-card">
            <img alt="character" src= {`https://robohash.org/${character.url[character.url.length - 2]}?set=set2&size=180x180`} />
            <h2 >{character.name}</h2>
            <p>Gender: {character.gender}</p>
            <p>Brith year: {character.birth_year}, hair color: {character.hair_color}, 
            skin color: {character.skin_color}, eye color: {character.eye_color}</p>
        </motion.div>
    :

        <motion.div className='card-container' onClick = {()=>setOpen(true)} layoutId= "expandable-card">
            <img alt="character" src= {`https://robohash.org/${character.url[character.url.length - 2]}?set=set2&size=180x180`} />
            <h2 >{character.name}</h2>
            <p>{character.gender}</p>
        </motion.div>
    }
    </AnimateSharedLayout> 

}
export default Card;