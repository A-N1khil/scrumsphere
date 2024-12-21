import React from "react";
import AppLayout from "../components/Layout";

const UserLanding: React.FC = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Welcome to User Dashboard</h1>
        <p>This is the main content area of the User Landing page.</p>
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
