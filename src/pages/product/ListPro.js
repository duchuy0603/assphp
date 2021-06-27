import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Search from "../../components/Search";
import Pagination from "../../Pagination";
import { API } from "../../config";
function ListPro({ todos, onRemove }) {
  const userId=localStorage.getItem('id')
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   const getProducts = async () => {
  //     const newProducts = JSON.parse(localStorage.getItem('products'));
  //     setProducts(newProducts);
  //   }
  //   getProducts();
  // }, [])
  
  return (
    <div>
      
      <h2>Quản lý Sản Phẩm</h2>
      {/* <Search/> */}
      <button className="btn btn-primary " ><NavLink className="btnAdd" to="/admin/addproduct">Thêm Sản Phẩm</NavLink></button>
      <div class="table-responsive">
        <table class="table table-striped table-sm">
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
            {todos.map((x, index) => (
              <tr key={index}>
                <td>{x._id}</td>
                <td>{x.name}</td>
                <td>{x.price}</td>
                <td> <img src={"http://localhost:4000/api/products/photo/" + x._id} alt="" height="120px" width="110px" /></td>
               
                <td>{x.quantity}</td>
                <td>{x.categoryId}</td>
                <td>{x.status}
                </td>
                <NavLink to={"/admin/editproduct/" + x._id}><td><button className="btn btn-primary" >Update</button></td></NavLink>
                <td><button className="btn btn-danger" onClick={() => onRemove(x._id,userId)} >Delete</button></td>

              </tr>

            ))}

          </tbody>
        </table>
      </div>
      {/* <Pagination/> */}
    </div>
  )
}

export default ListPro;