import { Header, PostList } from "../components/shared";
import React, { useMemo, useState } from "react";
import { getFilteredPosts } from "../utils";
import { fetchPosts } from "../api/posts";
import useFetch from "../hooks/useFetch";
import messages from "../messages";

const Home: React.FC = () => {
  const { data: posts, isLoading, error } = useFetch(fetchPosts);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredPosts = useMemo(() => {
    return getFilteredPosts(posts || [], searchQuery);
  }, [searchQuery, posts]);

  if (isLoading) return <p>{messages.loading}</p>;

  if (error)
    return (
      <p>
        {messages.error} {error}
      </p>
    );

  return (
    <>
      <Header setSearchQuery={setSearchQuery} />
      <PostList posts={filteredPosts} />
    </>
  );
};

export default Home;
