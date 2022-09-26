import React, { Component } from "react";

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: "Sardor",
          age: 21,
          address: "Namangan",
          status: "Student",
          nickname: "NS",
          univ: "Islam academy",
          job: "devoloper",
        },
        {
          id: 1,
          name: "Sardor",
          age: 21,
          address: "Namangan",
          status: "Student",
          nickname: "NS",
          univ: "Islam academy",
          job: "devoloper",
        },
        {
          id: 1,
          name: "Sardor",
          age: 21,
          address: "Namangan",
          status: "Student",
          nickname: "NS",
          univ: "Islam academy",
          job: "devoloper",
        },
        {
          id: 1,
          name: "Sardor",
          age: 21,
          address: "Namangan",
          status: "Student",
          nickname: "NS",
          univ: "Islam academy",
          job: "devoloper",
        },
        {
          id: 1,
          name: "Sardor",
          age: 21,
          address: "Namangan",
          status: "Student",
          nickname: "NS",
          univ: "Islam academy",
          job: "devoloper",
        },
        {
          id: 1,
          name: "Sardor",
          age: 21,
          address: "Namangan",
          status: "Student",
          nickname: "NS",
          univ: "Islam academy",
          job: "devoloper",
        },
      ],
      selected: null,
    };
  }
  render() {
    const onEdit = (value) => {
      this.setState({ selected: value });
    };
    return (
      <div>
        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Addres</th>
              <th>Status</th>
              <th>NickName</th>
              <th>Univ</th>
              <th>Job</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((value, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>
                  {  this.state.selected?.id === value.id ? <input/> :
                  value.name}
                </td>
                <td>{value.age}</td>
                <td>{value.address}</td>
                <td>{value.status}</td>
                <td>{value.nickname}</td>
                <td>{value.univ}</td>
                <td>{value.job}</td>
                <td>
                  {this.state.selected?.id === value.id ? (
                    <>
                      <button>save</button>
                      <button>cancel</button>
                    </>
                  ) : (
                    <button onClick={() => onEdit(value)}>edit</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
