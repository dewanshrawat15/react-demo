import React from "react";

class AppLayout extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            score: 0
        };
        console.info("REACHES constructor");
    }

    componentWillMount(){
        console.info("componentWillMount");
    }

    componentDidMount(){
        console.info("componentDidMount", new Date());
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps !== this.props){
            console.info(prevProps, this.props);
            console.info("PROPS UPDATED");
        }
        if(this.state !== prevState){
            console.info(this.state);
            console.info("STATE UPDATED")
        }
    }

    render(){
        const { count, updateCount } = this.props;
        const { score } = this.state;
        console.info("render CALLED")
        return <>
            <h1> App Layout: {count} </h1>
            <br /><br />
            <span onClick={() => {
                updateCount(count + 1);
            }}>Increment count</span>
            <br /><br />
            <span onClick={() => {
                this.setState({
                    score: count
                });
            }}>Save count</span>
            <br /><br />
            <h1> Score Saved: {score} </h1>
        </>
    }
}

export default AppLayout;