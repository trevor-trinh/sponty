let actionSpecData = {
  GO: ["Park", "Mall", "Beach with friends oh wait you don't have friends"],
  EAT: ["Lamb", "Noodles", "Rice", "Kian's thighs"],
  READ: ["三国", "Boys in the Boat", "One"],
};

// yeeted shuffle function
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

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

export default actionSpecData;
