import { useRecoilState } from "recoil";
import { usersState } from "../atoms";

function UserManagementRemoveButton({id}:{id:number}) {
  const [users, setUsers] = useRecoilState(usersState);
  
  return (
          <button onClick={x => setUsers(users.filter((x) => x !== users[id]))} className="border border-black bg-gray-300  px-2 font-bold">REMOVE</button>
  );
}

export default UserManagementRemoveButton;
