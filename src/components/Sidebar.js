import React from 'react';
import CreateRoomBtnModal from './dashboard/CreateRoomBtnModal';
import DashboardToggle from './dashboard/DashboardToggle';

const Sidebar = () => {
  return (
    <div className="h-100 pt-3">
      <div>
        <DashboardToggle />
        <CreateRoomBtnModal />
      </div>
      Bottom
    </div>
  );
};

export default Sidebar;
