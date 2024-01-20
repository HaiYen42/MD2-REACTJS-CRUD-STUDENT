import React, {Component} from 'react';
class Control extends Component{
  //Khởi tạo State để chứa dữ liệu input search
  constructor(){
    super();
    this.state = {
      searchData:""
    }
  }
  handleNewStudent=()=>{
    //B2. Gọi propToggle truyền từ cha xuống
    this.props.actionAndToggleProp(true,createStudent);
  }
  handleChange = (event)=>{
    let name=event.target.name;
    //Giá trị nhập vào của ô input có tên search khi thực hiện sự kiện onchange
    let value=event.target.value
    //Lưu giá trị vào state có tên là searchData    
    this.setState({
      searchData:value
    })
  }
  //Thực hiện Search
  handleSearch=()=>{
    //Thực hiện search chuyển dữ liệu SearchData sang component App
    this.props.handleSearchProp(this.state.searchData);
  }
  handleSort=(event)=>{
    let value= event.target.value;
    let arrSort=value.split("-");
    this.setState({
      sortDir: arrSort[0],
      sortBy: arrSort[1],
    })
  }
    render (){
        return (
            <div className="card-header">
              <div className="row">
                <div className="col-3">
                  <button
                    type="button"
                    className="btn btn-primary btn-icon-text"
                    onClick={this.handleNewStudent}
                  >
                    Thêm mới sinh viên
                  </button>
                </div>
                <div className="col-6">
                  <form className="search-form" action="#">
                    <i className="icon-search" />
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Search Here"
                      title="Search here"
                      name='search'
                      onChange={this.handleChange}
                    />
                    <button className="btn btn-primary btn-icon-text" onClick={this.handleSearch}>
                      Tìm kiếm
                    </button>
                  </form>
                </div>
                <div className="col-3 d-flex align-items-center">
                  <select className="form-control" onChange={this.handleSort}>
                  <option></option>
                    <option value="studentName-ASC">Tên tăng dần</option>
                    <option value="studentName-DESC">Tên giảm dần</option>
                    <option value="age-ASC">Tuổi tăng dần</option>
                    <option value="age-DESC">Tuổi giảm dần</option>
                  </select>
                </div>
              </div>
            </div>
        )
    }
}
export default Control;