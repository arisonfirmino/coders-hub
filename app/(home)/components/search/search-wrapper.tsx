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
      <div className="px-5 md:px-0">
        <Search onSearch={handleSearch} />
      </div>

      <div className="pb-5 pt-10">
        {posts.length > 0 ? (
          <PostsList posts={filteredPosts} />
        ) : (
          <p className="text-center text-sm text-gray-400">
            Ainda não há posts por aqui. Que tal ser o primeiro(a) a
            compartilhar algo?
          </p>
        )}
      </div>
    </>
  );
};

export default SearchWrapper;
