function TransactionCard({ t, onDelete }) {
	return (
		<tr key={t.id} className="border-b last:border-0 text-sm">
			<td className="py-3 font-medium text-gray-800">{t.description}</td>
			<td className="py-3 text-gray-400">{t.category}</td>
			<td className="py-3 text-gray-400">{t.date}</td>
			<td className="py-3">
				<span
					className={`px-2 py-1 rounded-full text-xs font-medium ${t.type === "income" ? "bg-teal-100 text-teal-600" : "bg-red-100 text-red-500"}`}
				>
					{t.type}
				</span>
			</td>
			<td
				className={`py-3 text-right font-semibold ${t.type === "income" ? "text-teal-500" : "text-red-400"}`}
			>
				{t.type === "income" ? "+" : "-"}${t.amount}
			</td>
			<td className="py-3 text-right">
				<button
					onClick={() => onDelete(t.id)}
					className="text-gray-300 hover:text-red-400 transition"
				>
					✕
				</button>
			</td>
		</tr>
	);
}
export default TransactionCard;
