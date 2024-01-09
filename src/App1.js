import React from "react";
class App1 extends React.Component
{
   constructor()
   {
    super();
    this.state ={std:
      [{rno:101,name:"Mahi",mobile:'1234567890',fees:1234.45,cls:'11th',p:33,c:44,m:56},
      {rno:102,name:"Chiku",mobile:'5234567890',fees:2234.45,cls:'11th',p:44,c:43,m:57},
      {rno:103,name:"Piku",mobile:'9234567890',fees:1334.45,cls:'12th',p:56,c:57,m:59},
      {rno:104,name:"Miki",mobile:'8234567890',fees:1534.45,cls:'11th',p:35,c:87,m:78},
      {rno:105,name:"Miku",mobile:'7234567890',fees:1434.45,cls:'12th',p:31,c:29,m:22},
    ],isRollExists:false}
   }

   addUser = ()=>{
    var rno = +this.roll.value;
    var name = this.name.value;
    var cls = this.cls.value;
    var fees = this.fees.value;
    var mobile= this.mobile.value;
    var p = this.p.value*1;
    var c = this.c.value*1;
    var m = this.m.value*1;


    alert(rno+"  "+name+" : "+cls+" : "+fees+" : "+mobile+" : "+fees+" : "+p+" : "+c+" : "+c+" : "+m);

var obj ={rno,name,mobile,fees,cls,p,c,m}
    
    var arr = this.state.std;
    arr.push(obj);
    this.setState({std:arr});
    this.clearFields();
   }

    clearFields = ()=>{
      this.roll.value = '';
      this.name.value = '';
      this.cls.value = '';
      this.fees.value = '';
      this.mobile.value = '';
      this.p.value = '';
      this.c.value = '';
      this.m.value = '';
   }

   checkRoll = (event)=>{
    var roll=event.target.value;
    console.log("Roll No is :"+roll)
    for(var st of this.state.std){
      if( st.rno==roll){
        this.setState({isRollExists:true})
      }
    }
   }

   render()
   {
      return<div className="container">
          <h1 style={{textAlign:'center', color:'red'}}>
            Enter Student Record's
          </h1>

          <input type="number" placeholder="Enter Roll Number" required="" ref={(data)=>this.roll = data} 
          onBlur={this.checkRoll} onFocus={()=>this.setState({isRollExists:false})}/>
          &nbsp;
          &nbsp;
          <input type="text" placeholder="Enter Name" required="" ref={(data)=>this.name = data}/>
          &nbsp;
          &nbsp;
          <input type="text" placeholder="Enter Mobile" ref={(data)=>this.mobile = data}/>
          &nbsp;
          &nbsp;
          <input type="number" placeholder="Enter Fees" ref={(data)=>this.fees = data}/>
          <br/>
          <br/>

          <select ref={(data)=>this.cls =data}>
            <option value="">Select Class</option>
            <option value="11th">11 th</option>
            <option value="12th">12 th</option>
          </select>
          &nbsp;
          &nbsp;
          <input type="number" placeholder="Enter phy Marks" ref={(data)=>this.p = data}/>
          &nbsp;
          &nbsp;
          <input type="number" placeholder="Enter cem Marks" ref={(data)=>this.c = data}/>
          &nbsp;
          &nbsp;
          <input type="number" placeholder="Enter math Marks" ref={(data)=>this.m = data}/>
          <br/><br/>
          {this.state.isRollExists ? 
          <b style={{color:'red', fontSize: '20px'}}>
             Roll No. is already registaed </b>:
          <button className="btn btn-success" onClick={this.addUser}>Add Student</button> }

        
          <h1 style={{textAlign:'center', color:'red'}}>
            Show Student Record's
          </h1> 
         <br/>
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
                {this.state.std.map((st,index)=>{

                  var total = st.p +st.c +st.m;
                  var per = (total/3).toFixed(3);
                     return<tr>
                      <td>{index+1}</td>
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
                      <td>{(per>=0) ? "A Grade" : ((per>=55) ? "B Grade" : ((per>=45) ? "C Grade" : 
                           ((per>=33) ? "D Grade " : "Fail")))}</td>
                      <td>
                        <button className="btn btn-success"> Edit </button>
                        &nbsp;&nbsp; || &nbsp;&nbsp;

                        <button className="btn btn-danger">Delete</button>
                      </td>
                     </tr>
                })}
              </tbody>
            </table>
          </div>
      </div>
   }
}
export default App1;


