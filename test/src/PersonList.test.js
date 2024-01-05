import React from "react";
import { shallow } from "enzyme";
import PersonList from "./PersonList"

describe ("", () => {
  it ("it renders a ul element", () => {
    const personListWrapper = shallow(<PersonList/>);
    const peopleListUls = personListWrapper.find("ul");
    expect(peopleListUls).toHaveLength(1);
  })

  it ("renders no li elements when no people exist", () => {
    const people = [];
    const personListWrapper = shallow(<PersonList people={people}/>);
    const peopleListItems = personListWrapper.find("li");

    expect(peopleListItems).toHaveLength(0);
  })

  it ("renders no li elements when no people exist", () => {
    const people = [{firstName:"Alan", lastName: "Turing"}];
    const personListWrapper = shallow(<PersonList people={people}/>);
    const peopleListItems = personListWrapper.find("li");

    expect(peopleListItems).toHaveLength(people.length);
  })

  it ("renders no li elements when no people exist", () => {
    const people = [{firstName:"Alan", lastName: "Turing"}];
    const personListWrapper = shallow(<PersonList people={people}/>);

    expect(personListWrapper.find("li").text()).toContain(people[0].firstName);
    expect(personListWrapper.find("li").text()).toContain(people[0].lastName);
  })
})
