import React from "react";
import { render, wait } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { fetchShow as mockFetchEpisodes } from "../api/fetchShow";
import App from "../App";
import {data as fakeDate} from "../mockTestData"
 
jest.mock("../api/fetchShow");

test("select a season", // its a promise so it should a async
async () => {
  mockFetchEpisodes.mockResolvedValueOnce(fakeDate);

  const { getByText } = render(<App />);
  // its waiting for the promise to be resolved
  await wait(() => {
    getByText(/Select a season/i);
  });
  const dropDown = getByText(/select a season/i);
  userEvent.click(dropDown);
  const text = getByText(/season 1/i);
  expect(text).toBeInTheDocument();
  userEvent.click(text);
  getByText(/season 1, episode 1/i);
});
