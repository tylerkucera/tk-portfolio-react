import PropTypes from 'prop-types';
import React, { useCallback, useContext, useEffect, useRef } from 'react';
import ThemeContext from '@app/contexts/ThemeContext';
import { Colors, StyleSheet, Themes } from '@app/utils/StyleSheet';

export default function Name({ onClick }) {
  const buttonRef = useRef();

  const handleScroll = useCallback((event) => {
    const position = event.target.scrollingElement.scrollTop;
    const fontMass = Math.max(26, 72 - 0.14 * position) + 'px';
    const borderMass = Math.max(3, 8 - 0.01 * position) + 'px';

    buttonRef.current.style.fontSize = fontMass;
    buttonRef.current.style.lineHeight = fontMass;
    buttonRef.current.style.borderWidth = borderMass;
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const { backgroundColor } = useContext(ThemeContext);

  const dynamicStyles = StyleSheet.create({
    name: {
      backgroundColor,
      ':hover': {
        color: backgroundColor,
        borderColor: backgroundColor,
      },
    },
  });

  return (
    <button
      css={[styles.header, dynamicStyles.name]}
      onClick={onClick}
      ref={buttonRef}
    >
      Tyler Kucera
    </button>
  );
}

const styles = StyleSheet.create({
  header: {
    ...Themes.nameButton(),
    cursor: 'pointer',
    border: '8px solid',
    transition: 'background-color 200ms',
    ':hover': {
      backgroundColor: Colors.antiFlashWhite(),
      transition: 'background-color 200ms',
    },
  },
});

Name.propTypes = {
  onClick: PropTypes.func.isRequired,
};
