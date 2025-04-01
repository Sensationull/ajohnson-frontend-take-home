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
