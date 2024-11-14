"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";

const SearchFormReset = () => {
  const router = useRouter();

  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;
    if (form) form.reset();
    router.push("/"); // Navigate to the homepage
  };

  return (
    <button type="button" onClick={reset} className="search-btn text-white">
      <X className="size-5" />
    </button>
  );
};

export default SearchFormReset;
