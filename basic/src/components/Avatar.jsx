import React from "react";

export default function Avatar({ img, isNew }) {
  return (
    <div className="avartar">
      <img className="photo" src={img} alt="avatar" />
      {isNew && <p className="btnNew">NEW</p>}
    </div>
  );
}
