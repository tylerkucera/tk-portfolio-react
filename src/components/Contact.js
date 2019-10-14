import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyleSheet } from '@app/utils/StyleSheet';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  const openLink = (link) => {
    window.open(link, '_blank');
  };

  return (
    <>
      <p>
        If you would like to get in contact with me, my LinkedIn profile and GitHub profile are linked below.
      </p>
      <div css={styles.container}>
        <FontAwesomeIcon
          css={styles.icon}
          icon={faGithubSquare}
          onClick={() => openLink('https://github.com/tylerkucera')}
        />
        <FontAwesomeIcon
          css={styles.icon}
          icon={faLinkedin}
          onClick={() => openLink('https://www.linkedin.com/in/tyler-kucera')}
        />
      </div>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  icon: {
    fontSize: 40,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
