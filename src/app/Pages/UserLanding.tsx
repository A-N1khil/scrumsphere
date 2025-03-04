import React from "react";
import AppLayout from "../components/Layout";
import { useAppSelector } from "../hooks/Hooks";
import { UserState } from "../slices/UserSlice";
import { Outlet } from "react-router-dom";

const UserLanding: React.FC = () => {
  const user = useAppSelector((state: { user: UserState }) => state.user.user);

  return (
    <AppLayout>
      <div className="space-y-4 mt-4">
        <div className="mt-2 p-4 flex flex-col items-start justify-between">
          <h1 data-testid="user-welcome-text" className="text-3xl font-bold">
            Welcome {user?.name}
          </h1>
          <p>This is the main content area of the User Landing page.</p>
        </div>
        <div className="pl-4 flex flex-col items-start justify-between">
          <Outlet />
        </div>
      </div>
    </AppLayout>
  );
};

export default UserLanding;
