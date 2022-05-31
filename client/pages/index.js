import Link from "next/link";

export default function Index({ currentUser, tickets }) {
  const ticketList = tickets.map(({ id, title, price }) => {
    return (
      <tr key={id}>
        <td>{title}</td>
        <td>{price}</td>
        <td>
          <Link href="tickets/[ticketId]" as={`/tickets/${id}`}>
            <a>View</a>
          </Link>
        </td>
      </tr>
    );
  });
  return (
    <div>
      <h2>Tickets</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>{ticketList}</tbody>
      </table>
    </div>
  );
}

Index.getInitialProps = async (context, client, currentUser) => {
  const { data } = await client.get("/api/tickets");

  return { tickets: data };
};
