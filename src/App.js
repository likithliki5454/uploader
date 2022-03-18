import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
    };

    this.onImageChange = this.onImageChange.bind(this);
  }


  onImageChange = (event) => { 
    var output = event.target.value;
    var extension = output.split(".").pop();
    console.log(extension);
    console.log(typeof extension);

    if (event.target.files && extension == "jpeg" || extension == "jpg"   && event.target.files[0]) {
      let img = event.target.files[0];

      this.setState({
        image: URL.createObjectURL(img)
      });
      alert("sucessfully submitted");
    } else {
     
      alert("invalid");
    }
  };

  render() {
    return (
      <div>
        <h1>Select Image</h1>
        <input
          id="filename"
          type="file"
          name="myImage"
          accept="image/JPEG "
          onChange={this.onImageChange}
        />

        <div>
          <img src={this.state.image} />
        </div>
      </div>
    );
  }
}
export default App;
