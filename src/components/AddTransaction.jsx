import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const [form, setForm] = useState({ text: "", amount: "" });
  const { addTransaction } = useContext(GlobalContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.text || form.amount === "") return;

    const newTransaction = {
      id: Date.now(),
      text: form.text,
      amount: +form.amount,
    };

    addTransaction(newTransaction);
    setForm({ text: "", amount: "" });
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            name="text"
            value={form.text}
            onChange={handleChange}
            placeholder="Enter text..."
            autoComplete="off"
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            placeholder="Enter amount..."
            autoComplete="off"
          />
        </div>
        <button className="btn" type="submit">
          Add transaction
        </button>
      </form>
    </>
  );
};
