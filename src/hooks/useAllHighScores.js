import { useEffect, useState } from "react";
import deleteHighScore from "../api/deleteHighScore";
import getHighScores from "../api/getHighScores";

/**
 * React hook that fetchs the data from server
 * @returns
 */
export default function useAllHighScores() {
  const [allScores, setAllScores] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  function updateScore(id, name, score){
    const scoreIds = allScores.map((score)=>{return score._id})
    console.log(allScores)
    const index = scoreIds.indexOf(id)
    console.log(scoreIds)
    console.log("the index is " + index)
    if(index !== -1){
      setAllScores([...allScores.filter((userscore,i)=>{
        if (index === i) {
          userscore.name = name;
          userscore.score = score; 
        }
        return userscore
      })]);
    }
  }
  // only run once
  useEffect(() => {
    console.log("test");
    /**
     * Fetch all score data
     */
    async function fetchData() {
      try {
        const data = await getHighScores();
        console.log("success");
        console.log(data);
        setAllScores(data.data.payload);
      } catch (e) {
        console.log(e);
      }
    }

    // call method
    fetchData();
  }, []);

  // makes api req to delete
  const deleteScore = async (id) => {
    try {
      setIsDeleting(true);
      await deleteHighScore(id);
      setAllScores(allScores.filter((score) => score._id !== id));
      console.log("success, we delete the score");
      setIsDeleting(false);
    } catch (e) {
      console.log(e);
      setIsDeleting(false);
    }
  };

  return {
    allScores,
    deleteScore,
    isDeleting,
    updateScore,
  };
}