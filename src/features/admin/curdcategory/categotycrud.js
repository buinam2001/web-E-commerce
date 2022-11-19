import React, { useState , useEffect} from 'react';
import { useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { createcategory } from "../../slices/categorySlies";
import { useNavigate } from 'react-router-dom';
import servicerCategory from '../../../services/servicercategory';
import { updateproduct } from '../../slices/categorySlies';
import { pathprivate } from '../../../routers/path';
function CategoryAdd() {
    const [category, setcategory] = useState("");
    var navigate = useNavigate();
    let { id } = useParams();
    
    const dispatch = useDispatch();

    useEffect( () => {
        async function callapi()
        {
            let getapi  = await servicerCategory.get(id);
            let datapi = getapi.data;
            setcategory(datapi);
        }
        if(id){
            callapi();
        } 

         // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    const getvalue = (e) =>
    {
        e.preventDefault();

        if(id)
        {


            let name = e.target.category.value;
            console.log(name);

            dispatch(updateproduct({id,name}));
            navigate(pathprivate.CategoryAdmin);

        }
        else
        {
   
         let name = e.target.category.value;
            dispatch(createcategory({name}));
            navigate(pathprivate.CategoryAdmin);
        }
        

    }     

    const handelchange = (e) =>
    {
        var data = e.target.value;

        setcategory({...category,name:data});
    }

   
  return (
      <div className="Cate">
        <form className="cate_from" onSubmit={getvalue}>
            <div className="container">
            <div className="row ">
                <div className="col-9">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">thêm danh mục</label>
                    <input type="text" onChange={handelchange} value={category.name || ""} name="category" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="tên sản phẩm" />
                </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </div>
            </div>
        </form>

      </div>
  );
}

export default CategoryAdd;
