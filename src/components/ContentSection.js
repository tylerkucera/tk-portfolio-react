import ChevronButton from '@app/components/ChevronButton';
import PropTypes from 'prop-types';
import React from 'react';
import { Colors, StyleSheet, Themes } from '@app/utils/StyleSheet';

export default function ContentSection({
  children,
  refProp,
  onClickChevron,
}) {
  return (
    <div
      css={styles.container}
      ref={refProp}
    >
      {children}
      {onClickChevron &&
        <ChevronButton onClick={onClickChevron} />
      }
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: 750,
    minHeight: '100vh',
    color: Colors.antiFlashWhite(),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '245px 20px 0 20px',
    justifyContent: 'flex-start',
    ...Themes.content(),
    // ...Responsive.sm({
    //   padding: '0 220px',
    //   justifyContent: 'center',\
    // }),
  },
});

ContentSection.propTypes = {
  children: PropTypes.node,
  onClickChevron: PropTypes.func,
  refProp: PropTypes.object,
};
