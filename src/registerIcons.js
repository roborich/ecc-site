import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faPinterestP,
} from '@fortawesome/free-brands-svg-icons';
import {
  faLongArrowAltLeft,
  faLongArrowAltRight,
  faHeadphones,
  faCircle,
  faUser,
  faBars,
  faArchive,
  faEnvelope,
  faCalendarDay,
} from '@fortawesome/free-solid-svg-icons';

const icons = [
  faLongArrowAltLeft,
  faLongArrowAltRight,
  faHeadphones,
  faCircle,
  faUser,
  faBars,
  faArchive,
  faEnvelope,
  faCalendarDay,
  faFacebookF,
  faInstagram,
  faTwitter,
  faPinterestP,
];

export default () => library.add(...icons);
