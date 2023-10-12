/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { incrementLikes } from "../redux/slices/storySlice";

const PostCard = ({ story }) => {
  const dispatch = useDispatch();

  const handleLike = () => {
    dispatch(incrementLikes(story.id));
  };

  return (
    <div className="border p-4 mb-4">
      <h2 className="text-lg font-bold mb-2">{story.title}</h2>
      <p>{story.content}</p>
      <button className="mt-2 p-2 bg-blue-500 text-black" onClick={handleLike}>
        Like ({story.likes})
      </button>
    </div>
  );
};

export default PostCard;
