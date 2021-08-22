import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
var userId = localStorage.getItem('id')
function Search({ todos, onRemove }) {
    const [search, setsearch] = useState([]);
    return (
        <div>

            <input className="user" type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="search" onChange={e => setsearch(e.target.value)} />
            <br />
            <button className="btn btn-primary " ><NavLink className="btnAdd" to="/admin/addproduct">Thêm Sản Phẩm</NavLink></button>

            {todos.filter((val) => {
                if (search == "") {
                    return val;
                } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
                    return val;
                }

            }).map((val, key) => {
                return (
                    <div className="user" key={key}>

                        <table className="table table-striped table-sm mx-2 px-4">
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>Name</th>
                                    <th>Pirce</th>
                                    <th>Image</th>
                                    <th>Quantity</th>
                                    <th>Category</th>
                                    <th>status</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr >
                                    <td>{val._id}</td>
                                    <td>{val.name}</td>
                                    <td>{val.price}</td>
                                    <td> <img src={"http://localhost:4000/api/products/photo/" + val._id} alt="" height="120px" width="110px" /></td>

                                    <td>{val.quantity}</td>
                                    <td>{val.categoryId}</td>
                                    <td>{val.status}
                                    </td>
                                    <NavLink to={"/admin/editproduct/" + val._id}><td><button className="btn btn-primary" >Update</button></td></NavLink>
                                   
                                    <td>              <Button
                                        variant="contained"
                                        color="secondary"
                                        
                                        startIcon={<DeleteIcon />}
                                        onClick={()=>onRemove(val._id,userId)}
                                    >
                                        Delete
                                    </Button></td>

                                </tr>



                            </tbody>
                        </table>
                    </div>
                )
            })
            }
        </div>
    );
}

export default Search;
{/* <thead>
<tr>
  <th>id</th>
  <th>Name</th>
  <th>Pirce</th>
  <th>Image</th>
  <th>Quantity</th>
  <th>Category</th>
  <th>status</th>
  <th></th>
  <th></th>
</tr>
</thead> */}