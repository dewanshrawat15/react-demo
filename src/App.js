import React, { useState } from "react";
import AppLayout from "./appLayout";
import ScoreBoard from "./scoreboard";

export default function App(){

    const [count, updateCount] = useState(0);

    if(count < 5){
        return <AppLayout count={count} updateCount={updateCount} />;
    } else {
        return <ScoreBoard updateCount={updateCount} />;
    }
}