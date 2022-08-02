import { useRecoilValue } from "recoil";
import { currentUserState } from "./atoms";
import { IUser } from "./interfaces";
import LogonPage from "./pages/LogonPage";
import ManageUsersPage from "./pages/ManageUsersPage";

function Content() {
  const user = useRecoilValue<IUser>(currentUserState)
  return (
    <>
      {user.isLoggedIn === false ? <LogonPage /> : <ManageUsersPage />}
    </>
  );
}

export default Content;
