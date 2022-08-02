import { useState } from "react";
import { useRecoilState } from "recoil";
import { usersState } from "../atoms";
import { IUser } from "../interfaces";

function UserManagementView() {
  const [users, setUsers] = useRecoilState(usersState);
  const [branch, setBranch] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [position, setPosition] = useState("");
  const [password, setPassword] = useState("");

  const handleReset = () => {
    setBranch("")
    setUsername("")
    setFirstName("")
    setMiddleName("")
    setLastName("")
    setPosition("")
    setPassword("")
  }

  const handleAddUser = () => {
    const user: IUser = {
      branchId: branch as unknown as number,
      userName: username,
      password: password,
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
      position: position,
      isLoggedIn: false
    }
    setUsers([...users, user])
  }
  
  return (
      <div className="flex items-center  p-4 w-full bg-gray-200">
        <div className="flex flex-col gap-y-3 w-full">
          {/* Made assumption about the Branch Id needing to be of a specific character length */}
          <input onChange={x => setBranch(x.target.value)} className="border-black border-2 px-2 py-1 text-xs placeholder:text-black" type="number" value={branch} placeholder={"Branch Id"} />
          <input onChange={x => setUsername(x.target.value)} className="border-black border-2 px-2 py-1 text-xs placeholder:text-black" type="text" value={username} placeholder={"Username"} />
          <input onChange={x => setFirstName(x.target.value)} className="border-black border-2 px-2 py-1 text-xs placeholder:text-black" type="text" value={firstName} placeholder={"First name"} />
          <input onChange={x => setMiddleName(x.target.value)} className="border-black border-2 px-2 py-1 text-xs placeholder:text-black" type="text" value={middleName} placeholder={"Middle name"} />
          <input onChange={x => setLastName(x.target.value)} className="border-black border-2 px-2 py-1 text-xs placeholder:text-black" type="text" value={lastName} placeholder={"Last name"} />
          <input onChange={x => setPosition(x.target.value)} className="border-black border-2 px-2 py-1 text-xs placeholder:text-black" type="text" value={position} placeholder={"Position"} />
          <input onChange={x => setPassword(x.target.value)} pattern="" className="border-black border-2 px-2 py-1 text-xs placeholder:text-black" type="password" value={password} placeholder={"Password"} />
          <div className="flex flex-row justify-end w-full gap-x-3">
            <button onClick={x => handleReset()} className="bg-white font-bold rounded-full text-xs py-1.5 px-5">RESET</button>
            <button onClick={x => handleAddUser()} className="bg-blue-300 font-bold rounded-full text-xs py-1.5 px-6">ADD</button>
          </div>

        </div>
      </div>
  );
}
  
export default UserManagementView;