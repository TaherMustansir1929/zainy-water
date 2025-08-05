import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAddModDrawer } from "@/lib/ui-states/add-moderator-drawer";
import { Ellipsis, SquarePen, Trash2 } from "lucide-react";
import { Moderator } from "./columns";

export const ActionButton = ({ row_data }: { row_data: Moderator }) => {
  const { openDrawer, setModData } = useAddModDrawer();

  const handleEdit = () => {
    setModData(row_data);
    openDrawer();
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="p-2 rounded-md hover:bg-gray-100">
          <Ellipsis className="size-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={handleEdit}>
            <SquarePen className="size-4" />
            Edit
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Trash2 className="size-4 text-rose-500" />
            <span className="text-rose-500">Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
