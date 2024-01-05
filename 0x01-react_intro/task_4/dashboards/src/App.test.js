import React from "react";
import {shallow} from "enzyme"
import App from "./App"

describe("Test the App component", () => {

  let appWrapper;

  beforeAll(() => {
    appWrapper = shallow(<App/>);
  })
  it ("Test if App render", () => {
    expect(appWrapper).toBeDefined();
  })

  it ("Test if renders an a div with class App-header", () =>{
    expect(appWrapper.find("div.App-header")).toBeDefined();
  }) 

  it ("Test if renders an a div with class App-header", () =>{
    expect(appWrapper.find("div.App-body")).toBeDefined();
  }) 

  it ("Test if renders an a div with class App-header", () =>{
    expect(appWrapper.find("div.App-footer")).toBeDefined();
  }) 
})
