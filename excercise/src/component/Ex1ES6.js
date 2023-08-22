import {Component} from "react";

export class Ex1ES6 extends Component {
    constructor() {
        super();
        this.state = {
            courses:
                [
                    {
                        id: 1,
                        title: "ReactJS Tutorial",
                        rating: 4.2,
                    },
                    {
                        id: 2,
                        title: "Angular Tutorial",
                        rating: 2.5,
                    },
                    {
                        id: 3,
                        title: "VueJS Tutorial",
                        rating: 3.8,
                    },
                    {
                        id: 4,
                        title: "Java Tutorial",
                        rating: 4,
                    },
                    {
                        id: 5,
                        title: "JavaScript Tutorial",
                        rating: 3.5,
                    },
                ],

            addedCourses:
                [
                    {
                        id: 6,
                        title: "PHP Tutorial",
                        rating: 3,
                    },
                    {
                        id: 7,
                        title: "C# Tutorial",
                        rating: 2,
                    },
                    {
                        id: 8,
                        title: "Docker Tutorial",
                        rating: 3.8,
                    },
                ]
        }
    }

    render() {
        return (
            <>
                <h3>Danh sach cac bai dang co rating >=4:</h3>
                {
                    this.state.courses.map((item) => {
                        if (item.rating >= 4) {
                            return <p> ['{item.id + ", " + item.title + ", " + item.rating}']</p>
                        }
                    })
                }

                <h3>Danh sach cac bai dang co rating 4:</h3>
                {
                    this.state.courses.map((item) => {
                        if (item.rating < 4) {
                            return <p> ['{item.id + ", " + item.title + ", " + item.rating}']</p>
                        }
                    })
                }

                <h3>Danh sach mang gop:</h3>
                {
                    [...this.state.courses, ...this.state.addedCourses].map((item) => (
                        <p> ['{item.id + ", " + item.title + ", " + item.rating}']</p>
                    ))
                }
            </>
        )
    }
}