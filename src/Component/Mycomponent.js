import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";
import UseInfor from "./UseInfor";
import DisplayInfor from "./DisplayInfor";

class Mycomponent extends React.Component {
    state = {
        listUser: [
            { id: 1, name: "thien", age: "30" },
            { id: 2, name: "thien2", age: "10" },
            { id: 3, name: "thien3", age: "20" }
        ]
    }

    render() {
        const myAge = 50;
        const myinfor = ["a", "b", "c"]

        return (
            <div>

                <UseInfor />
                <br></br>
                {/* <DisplayInfor name="IT" age={myAge} /> */}
                <DisplayInfor
                    listUser={this.state.listUser}
                />

            </div>
        );
    }
}
export default Mycomponent;