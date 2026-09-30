import Form from "next/form";
import { SearchIcon } from "@/components/all-icons/SearchIcon";
import { Button } from "@/components/ui/Button";


export function SearchBar({ className = "" }: { className?: string }) {
  return (
    <Form action="/search" role="search" className={`flex w-full max-w-[581px] items-center gap-2 sm:gap-4 ${className}`}>
      <label className="flex h-13 min-w-0 flex-1 items-center gap-2 rounded-3xl bg-white px-4 sm:px-6 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-secondary-400">
        <SearchIcon className="shrink-0 text-neutral-400" />
    
        <span className="sr-only">Search courses</span>
        <input
          type="search"
          name="q"
          placeholder="Course, topic, creator"
          className="w-full min-w-0 bg-transparent text-body-l text-neutral-950 outline-none placeholder:text-neutral-400"
        />
      </label>
      <Button type="submit" className="shrink-0">
        Search
      </Button>
    </Form>
  );
}