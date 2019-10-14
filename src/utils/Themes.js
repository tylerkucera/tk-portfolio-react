import { Colors } from '@app/utils/StyleSheet';
import {
  // bold,
  // boldItalic,
  // light,
  // lightItalic,
  regular,
  // regularItalic,
  // semiBold,
  // semiBoldItalic,
} from '@app/utils/JosefinSans';

export default class Themes {
  static nameButton = () => {
    return {
      ...regular(),
      color: Colors.antiFlashWhite(),
      fontSize: 90,
      lineHeight: '90px',
      padding: '16px 12px 6px 14px',
    };
  }

  static navItem = () => {
    return {
      ...regular(),
      color: Colors.antiFlashWhite(),
      fontSize: 20,
      lineHeight: '20px',
    };
  }

  static content = () => {
    return {
      ...regular(),
      color: Colors.antiFlashWhite(),
      fontSize: 28,
      lineHeight: '38px',
    };
  }
}
