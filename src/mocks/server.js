// src/mocks/server.js
import { setupServer } from "msw/node";
import { rest } from "msw";
import { handlers } from "./handlers";

// This configures a request mocking server with the given request handlers.
const server = setupServer(...handlers);

beforeAll(() => server.listen()); // start the msw server
afterEach(() => server.resetHandlers()); // request the handlers after each test
afterAll(() => server.close()); // shut down the servers

export { server, rest };
