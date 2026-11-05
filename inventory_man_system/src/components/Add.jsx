
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, updateProduct } from "../features/inventorySlice";

const Add = () => {
  const [input, setInput] = useState({
    name: "",
    qty: "",
    price: "",
    category: "",
  });

  const { editVal } = useSelector((state) => state.inventory);

  useEffect(() => {
    editVal ? setInput(editVal) : null;
  }, [editVal]);

  const dispatch = useDispatch();

  const handleChange = (field, e) => {
    setInput((prev) => {
      return {
        ...prev,
        [field]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.name || !input.qty || !input.price || !input.category) {
      return alert("All data required");
    }

    if (editVal !== null) {
      dispatch(
        updateProduct({
          id: editVal.id,
          ...input,
          qty: Number(input.qty),
          price: Number(input.price),
        }),
      );
    } else {
      dispatch(
        add({
          ...input,
          qty: Number(input.qty),
          price: Number(input.price),
        }),
      );
    }

    setInput({
      name: "",
      qty: "",
      price: "",
      category: "",
    });
  };
  console.log("input", input);
  return (
    <>
      <h1>inventory form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          value={input.name}
          onChange={(e) => handleChange("name", e)}
        />

        <br />
        <br />

        <label htmlFor="qty">Qty</label>
        <br />
        <input
          type="number"
          value={input.qty}
          onChange={(e) => handleChange("qty", e)}
        />

        <br />
        <br />

        <label htmlFor="price">Price</label>
        <br />
        <input
          type="number"
          value={input.price}
          onChange={(e) => handleChange("price", e)}
        />

        <br />
        <br />

        <label htmlFor="category">Category</label>
        <br />
        <input
          type="text"
          value={input.category}
          onChange={(e) => handleChange("category", e)}
        />

        <br />
        <br />

        <button type="submit">{editVal ? "Update" : "Add"}</button>

        <br />
        <br />
      </form>
    </>
  );
};

export default Add;
