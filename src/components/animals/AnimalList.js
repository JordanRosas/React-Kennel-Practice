import React, { Component } from 'react'

export default class AnimalList extends Component{



  render(){

    this.props.owners.forEach(owner => {
      
    });
    
    return(
      <article className="animalContainer">
      <h1>Animals</h1>
      {
          this.props.owners.map(owner =>
              <div key={owner.id}>
                  {owner.name}

                  {owner.animalId}
              </div>
            )
        }
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