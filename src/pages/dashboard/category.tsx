"use-client";
import DashboardLayout from "@/components/DashboardLayout";
import {
  type Category,
  categoryColumns,
} from "@/components/categories.columns";
import { DataTable } from "@/components/ui/DataTable";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { PlusCircle } from "lucide-react";

const CatrgoryPage = () => {
  const queryCategories = useQuery({
    queryKey: ["newsportal", "categories"],
    queryFn: () => {
      return fetch(
        "https://jsugauta1.pythonanywhere.com/newsportal/categories/",
        {
          headers: {
            "x-api-key": "33e90d42-8d5e-48cd-a61a-3a12dd99c559",
          },
          method: "GET",
        },
      ).then((data) => data.json()) as unknown as Promise<Category[]>;
    },
  });

  return (
    <DashboardLayout>
      <div className="my-3 flex flex-row items-center justify-between">
        <div className="text-2xl font-extrabold">Categories</div>
        <Button>
          <PlusCircle className="mr-2" />
          Add Category
        </Button>
      </div>
      <DataTable
        data={queryCategories.data ?? []}
        columns={categoryColumns}
        loading={queryCategories.isLoading}
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
export default CatrgoryPage;
