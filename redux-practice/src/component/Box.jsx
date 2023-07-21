import React from "react";
import { useSelector } from "react-redux";

export default function Box() {
  let count = useSelector((state) => state.count);
  return (
    <div>
      <p>This is Box Component: {count}</p>
      {/* props가 아닌 useSelector를 이용해서 count를 가져와서 사용하기만 하면 된다. */}
    </div>
  );
}
