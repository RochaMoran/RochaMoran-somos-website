export interface MenuOption {
  label: string;
  url: string;
  sublevel: number;
}

export interface SubMenuOptions {
  label?: string;
  options: Array<MenuOption>;
}

export interface SubMenuProps {
  columns: Array<SubMenuOptions>;
}
