import React from "react";
import { render  , act} from "@testing-library/react";
import { fetchShow as mockFetchEpisodes } from "./api/fetchShow";

import App from "./App";
import { data } from "./mockTestData";


jest.mock("./api/fetchShow");

test("renders the app ", async () => {
  jest.useFakeTimers();
  
  // code that causes React state updates should be wrapped into act(...)
  // because react divides its work into chucks , 
  // first it renders with what it have 
  // second it renders the update data 
  // so to test something that get updated we should wrapped in the act api 
    act(() => {
   mockFetchEpisodes.mockResolvedValueOnce(data);
  });
  act(( ) => {
    jest.runAllTimers();
  })
  await render(<App />);
});
