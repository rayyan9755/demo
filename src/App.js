import React from "react";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      std: [
        {
          rno: 101,
          name: "Mahi",
          mobile: "1234567890",
          fees: 1234.45,
          cls: "11th",
          p: 33,
          c: 44,
          m: 56,
        },
        {
          rno: 102,
          name: "Chiku",
          mobile: "5234567890",
          fees: 2234.45,
          cls: "11th",
          p: 44,
          c: 43,
          m: 57,
        },
        {
          rno: 103,
          name: "Piku",
          mobile: "9234567890",
          fees: 1334.45,
          cls: "12th",
          p: 56,
          c: 78,
          m: 59,
        },
        {
          rno: 104,
          name: "Miki",
          mobile: "8234567890",
          fees: 1534.45,
          cls: "11th",
          p: 65,
          c: 87,
          m: 78,
        },
        {
          rno: 105,
          name: "Miku",
          mobile: "7234567890",
          fees: 1434.45,
          cls: "12th",
          p: 31,
          c: 29,
          m: 22,
        },
      ],
    };
  }

  render() {
    return (
      <div className="container">
        <h1 style={{ textAlign: "center", color: "red" }}>
          Enter Student Record's
        </h1>

        <h1 style={{ textAlign: "center", color: "red" }}>
          Show Student Record's
        </h1>
        <br />
        <div className="table-responsive">
          <table className="table table-bordered table-striped table-hover">
            <thead>
              <tr>
                <th>Sno</th>
                <th>Roll No</th>
                <th>Name</th>
                <th>Mobile</th>
                <th>Class</th>
                <th>Fees</th>
                <th>Phy</th>
                <th>Chem</th>
                <th>Maths</th>
                <th>Total</th>
                <th>Percentage</th>
                <th>Operation</th>
              </tr>
            </thead>
            <tbody>
              {this.state.std.map((st, index) => {
                var total = st.p + st.c + st.m;
                var per = (st.p + st.c + st.m / 3).toFixed(3);
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{st.rno}</td>
                    <td>{st.name}</td>
                    <td>{st.mobile}</td>
                    <td>{st.cls}</td>
                    <td>{st.fees}</td>
                    <td>{st.p}</td>
                    <td>{st.c}</td>
                    <td>{st.m}</td>
                    <td>{total}</td>
                    <td>{per}</td>
                    <td>
                      {" "}
                      {per >= 60
                        ? "a grade "
                        : per > 55
                        ? "b grade"
                        : per >= 45
                        ? "c grade"
                        : per >= 33
                        ? "d grade"
                        : "fail."}
                    </td>
                    <button className="btn btn-success ">Edit</button>
                    &nbsp; || &nbsp;
                    <button className="btn btn-danger ">Delete</button>
                    <td></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default App;
