import React, { useEffect, useState } from 'react'
import ProductApi from '../api/ProductApi'
const SearchPro = ({onRemove}) => {
    const { search, setsearch } = useState('');
    const { data: product } = ProductApi.getAll();
    
    return (
        <>
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                    onChange={(e) => {
                        setsearch(e.target.value);
                    }}
                />
      {product.filter((val) => {
                if (search == "") {
                    return val;
                } else if (val.products.tolowerCase().includes(search.tolowerCase())) {
                    return val
                      
                    
                }
            }).map((val,key)=>{
                  return(
                      <>
                    <h2>Section title</h2>
                    <div Clas="table-responsive">
                      <table Clas="table table-striped table-sm">
                        <thead>
                          <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>Pirce</th>
                            <th>Image</th>
                            <th>Quantity</th>
                          </tr>
                        </thead>
                        <tbody>
                      
                        {val.map((x, index) => (
                               <tr key={index}>
                               <td>{x._id}</td>
                               <td>{x.name}</td>
                               <td>{x.price}</td>
                               <td>information</td>
                               <td>text</td>
                               <td><button className="btn btn-danger" onClick={() => onRemove(x._id)} >Delete</button></td>
                             </tr>
                          
                        ))}
                     
                        </tbody>
                      </table>
                      </div>
                      </>
                  )
            })}

                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
      
        </>
    )


}


export default SearchPro;
