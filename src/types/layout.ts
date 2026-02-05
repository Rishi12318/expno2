export interface MenuItem {
  label: string;
  path: string;
  icon: React.ReactNode;
}

export interface SidebarProps {
  open: boolean;
  onClose: () => void;
  menuItems: MenuItem[];
}

export interface NavbarProps {
  onMenuClick: () => void;
}
