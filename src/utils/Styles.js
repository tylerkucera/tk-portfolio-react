import { css as emotionCss } from '@emotion/core';

const StyleSheet = {
  create(styles) {
    return Object.keys(styles).reduce((obj, key) => {
      if (typeof styles[key] === 'object') {
        obj[key] = emotionCss({
          label: key,
          ...styles[key],
        });
      } else {
        obj[key] = emotionCss(`label: ${ key };` + styles[key]);
      }

      return obj;
    }, {});
  },
};

export { StyleSheet };
