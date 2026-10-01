import { Container } from "@/components/ui/Container";

import { Growth } from "./Growth";
import { ManageCourse } from "./ManageCourse";


const blobs = [
  "radial-gradient(circle 370px at 28.9% 7%, rgb(203 252 1 / 0.4), transparent)", // lime, top left
  "radial-gradient(circle 570px at 95.8% 7.5%, rgb(0 59 226 / 0.08), transparent)", // blue, top right
  "radial-gradient(circle 570px at 4.2% 51.4%, rgb(0 59 226 / 0.06), transparent)", // blue, left
  "radial-gradient(circle 336px at 3.4% 87.8%, rgb(203 252 1 / 0.4), transparent)", // lime, bottom left
  "radial-gradient(circle 570px at 89.6% 92.9%, rgb(0 59 226 / 0.2), transparent)", // blue, bottom right

].join(", ");

export function ProfessionalGrowth() {
  return (
    <div className="overflow-hidden bg-[#FAFAFA] py-20 xl:py-30" style={{ backgroundImage: blobs }}>
      <Container className="flex flex-col gap-18">
        <Growth />
       <ManageCourse/>
      </Container>
    </div>
  );
}
