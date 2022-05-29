export function Orders({ orders }) {
  return (
    <ul>
      {orders.map(({ id, ticket: { title }, status }) => (
        <li key={id}>{`${title} - ${status}`}</li>
      ))}
    </ul>
  );
}

Orders.getInitialProps = async (content, client) => {
  const { data } = await client.get("/api/orders");
  return { orders: data };
};

export default Orders;
