
const request = require("supertest"); // calling it "request" is a common practice

const server = require("./server.js"); // this is our first red, file doesn't exist yet

describe("server.js", () => {
  describe("index route", () => {
    it("should return an OK status code from the index route", async () => {
      const expectedStatusCode = 200;
      const response = await request(server).get("/api/users");
      expect(response.status).toEqual(expectedStatusCode);
    });

    it("should return 404 for bad url", async () => {
      const expectedStatusCode = 404;
      const response = await request(server).get("/api/user");
      expect(response.status).toEqual(expectedStatusCode);
    });
  });
});
