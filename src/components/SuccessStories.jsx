/* eslint-disable react/prop-types */
import StoryCard from "./StoryCard";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useStories from "../hooks/useStories";
import { setStories } from "../redux/slices/storySlice";

const SuccessStories = () => {
  const dispatch = useDispatch();
  const { stories, loading } = useStories();

  useEffect(() => {
    if (stories.length > 0) {
      dispatch(setStories(stories));
    }
  }, [dispatch, stories]);

  return (
    <div className="container mx-auto p-8 ">
      <div className=" justify-center">
        <h2 className="text-5xl font-bold mb-4 flex justify-center">
          Impact Stories
        </h2>
        <h3 className="text-xl mb-6 flex justify-center">
          Behind every success is a story. Learn about the stories of A2SVians.
        </h3>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        stories.map((story) => <StoryCard key={story.id} story={story} />)
      )}
    </div>
  );
};

export default SuccessStories;
