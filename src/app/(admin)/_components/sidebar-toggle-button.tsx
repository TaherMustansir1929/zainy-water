"use client";

import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

interface Props extends React.ComponentProps<typeof Button> {
  icon: React.ReactNode;
}

export const SidebarToggleButton = ({
  className,
  onClick,
  icon,
  ...props
}: Props) => {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      variant="ghost"
      size="icon"
      className={cn("size-7", className)}
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      {...props}
    >
      {icon}
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
};
