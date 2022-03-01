/* eslint-disable no-restricted-globals */
import React from "react";
import { render, screen, within } from "@testing-library/react";
import App from "../App";
import { server, rest } from "../mocks/server";
import * as constantURLS from "../constants/constants";
import { peoplePageOneMockData } from "../mocks/data/people_page_one";
import {toFeet, toPounds} from '../utilities/helpers'

test("renders the character data", async () => {
  render(<App />); // mounts the whole app

  const characters = peoplePageOneMockData; // mock character data from swapi api for page one of people
  const characterCards = await screen.findAllByRole("article"); // changed character card parent tag from 'div' to 'article', findByRole looks for the aria role article

  expect(characterCards.length).toEqual(characters.results.length); // expect the right amount of character cards

  // loop over all the characterCards and check that the have all the props/data from the mock msw fetch handler
  for (let index = 0; index < characterCards.length; index++) {
    const card = characters.results[index];
    const characterCard = characterCards[index];
    const mass = toPounds(card.mass)
    const height = toFeet(card.height)
    const { birth_year, gender, name, starships } = card;

    // the props we need to check for each character card
    const props = Object.values({
      birth_year,
      height,
      gender,
      name,
      starships: starships.length,
      mass,
    });
    

    // check that each character card has the props
    for await (let prop of Object.values(props)) {
      const el = await within(characterCard).findByText(prop);
      expect(el).toBeInTheDocument();
    }
  }
});


