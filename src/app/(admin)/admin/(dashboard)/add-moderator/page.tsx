"use client";

import { DataTable } from "@/components/data-table";
import { columns, Moderator } from "./columns";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { PenSquare } from "lucide-react";
import { EditForm } from "./edit-form";
import { useAddModDrawer } from "@/lib/ui-states/add-moderator-drawer";
import { useGetModeratorList } from "@/queries/admin/useGetModeratorList";

const AddModeratorPage = () => {
  const { mod_data, isOpen, closeDrawer } = useAddModDrawer();
  let moderator = mod_data;

  if (!moderator) {
    moderator = {
      name: "Unknown",
      password: "Unknown",
      areas: [],
    };
  }

  const modListQuery = useGetModeratorList();
  const data: Moderator[] = Array.isArray(modListQuery.data)
    ? modListQuery.data
    : [];
  const isLoading = modListQuery.isLoading;

  return (
    <div className="w-full min-h-screen flex justify-center">
      <div className="p-4 w-full max-w-3xl">
        <DataTable columns={columns} data={data} isLoading={isLoading} />
        <div>
          <Drawer open={isOpen} onOpenChange={closeDrawer}>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle className="flex items-center justify-center gap-2">
                  <PenSquare />
                  Edit Moderator
                </DrawerTitle>
              </DrawerHeader>
              <div className="px-10 pb-10">
                <EditForm mod_data={moderator} />
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  );
};
export default AddModeratorPage;
