import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from './App';
import PersonList from './PersonList';

describe ("App", () => {
  let appWrapper;
  beforeAll( () => {
    appWrapper = shallow(<App/>)
  })

  it ("render a person list", () => {
    const personList = appWrapper.find(PersonList);
    expect(personList).toHaveLength(1);
  })

  it ("has state", () => {
    const appState = appWrapper.state();

    expect(appState).not.toBeNull();
  })

  it ("has a people property on state", () => {
    const appState = appWrapper.state();
    expect(appState.people).toBeDefined()
  })

  it ("ensure people is passed", () => {
    const personList = appWrapper.find(PersonList);
    expect(personList.props().people).toEqual(appWrapper.state().people)
  })
});
