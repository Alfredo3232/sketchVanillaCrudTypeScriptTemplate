const request = require("supertest");
// const app = require('../app');
const app = require("../app").default;


describe("Todos API", () => {
    beforeAll(async () => {
        await new Promise((resolve) => setTimeout(resolve, 3000));
    });

    it("should return an empty list of todos at the start", async () => {
        const res = await request(app).get("/todos");
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([]);
      });
    // ... more tests
});
