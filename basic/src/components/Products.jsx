import React, { useEffect, useState } from "react";

export default function Products() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked((prev) => !prev);
    console.log(checked);
  };

  useEffect(() => {
    setLoading(true);
    setError(undefined);
    fetch(`data/${checked ? "sale_" : ""}products.json`)
      .then((res) => res.json())
      .then((data) => {
        // console.log("데이터를 받아옴");
        setProducts(data);
      })
      .catch(() => setError("에러가 발생했음!"))
      .finally(() => setLoading(false));
    return () => {
      // console.log("clean!!");
    };
  }, [checked]);
  //checked가 변할때마다 useEffect가 새로 랜더링 되어야 하므로 defendency array 에 checked를 넣어야한다.
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <>
      <input
        id="checkbox"
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">Show Only Hot Sale</label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
