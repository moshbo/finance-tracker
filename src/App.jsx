import useTransactions from "./hooks/useTransactions";
import TransactionForm from "./components/TransactionForm";
import Summary from "./components/Summary";
import TransactionRow from "./components/TransactionRow";

function App() {
	const { transactions, addTransaction, deleteTransaction } = useTransactions();

	return (
		<div className="min-h-screen bg-gray-100 flex">
			{/* Sidebar */}
			<div className="w-64 bg-[#1a3a3a] text-white flex flex-col p-6 gap-8">
				<h1 className="text-2xl font-bold text-teal-400">💰 FinanceTracker</h1>
				<nav className="flex flex-col gap-2">
					<p className="text-teal-400 bg-white/10 px-4 py-2 rounded-lg font-medium">
						📊 Overview
					</p>
					<p className="text-white/50 px-4 py-2 rounded-lg hover:text-white cursor-pointer">
						💸 Expenses
					</p>
					<p className="text-white/50 px-4 py-2 rounded-lg hover:text-white cursor-pointer">
						📈 Income
					</p>
				</nav>
				<div className="mt-auto">
					<div className="bg-white/10 rounded-2xl p-4">
						<h2 className="text-sm font-semibold mb-1">Add Transaction</h2>
						<p className="text-white/50 text-xs mb-4">
							Track your income and expenses
						</p>
						<TransactionForm onAdd={addTransaction} />
					</div>
				</div>
			</div>

			{/* Main Content */}
			<div className="flex-1 p-8">
				<h2 className="text-2xl font-bold text-gray-800 mb-1">Welcome back!</h2>
				<p className="text-gray-400 mb-8">
					Here's an overview of your finances.
				</p>

				<Summary transactions={transactions} />

				{/* Transactions Table */}
				<div className="bg-white rounded-2xl shadow-sm p-6">
					<h3 className="text-lg font-bold text-gray-800 mb-4">
						Recent Transactions
					</h3>
					{transactions.length === 0 && (
						<p className="text-gray-400 text-center py-8">
							No transactions yet
						</p>
					)}
					<table className="w-full">
						<thead>
							<tr className="text-gray-400 text-sm border-b">
								<th className="text-left pb-3">Description</th>
								<th className="text-left pb-3">Category</th>
								<th className="text-left pb-3">Date</th>
								<th className="text-left pb-3">Type</th>
								<th className="text-right pb-3">Amount</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{transactions.map((t) => (
								<TransactionRow t={t} onDelete={deleteTransaction} />
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default App;
