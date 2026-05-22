import { useForm } from "react-hook-form";
import categories from "../data/categories";

function TransactionForm({ onAdd }) {
	const { register, handleSubmit, reset, watch } = useForm();
	const type = watch("type", "income");

	function onSubmit(data) {
		onAdd({ ...data, amount: parseFloat(data.amount) });
		reset();
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
			<input
				{...register("description", { required: true })}
				placeholder="Description"
				className="bg-white/10 text-white placeholder-white/30 rounded-lg px-3 py-1.5 outline-none w-full text-sm"
			/>
			<input
				{...register("amount", { required: true })}
				type="number"
				placeholder="Amount"
				className="bg-white/10 text-white placeholder-white/30 rounded-lg px-3 py-1.5 outline-none w-full text-sm"
			/>
			<select
				{...register("type")}
				className="bg-white/10 text-white rounded-lg px-3 py-1.5 outline-none w-full text-sm"
			>
				<option value="income" className="text-gray-800">
					Income
				</option>
				<option value="expense" className="text-gray-800">
					Expense
				</option>
			</select>
			<select
				{...register("category")}
				className="bg-white/10 text-white rounded-lg px-3 py-1.5 outline-none w-full text-sm"
			>
				{categories[type].map((cat) => (
					<option key={cat} value={cat} className="text-gray-800">
						{cat}
					</option>
				))}
			</select>
			<input
				{...register("date", { required: true })}
				type="date"
				className="bg-white/10 text-white rounded-lg px-3 py-1.5 outline-none w-full text-sm"
			/>
			<button
				type="submit"
				className="bg-teal-500 text-white py-1.5 rounded-lg font-semibold w-full text-sm hover:bg-teal-400 transition mt-1"
			>
				Add Transaction
			</button>
		</form>
	);
}

export default TransactionForm;
