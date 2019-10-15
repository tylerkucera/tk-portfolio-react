import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import Responsive from '../utils/Responsive';
import ThemeContext from '@app/contexts/ThemeContext';
import { Colors, StyleSheet } from '@app/utils/StyleSheet';

const techTitles = [
  'React',
  'React Native',
  'Ruby on Rails',
  'Jest',
  'Storybook',
  'RSpec',
  'Git',
  'Webpack',
  'SQL',
  'Node.js',
  'Yarn',
  'npm',
  'JIRA',
  'IIS',
  'Bash',
  'Unix',
  'Java',
  'Python',
  'C++',
  'C#',
  'Scheme',
  'ColdFusion',
  'PHP',
  'Vue/Vuex',
  '.NET Core 2.0',
  'Express',
  'Angular',
  'MongoDB',
  'Bootstrap',
];

export default function Technologies() {
  return (
    <div css={styles.container}>
      {techTitles.map((title) => <TechSection key={title}>{title}</TechSection>)}
    </div>
  );
}

function TechSection({ children }) {
  const { backgroundColor } = useContext(ThemeContext);

  const dynamicStyles = StyleSheet.create({
    techSection: {
      ':hover': {
        color: backgroundColor,
        borderColor: backgroundColor,
      },
    },
  });

  return <div css={[styles.techSection, dynamicStyles.techSection]}>{children}</div>;
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  techSection: {
    border: `3px solid ${Colors.antiFlashWhite()}`,
    padding: 5,
    display: 'flex',
    width: 100,
    height: 75,
    ...Responsive.sm({
      width: 135,
      height: 90,
    }),
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
    cursor: 'default',
    ':hover': {
      backgroundColor: Colors.antiFlashWhite(),
      transition: 'background 200ms',
    },
  },
});

TechSection.propTypes = {
  children: PropTypes.node.isRequired,
};
