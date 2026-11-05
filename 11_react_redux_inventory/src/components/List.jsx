import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, setEditValue } from "../features/inventorySlice";
import { useState } from "react";

const List = () => {
  const products = useSelector((state) => state.inventory.products);

  const dispatch = useDispatch();

  const [productQuery, setProductQuery] = useState({
    search: "",
    sort: "asc",
  });

  const handleChange = (field, e) => {
    setProductQuery((p) => {
      return {
        ...p,
        [field]: e.target.value,
      };
    });
  };

  const handleReset = () => {
    setProductQuery({
      search: "",
      sort: "asc",
    });
  };

  const filterList = products.filter((p) =>
    p.name.toLowerCase().includes(productQuery.search.toLowerCase()),
  );

  const sortedList = [...filterList].sort((a, b) => {
    if (productQuery.sort === "asc") {
      return a.id - b.id;
    }

    if (productQuery.sort === "desc") {
      return b.id - a.id;
    }

    if (productQuery.sort === "priceAscending") {
      return Number(a.price) - Number(b.price);
    }
    if (productQuery.sort === "priceDescending") {
      return Number(b.price) - Number(a.price);
    }
    if (productQuery.sort === "QtyAsc") {
      return Number(a.qty) - Number(b.qty);
    }
    if (productQuery.sort === "QtyDesc") {
      return Number(b.qty) - Number(a.qty);
    }
  }, 0);

  return (
    <>
      <input
        type="text"
        value={productQuery.search}
        placeholder="Enter product name"
        onChange={(e) => handleChange("search", e)}
      />

      <select
        value={productQuery.sort}
        onChange={(e) => handleChange("sort", e)}
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
        <option value="priceAscending">Price Ascending</option>
        <option value="priceDescending">Price Descending</option>
        <option value="QtyAsc">Quantity Ascending</option>
        <option value="QtyDesc">Quantity Descending</option>
      </select>

      <br />
      <br />

      <button onClick={handleReset}>reset</button>

      {sortedList.length === 0 ? (
        <h3>Data Not Found</h3>
      ) : (
        <table border={2}>
          <thead>
            <tr>
              <th>sr</th>
              <th>name</th>
              <th>qty</th>
              <th>price</th>
              <th>category</th>
              <th colSpan={2}>action</th>
            </tr>
          </thead>
          <tbody>
            {sortedList.map((l, index) => {
              return (
                <tr key={l.id}>
                  <td>{index + 1}</td>
                  <td>{l.name}</td>
                  <td>{l.qty}</td>
                  <td>{l.price}</td>
                  <td>{l.category}</td>
                  <td>
                    <button onClick={() => dispatch(setEditValue(l.id))}>
                      Edit
                    </button>
                  </td>
                  <td>
                    <button onClick={() => dispatch(deleteProduct(l.id))}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};

export default List;
