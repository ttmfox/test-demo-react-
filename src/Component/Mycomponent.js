import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";
import UseInfor from "./UseInfor";
import DisplayInfor from "./DisplayInfor";

class Mycomponent extends React.Component {

    render() {
        const myAge = 50;
        const myinfor = ["a", "b", "c"]

        return (
            <div>

                <UseInfor />
                <br></br>
                <DisplayInfor name="Thien" age="18" />
                <hr></hr>
                {/* <DisplayInfor name="IT" age={myAge} /> */}
                <DisplayInfor name="IT" age={60} myinfor={myinfor} />

            </div>
        );
    }
}
export default Mycomponent;