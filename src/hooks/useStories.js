import axios from "axios";
import { useEffect, useState } from "react";

const useStories = () => {
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("src/data/mockData.json")
      .then((response) => {
        setStories(response.data);
        console.log("Success");
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        console.log("Error");
        setIsLoading(false);
      });
  }, []);

  return { stories, isLoading, error };
};

export default useStories;
