import React from 'react'
import { Card } from '../card/card-component'
import './card-list-styles.css'

//   return <p key={monster.id}>{monster.name}</p>
export const CardList = props => {
  return (
    <div className="card-list">
      {props.monsters.map(monster => {
        //   Card Component
        return <Card key={monster.id} monster={monster} /> //Monster becomes the props in the Card component
      })}
    </div>
  )
}
