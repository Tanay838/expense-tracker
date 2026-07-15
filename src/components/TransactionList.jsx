import "./TransactionList.css";

function TransactionList({
  transactions,
  onDelete,
  onEdit,
}) {
  if (!transactions) {
    return <p>No transactions available.</p>;
  }

  return (
    <section className="transaction-list">
      <h2>Transaction History</h2>

      {transactions.length === 0 ? (
        <div className="empty-message">
          <h3>No Transactions Found</h3>
          <p>Add your first transaction above.</p>
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.category}</td>
                <td>{item.type}</td>

                <td
                  className={
                    item.type === "Income"
                      ? "income"
                      : "expense"
                  }
                >
                  ₹{item.amount}
                </td>

                <td>{item.date}</td>

                <td className="action-buttons">
                  <button
                    type="button"
                    className="edit-btn"
                    onClick={() => onEdit(item)}
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    className="delete-btn"
                    onClick={() => onDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}

export default TransactionList;