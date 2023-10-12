import { useState, useEffect } from "react";
import axios from "axios";

const useStories = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await axios.get("../data/mockData.json");
        setStories(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching stories:", error);
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  return { stories, loading };
};

export default useStories;
