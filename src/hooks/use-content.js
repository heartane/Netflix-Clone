import { collection, onSnapshot, query } from "@firebase/firestore";
import { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../context/firebase";

// target is collection ID (films, series)
export default function useContent(target) {
  const [content, setContent] = useState([]);
  const { dbService } = useContext(FirebaseContext);

  // 컬렉션에서 여러 문서 가져오기
  useEffect(() => {
    const q = query(collection(dbService, target));
    onSnapshot(q, (querySnapshot) => {
      const allContent = querySnapshot.docs.map((doc) => ({
        docId: doc.id,
        ...doc.data(),
      }));
      setContent(allContent);
    });
  }, []);
  return { [target]: content };
}
