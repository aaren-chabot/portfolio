import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import {
  faExternalLinkAlt,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

library.add(far, faExternalLinkAlt, faAngleRight);

export default {
  exit: faExternalLinkAlt,
  rightArrow: faAngleRight,
};
