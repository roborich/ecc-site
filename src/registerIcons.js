import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faLongArrowAltLeft,
  faHeadphones,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

const icons = [faLongArrowAltLeft, faHeadphones, faCircle, faFacebookF, faInstagram];

export default () => library.add(...icons);
