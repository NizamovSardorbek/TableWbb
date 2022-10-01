import styled from "styled-components";
export const Container = styled.div`
  margin-left: 200px;
  margin-top: 200px;
  width: 430px;
  height: 200px;
  border: 1px solid red;
  overflow: auto;
  position: relative;
  .Ids {
    color: red;
    position: sticky;
    top: 0px;
    z-index: 999;
    background: white;
  }
  .Ids2 {
    color: red;
    position: sticky;
    left: 0px;
    z-index: 999;
    background: white;
  }
  .Nums {
    color: red;
    position: sticky;
    left: 0px;
    z-index: 99;
    background-color: white;
  }
  .Action {
    color: green;
    position: sticky;
    right: 0px;
    z-index: 99;
    background-color: white;
  }
  .Button {
    color: green;
    position: sticky;
    right: 40px;
    z-index: 99;
    background-color: white;
  }
`;
export const Tables = styled.table``;
export const Button = styled.button`
  color: red;
  border-radius: 15px;
  border-color: #22c722;
  width: 100px;
  height: 30px;
`;
export const TR = styled.tr`
  border: 1px solid red;
  width: 200px;
`;
export const Thead = styled.thead`
  width: 1000px;
  border: 1px solid red;
`;
export const TBody = styled.tbody``;
export const TH = styled.th``;

export const TD = styled.td``;

export const BT = styled.td`
  display: flex;
  color: green;
  position: sticky;
  right: 0px;
  z-index: 99;
  background-color: white;
`;
