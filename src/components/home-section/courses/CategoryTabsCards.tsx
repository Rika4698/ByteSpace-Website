"use client";

import Link from "next/link";
import { useState } from "react";
import { FEATURED, courseCategoryRows} from "@/data-info/courses";


const styles =
  "rounded-full px-4 py-3 text-label-m font-medium whitespace-nowrap transition-colors " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600";



export function CategoryTabsCards() {
  const [activeCategory, setActiveCategory] = useState(FEATURED);



  return (
    <>
  <div
        role="group"
        aria-label="Filter courses by category"
        className="-mx-4 mt-10 flex gap-4 overflow-x-auto px-4 [scrollbar-width:none] sm:-mx-6 sm:px-6 md:mx-0 md:flex-wrap md:justify-center md:gap-y-5 md:overflow-visible md:px-0 xl:flex-col xl:items-center"
      >
        {courseCategoryRows.map((row, rowIndex) => (
          <ul key={row[0]} className="contents xl:flex xl:gap-4">
            {row.map((category) => {
              const isActive = category === activeCategory;
              return (
                <li key={category} className="shrink-0">

                  <button
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveCategory(category)}
                    className={`${styles} ${isActive ? "bg-secondary-400 text-neutral-950" : "bg-neutral-50 text-neutral-700 hover:bg-secondary-400 hover:text-neutral-950 hover:cursor-pointer "}`}
                  >
                    {category}
                  </button>
                </li>
              );
            })}

          
            {rowIndex === courseCategoryRows.length - 1 && (
              <li className="flex shrink-0 items-center">
                <Link href="/search" className="text-label-m font-medium whitespace-nowrap text-primary-600 hover:underline">
                  + More
                </Link>
              </li>
            )}
          </ul>
        ))}
      </div>

      


  
    </>
  );
}
