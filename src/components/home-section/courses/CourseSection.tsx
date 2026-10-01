import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { CategoryTabsCards } from "./CategoryTabsCards";


export function CourseSection() {
  return (
    <section id="courses" className="py-18">
      <Container>
        <Heading
          title={
            <>
              Discover Your Passion, <br className="max-sm:hidden" />
              Build Your Skills
            </>
          }
          description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
        />
        <CategoryTabsCards/>
      </Container>
    </section>
  );
}
