import { useState } from "react";
import { BsHeartFill, BsHeart } from "react-icons/bs";

const Like = () => {
  const [status, setStatus] = useState(false);
  const handleClick = () => {
    setStatus(!status);
  };

  return (
    <span onClick={handleClick}>
      {status ? (
        <BsHeartFill color="#E1306C" className="w-6 h-6" />
      ) : (
        <BsHeart className="w-6 h-6" color="#E1306C" />
      )}
    </span>
  );
};

export default Like;
