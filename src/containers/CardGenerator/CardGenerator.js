import React from "react";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";
import "./CardGenerator.scss";
import defaultImage from "../../components/Photo/DefaultImage/DefaultImage";
import ls from "../../services/localStorage";

class CardGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        palette: "",
        name: "",
        job: "",
        email: "",
        phone: "",
        linkedin: "",
        github: "",
        photo: defaultImage,
      },
      isAvatarDefault: true,
      activeCollapsible: "",
    };
    this.fileInput = React.createRef();
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.updateAvatar = this.updateAvatar.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.changeCollapsible = this.changeCollapsible.bind(this);
  }

  componentDidMount() {
    // get info from localstorage
    const userInfoGetLs = ls.get("userInfo", this.state.userData);
    this.setState({
      userData: userInfoGetLs,
    });
  }

  componentDidUpdate() {
    // guardar info en localstorage
    ls.set("userInfo", this.state.userData);
  }

  handleChangeInput(ev) {
    // destructuring
    const target = ev.target;
    // const value = target.value;
    // const id = target.id;
    const { value, name } = target;
    console.log(value);
    const updatedState = this.state.userData;
    updatedState[name] = value;

    // ES6 syntax
    // recursive merge ?
    this.setState({
      userData: updatedState,
    });
    console.log(this.state.userData);
  }

  updateAvatar(img) {
    const { userData } = this.state;
    this.setState((prevState) => {
      const newProfile = { ...userData, photo: img };
      return {
        userData: newProfile,
        isAvatarDefault: false,
      };
    });
  }

  handleReset() {
    this.setState({
      userData: {
        palette: "",
        name: "",
        job: "",
        email: "",
        phone: "",
        linkedin: "",
        github: "",
        photo: defaultImage,
      },
      isAvatarDefault: true,
    });
  }

  changeCollapsible(targetId) {
    console.log("Target:", targetId);
    // actualizar estado activeCollapsible con target
    this.setState({
      activeCollapsible:
        targetId === this.state.activeCollapsible ? "" : targetId,
    });
  }

  render() {
    // viva el destructuring!
    const { userData, isAvatarDefault } = this.state;

    return (
      <div>
        <Header />
        <div className="page__container">
          <Card
            userDataInfo={this.state.userData}
            avatar={userData.photo}
            handleReset={this.handleReset}
            palette={this.state.userData.palette}
          />
          <Form
            userDataInfo={this.state.userData}
            handleChangeInput={this.handleChangeInput}
            avatar={userData.photo}
            isAvatarDefault={isAvatarDefault}
            updateAvatar={this.updateAvatar}
            changeCollapsible={this.changeCollapsible}
            activeCollapsible={this.state.activeCollapsible}
          />
        </div>
        <Footer />
      </div>
    );
  }
}
export default CardGenerator;
