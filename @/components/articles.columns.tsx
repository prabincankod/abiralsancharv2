"use client";

import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Article = {
  id: string;
  title: string;
  created_at: Date;
};

export const articleColumns: ColumnDef<Article>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "created_at",
    header: "Created At",
    cell: ({ row }) => {
      return row ? format(row.original.created_at, "PPPP") : null;
    },
  },
];
