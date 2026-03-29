import React from "react";
import { FaShoppingCart, FaHeart, FaUser, FaBox } from "react-icons/fa";

function IconGroup() {
  return (
    <div
      className="d-flex align-items-center"
      style={{ gap: "1.5rem", background: "transparent" }}
    >
      <FaBox size={20} title="Orders" className="cursor-pointer" />
      <FaHeart size={20} title="Saved" className="cursor-pointer" />
      <FaShoppingCart size={20} title="My Cart" className="cursor-pointer" />
      <FaUser size={20} title="Sign In" className="cursor-pointer" />
    </div>
  );
}

export default IconGroup;
