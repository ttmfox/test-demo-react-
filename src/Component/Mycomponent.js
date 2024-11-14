import React from "react";

class Mycomponent extends React.Component {

    state = {
        Name: 'Nguyen Quang Thien',
        address: 'Hai Duong',
        age: 18
    };
    render() {
        return (
            <div>
                My name is {this.state.Name} and Im {this.state.age}
            </div>
        )
    }
}
export default Mycomponent;