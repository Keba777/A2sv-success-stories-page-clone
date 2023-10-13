import { BsHeartFill } from "react-icons/bs";

const GiftButton = () => {
  return (
    <div className="fixed top-1/2 left-0 transform -translate-y-1/2">
      <button className="flex w-40 bg-blue-500 text-white hover:bg-blue-600  py-3 px-6 rounded-md transform -rotate-90 absolute -left-14 border-black border-2">
        <BsHeartFill className="pr-2 animate-pulse w-6 h-6" /> Make Gift
      </button>
    </div>
  );
};

export default GiftButton;
