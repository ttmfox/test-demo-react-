
import React from "react";

class DisplayInfor extends React.Component {
    render() {
        //destructuring array/opject
        const { age, name } = this.props
        //props = properties 
        console.log(this.props)
        return (
            <div>
                <div>
                    My name is {name}
                </div>
                <div>Im {age} year old</div>
            </div>
        )
    }

}

export default DisplayInfor