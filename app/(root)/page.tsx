import Image from "next/image";
import { SearchForm } from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: String }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),

      views: 55,
      author: { _id: 1, name: "Hemanth" },
      id: 1,
      description: "This is a decription",
      image: "https://images7.alphacoders.com/334/334685.jpg",
      category: "Robots",
      title: "We Robots",
    },
  ];
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup,
          <br />
          Network with Innovators
        </h1>

        <p className="sub-heading !max-w-3xl">
          Share Your Ideas and Stand Out Online
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard, index: number) => (
              <StartupCard key={post?.id} post={post} />
            ))
          ) : (
            <p className="no-results">NO Startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
