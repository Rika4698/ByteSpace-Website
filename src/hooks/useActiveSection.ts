import { useCallback, useEffect, useRef, useState } from "react";


export function useActiveSection(sectionIds: string[], initialId: string) {
  const [activeId, setActiveId] = useState(initialId);


  const isScrollingToLink = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrollingToLink.current) return;
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );

    for (const id of sectionIds) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }

   
    return () => observer.disconnect();
  }, [sectionIds]);


  const selectSection = useCallback((id: string) => {
    setActiveId(id);
    isScrollingToLink.current = true;

    const release = () => {
      isScrollingToLink.current = false;
      window.removeEventListener("scrollend", release);
      clearTimeout(fallback);
    };
    const fallback = setTimeout(release, 1000);
    window.addEventListener("scrollend", release);
  }, []);

  return { activeId, selectSection };
}