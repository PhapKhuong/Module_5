import {useSelector} from "react-redux";

function ContactList() {
    let contacts = useSelector(state => state)

    return (
        <div>
            <h3>List of contact</h3>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Message</th>
                </tr>
                </thead>
                <tbody>
                {
                    contacts.map((c, index) => (
                        <tr key={index}>
                            <td>{c.name}</td>
                            <td>{c.email}</td>
                            <td>{c.phone}</td>
                            <td>{c.message}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}

export default ContactList;