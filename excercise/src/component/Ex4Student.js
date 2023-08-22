import {Component} from "react";

class Ex4Student extends Component {
    constructor() {
        super();
        this.state = {
            students: [
                {
                    company: 'Alfreds Futterkiste',
                    contact: 'Maria Anders',
                    country: 'Germany'
                },
                {
                    company: 'Centro comercial Moctezuma',
                    contact: 'Francisco Chang',
                    country: 'Mexico'
                },
                {
                    company: 'Ernst Handel',
                    contact: 'Roland Mendel',
                    country: 'Austria'
                },
                {
                    company: 'Island Trading',
                    contact: 'Helen Bennett',
                    country: 'UK'
                },
                {
                    company: 'Laughing Bacchus Winecellars',
                    contact: 'Yoshi Tannamuri',
                    country: 'Canada'
                },
                {
                    company: 'Magazzini Alimentari Riuniti',
                    contact: 'Giovanni Rovelli',
                    country: 'Italy'
                }
            ]
        }
    }

    render() {
        return (
            <>
                <table className={'table'}>
                    <thead>
                    <tr>
                        <th scope={'col'}>Company</th>
                        <th scope={'col'}>Contact</th>
                        <th scope={'col'}>Country</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.students.map((student, index) =>
                        (
                            <tr className={'col'} key={index}>
                                <td>{student.company}</td>
                                <td>{student.contact}</td>
                                <td>{student.country}</td>
                            </tr>
                        )
                    )}
                    </tbody>
                </table>
            </>
        )
    }
}

export default Ex4Student;