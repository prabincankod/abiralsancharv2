import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { useMutation } from "@tanstack/react-query";
import { Loader, PlusCircle } from "lucide-react";
import { fetchApi } from "@/lib/utils";
import { toast } from "sonner";

const AddCategoryFormSchema = z.object({
  name: z.string(),
  description: z.string(),
  slug: z.string(),
  is_on_home: z.boolean(),
  on_navbar: z.boolean(),
});
export type Category = z.infer<typeof AddCategoryFormSchema>;
interface IProps {
  onSuccessFulSubmit: () => void;
}
const AddCategoryForm = ({ onSuccessFulSubmit }: IProps) => {
  const form = useForm<z.infer<typeof AddCategoryFormSchema>>({
    resolver: zodResolver(AddCategoryFormSchema),
    defaultValues: {
      is_on_home: true,
      on_navbar: true,
    },
  });

  const mutateAddCategory = useMutation({
    mutationKey: ["newsportal", "categories"],
    mutationFn: (data: Category) => {
      return fetchApi<Category[]>("/newsportal/categories/", {
        method: "POST",
        body: data,
      });
    },
    onSuccess: () => {
      onSuccessFulSubmit();
      toast.success("Wohoo!", {
        description: "Category Created Successfully",
      });
    },
    onError: (error) => {
      console.log(error.message);
      toast.error("Whoops!", {
        description: error.message,
      });
    },
  });

  function onSubmit(values: z.infer<typeof AddCategoryFormSchema>) {
    mutateAddCategory.mutate(values);
  }

  return (
    <Form {...form}>
      <form>
        <div className="flex flex-row gap-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category Name</FormLabel>
                <FormControl>
                  <Input placeholder="*" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="slug"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category Slug</FormLabel>
                <FormControl>
                  <Input placeholder="*" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category Description</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="my-2 flex  flex-row gap-2">
          <FormField
            control={form.control}
            name="is_on_home"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                <FormLabel>On Home</FormLabel>
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="on_navbar"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                <FormLabel>On Navbar</FormLabel>
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button onClick={form.handleSubmit(onSubmit)}>
          {mutateAddCategory.isPending ? (
            <Loader className="animate-spin" />
          ) : (
            <PlusCircle />
          )}
          Add Category
        </Button>
      </form>
    </Form>
  );
};

export default AddCategoryForm;
