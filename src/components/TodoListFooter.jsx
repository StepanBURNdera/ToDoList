import React from 'react';
import './TodoListFooter.css'

class Footer extends React.Component {
    render = (props) => {

        let classForAll = this.props.filterValue === "All"? "filterActive" : "";
        let classForCompleted = this.props.filterValue === "Completed"? "filterActive" : "Completed";
        let classForActive = this.props.filterValue === "Active"? "filterActive" : "Active";

        return(
            <div className="todoList-footer">
                <button onClick={ () => this.props.changeFilter("All")} className={classForAll}>All</button>
                <button onClick={ () => this.props.changeFilter("Completed")} className={classForCompleted}>Completed</button>
                <button onClick={ () => this.props.changeFilter("Active")} className={classForActive}>Active</button>
            </div>
        )
    }
}

export default Footer