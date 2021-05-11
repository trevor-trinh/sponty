import { readRemoteFile } from "react-papaparse";

const url =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQJT303Jsua0Uikb7VSNToxdU6sBJRwtPK5cGtpp6iEI4O7tmwSHTURbg1q6l7r_cMFHDrCJ4gAwZTU/pub?output=csv";
let actionSpecData = [];

function cleanData(dirty) {
  let output = {};
  for (let row in dirty) {
    for (let col in dirty[row]) {
      const action = dirty[row][0];
      if (!(action in output)) {
        output[action] = {};
      }
      const specific = dirty[row][1];
      const description = dirty[row][2];
      output[action][specific] = description;
    }
  }
  console.log('PAY ATTENTION')
  console.log(output)
  return output;
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function shuffleAll() {
  // shuffles the actions
  actionSpecData = shuffle(Object.keys(actionSpecData))
    .map((key) => ({ key, value: actionSpecData[key] }))
    .reduce((acc, e) => {
      acc[e.key] = e.value;
      return acc;
    }, {});

  // shuffles the specs
  for (var action in actionSpecData) {
    shuffle(actionSpecData[action]);
  }
}

export const dataPromise = new Promise((resolve) => {
  readRemoteFile(url, {
    complete: ({ data }) => {
      console.log("Fetched");
      const [, ...rawData] = data;

      console.log("Cleaned");
      actionSpecData = cleanData(rawData);

      console.log("Shuffled");
      shuffleAll(actionSpecData);
      resolve("resolved");
    },
  });
});

/*
My Data Shape
Rows of the google sheet
Action, Spec, Desc

["Read", "specific book", "details for body"]
neeed to make it what it is below
*/

// let actionSpecData = {
//   GO: ["Park", "Mall", "Beach with friends oh wait you don't have friends"],
//   EAT: ["Lamb", "Noodles", "Rice", "Kian's thighs"],
//   READ: ["三国", "Boys in the Boat", "One"],
// };

// yeeted shuffle function

// new data looks like this
// {ACTION: {spec: desc, spec: desc}, ACTION2: {spec2: desc2, spec2: desc2}}
// {
//   READ: {
//     read1: 'read2',
//     'read 2': 'read3',
//     "Kian's thighs": 'they are a very great source of protien and provide your jaws with the power to chew through anything'
//   },
//   DO: { do1: 'do2' },
//   GO: { go1: 'go2' }
// }
export default actionSpecData;
