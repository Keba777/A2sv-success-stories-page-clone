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
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Stories</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        stories.map((story) => <StoryCard key={story.id} story={story} />)
      )}
    </div>
  );
};

export default SuccessStories;
