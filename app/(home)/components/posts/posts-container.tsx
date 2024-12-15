"use client";

import { useEffect, useState } from "react";

import Search from "@/app/(home)/components/search";
import PostsList from "@/app/(home)/components/posts/posts-list";

import { PostPayloadWithRelations } from "@/app/types";

interface PostProps {
  posts: PostPayloadWithRelations[];
}

const PostsContainer = ({ posts }: PostProps) => {
  const [filteredPosts, setFilteredPosts] = useState(posts);

  useEffect(() => {
    setFilteredPosts(posts);
  }, [posts]);

  const handleSearch = (text: string) => {
    const filtered = posts.filter((post) =>
      post.project_name.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredPosts(filtered);
  };

  return (
    <>
      <Search onSearch={handleSearch} />
      <PostsList posts={filteredPosts} />
    </>
  );
};

export default PostsContainer;
