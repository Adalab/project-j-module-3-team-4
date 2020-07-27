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
        phone: 0,
        linkedin: "",
        github: "",
        photo: "",
      },
    };
    this.updateUserData = this.updateUserData.bind(this);
  }

  updateUserData(data) {
    this.setState({
      userData: {
        name: data.firstName,
        job: data.work,
        email: data.email,
        linkedin: data.linkedin,
        github: data.github,
      },
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="page__container">
          <Card userDataInfo={this.state.userData} />
          <Form updateUserData={this.updateUserData} />
        </div>
        <Footer />
      </div>
    );
  }
}
export default CardGenerator;
