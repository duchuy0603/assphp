import React from 'react'
import { NavLink } from 'react-router-dom'
function ListCate({listcate,onRemovecate}) {
  let userId = localStorage.getItem("id")
    return (
        <div>
        {/* <SearchPro/> */}
        <h2>Quản lý category</h2>
        <button className="btn btn-primary " ><NavLink className="btnAdd" to="/admin/addcategory">Add</NavLink></button>
        <div class="table-responsive">
          <table class="table table-striped table-sm">
            <thead>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th></th>

                <th></th>
              </tr>
            </thead>
            <tbody>
              {listcate.map((x, index) => (
                <tr key={index}>
                  <td>{x._id}</td>
                  <td>{x.name}</td>
                  <NavLink to={"/admin/editcategory/"+x._id}><td><button className="btn btn-primary" >Update</button></td></NavLink>
                  <td><button className="btn btn-danger" onClick={() => onRemovecate(x._id,userId)} >Delete</button></td>
                </tr>
              ))}
  
            </tbody>
          </table>
        </div>
      </div>
    )
}

export default ListCate
