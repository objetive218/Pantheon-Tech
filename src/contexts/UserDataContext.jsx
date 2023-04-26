import React,{createContext, useState} from "react";
import UserData from "../data/UserData";

const UserDataContext = createContext(UserData);
const UserDataProvider = function({children}){
  const [data, setData] = useState(UserData)
  const register = function (username, password, roll) {
    setUsers([...users, { username, password, roll }]);
  };
  return <UserDataContext.Provider value={data,setData, register}>
    {children}
  </UserDataContext.Provider>
}

export { UserDataProvider}
export default UserDataContext