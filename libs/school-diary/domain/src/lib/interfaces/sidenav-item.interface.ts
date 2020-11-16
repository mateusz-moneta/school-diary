export interface SidenavItem {
  title?: string;
  path?: string;
  divider?: boolean;
  icon?: string;
  children?: SidenavItem[];
  expanded?: boolean;
  display?: boolean;
  colorSaturation?: string;
}
