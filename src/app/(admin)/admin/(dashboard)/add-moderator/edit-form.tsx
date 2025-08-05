"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { zodResolver } from "@hookform/resolvers/zod";
import { Area } from "@prisma/client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Moderator } from "./columns";
import { useAddModDrawer } from "@/lib/ui-states/add-moderator-drawer";
import { Loader2 } from "lucide-react";
import { useUpdateModerator } from "@/queries/admin/useUpdateModerator";

const formSchema = z.object({
  name: z.string().min(2),
  password: z.string().min(4),
  areas: z.array(z.enum(Area)).min(1).max(3),
});

type Props = {
  mod_data: Moderator;
};

export function EditForm({ mod_data }: Props) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: mod_data.name,
      password: mod_data.password,
      areas: mod_data.areas,
    },
  });

  const { closeDrawer } = useAddModDrawer();
  const updateMutation = useUpdateModerator();
  const isSubmitting = updateMutation.isPending;

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const updatedModerator = await updateMutation.mutateAsync({
      name: mod_data.name,
      data: values,
    });
    console.log(updatedModerator);
    closeDrawer();
  }

  return (
    <div className="container mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="areas"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Areas</FormLabel>
                <FormControl>
                  <div className="flex flex-col md:flex-row gap-4">
                    {[1, 2, 3].map((_, index) => (
                      <Select
                        key={index}
                        value={field.value[index] || ""}
                        onValueChange={(value) => {
                          const newAreas = [...field.value];
                          newAreas[index] = value as Area;
                          field.onChange(newAreas);
                        }}
                      >
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder={`Area ${index + 1}`} />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.values(Area).map((area) => (
                            <SelectItem key={area} value={area}>
                              {area}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    ))}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="w-full flex flex-row justify-around items-center gap-x-10">
            <Button type="submit" className="w-1/2" disabled={isSubmitting}>
              Update
              {isSubmitting && <Loader2 className="animate-spin" />}
            </Button>
            <Button
              variant="outline"
              className="w-1/2"
              onClick={closeDrawer}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
