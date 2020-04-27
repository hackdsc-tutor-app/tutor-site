import React from "react";
import M from "materialize-css";

class Container extends React.Component {

    render() {
        return (
            <div className="left_align container">
                this.props.children
            </div>
        )
    }
}

export default Container;