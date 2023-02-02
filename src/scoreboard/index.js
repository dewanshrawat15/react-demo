import React from "react";

export default class ScoreBoard extends React.Component {

    componentWillUnmount(){
        console.info("componentWillUnmount REACHED ScoreBoard");
    }

    render(){
        const { updateCount } = this.props;
        return <>
            <h1>Score Board</h1>
            <br /><br /><br />
            <h2 onClick={() => {
                updateCount(0);
            }}>Reset score board</h2>
        </>
    }
}