"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "./ui/badge";
export type Category = {
  id: string;
  title: string;
  created_at: Date;
  on_navbar: boolean;
  is_on_home: boolean;
};

export const categoryColumns: ColumnDef<Category>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "name",
    header: "Category Name",
  },
  {
    accessorKey: "slug",
    header: "Slug",
  },

  {
    accessorKey: "is_on_home",
    header: "On Home",
    cell: ({ row }) => {
      return (
        <Badge variant={row.original.is_on_home ? "default" : "destructive"}>
          {row.original.is_on_home ? "Yes" : "No"}
        </Badge>
      );
    },
  },

  {
    accessorKey: "on_navbar",
    header: "On Navbar",
    cell: ({ row }) => {
      return (
        <Badge variant={row.original.on_navbar ? "default" : "destructive"}>
          {row.original.on_navbar ? "Yes" : "No"}
        </Badge>
      );
    },
  },
];
