import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";
import UseInfor from "./UseInfor";

class Mycomponent extends React.Component {
    render() {
        return (
            <div>

                <UseInfor />
            </div>
        );
    }
}
export default Mycomponent;