import React from 'react';
import Header from '../../components/Header/Header';
import Card from '../../components/card/Card';
import Form from '../../components/Form/Form';
import Footer from '../../components/Footer/Footer';
import './CardGenerator.scss';
import defaultImage from '../../components/Photo/DefaultImage/DefaultImage';

class CardGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        palette: '',
        name: '',
        job: '',
        email: '',
        phone: '',
        linkedin: '',
        github: '',
        photo: defaultImage,
      },
      isAvatarDefault: true,
      profile: {
        avatar: defaultImage,
      },
    };
    this.fileInput = React.createRef();
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.updateAvatar = this.updateAvatar.bind(this);
  }

  // función que toma los inputs
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

  render() {
    // viva el destructuring!
    const { userData, isAvatarDefault } = this.state;

    return (
      <div>
        <Header />
        <div className='page__container'>
          <Card userDataInfo={this.state.userData} avatar={userData.photo} />
          <Form
            userDataInfo={this.state.userData}
            handleChangeInput={this.handleChangeInput}
            avatar={userData.photo}
            isAvatarDefault={isAvatarDefault}
            updateAvatar={this.updateAvatar}
          />
        </div>
        <Footer />
      </div>
    );
  }
}
export default CardGenerator;
