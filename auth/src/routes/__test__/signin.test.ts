import request from "supertest";
import { app } from "../../app";

it("fails when a email that does not exist is supplied", async () => {
  return request(app)
    .post("/api/users/signin")
    .send({
      email: "a@a.com",
      password: "password",
    })
    .expect(400);
});
it("fails when an incorrect password supplied", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "a@a.com",
      password: "password",
    })
    .expect(201);

  return request(app)
    .post("/api/users/signin")
    .send({
      email: "a@a.com",
      password: "_____",
    })
    .expect(400);
});
it("responds with a cookied for valid credentials", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "a@a.com",
      password: "password",
    })
    .expect(201);

  const response = await request(app)
    .post("/api/users/signin")
    .send({
      email: "a@a.com",
      password: "password",
    })
    .expect(200);

  expect(response.get("Set-Cookie")).toBeDefined();
});
