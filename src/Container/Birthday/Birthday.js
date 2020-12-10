import React, { Component } from "react";
import "./Birthday.css";
import Person from "../../Component/Person";
import ShowPerson from "../../Component/ShowPerson/ShowPerson";
import Modal from "../../Component/UI/Modal/Modal";

class Birthday extends Component {
    state = {
        personDetails: [
            {
                name: "Bertie Years",
                age: "29 Years",
                image: "",
            },
            {
                name: "Hester Hogan",
                age: "32 Years",
                image: "",
            },
            {
                name: "Larry little",
                age: "42 years",
                image: "",
            },
            {
                name: "Sean walsh",
                age: "28 Years",
                image: "",
            },
            {
                name: "Lola Gardner",
                age: "30 Years",
                image: "",
            },
        ],
        showList: true,
        showPerson: false,
        person: null,
    };
    clearHandler = () => {
        // const toggle = this.state.showList;
        // this.setState({
        //     showList: !toggle,
        // });
        this.setState(
            ({ showList }, props) => {
                console.log(showList, props);
                return { showList: !showList };
            },
            () => console.log("Toggled")
        );
        console.log(this.state.showList);
    };
    showPersonHandler = (person) => {
        //  const show = this.state.showPerson
        this.setState({
            showPerson: true,
            person: person,
        });
    };
    hidePersonHandler = () => {
        this.setState({
            showPerson: false,
        });
    };
    render() {
        let persons = [];
        let button = (
            <button className="btn btn-green" onClick={this.clearHandler}>
                Show All
            </button>
        );
        if (this.state.showList) {
            button = (
                <button className="btn btn-pink" onClick={this.clearHandler}>
                    Clear All
                </button>
            );
            persons = this.state.personDetails.map((person) => {
                return (
                    <Person
                        key={person.name}
                        name={person.name}
                        age={person.age}
                        image={person.image}
                        clicked={() => this.showPersonHandler(person)}
                    />
                );
            });
        }
        let showPerson = null;
        if (this.state.showPerson) {
            showPerson = (
                <Modal show={this.state.showPerson} clicked={this.hidePersonHandler}>
                    <ShowPerson person={this.state.person} />
                </Modal>
            );
        }
        return (
            <>
                {showPerson}
                <div
                    className="birthday"
                    style={{
                        filter: showPerson ? "blur(2px)" : null,
                        backgroundColor: showPerson ? "grey" : null,
                    }}
                >
                    <h2 className="heading">{persons.length} birthdays today</h2>
                    {persons}
                    {button}
                </div>
            </>
        );
    }
}
export default Birthday;
