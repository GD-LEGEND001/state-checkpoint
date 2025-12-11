"use client";
import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Khaleed ",
        bio: "A curious learner exploring the world of code.",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6muRn4lg15ePCU7KStYWT8bgrnz-zUc40fg&s",
        profession: "Software Developer",
      },
      shows: false,
      mountedTime: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ mountedTime: this.state.mountedTime + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState({ shows: !this.state.shows });
  };

  render() {
    const { person, shows, mountedTime } = this.state;

    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-6">Next.js Class Component Checkpoint</h1>

        <button
          onClick={this.toggleShow}
          className="px-6 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
        >
          {shows ? "Hide Profile" : "Show Profile"}
        </button>

        <p className="mt-4 text-lg">
          Time since component mounted:{" "}
          <span className="font-semibold">{mountedTime}</span> seconds
        </p>

        {shows && (
          <div className="mt-8 p-6 bg-white rounded-lg shadow-lg w-full max-w-sm text-center">
            <img
              src={person.imgSrc}
              alt="profile"
              className="w-48 h-48 mx-auto rounded-lg object-cover shadow"
            />
            <h2 className="text-2xl font-semibold mt-4">{person.fullName}</h2>
            <p className="text-gray-600 mt-2">{person.bio}</p>
            <h4 className="text-blue-700 font-medium mt-2">{person.profession}</h4>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
