import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setStories } from "./redux/slices/storySlice";
import useStories from "./hooks/useStories";
import PostCard from "./components/PostCard";

function App() {
  const dispatch = useDispatch();
  const { stories, loading } = useStories();

  useEffect(() => {
    if (stories.length > 0) {
      dispatch(setStories(stories));
    }
  }, [dispatch, stories]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Stories</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        stories.map((story) => <PostCard key={story.id} story={story} />)
      )}
    </div>
  );
}

export default App;
