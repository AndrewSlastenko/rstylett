import React, { Component } from "react";

class CV extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null,
            isLoading: true
        }
    }

    componentDidMount() {
        this.setState({isLoading: true});

        fetch('http://localhost:8080/api/cv')
            .then(response => response.json())
            .then(data => this.setState({user:data, isLoading:false}));
    }

    render() {
        const {user, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }
        return (
            <div className="cvbody">
                <h2>CV</h2>
                <div>
                    <p>First name: {user.firstName}</p>
                    <p>Last name: {user.lastName}</p>
                    <p>Industry: {user.industry.name}</p>
                    <p>Schedule: {user.schedule.name}</p>
                    <p>Education: {user.education.area} {user.education.degree} at {user.education.institute} </p>
                    <p>Key skills: <ul>
                        {user.skills.map((skill) =>
                            <li>{skill.name}</li>
                        )}
                    </ul></p>
                    <p>Languages: <ul>
                        {user.languages.map((language) =>
                            <li>{language.name}</li>
                        )}
                    </ul></p>
                </div>
            </div>
        );
    }
}

export default CV;