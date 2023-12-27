"use client";

import { ColumnDef } from "@tanstack/react-table";
export type Category = {
  id: string;
  title: string;
  created_at: Date;
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
];
