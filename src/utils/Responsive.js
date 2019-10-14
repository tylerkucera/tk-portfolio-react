export default class Responsive {
  static BREAKPOINTS = {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  };

  static QUERIES = {
    sm: `(min-width: ${Responsive.BREAKPOINTS.sm}px)`,
    md: `(min-width: ${Responsive.BREAKPOINTS.md}px)`,
    lg: `(min-width: ${Responsive.BREAKPOINTS.lg}px)`,
    xl: `(min-width: ${Responsive.BREAKPOINTS.xl}px)`,
  };

  static sm(styles) {
    return {
      [`@media ${Responsive.QUERIES.sm}`]: styles,
    };
  }

  static md(styles) {
    return {
      [`@media ${Responsive.QUERIES.md}`]: styles,
    };
  }

  static lg(styles) {
    return {
      [`@media ${Responsive.QUERIES.lg}`]: styles,
    };
  }

  static xl(styles) {
    return {
      [`@media ${Responsive.QUERIES.xl}`]: styles,
    };
  }
}
