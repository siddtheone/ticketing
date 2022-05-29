import { Ticket } from "../ticket";

it("implements optimistic concurrency control", async () => {
  // Create an instance of a ticket
  const ticket = Ticket.build({
    title: "asdf",
    price: 5,
    userId: "123",
  });

  // Save the ticket to the db
  await ticket.save();

  // fetch the ticket twice
  const firstInstance = await Ticket.findById(ticket.id);
  const secondInstance = await Ticket.findById(ticket.id);

  console.log(firstInstance!.version, secondInstance!.version);

  // make changes to both the instances
  firstInstance!.set({ price: 10 });
  secondInstance!.set({ price: 15 });

  // save the first fetched ticket
  await firstInstance!.save();
  console.log(firstInstance!.version, secondInstance!.version);

  // save the second fetched ticket and expect an error;
  try {
    await secondInstance!.save();
  } catch (err) {
    return;
  }
  throw new Error("Should not reach this point");
});

it("increments version number on save", async () => {
  const ticket = Ticket.build({
    title: "asdf",
    price: 20,
    userId: "1233",
  });

  await ticket.save();
  expect(ticket.version).toEqual(0);
  await ticket.save();
  expect(ticket.version).toEqual(1);
  await ticket.save();
  expect(ticket.version).toEqual(2);
});
