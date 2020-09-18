import React, {Component} from "react";

class Lists extends Component {

    onClickHandler = (list) => {
        this.props.onClick({
            list: list
        });
    }

    onDeleteHandler = (event, list) => {
        console.log(list)
        event.stopPropagation();
        this.props.delete({
            list: list
        });
    }

    render() {
        return (
            <ul>
                {this.props.lists
                    .map(list => <li key={list.id} onClick={() => this.onClickHandler(list)}>{list.name}
                        <button className="btn btn-light"
                                onClick={(event) => this.onDeleteHandler(event, list)}>&#xE74D;</button>
                    </li>)}
            </ul>
        );
    }
}

export default Lists