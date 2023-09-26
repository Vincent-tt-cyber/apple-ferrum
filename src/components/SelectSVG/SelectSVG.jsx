import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BiSolidShoppingBagAlt } from "react-icons/bi";

const SelectSVG = ({ id }) => {
  switch (id) {
    case "favourite":
      return <AiOutlineHeart size={25} />;
    case "favourite-true":
      return <AiFillHeart size={25} color="red" />;
    case "cart":
      return <BiSolidShoppingBagAlt size={25} />;

    default:
      return null;
  }
};

export default SelectSVG;
