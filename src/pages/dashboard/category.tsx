"use-client";
import DashboardLayout from "@/components/DashboardLayout";
import {
  type Category,
  categoryColumns,
} from "@/components/categories.columns";
import AddCategoryForm from "@/components/features/AddCategoryForm";
import { DataTable } from "@/components/ui/DataTable";
import { Button } from "@/components/ui/button";
import Modal from "@/components/ui/modal";
import { useQuery } from "@tanstack/react-query";
import { PlusCircle } from "lucide-react";
import { useState } from "react";

const CatrgoryPage = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
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
        <Button onClick={() => setIsAddModalOpen(true)}>
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
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => {
          setIsAddModalOpen(false);
        }}
        title="Add Category"
      >
        <AddCategoryForm
          onSuccessFulSubmit={async () => {
            setIsAddModalOpen(false);
            await queryCategories.refetch();
          }}
        />
      </Modal>
    </DashboardLayout>
  );
};
export default CatrgoryPage;
