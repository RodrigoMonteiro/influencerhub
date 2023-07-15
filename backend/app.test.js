const request = require("supertest");
const app = require("./server.js");

describe("Account Routes", () => {
  it("should get all accounts", async () => {
    const response = await request(app).get("/accounts");
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(0);
  });

  it("should get an account by email", async () => {
    const email = "user@example.com";
    const response = await request(app).get(`/accounts/${email}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(0);
  });

  it("should create a new account", async () => {
    const accountData = {
      email: "newuser@example.com",
      password: "password123",
    };
    const response = await request(app).post("/accounts").send(accountData);
    expect(response.status).toBe(500);
    expect(response.body.error).toBe("Failed to create an account");
  });
});
