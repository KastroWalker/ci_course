const app = require("./app");
const supertest = require("supertest");
const request = supertest(app);

describe("/ endpoint", () => {
  it("should return 200", async () => {
    const response = await request.get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello GH actions!");
  });
});

describe("/students endpoint", () => {
  it("should return 5 students", async () => {
    const response = await request.get("/students");
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(5);
  });
});

describe("/test endpoint", () => {
  it("should return a response", async () => {
    const response = await request.get("/test");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello world");
  });
});
