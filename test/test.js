import React from "react";
import { ReactDOM } from "react";
import { act } from "react-dom/test-utils";
import { expect } from "chai";
var assert = require("assert");
// var App = require('../src/App.js')

let rootContainer;

beforeEach(() => {
    rootContainer = document.createElement("div");
    document.body.appendChild(rootContainer);
  });
  
  afterEach(() => {
    document.body.removeChild(rootContainer);
    rootContainer = null;
  });
describe('App', () => {
    it("Renders the Jammming title", () => {
        act(() => {
            ReactDOM.render(<App />, rootContainer)
        });
        const h1 = rootContainer.querySelector("h1");
        expect(h1.textContent).to.equal("Jammming");
    })
})