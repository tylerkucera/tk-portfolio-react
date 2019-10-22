import * as firebase from 'firebase/app';
import ColorSwitcher from '@app/components/ColorSwitcher';
import Contact from '@app/components/Contact';
import ContentSection from '@app/components/ContentSection';
import Copyright from '@app/components/Copyright';
import Header from '@app/components/Header';
import React, { useRef, useState } from 'react';
import Technologies from '@app/components/Technologies';
import ThemeContext from '@app/contexts/ThemeContext';
import { Colors, StyleSheet } from '@app/utils/StyleSheet';
import 'firebase/analytics';

export const ItemStrings = {
  About: 'About',
  Experience: 'Experience',
  Technologies: 'Technologies',
  Contact: 'Contact',
};

const firebaseConfig = {
  apiKey: 'AIzaSyCo06y1WM2nDfM4EeJ8ltzXBDEOpY76k2Q',
  authDomain: 'tkportfolio-99739.firebaseapp.com',
  databaseURL: 'https://tkportfolio-99739.firebaseio.com',
  projectId: 'tkportfolio-99739',
  storageBucket: 'tkportfolio-99739.appspot.com',
  messagingSenderId: '723010882063',
  appId: '1:723010882063:web:5fd9b246def1f5ed5fb17a',
  measurementId: 'G-60EYQH36XE',
};

firebase.initializeApp(firebaseConfig);

export default function App() {
  firebase.analytics().logEvent('app_viewed');

  const sectionRefs = {
    Top: {
      ref: useRef(),
      name: 'top',
    },
    About: {
      ref: useRef(),
      name: 'about',
    },
    Experience: {
      ref: useRef(),
      name: 'experience',
    },
    Technologies: {
      ref: useRef(),
      name: 'technologies',
    },
    Contact: {
      ref: useRef(),
      name: 'contact',
    },
  };

  const scrollTo = (ref) => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const handleNavClick = (sectionName) => {
    firebase.analytics().logEvent(`clicked_nav_${sectionRefs[sectionName].name}`);
    scrollTo(sectionRefs[sectionName].ref);
  };

  const handleChevronClick = (section) => {
    firebase.analytics().logEvent(`clicked_chevron_to_${section.name}`);
    scrollTo(section.ref);
  };

  const logClick = (target) => {
    firebase.analytics().logEvent(`clicked_${target}`);
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
          onNameClick={() => handleChevronClick(sectionRefs.Top)}
          onNavButtonClick={(sectionName) => handleNavClick(sectionName)}
          sectionRefs={sectionRefs}
        />
        <div css={[styles.container, dynamicStyles.container]}>
          <ContentSection
            onClickChevron={() => handleChevronClick(sectionRefs.About)}
            refProp={sectionRefs.Top.ref}
          />
          <ContentSection
            onClickChevron={() => handleChevronClick(sectionRefs.Experience)}
            refProp={sectionRefs.About.ref}
          >
            <p>
            Hi, my name is Tyler Kucera and I’m a software engineer based out of Columbus, Ohio. Lately my focus has been in full stack web development, with an interest in both the visual design and technical implementation of web applications.
            </p>
          </ContentSection>
          <ContentSection
            onClickChevron={() => handleChevronClick(sectionRefs.Technologies)}
            refProp={sectionRefs.Experience.ref}
          >
            <p>
            I have three years of professional experience with full stack web development, including work with React, React Native, Ruby on Rails, Vue/Vuex, .Net Core 2.0, C#, ColdFusion, and SQL. I also have about 8 months of professional experience developing MFC applications in C++.
            </p>
            <p>
              {'I developed a mock marketing website for a friend’s company using HTML, CSS, JavaScript, and a little PHP. You can check out a clone of the site '}
              <a
                href={'https://politicaldoorhangers.000webhostapp.com'}
                onClick={() => logClick('political_doorhangers_clone')}
                target={'_blank'}
              >
              here
              </a>
              {' and the source code on my '}
              <a
                href={'https://github.com/tylerkucera/politicaldoorhangers'}
                onClick={() => logClick('political_doorhangers_github')}
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
                onClick={() => logClick('tk_portfolio_react_github')}
                target={'_blank'}
              >
              GitHub
              </a>
              {' page as well.'}
            </p>
          </ContentSection>
          <ContentSection
            onClickChevron={() => handleChevronClick(sectionRefs.Contact)}
            refProp={sectionRefs.Technologies.ref}
          >
            <p>
            These are some of the technlogies, languages, and frameworks that I have experience with:
            </p>
            <Technologies />
          </ContentSection>
          <ContentSection
            refProp={sectionRefs.Contact.ref}
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
