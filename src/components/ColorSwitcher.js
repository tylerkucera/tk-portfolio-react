import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Colors, StyleSheet } from '@app/utils/StyleSheet';

export const colors = [
  Colors.jet(),
  Colors.hookersGreen(),
  Colors.japaneseIndigo(),
  Colors.blueSapphite(),
];

export default function ColorSwitcher() {
  const [currentColor, setCurrentColor] = useState(Colors.jet());

  return (
    <div css={styles.container}>
      {colors.map((color) => (
        <ColorCircle
          color={color}
          isSelected={color === currentColor}
          key={color}
          onClick={() => setCurrentColor(color)}
        />
      ))}
    </div>
  );
}

function ColorCircle({
  color,
  isSelected,
  onClick,
}) {
  const colorStyle = StyleSheet.create({
    circle: {
      background: color,
    },
  });

  const circleStyles = [styles.colorCircle, colorStyle.circle, isSelected ? styles.selected : null];

  return (
    <div
      css={circleStyles}
      onClick={onClick}
    />
  );
}

ColorCircle.propTypes = {
  color: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingBottom: 30,
  },
  colorCircle: {
    height: 30,
    width: 30,
    margin: '0 5px',
    borderRadius: 19,
    border: `solid 4px ${Colors.jet()}`,
  },
  selected: {
    border: `solid 4px ${Colors.antiFlashWhite()}`,
  },
});
