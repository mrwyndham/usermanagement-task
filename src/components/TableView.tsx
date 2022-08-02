import { useRecoilValue } from "recoil";
import { usersState } from "../atoms";
import { IUser } from "../interfaces";
import UserManagementRemoveButton from "./UserManagementRemoveButton";

function TableView() {
    const users = useRecoilValue<IUser[]>(usersState);
  
    return (
      <div className="flex flex-col w-full">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="border-b">
                  <tr>
                    <th scope="col" className="text-xs font-medium text-gray-900 px-6 py-4 text-left">
                      #
                    </th>
                    <th scope="col" className="text-xs font-medium text-gray-900 px-6 py-4 text-left">
                      Branch ID
                    </th>
                    <th scope="col" className="text-xs font-medium text-gray-900 px-6 py-4 text-left">
                      Username
                    </th>
                    <th scope="col" className="text-xs font-medium text-gray-900 px-6 py-4 text-left">
                      Name
                    </th>
                    <th scope="col" className="text-xs font-medium text-gray-900 px-6 py-4 text-left">
                      Position
                    </th>
                    <th scope="col" className="text-xs font-medium text-gray-900 px-6 py-4 text-left">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((x, i) => {
                    return (
                      <tr key={i} className="border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-xs font-medium text-gray-900">{i}</td>
                        <td className="text-xs text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {x.branchId}
                        </td>
                        <td className="text-xs text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {x.userName}
                        </td>
                        <td className="text-xs text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {`${x.firstName} ${x.middleName[0].toUpperCase()}. ${x.lastName}`}
                        </td>
                        <td className="text-xs text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {x.position}
                        </td>
                        <td className="text-xs text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <UserManagementRemoveButton id={i}/>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
export default TableView;