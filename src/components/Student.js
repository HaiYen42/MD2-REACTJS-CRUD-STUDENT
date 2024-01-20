import React, { Component } from "react";
class Student extends Component {
  handleUpdate = () => {
    this.props.studentPropToggle(true);
  };
  dataStudent = ()=>{
    this.handleUpdate();
    this.props.getDataStudent(this.props.stInfo)
  }
  render() {
    let { stInfo } = this.props;
    return (
          <tr>
            <td>{this.props.stt + 1}</td>
            <td>{stInfo.studentId}</td>
            <td>{stInfo.studentName}</td>
            <td>{stInfo.studentage}</td>
            <td>{stInfo.sex ? "Nam" : "Nữ"}</td>
            <td>
              <div className="template-demo">
                <button onClick={this.dataStudent} type="button" className="btn btn-danger btn-icon-text">
                  Xem
                </button>
                <button
                  type="button"
                  className="btn btn-warning btn-icon-text"
                  onClick={this.handleUpdate}
                >
                  Sửa
                </button>
                <button type="button" className="btn btn-success btn-icon-text">
                  Xóa
                </button>
              </div>
            </td>
          </tr>
        /* <tr>
          <td>2</td>
          <td>SV002</td>
          <td>Nguyễn Văn B</td>
          <td>21</td>
          <td>Nữ</td>
          <td>
            <div className="template-demo">
              <button type="button" className="btn btn-danger btn-icon-text">
                Xem
              </button>
              <button type="button" className="btn btn-warning btn-icon-text">
                Sửa
              </button>
              <button type="button" className="btn btn-success btn-icon-text">
                Xóa
              </button>
            </div>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>SV003</td>
          <td>Nguyễn Văn C</td>
          <td>19</td>
          <td>Nam</td>
          <td>
            <div className="template-demo">
              <button type="button" className="btn btn-danger btn-icon-text">
                Xem
              </button>
              <button type="button" className="btn btn-warning btn-icon-text">
                Sửa
              </button>
              <button type="button" className="btn btn-success btn-icon-text">
                Xóa
              </button>
            </div>
          </td>
        </tr> */
    )
  }
}
export default Student;
