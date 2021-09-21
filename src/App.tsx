import React, { useState } from "react";

import "./App.css";
import List from "./components/List";
import AddToList from "./components/AddToList";

export interface Istate {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<Istate["people"]>([
    {
      name: "Ozair",
      url: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png&w=120&h=100",
      age: 36,
      note: "Note is here",
    },
  ]);

  return (
    <div className="App">
      <h1>People invited to my party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
