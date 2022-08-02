import LogoutButton from "../components/LogoutButton";
import TableView from "../components/TableView";
import UserManagementView from "../components/UserManagementView";
import UsernameView from "../components/UserManagementUsernameView";
import { useSetRecoilState } from "recoil";
import { usersState } from "../atoms";
import { useEffect } from "react";
import { users } from "../users_data";
import { IUser } from "../interfaces";

function ManageUsersPage() {
  const setUsers = useSetRecoilState(usersState);
  useEffect(() => {
    setUsers(users as IUser[])
  }, [setUsers])
  return (
    <div className="h-full md:h-screen bg-[#f1f1f1] p-4">
      <div className="flex flex-col h-full p-5 bg-white rounded gap-y-6">
        <div className="flex flex-row w-full justify-between items-center">
          <div className="fles-start"><UsernameView/></div>
          <div className="flex-end"><LogoutButton/></div>
        </div>
        <div className="flex flex-col md:flex-row md:gap-x-8">
            <div className="md:w-2/5 xl:w-1/5">
              <UserManagementView />
            </div>
            <div className="md:w-3/5 xl:w-4/5">
              <TableView />
            </div>
        </div>
      </div>
    </div>
  );
}

export default ManageUsersPage;
