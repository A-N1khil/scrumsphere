import React from "react";
import AppLayout from "../components/Layout";
import { useAppSelector } from "../hooks/Hooks";

const UserLanding: React.FC = () => {
  const { user } = useAppSelector((state) => state.user);
  console.log(user);

  return (
    <AppLayout>
      <div className="space-y-6 mt-4">
        <div className="mt-2 p-4 flex flex-col items-start justify-between">
          <h1 data-testid="user-welcome-text" className="text-3xl font-bold">
            Welcome {user?.name}
          </h1>
          <p>This is the main content area of the User Landing page.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-card rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Recent Activity</h2>
            <p>Your recent activities will appear here.</p>
          </div>
          <div className="p-4 bg-card rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Notifications</h2>
            <p>You have 3 new notifications.</p>
          </div>
          <div className="p-4 bg-card rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Quick Actions</h2>
            <ul className="list-disc list-inside">
              <li>Create new project</li>
              <li>Invite team member</li>
              <li>Generate report</li>
            </ul>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default UserLanding;
