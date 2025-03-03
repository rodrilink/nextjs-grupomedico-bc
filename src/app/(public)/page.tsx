import { Sections } from "@/components/organisms";
import {
  SectionOne,
  SectionTwo,
  SectionThree,
  SectionFour,
} from "@/components/molecules";

export default async function HomePage() {
  return (
    <Sections
      components={[SectionOne, SectionTwo, SectionThree, SectionFour]}
    />
  );
}
