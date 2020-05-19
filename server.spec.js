const request = require("supertest"); // calling it "request" is a common practice

const server = require("./server.js"); // this is our first red, file doesn't exist yet

const db = require("./data/userDb")

beforeEach(async () => {
  // this function executes and clears out the table before each test
  await db.db("users").truncate();
});


describe("server.js", () => {
  describe("get users", () => {
    it("should return an OK status code from the get users route", async () => {
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
  describe("create user", () => {
    it("should return an OK status code from the register user route", async () => {
      const expectedStatusCode = 201;
      const response = await request(server).post("/api/register").send({username:"imriven", password:"kitty"});
      expect(response.status).toEqual(expectedStatusCode);
    });

    it("should return an error if password is missing", async () => {
      const expectedStatusCode = 500;
      const response = await request(server)
        .post("/api/register")
        .send({ username: "imriven"});
      expect(response.status).toEqual(expectedStatusCode);
    });
  });
    describe("delete user", () => {
        it("should delete user", async () => {
          await db.add({ username: "imriven", password: "kitty" });
        const expectedStatusCode = 204;
        const response = await request(server)
          .delete("/api/users/1")
        expect(response.status).toEqual(expectedStatusCode);
        });
        
        it("should fail to delete user", async () => {
          const expectedStatusCode = 404;
          const response = await request(server).delete("/api/users/1");
          expect(response.status).toEqual(expectedStatusCode);
        });

     
    });
});
