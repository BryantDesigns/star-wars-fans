import { rest } from "msw";
import { peoplePageOneMockData } from "./data/people_page_one";

import * as constantURLS from "../constants/constants";
import { filmsMockData } from "./data/films";

export const handlers = [
  rest.get(constantURLS.PEOPLE_PAGE_ONE, (req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json(peoplePageOneMockData)
    );
  }),
  rest.get(constantURLS.FILMS_URL, (req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json(filmsMockData)
    );
  }),
  // ensures that all get requests in test require a handler and avoid actual network requests
  rest.get("*", (req, res, ctx) => {
    const errorMsg = `Please add a request handler for ${req.url.toString()}`;
    console.error(errorMsg);
    return res(ctx.status(500), ctx.json({ error: errorMsg }));
  }),
];
