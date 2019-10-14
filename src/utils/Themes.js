import Responsive from '@app/utils/Responsive';
import { Colors } from '@app/utils/StyleSheet';
import {
  // bold,
  // boldItalic,
  light,
  // lightItalic,
  regular,
  // regularItalic,
  // semiBold,
  // semiBoldItalic,
} from '@app/utils/JosefinSans';

export default class Themes {
  static buttonDefaults = () => {
    return {
      ':focus': {
        outline: 'none',
      },
    };
  }

  static nameButton = () => {
    return {
      ...this.buttonDefaults(),
      ...regular(),
      color: Colors.antiFlashWhite(),
      fontSize: 72,
      lineHeight: '72px',
      padding: '16px 12px 6px 14px',
    };
  }

  static navItem = () => {
    return {
      ...this.buttonDefaults(),
      ...regular(),
      color: Colors.antiFlashWhite(),
      fontSize: 15,
      lineHeight: '10px',
      ...Responsive.sm({
        fontSize: 20,
        lineHeight: '20px',
      }),
    };
  }

  static content = () => {
    return {
      ...light(),
      textAlign: 'justify',
      color: Colors.antiFlashWhite(),
      fontSize: 22,
      lineHeight: '34px',
      ...Responsive.sm({
        fontSize: 28,
        lineHeight: '38px',
      }),
    };
  }

  static copyright = () => {
    return {
      ...light(),
      textAlign: 'center',
      color: Colors.antiFlashWhite(),
      fontSize: 16,
      lineHeight: '34px',
    };
  }
}
