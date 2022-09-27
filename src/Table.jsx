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
          id: 2,
          name: "Sardor",
          age: 21,
          address: "Namangan",
          status: "Student",
          nickname: "NS",
          univ: "Islam academy",
          job: "devoloper",
        },
        {
          id: 3,
          name: "Sardor",
          age: 21,
          address: "Namangan",
          status: "Student",
          nickname: "NS",
          univ: "Islam academy",
          job: "devoloper",
        },
        {
          id: 4,
          name: "Sardor",
          age: 21,
          address: "Namangan",
          status: "Student",
          nickname: "NS",
          univ: "Islam academy",
          job: "devoloper",
        },
        {
          id: 5,
          name: "Sardor",
          age: 21,
          address: "Namangan",
          status: "Student",
          nickname: "NS",
          univ: "Islam academy",
          job: "devoloper",
        },
        {
          id: 6,
          name: "Sardor",
          age: 21,
          address: "Namangan",
          status: "Student",
          nickname: "NS",
          univ: "Islam academy",
          job: "devoloper",
        },
      ],
      selected: {},
      newName: "Sardor",
      newAge: "21",
      newAddress: "Namangan",
      newStatus: "Student",
      newNickname: "NS",
      newUniv: "Islam academy",
      newJob: "devoloper",
    };
  }
  render() {
    const onEdit = (value) => {
      this.setState({ selected: value });
      console.log(this.state.selected);
    };
    const onCancel = () => {
      this.setState({ selected: null });
    };
    const onSave = () => {
      let res = this.state.data.map((val) =>
        val.id === this.state.selected.id
          ? {
              ...this.state.selected,
                name: this.state.newName,
                age: this.state.newAge,
                address: this.state.newAddress,
                status: this.state.newStatus,
                nickname: this.state.newNickname,
                univ: this.state.newUniv,
                job: this.state.newJob,
              
            }
          : val
      );
      this.setState({ data: res, selected: null });
    };
    return (
      <div>
        <table border="1">
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
          <tbody>
            {this.state.data.map((value, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>
                  {this.state.selected?.id === value.id ? (
                    <input
                      onChange={(e) => this.setState({ name: e.target.value })}
                      defaultValue={this.state.selected?.name}
                    />
                  ) : (
                    value.name
                  )}
                </td>
                <td>
                  {this.state.selected?.id === value.id ? (
                    <input
                      type="number"
                      onChange={(e) =>
                        this.setState({ newAge: e.target.value })
                      }
                      defaultValue={this.state.selected?.age}
                    />
                  ) : (
                    value.age
                  )}
                </td>
                <td>
                  {this.state.selected?.id === value.id ? (
                    <input
                      type="text"
                      defaultValue={this.state.selected?.address}
                      onChange={(e) =>
                        this.setState({ newAddress: e.target.value })
                      }
                    />
                  ) : (
                    value.address
                  )}
                </td>
                <td>
                  {this.state.selected?.id === value.id ? (
                    <input
                      type="text"
                      defaultValue={this.state.selected.status}
                      onChange={(e) =>
                        this.setState({ newStatus: e.target.value })
                      }
                    />
                  ) : (
                    value.status
                  )}
                </td>
                <td>
                  {this.state.selected?.id === value.id ? (
                    <input
                      type="text"
                      defaultValue={this.state.selected?.nickname}
                      onChange={(e) =>
                        this.setState({ newNickname: e.target.value })
                      }
                    />
                  ) : (
                    value.nickname
                  )}
                </td>
                <td>
                  {this.state.selected?.id === value.id ? (
                    <input
                      type="text"
                      onChange={(e) =>
                        this.setState({ newUniv: e.target.value })
                      }
                      defaultValue={this.state.selected?.univ}
                    />
                  ) : (
                    value.univ
                  )}
                </td>
                <td>
                  {this.state.selected?.id === value.id ? (
                    <input
                      onChange={(e) =>
                        this.setState({ newJob: e.target.value })
                      }
                      type="text"
                      defaultValue={this.state.selected?.job}
                    />
                  ) : (
                    value.job
                  )}
                </td>
                <td>
                  {this.state.selected?.id === value.id ? (
                    <>
                      <button onClick={onSave}>Save</button>
                      <button onClick={onCancel}>cancel</button>
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
