"use-client";
import DashboardLayout from "@/components/DashboardLayout";
import { type Article, articleColumns } from "@/components/articles.columns";
import { DataTable } from "@/components/ui/DataTable";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { PlusCircle } from "lucide-react";

const ArticlePage = () => {
  const queryArticles = useQuery({
    queryKey: ["newsportal", "news"],
    queryFn: () => {
      return fetch("https://jsugauta1.pythonanywhere.com/newsportal/news/", {
        headers: {
          "x-api-key": "33e90d42-8d5e-48cd-a61a-3a12dd99c559",
        },
        method: "GET",
        mode: "cors",
        credentials: "omit",
      }).then((data) => data.json()) as unknown as Promise<Article[]>;
    },
  });

  return (
    <DashboardLayout>
      <div className="my-3 flex flex-row items-center justify-between">
        <div className="text-2xl font-extrabold">Articles</div>
        <Button>
          <PlusCircle className="mr-2" />
          Add Article
        </Button>
      </div>
      <DataTable
        data={queryArticles.data ?? []}
        columns={articleColumns}
        loading={queryArticles.isLoading}
        actions={[
          {
            action: "view",
            handleAction: () => {
              console.log("implement view");
            },
          },
        ]}
      />
    </DashboardLayout>
  );
};
export default ArticlePage;
