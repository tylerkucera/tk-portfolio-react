import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import Responsive from '@app/utils/Responsive';
import { Colors, StyleSheet, Themes } from '@app/utils/StyleSheet';

export const ItemStrings = {
  About: 'About',
  Experience: 'Experience',
  Technologies: 'Technologies',
  Contact: 'Contact',
};

export default function NavMenu({ onClick, sectionRefs }) {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = useCallback((event) => {
    setScrollPosition(event.target.scrollingElement.scrollTop);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {

  }, [scrollPosition]);

  const menuPositionX = Math.min(0, 0.47 * scrollPosition - 210) + 'px';

  const menuStyles = StyleSheet.create({
    menu: {
      left: menuPositionX,
    },
  });

  const getItemStyles = (item) => {
    itemIsActive(item);
    return [styles.menuItem, itemIsActive(item) ? styles.menuItemHovered : null];
  };

  const itemIsActive = (item) => {
    const ref = sectionRefs[item].current;

    if (ref) {
      return scrollPosition >= ref.offsetTop - 50 &&
        scrollPosition < ref.offsetTop - 50 + ref.scrollHeight;
    }

    return false;
  };

  return (
    <ul css={[styles.navContainer, menuStyles.menu]}>
      <li css={getItemStyles(ItemStrings.About)}>
        <button onClick={() => onClick(ItemStrings.About)}>
          {ItemStrings.About}
        </button>
      </li>
      <li css={getItemStyles(ItemStrings.Experience)}>
        <button onClick={() => onClick(ItemStrings.Experience)}>
          {ItemStrings.Experience}
        </button>
      </li>
      <li css={getItemStyles(ItemStrings.Technologies)}>
        <button onClick={() => onClick(ItemStrings.Technologies)}>
          {ItemStrings.Technologies}
        </button>
      </li>
      <li css={getItemStyles(ItemStrings.Contact)}>
        <button onClick={() => onClick(ItemStrings.Contact)}>
          {ItemStrings.Contact}
        </button>
      </li>
    </ul>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    listStyle: 'none',
    position: 'relative',
    border: `3px solid ${Colors.antiFlashWhite()}`,
    width: 'fit-content',
    left: -210,
    background: Colors.jet(),
    padding: 5,
    ...Responsive.sm({
      padding: 10,
    }),
  },
  menuItem: {
    padding: '5px 0',
    '& button': {
      ...Themes.navItem(),
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      '&::after': {
        content: '""',
        display: 'block',
        width: 0,
        height: '3px',
        background: Colors.antiFlashWhite(),
        transition: 'width 200ms',
      },
      '&.active::after, &:hover::after': {
        width: '100%',
      },
    },
  },
  menuItemHovered: {
    '& button': {
      '&::after': {
        width: '100%',
      },
    },
  },
});

NavMenu.propTypes = {
  onClick: PropTypes.func.isRequired,
  sectionRefs: PropTypes.object.isRequired,
};
