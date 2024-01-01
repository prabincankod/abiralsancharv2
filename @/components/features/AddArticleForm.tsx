//  fetch("https://jsugauta1.pythonanywhere.com/newsportal/news/", {
//     "headers": {
//       "x-api-key": "33e90d42-8d5e-48cd-a61a-3a12dd99c559"
//     },
//     "method": "POST",
//   });

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "../ui/form";

const AddArticleFormSchema = z.object({
  title: z.string(),
  description: z.string(),
  slug: z.string(),
  content: z.string(),
  category: z.number(),
  latest: z.boolean(),
  trending: z.boolean(),
  featured: z.boolean(),
  author: z.number().default(1),
  image1: z.instanceof(File),
});

export type Article = z.infer<typeof AddArticleFormSchema>;
const AddArticleForm = () => {
  const form = useForm<z.infer<typeof AddArticleFormSchema>>({
    resolver: zodResolver(AddArticleFormSchema),
  });

  const onSubmit = async (data: Article) => {};

  return (
    <Form {...form}>
      <form></form>
    </Form>
  );
};
