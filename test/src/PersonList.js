import React from "react"

export default({people = []}) => {
  return(
    <ul>
      {people.map((person, i) => <li key={i}>{person.firstName} {person.lastName}</li>)}
    </ul>
  )
}
