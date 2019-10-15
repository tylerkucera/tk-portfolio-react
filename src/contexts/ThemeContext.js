import React from 'react';

const ThemeContext = React.createContext({
  backgroundColor: null,
  updateBackgroundColor: () => {},
});

export default ThemeContext;
