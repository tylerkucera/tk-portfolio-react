import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import ThemeContext from '@app/contexts/ThemeContext';
import { Colors, StyleSheet } from '@app/utils/StyleSheet';

export const colors = [
  Colors.jet(),
  Colors.hookersGreen(),
  Colors.japaneseIndigo(),
  Colors.blueSapphite(),
];

export default function ColorSwitcher() {
  const { backgroundColor, updateBackgroundColor } = useContext(ThemeContext);

  return (
    <div css={styles.container}>
      {colors.map((color) => {
        return (
          <ColorCircle
            color={color}
            isSelected={color === backgroundColor}
            key={color}
            onClick={() => updateBackgroundColor(color)}
          />
        );
      })}
    </div>
  );
}

function ColorCircle({
  color,
  isSelected,
  onClick,
}) {
  const { backgroundColor } = useContext(ThemeContext);

  const dynamicStyles = StyleSheet.create({
    colorCircle: {
      background: color,
      border: `solid 4px ${backgroundColor}`,
    },
  });

  const circleStyles = [
    styles.colorCircle,
    dynamicStyles.colorCircle,
    isSelected ? styles.selected : null,
  ];

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
  selected: {
    border: `solid 4px ${Colors.antiFlashWhite()}`,
  },
  colorCircle: {
    height: 30,
    width: 30,
    margin: '0 5px',
    borderRadius: 19,
    transition: 'border-color 200ms',
  },
});
