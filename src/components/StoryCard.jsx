/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { incrementLikes, decrementLikes } from "../redux/slices/storySlice";
import Like from "./Like";

const StoryCard = ({ story }) => {
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(story.likes);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
      dispatch(decrementLikes(story.id));
    } else {
      setLikes(likes + 1);
      dispatch(incrementLikes(story.id));
    }
    setLiked(!liked);
  };

  const backgroundStyle = {
    backgroundImage: `url(${story.image})`,
  };

  return (
    <div className="border rounded-md px-10 py-6 mb-10 bg-white shadow-md shadow-gray-400 grid grid-cols-5 gap-7 ">
      <div
        className="col-span-2 relative bg-cover bg-center h-4/5 rounded-xl mt-16"
        style={backgroundStyle}
      >
        <div className="absolute inset-0 flex flex-col justify-end text-white p-4">
          <h2 className="text-lg font-bold mb-2">{story.name} -</h2>
          <p>{story.title}</p>
          <p>
            {story.company} - {story.location}
          </p>
        </div>
      </div>
      <div className=" col-span-3 mt-4">
        <div>
          <h3 className="text-lg font-bold mb-2">{story.experience.title}</h3>
          <p className="text-sm font-sans italic text-gray-700">
            {story.experience.content}
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">
            {story.currentStatus.title}
          </h3>
          <p className="text-sm font-sans italic text-gray-700">
            {story.currentStatus.content}
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">{story.howChanged.title}</h3>
          <p className="text-sm font-sans italic text-gray-700">
            {story.howChanged.content}
          </p>
        </div>
        <div className="mt-4 flex  " onClick={handleLike}>
          <Like />
          <p className="pl-1 text-red-700 text-lg ">{likes}</p>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
