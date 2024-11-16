
import React from "react";

class DisplayInfor extends React.Component {
    render() {
        //destructuring array/opject
        const { listUser } = this.props
        //props = properties 
        console.log(listUser)
        return (
            <div>
                {listUser.map((user, index) => {
                    return (
                        <div key={user.id}>
                            <div>my name is {user.name}</div>
                            <div>Im {user.age}</div>

                        </div>

                    )
                })}
                {/* <div>My name is {name} </div>
                <div>Im {age} year old</div>
                <hr></hr>
                <div>My name is {name} </div>
                <div>Im {age} year old</div>
                <hr></hr>
                <div>My name is {name} </div>
                <div>Im {age} year old</div> */}
            </div>
        )
    }

}

export default DisplayInfor