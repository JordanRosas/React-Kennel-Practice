import React, { Component } from 'react'

export default class AnimalList extends Component{

  render(){
    return(
      <article className="animalContainer">
      <h1>Animals</h1>
        {
          this.props.animals.map(animal =>
            <p key={animal.id}>
              {animal.name}
            </p>
            
          )
        }
      </article>
    )
  }
}