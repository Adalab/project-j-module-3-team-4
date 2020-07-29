import React from "react";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";
import "./CardGenerator.scss";

class CardGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        palette: 1,
        name: "",
        job: "",
        email: "",
        phone: "",
        linkedin: "",
        github: "",
        // photo: "",
      },
    };
    this.fileInput= React.createRef();
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  // función que toma los inputs
  handleChangeInput(ev) {

    // destructuring 

    const target = ev.target;
    const value = target.value;
    const id = target.id;
    const updatedState = this.state.userData;
    updatedState[id] = value;
    
    // ES6 syntax
    // recursive merge ? 
    this.setState({
      userData: updatedState
    })
   }



  render() {
    return (
      <div>
        <Header />
        <div className="page__container">
          <Card 
            userDataInfo={this.state.userData} />
          <Form 
            userDataInfo={this.state.userData}
            handleChangeInput={this.handleChangeInput} />
        </div>
        <Footer />
      </div>
    );
  }
}
export default CardGenerator;
