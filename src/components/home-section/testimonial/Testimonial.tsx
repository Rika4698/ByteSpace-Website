import Image from "next/image";
import { Container } from "@/components/ui/Container";




export type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  quote: string;
};


const blobs = [
  "radial-gradient(circle 370px at 8.8% 91.5%, rgb(0 59 226 / 0.3), transparent)", // blue, bottom left
  "radial-gradient(circle 280px at 52.8% 30.3%, rgb(203 252 1 / 0.5), transparent)", // lime, top middle
  "radial-gradient(circle 370px at 98% 40.8%, rgb(203 252 1 / 0.4), transparent)", // lime, right
].join(", ");


export function Testimonial() {

    const testimonial: Testimonial[] = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/testimonial/pic-1.png",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/testimonial/pic-2.png",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/testimonial/pic-3.png",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

  return (
    <section className="bg-[#FAFAFA] pt-[74px] pb-[57px]" style={{ backgroundImage: blobs }}>
      <Container className="flex flex-col gap-18">
        <div className="flex flex-col items-center gap-6 text-center xl:flex-row xl:justify-between xl:gap-[43px] xl:text-left">
          <h2 className="max-w-[577px] text-heading-s tracking-[-0.01em] md:text-heading-m">
            Discover What Our Community Is Saying
          </h2>
          <p className="max-w-[580px] text-body-m text-neutral-700 md:text-body-l">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we
            do. Hear directly from those who have experienced the transformative journey of learning
            and creating on our platform. Explore testimonials that reflect the diverse perspectives
            of enthusiastic learners and accomplished creators.
          </p>
        </div>

       

        <ul className="flex flex-wrap items-start justify-center gap-10 xl:gap-[40px]">
          {testimonial.map((test) => (
            <li key={test.name} className="w-full md:w-[calc((100%-40px)/2)] xl:w-[calc((100%-81px)/3)]">
             
              <figure className="flex flex-col gap-6 rounded-3xl bg-white p-6">
             
                <Image
                  src={test.avatar}
                  alt={test.name}
                  width={80}
                  height={80}
                  className="size-20 rounded-full object-cover"
                />
                <figcaption>
                  <p className="font-heading text-heading-xs font-semibold tracking-[-0.01em]">
                    {test.name}
                  </p>
                  <p className="text-body-l text-primary-800">{test.role}</p>
                </figcaption>
                <blockquote className="text-body-l text-neutral-700">
                  <p>&quot;{test.quote}&quot;</p>
                </blockquote>
              </figure>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
