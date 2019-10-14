import Name from '@app/components/Name';
import NavMenu from '@app/components/NavMenu';
import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet } from '@app/utils/StyleSheet';

export default function Header({
  onNavButtonClick, onNameClick, sectionRefs,
}) {
  return (
    <div css={styles.container}>
      <Name
        onClick={onNameClick}
      />
      <NavMenu
        onClick={onNavButtonClick}
        sectionRefs={sectionRefs}
      />
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    position: 'fixed',
  },
});

Header.propTypes = {
  onNameClick: PropTypes.func.isRequired,
  onNavButtonClick: PropTypes.func.isRequired,
  sectionRefs: PropTypes.object.isRequired,
};
