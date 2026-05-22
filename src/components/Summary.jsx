function Summary({ transactions }) {
	const income = transactions
		.filter((t) => t.type === "income")
		.reduce((sum, t) => sum + t.amount, 0);

	const expense = transactions
		.filter((t) => t.type === "expense")
		.reduce((sum, t) => sum + t.amount, 0);

	const balance = income - expense;

	return (
		<div className="grid grid-cols-3 gap-6 mb-8">
			<div className="bg-white rounded-2xl shadow-sm p-6">
				<p className="text-sm text-gray-400 mb-1">Total Balance</p>
				<p className="text-3xl font-bold text-gray-800">${balance}</p>
			</div>
			<div className="bg-white rounded-2xl shadow-sm p-6">
				<p className="text-sm text-gray-400 mb-1">Income</p>
				<p className="text-3xl font-bold text-teal-500">+${income}</p>
			</div>
			<div className="bg-white rounded-2xl shadow-sm p-6">
				<p className="text-sm text-gray-400 mb-1">Expenses</p>
				<p className="text-3xl font-bold text-red-400">-${expense}</p>
			</div>
		</div>
	);
}

export default Summary;
