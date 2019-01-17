import React, { Component } from "react"
import EmployeeList from "./employee/EmployeeList"
import LocationList from "./location/LocationList"
import AnimalList from "./animals/AnimalList"
import "./Kennel.css"


class Kennel extends Component {

    /*
        Although you will eventually be pulling your objects
        from your json-server API, for this chapter, we're
        faking it and just creating those arrays in the component
        itself
    */
    employeesFromAPI = [
        { id: 1, name: "Jordan Rosas" },
        { id: 2, name: "Hunter Metts" },
        { id: 3, name: "Nick Hansen" },
        { id: 4, name: "Asia Carter" }
    ]

    // This will eventually get pulled from the API
    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]

    animalsFromAPI = [
        { id: 1, name: "Tiger", animalId:1},
        { id: 2, name: "Elephant", animalId:2},
        { id: 3, name: "Camel", animalId:3},
        { id: 4, name: "Narwal", animalId:4}
    ]
    ownersFromAPI = [
        { id: 1, name: "Ryan Tanay", animalId: 1},
        { id: 2, name: "Emma Beaton", animalId:4 },
        { id: 3, name: "Dani Adkins", animalId:2 },
        { id: 4, name: "Adam Oswalt", animalId:3 },
        { id: 5, name: "Fletcher Bangs", animalId:2 },
        { id: 6, name: "Angela Lee", animalId:1}
    ]

    state = {
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: this.animalsFromAPI,
        owners: this.ownersFromAPI
    }

    render() {
        return (
            <article className="kennel">
    {/* passing the state to the children */}
                <LocationList locations={this.state.locations} />
                <EmployeeList employees={this.state.employees} />
                <AnimalList animals={this.state.animals} owners={this.state.owners}/>
            </article>
        )
    }
}

export default Kennel