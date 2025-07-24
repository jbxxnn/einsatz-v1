import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";


export default async function Dashboard() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getClaims();
  if (error || !data?.claims) {
    redirect("/auth/login");
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-12">
      <div className="flex flex-col gap-2 items-start">
        <h2 className="font-bold text-2xl mb-4">User Dashboard</h2>
        <p>Welcome, {data.claims.email}</p>
        </div>
    </div>
  );
}
