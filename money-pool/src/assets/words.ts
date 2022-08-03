import React from "react";
import Axios from "axios";

// const axios = require('axios').default;
const totalWordCount = new Array();
console.log(totalWordCount);

Axios.get("http://localhost:3001/api/get").then((response) => {
  for (let i = 0; i < response.data.length; i++) {
    let temp = response.data[i].instanceWord;
    totalWordCount.push(temp);
  }
});

// export const totalInstanceWords =
//   "fuck fuck fuck fuck fuck fuck hello fuck cunt shit shit shit shit dick dick dick dick cunt cunt cunt";

export const totalInstanceWords = totalWordCount.join(" ");
