import React, { Component } from 'react'

export default class AnimalList extends Component{
  render(){
    return(
      <article className="animalContainer">
      <h1>Animals</h1>
        {
          this.props.animals.map(animal =>
            <div key={animal.id}>
              {animal.name}
            </div>
          )
        }
      </article>
    )
  }
}