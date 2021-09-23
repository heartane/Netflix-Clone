import { onAuthStateChanged } from "@firebase/auth";
import { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../context/firebase";

export default function useAuthListener() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );
  const { authService } = useContext(FirebaseContext);

  // 로그인 유무에 따라 다른 라우트 onAuthStateChanged()
  useEffect(() => {
    const listener = onAuthStateChanged(authService, (authUser) => {
      if (authUser) {
        localStorage.setItem("authUser", JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem("authUser");
        setUser(null);
      }
    });

    return () => listener();
  }, [authService]);

  return { user };
}
