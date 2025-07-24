import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import SidebarLayout from "@/components/layout/sidebar-layout";

export default async function Dashboard() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getClaims();
  if (error || !data?.claims) {
    redirect("/auth/login");
  }

  return (
    <SidebarLayout>
      <div className="flex-1 w-full flex flex-col gap-12">
        <div className="flex flex-col gap-2 items-start">
          <h2 className="font-bold text-2xl mb-4">User Dashboard</h2>
          <p>Welcome, {data.claims.email}</p>
        </div>
        
        {/* Add some dashboard content here */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border">
            <h3 className="font-semibold text-blue-700 dark:text-blue-300">Total Projects</h3>
            <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">12</p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border">
            <h3 className="font-semibold text-green-700 dark:text-green-300">Active Tasks</h3>
            <p className="text-2xl font-bold text-green-900 dark:text-green-100">8</p>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border">
            <h3 className="font-semibold text-yellow-700 dark:text-yellow-300">Pending</h3>
            <p className="text-2xl font-bold text-yellow-900 dark:text-yellow-100">3</p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border">
            <h3 className="font-semibold text-purple-700 dark:text-purple-300">Completed</h3>
            <p className="text-2xl font-bold text-purple-900 dark:text-purple-100">24</p>
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
}




