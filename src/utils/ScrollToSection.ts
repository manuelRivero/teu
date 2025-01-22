import { scroller } from 'react-scroll';

export const scrollToSection = (sectionId: string) => {
  scroller.scrollTo(sectionId, {
    smooth: true,
    duration: 500,
    offset: -70,
  });
};
