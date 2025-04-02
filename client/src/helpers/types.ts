import { BaseSyntheticEvent } from "react";

export type User = {
  id: string;
  createdAt: string;
  updatedAt: string;
  first: string;
  last: string;
  roleId: string;
  photo?: string;
};

export type Role = {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  description?: string;
  isDefault: boolean;
};

export type SearchBarProps = {
  searchQuery: string;
  onChange(event: BaseSyntheticEvent): void;
};

export type ManageUsersProps = {
  searchTerm: string;
};

export type UserTableProps = {
  userInfo: {
    data: User[];
    next: number | null;
    prev: number | null;
    pages: number;
  };
};

export type RoleTableProps = {
  roleInfo: {
    data: Role[];
    next: number | null;
    prev: number | null;
    pages: number;
  };
};

export type Tab = { id: string; name: string };

export type HeaderProps = {
  selectTab(tab: Tab): void;
  tabs: Tab[];
  activeTab: string;
};
