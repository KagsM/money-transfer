import React from "react";

const mockTransactions = [
  { id: 1, type: "Deposit", amount: 1200, date: "2025-10-12", status: "Completed" },
  { id: 2, type: "Withdrawal", amount: 800, date: "2025-10-10", status: "Pending" },
  { id: 3, type: "Transfer", amount: 500, date: "2025-10-08", status: "Completed" },
  { id: 4, type: "Deposit", amount: 2000, date: "2025-10-05", status: "Failed" },
];

export default function UserHistory() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-500 p-6">
      <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-6 text-white">
        <h1 className="text-3xl font-bold mb-6 text-center">Transaction History</h1>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead>
              <tr className="border-b border-white/20">
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Amount (KES)</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {mockTransactions.map((tx) => (
                <tr
                  key={tx.id}
                  className="border-b border-white/10 hover:bg-white/10 transition-colors"
                >
                  <td className="px-4 py-3">{tx.date}</td>
                  <td className="px-4 py-3">{tx.type}</td>
                  <td className="px-4 py-3 font-semibold">{tx.amount.toLocaleString()}</td>
                  <td
                    className={`px-4 py-3 ${
                      tx.status === "Completed"
                        ? "text-green-300"
                        : tx.status === "Pending"
                        ? "text-yellow-300"
                        : "text-red-400"
                    }`}
                  >
                    {tx.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-8">
          <button className="bg-white text-indigo-600 px-5 py-2 rounded-xl font-semibold shadow-md hover:bg-indigo-50 transition">
            Back to Wallet
          </button>
        </div>
      </div>
    </div>
  );
}