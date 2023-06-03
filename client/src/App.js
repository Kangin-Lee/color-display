import React, { useEffect, useState } from "react";
import axios from "axios";


const App = () => {
  const [backendData, setBackendData] = useState([{}]);
  const [dominantColors, setDominantColors] = useState([]);

  useEffect(() => {
    fetchBackendData();
    fetchDominantColors();
  }, []);

  // useEffect(() => {
  //   fetch("http://localhost:5000/api")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setBackendData(data);
  //     });
  // }, []);
  const fetchBackendData = () => {
    axios
      .get("http://localhost:5000/api")
      .then((response) => {
        setBackendData(response.data);
      })
      .catch((error) => {
        console.log("Failed to fetch backend data:", error);
      });
  };

  const fetchDominantColors = () => {
    axios
      .get("http://localhost:5000/api/dominant-colors")
      .then((response) => {
        setDominantColors(response.data.dominantColors);
      })
      .catch((error) => {
        console.log("Failed to fetch dominant colors:", error);
      });
  };


  return (
    <div>
      {typeof backendData.users === "undefined" ? (
        <p>Loding...</p>
      ) : (
        backendData.users.map((user, i) => <p key={i}>{user}</p>)
      )}

      <div>
        {dominantColors.length === 0 ? (
          <p>Loading...</p>
        ) : (
          dominantColors.map((color, index) => <p key={index}>{color}</p>)
        )}
      </div>
    </div>
  );
};

export default App;
