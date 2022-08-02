import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { currentUserState } from "../atoms";
import { users } from "../users_data"
import { hashCode } from "../utilities/hash";


function UserLogonView() {
  const [branch, setBranch] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState<[Boolean, String]>([true, ""])
  const setUser = useSetRecoilState(currentUserState)
  
  const handleInputValidation = () => {
    //password validation regex
    if(!(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/.test(password))) {
        setValid([false, "Password requires 8 char, 1 upper, 1 lower, 1 number and 1 special."])
    }
    //username validation regex
    if(!(/^[a-z0-9_-]{3,15}$/.test(username))) {
        setValid([false, "Username requires length of 3-15 alphanumeric characters ('-' and '_' are the only exceptions)."])
    }
    //branch validation regex
    if(!(/^\d{5}$/.test(branch))) {
        setValid([false, "Branch requires 5 digits (0-9)."])
    }
    if(branch === "" || username === ""  || password === "") {
        setValid([false, "Please fill all fields."])
    }

    if (valid) {
      let hashes = users.map(x => hashCode(`${x.branchId}${x.userName}${x.password}`))
      let userIndex = hashes.findIndex(x => x === hashCode(`${branch}${username}${password}`))
      if (userIndex !== -1) {
        setValid([true, ""])
        setUser({...users[userIndex], isLoggedIn: true})
      } else {
        setValid([false, "Password is incorrect."])
      }
    }
  } 
  
  return (
      <div className="flex items-center border-2 border-black p-3 w-[275px]">
        <div className="flex flex-col gap-y-3 w-full">
          <h1 className="pb-2 font-medium">Login</h1>
          {/* Made assumption about the Branch Id needing to be of a specific character length */}
          <input onChange={x => setBranch(x.target.value)} className="border-black border-2 px-2 py-1 text-xs placeholder:text-black" type="number" value={branch} placeholder={"Branch Id"} />
          <input onChange={x => setUsername(x.target.value)} className="border-black border-2 px-2 py-1 text-xs placeholder:text-black" type="text" value={username} placeholder={"User name"} />
          <input onChange={x => setPassword(x.target.value)} pattern="" className="border-black border-2 px-2 py-1 text-xs placeholder:text-black" type="password" value={password} placeholder={"Password"} />
          <button onClick={x => handleInputValidation()} className="bg-blue-300 font-extrabold rounded-md text-xs py-1.5">LOGIN</button>
          <div className={`bg-red-300 text-red-500 p-2 text-xs font-extrabold ${valid[1] ? "" : "opacity-0"}`}>
            <p>Error: {valid[1]}</p>
          </div>
        </div>
      </div>
  );
}

export default UserLogonView;
