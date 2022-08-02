import { useSetRecoilState } from "recoil";
import { currentUserState } from "../atoms";
import { IUser } from "../interfaces";

function LogoutButton() {
  const setUser = useSetRecoilState(currentUserState)
  
  return (
          <button onClick={x => setUser({isLoggedIn: false} as IUser)} className="bg-blue-400 rounded-md p-2 font-bold">LOGOUT</button>
  );
}

export default LogoutButton;
