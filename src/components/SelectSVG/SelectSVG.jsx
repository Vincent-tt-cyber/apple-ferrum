import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BiSolidShoppingBagAlt } from "react-icons/bi";
import { IoPhonePortrait } from "react-icons/io5";
import { BiSolidShoppingBags } from "react-icons/bi";
import { BsSmartwatch } from "react-icons/bs";

const SelectSVG = ({ id }) => {

  switch (id) {
    case "favourite":
      return <AiOutlineHeart size={25} />;
    case "favourite-true":
      return <AiFillHeart size={25} color="red" />;
    case "cart":
      return <BiSolidShoppingBagAlt size={25} />;
    case "iPhone":
      return <IoPhonePortrait size={20} color="#3cf0fe" />;
    case "Bag":
      return <BiSolidShoppingBags size={20} color="#3cf0fe" />;
    case "Watch":
      return <BsSmartwatch size={20} color="#3cf0fe" />;

    default:
      return null;
  }
};

export default SelectSVG;
