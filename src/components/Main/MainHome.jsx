import { SectionNeocode } from "../Sections/SectionNeocode/SectionNeocode";
import { SectionTeam } from "../Sections/SectionTeam/SectionTeam";
import { SectionServices } from "../Sections/SectionServices/SectionServices";
import { SectionContact } from "../Sections/SectionContact/SectionContact";
import { SectionProjects } from "../Sections/SectionProjects/SectionProjects";
import { SectionHome } from "../Sections/SectionHome/SectionHome";

export function MainHome() {
  return (
    <main>
      <SectionHome background="home" />
      <SectionNeocode />
      <SectionServices />
      <SectionProjects />
      <SectionContact />
    </main>
  );
}
