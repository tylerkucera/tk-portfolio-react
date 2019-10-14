import BoldItalicWoff from 'typeface-josefin-sans/files/josefin-sans-latin-700.woff';
import BoldItalicWoff2 from 'typeface-josefin-sans/files/josefin-sans-latin-700.woff2';
import BoldWoff from 'typeface-josefin-sans/files/josefin-sans-latin-700.woff';
import BoldWoff2 from 'typeface-josefin-sans/files/josefin-sans-latin-700.woff2';
import LightItalicWoff from 'typeface-josefin-sans/files/josefin-sans-latin-300italic.woff';
import LightItalicWoff2 from 'typeface-josefin-sans/files/josefin-sans-latin-300italic.woff2';
import LightWoff from 'typeface-josefin-sans/files/josefin-sans-latin-300.woff';
import LightWoff2 from 'typeface-josefin-sans/files/josefin-sans-latin-300.woff2';
import RegularItalicWoff from 'typeface-josefin-sans/files/josefin-sans-latin-400italic.woff';
import RegularItalicWoff2 from 'typeface-josefin-sans/files/josefin-sans-latin-400italic.woff2';
import RegularWoff from 'typeface-josefin-sans/files/josefin-sans-latin-400.woff';
import RegularWoff2 from 'typeface-josefin-sans/files/josefin-sans-latin-400.woff2';
import SemiBoldItalicWoff from 'typeface-josefin-sans/files/josefin-sans-latin-600italic.woff';
import SemiBoldItalicWoff2 from 'typeface-josefin-sans/files/josefin-sans-latin-600italic.woff2';
import SemiBoldWoff from 'typeface-josefin-sans/files/josefin-sans-latin-600.woff';
import SemiBoldWoff2 from 'typeface-josefin-sans/files/josefin-sans-latin-600.woff2';

const fontFamily = 'Muli';

export function light() {
  return {
    '@font-face': {
      fontFamily,
      fontStyle: 'normal',
      fontWeight: 300,
      src: `url('${LightWoff}') format('woff'), url('${LightWoff2}') format('woff2')`,
    },
    fontFamily,
    fontStyle: 'normal',
    fontWeight: 300,
  };
}

export function lightItalic() {
  return {
    '@font-face': {
      fontFamily,
      fontStyle: 'italic',
      fontWeight: 300,
      src: `url('${LightItalicWoff}') format('woff'), url('${LightItalicWoff2}') format('woff2')`,
    },
    fontStyle: 'italic',
    fontFamily,
    fontWeight: 300,
    src: `url('${LightItalicWoff}') format('woff'), url('${LightItalicWoff2}') format('woff2')`,
  };
}

export function regular() {
  return {
    '@font-face': {
      fontFamily,
      fontStyle: 'normal',
      fontWeight: 400,
      src: `url('${RegularWoff}') format('woff'), url('${RegularWoff2}') format('woff2')`,
    },
    fontFamily,
    fontStyle: 'normal',
    fontWeight: 400,
  };
}

export function regularItalic() {
  return {
    '@font-face': {
      fontFamily,
      fontStyle: 'italic',
      fontWeight: 400,
      src: `url('${RegularItalicWoff}') format('woff'), url('${RegularItalicWoff2}') format('woff2')`,
    },
    fontFamily,
    fontStyle: 'italic',
    fontWeight: 400,
  };
}

export function semiBold() {
  return {
    '@font-face': {
      fontFamily,
      fontStyle: 'normal',
      fontWeight: 600,
      src: `url('${SemiBoldWoff}') format('woff'), url('${SemiBoldWoff2}') format('woff2')`,
    },
    fontFamily,
    fontStyle: 'normal',
    fontWeight: 600,
  };
}

export function semiBoldItalic() {
  return {
    '@font-face': {
      fontFamily,
      fontStyle: 'italic',
      fontWeight: 600,
      src: `url('${SemiBoldItalicWoff}') format('woff'), url('${SemiBoldItalicWoff2}') format('woff2')`,
    },
    fontFamily,
    fontStyle: 'italic',
    fontWeight: 600,
  };
}

export function bold() {
  return {
    '@font-face': {
      fontFamily,
      fontStyle: 'normal',
      fontWeight: '700',
      src: `url('${BoldWoff}') format('woff'), url('${BoldWoff2}') format('woff2')`,
    },
    fontFamily,
    fontStyle: 'normal',
    fontWeight: '700',
  };
}

export function boldItalic() {
  return {
    '@font-face': {
      fontFamily,
      fontStyle: 'italic',
      fontWeight: 700,
      src: `url('${BoldItalicWoff}') format('woff'), url('${BoldItalicWoff2}') format('woff2')`,
    },
    fontFamily,
    fontStyle: 'italic',
    fontWeight: 700,
  };
}
