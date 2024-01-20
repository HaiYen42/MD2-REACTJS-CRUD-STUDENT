import logo from "./logo.svg";
import "./App.css";
import Control from "./components/Control";
import ListStudent from "./components/ListStudent";
import Form from "./components/Form";
import Student from "./components/Student";
import React,{Component} from 'react'

class App extends Component {
  constructor(){
    super();
    this.state={
      isToggle: false,
      dataShow: {},
      students: [
        {studentId:"SV001",studentName:"Nguyễn Văn Vượng",age:20, sex:true,
          birthDate: "20/4/2003", address:"Hà Nội"
        },
        {studentId:"SV002",studentName:"Giàng A Vân",age:22, sex:false,
          birthDate: "20/4/2001", address:"Hải Phòng"
        },
        {studentId:"SV003",studentName:"Nguyễn Văn Chuân",age:23, sex:true,
        birthDate: "9/9/2000", address:"TP HCM"
      }
      ],
      searchData: "",
      sortDir: "",
      sortBy: "",
      selectedStudent:"",
      actionName:"",
    }
  }
  handleActionAndToggle=(status,actionName)=>{
    //Xử lý dữ liệu truyền từ Control đến App
    // console.log(status);
    //Bật Form
    this.setState({
      isToggle:status,
      actionName: actionName,
    })
  }
  handleSearch=(searchData)=>{
    //Nhận dữ liêu SearchData và lưu và State
  }
  getListData=(data)=>{
    this.setState({dataShow: data})
    console.log(data);
  }
  handleSort=(sortDir,sortBy)=>{
    console.log(sortDir);
    console.log(sortBy);
  }
  render(){
    //Thực hiện search
  let students=[];
   if(this.state.searchData!=""){
   this.state.students.forEach(st=>{
      if (st.studentName.toLowerCase().includes(this.state.searchData.toLowerCase())) {
        students.push(st);
      }
    })
   }else{
    students=[...this.state.students]
  }
  //Thực hiện sort
  if (this.state.sortDir!="") {
    if (this.state.sortDir=="studentName") {
      if (this.state.sortBy=="ASC") {
        students.sort((a,b)=>(a.studentName>b.studentName)?1:(a.studentName<b.studentName)?-1:0)
      }else{
        //sortBy= DESC
        students.sort((a,b)=>(a.studentName>b.studentName)?1:(a.studentName<b.studentName)?-1:0)

      }
    } 
  }
  let elementForm;
  if (this.state.isToggle) {
    elementForm = <Form selectedStudent={this.state.selectedStudent} actionName={this.state.actionName}></Form>;
  } else{
    elementForm="";
  }

  return (
    <div className="App">
      <div className="row">
        <div className="col-lg-7 grid-margin stretch-card">
          <div className="card">
            {/* START CONTROL */}
            {/* B1: Truyền prop có tên propsToggle=handleToggle */}
            <Control actionAndToggleProp={this.handleActionAndToggle} handleSearchProp={this.handleSearch} handleSortProp={this.handleSort}></Control>
            {/* END CONTROL */}
            {/* START LIST STUDENT */}
            <ListStudent propToggle={this.handleToggle} students= {students} listDataStudent={this.getListData}></ListStudent>
            {/* END LIST STUDENT */}
          </div>
        </div>
        {/* START FORM SINH VIEN */}
        {elementForm}
        {/* END FORM SINH VIÊN */}
      </div>
    </div>
  );
  }
}

export default App;
