import React from 'react';
import { StyleSheet, Themes } from '@app/utils/StyleSheet';

export default function Copyright() {
  return (
    <p css={styles.copyright}>Copyright &#169;{new Date().getFullYear()} Tyler Kucera</p>
  );
}

const styles = StyleSheet.create({
  copyright: Themes.copyright(),
});
