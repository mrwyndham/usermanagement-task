import { useRecoilValue } from "recoil";
import { currentUserState } from "../atoms";
import { IUser } from "../interfaces";


function UsernameView() {
    const user = useRecoilValue<IUser>(currentUserState)
    return (
        <h1 className="flex-start font-medium text-lg">{user.userName}</h1>
    );
  }
  
  export default UsernameView;