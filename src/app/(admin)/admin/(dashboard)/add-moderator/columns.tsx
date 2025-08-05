"use client";

import { ActionButton } from "@/app/(admin)/admin/(dashboard)/add-moderator/action-button";
import { Area } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Moderator = {
  name: string;
  password: string;
  areas: Area[];
};

export const columns: ColumnDef<Moderator>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "password",
    header: "Password",
  },
  {
    accessorKey: "areas",
    header: "Areas",
    cell: ({ row }) => {
      const areas = row.original.areas;
      return (
        <div className="flex flex-row gap-1">
          {areas.map((area, index) => (
            <div key={index}>{area}, </div>
          ))}
        </div>
      );
    },
  },
  {
    accessorKey: "actions",
    header: "",
    cell: ({ row }) => {
      return <ActionButton row_data={row.original} />;
    },
  },
];
