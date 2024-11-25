"use client";

import { useEffect, useState } from "react";

import Search from "@/app/(home)/components/search/search";
import PostsList from "@/app/components/posts/posts-list";

import { SearchWrapperProps } from "@/app/types";

const SearchWrapper = ({ posts }: SearchWrapperProps) => {
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

      <div className="pb-5 pt-10">
        <PostsList posts={filteredPosts} />
      </div>
    </>
  );
};

export default SearchWrapper;
