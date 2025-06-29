import { createContext, useContext, useState } from "react";
import { user} from '../data/taskData';


const UserContext = createContext();
export function useUser() {
  return useContext(UserContext);
}
export function UserProvider({children}) {
    const [currentUser, setCurrentUser] = useState(user);
    return (
        <UserContext.Provider value={{ user: currentUser, setUser: setCurrentUser }}>
            {children}
        </UserContext.Provider>
    )

}

