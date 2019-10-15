import ColorSwitcher from '@app/components/ColorSwitcher';
import Contact from '@app/components/Contact';
import ContentSection from '@app/components/ContentSection';
import Copyright from '@app/components/Copyright';
import Header from '@app/components/Header';
import React, { useRef, useState } from 'react';
import Technologies from '@app/components/Technologies';
import ThemeContext from '@app/contexts/ThemeContext';
import { Colors, StyleSheet } from '@app/utils/StyleSheet';

export const ItemStrings = {
  About: 'About',
  Experience: 'Experience',
  Technologies: 'Technologies',
  Contact: 'Contact',
};

export default function App() {
  const sectionRefs = {
    Top: useRef(),
    About: useRef(),
    Experience: useRef(),
    Technologies: useRef(),
    Contact: useRef(),
  };

  const scrollTo = (ref) => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const handleNavClick = (section) => {
    scrollTo(sectionRefs[section]);
  };

  const [backgroundColor, updateBackgroundColor] = useState(Colors.jet());

  const themeContextValue = {
    backgroundColor,
    updateBackgroundColor,
  };

  const dynamicStyles = StyleSheet.create({
    appContainer: {
      background: backgroundColor,
    },
    container: {
      background: backgroundColor,
    },
  });

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <div css={[styles.appContainer, dynamicStyles.appContainer]}>
        <Header
          onNameClick={() => scrollTo(sectionRefs.Top)}
          onNavButtonClick={(section) => handleNavClick(section)}
          sectionRefs={sectionRefs}
        />
        <div css={[styles.container, dynamicStyles.container]}>
          <ContentSection
            onClickChevron={() => scrollTo(sectionRefs.About)}
            refProp={sectionRefs.Top}
          />
          <ContentSection
            onClickChevron={() => scrollTo(sectionRefs.Experience)}
            refProp={sectionRefs.About}
          >
            <p>
            Hi, my name is Tyler Kucera and I’m a software engineer based out of Columbus, Ohio. Lately my focus has been in full stack web development, with an interest in both the visual design and technical implementation of web applications.
            </p>
          </ContentSection>
          <ContentSection
            onClickChevron={() => scrollTo(sectionRefs.Technologies)}
            refProp={sectionRefs.Experience}
          >
            <p>
            I have three years of professional experience with full stack web development, including work with React, React Native, Ruby on Rails, Vue/Vuex, .Net Core 2.0, C#, ColdFusion, and SQL. I also have about 8 months of professional experience developing MFC applications in C++.
            </p>
            <p>
              {'I developed a mock marketing website for a friend’s company using HTML, CSS, JavaScript, and a little PHP. You can check out a clone of the site '}
              <a
                href={'https://politicaldoorhangers.000webhostapp.com'}
                target={'_blank'}
              >
              here
              </a>
              {' and the source code on my '}
              <a
                href={'https://github.com/tylerkucera/politicaldoorhangers'}
                target={'_blank'}
              >
              GitHub
              </a>
              {' page.'}
            </p>
            <p>
              {'This portfolio site was writen in React, and you can take a look at the project on my '}
              <a
                href={'https://github.com/tylerkucera/tk-portfolio-react'}
                target={'_blank'}
              >
              GitHub
              </a>
              {' page as well.'}
            </p>
          </ContentSection>
          <ContentSection
            onClickChevron={() => scrollTo(sectionRefs.Contact)}
            refProp={sectionRefs.Technologies}
          >
            <p>
            These are some of the technlogies, languages, and frameworks that I have experience with:
            </p>
            <Technologies />
          </ContentSection>
          <ContentSection
            refProp={sectionRefs.Contact}
          >
            <Contact />
          </ContentSection>
          <Copyright />
          <ColorSwitcher />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    height: 'calc(100vh - 40px)',
    '& a': {
      color: Colors.antiFlashWhite(),
    },
    transition: 'background-color 200ms',
  },
  container: {
    overflow: 'auto',
    scrollBehavior: 'smooth',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    transition: 'background-color 200ms',
  },
});
