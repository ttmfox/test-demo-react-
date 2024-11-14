import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";

class Mycomponent extends React.Component {

    state = {
        Name: 'Nguyen Quang Thien',
        address: 'Hai Duong',
        age: 18
    };
    HandleClick(event) {
        console.log(">> click me button")
        // console.log(event)
        // console.log("my name is", this.state.Name)
        // console.log("random", Math.floor((Math.random() * 100) + 1))
        this.setState({
            Name: "Eric",
            age: Math.floor((Math.random() * 100) + 1)
        })
    }


    HandleOnmouseOver(event) {
        // console.log(event)
    }
    HandleOnChangeInput = (event) => {
        this.setState({
            Name: event.target.value
        })
    }

    HandleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <div>
                My name is {this.state.Name} and Im {this.state.age}
                <form onSubmit={(event) => this.HandleOnSubmit(event)}>
                    <input type="text"
                        onChange={(event) => { this.HandleOnChangeInput(event) }}
                    />
                    <button>submit</button>

                </form>
            </div>
        );
    }
}
export default Mycomponent;