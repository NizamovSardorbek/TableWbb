import React, { Component } from "react";
import {
  BT,
  Button,
  Container,
  Tables,
  TBody,
  TD,
  TH,
  Thead,
  TR,
} from "./Crudstyle";

class Crud extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: "Sardorbek",
          age: 21,
        },
        {
          id: 2,
          name: "Sardorbek",
          age: 17,
        },
        {
          id: 3,
          name: "Hojiakbar",
          age: 18,
        },
        {
          id: 4,
          name: "Ruqiya",
          age: 19,
        },
        {
          id: 5,
          name: "Sardor",
          age: 21,
        },
        {
          id: 6,
          name: "Sardor",
          age: 17,
        },
        {
          id: 7,
          name: "Hojiakbar",
          age: 18,
        },
        {
          id: 8,
          name: "Ruqiya",
          age: 19,
        },
      ],
      Adding: "",
      AddName: "",
      AddAge: "",
      selected: null,
      NewName: "",
      NewAge: "",
    };
  }
  render() {
    const onDelete = (ids) => {
      this.setState({ data: this.state.data.filter((val) => val.id !== ids) });
    };

    const onEdit = (value) => {
      this.setState({ selected: value });
    };
    const onCancel = () => {
      this.setState({ selected: null });
    };
    const onSave = () => {
      let res = this.state.data.map((val) =>
        val.id === this.state.selected?.id
          ? {
              ...val,
              name: this.state.NewName,
              age: this.state.NewAge,
            }
          : val
      );
      this.setState({ data: res, selected: null });
    };
    return (
      <div>
        <Container>
          <Tables>
            <Thead>
              <TR className="Ids" Ids="top">
                <TH className="Ids2" Ids2="top2">
                  Ids
                </TH>
                <TH>Name</TH>
                <TH>Age</TH>
                <TH>Name</TH>
                <TH>Name</TH>
                <TH>Age</TH>
                <TH className="Action">Action</TH>
              </TR>
            </Thead>
            <TBody>
              {this.state.data.map((value, index) => (
                <TR key={value.id}>
                  <TD className="Nums">{index + 1}</TD>
                  <TD>
                    {this.state.selected?.id === value.id ? (
                      <input
                        onChange={(e) =>
                          this.setState({ NewName: e.target.value })
                        }
                        type="text"
                        defaultValue={this.state.selected?.name}
                      />
                    ) : (
                      value.name
                    )}
                  </TD>
                  <TD>
                    {this.state.selected?.id === value.id ? (
                      <input
                        onChange={(e) =>
                          this.setState({ NewAge: e.target.value })
                        }
                        defaultValue={this.state.selected?.age}
                        type="number"
                      />
                    ) : (
                      value.age
                    )}
                  </TD>
                  <TD>sardor</TD>
                  <TD>sardor</TD>
                  <TD>sardor</TD>
                  <TD className="Action">
                    {this.state.selected?.id === value.id ? (
                      <BT>
                        <Button onClick={onSave}>save</Button>{" "}
                        <Button onClick={onCancel}>cancel</Button>
                      </BT>
                    ) : (
                      <BT>
                        <Button onClick={() => onDelete(value.id)}>
                          delete
                        </Button>
                        <Button onClick={() => onEdit(value)}>edit</Button>
                      </BT>
                    )}
                  </TD>
                </TR>
              ))}
            </TBody>
          </Tables>
        </Container>
      </div>
    );
  }
}

export default Crud;