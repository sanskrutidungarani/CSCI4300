import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect("/mealDashboard");
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-5xl max-[500px]:text-2xl">Meal dashboard</h1>
    </div>
  );
};

export default Dashboard;
