import PropTypes from 'prop-types';
import React from 'react';
import ZIndex from '@app/utils/ZIndex';
import chevronDown from '@app/assets/ChevronDown.svg';
import { Colors, StyleSheet, Themes } from '@app/utils/StyleSheet';

export default function ChevronButton({ onClick, containerStyles }) {
  return (
    <div css={[styles.chevronContainer, containerStyles]}>
      <button
        css={styles.chevronButton}
        onClick={onClick}
      >
        <img
          alt={'chevron-down'}
          css={styles.chevron}
          src={chevronDown}
        />
      </button>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: 1200,
    minHeight: '100vh',
    padding: '0 200px',
    ...Themes.content(),
    color: Colors.antiFlashWhite(),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chevron: {
    width: 50,
    height: 50,
  },
  chevronButton: {
    ...Themes.buttonDefaults(),
    position: 'relative',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    margin: 0,
    padding: 0,
    zIndex: ZIndex.values.chevron,
  },
});
ChevronButton.propTypes = {
  containerStyles: PropTypes.func,
  onClick: PropTypes.func.isRequired,
};
