import mongoose from "mongoose";
import request from "supertest";
import { app } from "../../app";

it("returns 404 if tickets is not found", async () => {
  const id = new mongoose.Types.ObjectId().toHexString();
  await request(app).get(`/api/tickets/${id}`).send().expect(404);
});
it("returns the ticket if the ticket is found", async () => {
  const testTicket = {
    title: "asfd",
    price: 10,
  };

  const response = await request(app)
    .post("/api/tickets")
    .set("Cookie", global.signin())
    .send(testTicket)
    .expect(201);

  const ticketResponse = await request(app)
    .get(`/api/tickets/${response.body.id}`)
    .send()
    .expect(200);

  expect(ticketResponse.body.title).toEqual(testTicket.title);
  expect(ticketResponse.body.price).toEqual(testTicket.price);
});
