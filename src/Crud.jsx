import React, { Component } from "react";
import { Body, Head, Wrap } from "./Tablestyle";

export default class Crud extends Component {
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
      ],
    };
  }
  render() {
    return (
      <Wrap>
        <Head>
          <h1>Id</h1>
          <h1>Name</h1>
          <h1>Age</h1>
          <h1>Address</h1>
          <h1>Status</h1>
          <h1>Nickname</h1>
          <h1>univ</h1>
          <h1>job</h1>
          <h1>Edit</h1>
        </Head>
        <div>
          {this.state.data.map((value, index) => (
            <Body>
              <h3>{index + 1}</h3>
              <h3>{value.name}</h3>
              <h3>{value.age}</h3>
              <h3>{value.address}</h3>
              <h3>{value.status}</h3>
              <h3>{value.nickname}</h3>
              <h3>{value.univ}</h3>
              <h3>{value.job}</h3>
              <h3>
                <button>edit</button>
              </h3>
            </Body>
          ))}
        </div>
      </Wrap>
    );
  }
}
