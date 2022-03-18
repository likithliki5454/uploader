import React from "react";
import "./Table.css";
class Table extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    console.log(localStorage.getItem("Outputdata"));
    var itemsdata = localStorage.getItem("Outputdata");
    var itemsdetails = JSON.parse(itemsdata);
    this.setState({
      items: itemsdetails,
    });
  }
  render() {
    return (
      <div id="Table">
            {this.state.items.map((item) => {
              return (
              <h1>items.name</h1>
              );
            })}
      </div>
    );
  }
}

export default Table;