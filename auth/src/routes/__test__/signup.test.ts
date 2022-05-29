import request from "supertest";
import { app } from "../../app";

it("return a 201 on successful signup", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "a@a.com",
      password: "password",
    })
    .expect(201);
});
it("return a 400 with an invalid email", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "aeee",
      password: "password",
    })
    .expect(400);
});
it("return a 400 with an invalid password", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "aeee",
      password: "a",
    })
    .expect(400);
});
it("return a 400 with missing email & password", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({ email: "a@a.com" })
    .expect(400);
  await request(app)
    .post("/api/users/signup")
    .send({ password: "12345" })
    .expect(400);
});

it("disallows duplicate emails", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "a@a.com",
      password: "password",
    })
    .expect(201);

  await request(app)
    .post("/api/users/signup")
    .send({
      email: "a@a.com",
      password: "password",
    })
    .expect(400);
});

it("sets header to set cookie on successful signup", async () => {
  const response = await request(app)
    .post("/api/users/signup")
    .send({
      email: "a@a.com",
      password: "password",
    })
    .expect(201);

  expect(response.get("Set-Cookie")).toBeDefined();
});
