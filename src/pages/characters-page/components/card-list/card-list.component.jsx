import React from 'react';
import './card-list.styles.css'
import Card from '../card/card.component.jsx'

export const CardList = (props) => (
    <div className ='card-list'>
        {props.characters.map((character) => (
            <Card key={character.url[character.url.length-2]} character = {character} characters={props.characters}/>
          ))}
    </div>
)