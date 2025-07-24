import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import SidebarLayout from "@/components/layout/sidebar-layout";

export default async function Profile() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getClaims();
  if (error || !data?.claims) {
    redirect("/auth/login");
  }

  return (
    <SidebarLayout>
      <div className="flex-1 w-full flex flex-col gap-8">
        <div className="flex flex-col gap-2 items-start">
          <h2 className="font-bold text-2xl mb-4">User Profile</h2>
          <p>Manage your account settings and preferences</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Profile Information */}
          <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg border">
            <h3 className="font-semibold text-lg mb-4">Profile Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <p className="text-gray-900 dark:text-gray-100">{data.claims.email}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  User ID
                </label>
                <p className="text-gray-900 dark:text-gray-100">{data.claims.sub}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Account Created
                </label>
                <p className="text-gray-900 dark:text-gray-100">
                  {new Date(data.claims.iat * 1000).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

          {/* Account Settings */}
          <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg border">
            <h3 className="font-semibold text-lg mb-4">Account Settings</h3>
            <div className="space-y-4">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                Change Password
              </button>
              <button className="w-full bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                Update Profile
              </button>
              <button className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
} 