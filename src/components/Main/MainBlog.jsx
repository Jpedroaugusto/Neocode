import { Description } from '../Dialog/Description';
import { SectionContact } from '../Sections/SectionContact/SectionContact';
import { SectionHome } from '../Sections/SectionHome/SectionHome';

export function MainBlog() {
    return (
        <main>
            <SectionHome background="blog"/>
            <Description 
                bg='#E5E7EA'
                colorh1="#120736"
                colorh2="#977CED"
                colorText="#24292E"
                
                title="O que é a NeoCode" 
                subtitle="sobre" 
                p="Duis suscipit nunc non eros tempus, eget tincidunt erat varius. Pellentesque nec eros efficitur, pretium nunc et, tempus mi. Suspendisse pharetra mi eu ipsum elementum."
            />
            <SectionContact/>
        </main>
    );
}