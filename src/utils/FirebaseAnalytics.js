import * as firebase from 'firebase/app';
import 'firebase/analytics';

export default function firebaseAnalytics() {
  return firebase.analytics();
}
