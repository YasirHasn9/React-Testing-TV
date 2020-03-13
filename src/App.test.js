import React from "react";
import * as rtl from "@testing-library/react";
import App from "./App";
import { fetchShow as mockFetchShow } from "./api/fetchShow";


// we need to pass a fake date to test
import { data as fakeDate } from "./mockTestData";
// this function enable us to spy on the behave of the function that we want to test
jest.mock("./api/fetchShow");
test("render app ", () => {
  /*
  React doesn't just 'synchronously' render the whole UI every time you poke at it.
  React divides its work into chunks 
  first it renders by its nature 
  second renders the state 
  third render the updated state  

  ----- ^ ----
  this is why we are gonna use act because it run
  - any state updates will be executed
  - any enqueued effects will be executed 
When testing, code that causes React state updates should be wrapped into act(...):
  */
   rtl.act(() => {
    // act works with dom
    mockFetchShow.mockResolvedValueOnce(fakeDate);
  })

  const {rerender} = rtl.render(<App />)
  rtl.act(( ) => {
    // so every time the app gets update it renders inside the act
    rerender((<App />))
  })
});
