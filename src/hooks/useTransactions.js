import { useReducer, useEffect } from "react";

// Receives the current list and an action, returns a new list
function reducer(state, action) {
	switch (action.type) {
		case "ADD":
			// Returns a new list with the new transaction added at the end
			return [...state, action.payload];
		case "DELETE":
			// Returns a new list without the deleted transaction
			return state.filter((t) => t.id !== action.payload);
		default:
			// Nothing happened - return as is
			return state;
	}
}

function useTransactions() {
	// Step 1 - Read: load saved transactions from localStorage on mount
	const saved = JSON.parse(localStorage.getItem("transactions") || "[]");

	// Step 2 - Initialize state with the saved data
	const [transactions, dispatch] = useReducer(reducer, saved);

	// Step 3 - Save: whenever transactions changes, save the new list to localStorage
	useEffect(() => {
		localStorage.setItem("transactions", JSON.stringify(transactions));
	}, [transactions]);

	// Sends ADD action to reducer with transaction details + unique id
	function addTransaction(transaction) {
		dispatch({ type: "ADD", payload: { ...transaction, id: Date.now() } });
	}

	// Sends DELETE action to reducer with the transaction id
	// Reducer returns a new list without it → useEffect saves it to localStorage
	function deleteTransaction(id) {
		dispatch({ type: "DELETE", payload: id });
	}

	// Returns what App needs
	return { transactions, addTransaction, deleteTransaction };
}

export default useTransactions;
