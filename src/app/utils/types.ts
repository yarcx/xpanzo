import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface IContactHeaders {
  header: string;
  icon: IconDefinition;
}

export interface IMobileSidebar {
  isOpen: boolean;
  onClose: () => void;
  gotoRoute: (route?: string) => void;
}
