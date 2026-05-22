import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

function Chart({ transactions }) {
	const data = transactions.reduce((acc, t) => {
		// Get the month name from the date (e.g. "Jan", "Feb")
		const month = new Date(t.date).toLocaleDateString("en", { month: "short" });

		// Check if this month already exists in the array
		const existing = acc.find((item) => item.month === month);

		if (existing) {
			// Month exists - add amount to the existing sum
			if (t.type === "income") existing.income += t.amount;
			else existing.expense += t.amount;
		} else {
			// New month - create a new row in the array
			acc.push({
				month,
				income: t.type === "income" ? t.amount : 0,
				expense: t.type === "expense" ? t.amount : 0,
			});
		}

		return acc; // return the updated array for the next iteration
	}, []); // start with an empty array

	if (transactions.length === 0) return null;

	return (
		<div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
			<h3 className="text-lg font-bold text-gray-800 mb-4">
				Income vs Expenses
			</h3>
			<ResponsiveContainer width="100%" height={250}>
				<BarChart data={data}>
					<XAxis dataKey="month" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Bar dataKey="income" fill="#14b8a6" radius={[4, 4, 0, 0]} />
					<Bar dataKey="expense" fill="#f87171" radius={[4, 4, 0, 0]} />
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}
export default Chart;
