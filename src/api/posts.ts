import axios from "axios";
import { Post } from "../types/post.types";

const API_URL = "https://cloud.codesupply.co/endpoint/react/data.json";

export const fetchPosts = async (): Promise<Post[]> => {
  const response = await axios.get<Post[]>(API_URL);
  return response.data;
};
