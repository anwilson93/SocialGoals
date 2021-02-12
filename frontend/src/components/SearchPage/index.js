import {useParams} from "react-router-dom";
import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {search} from '../../store/search.js';
import {Link} from 'react-router-dom';
import {useEffect} from 'react';
import SearchedUserGoalModal from './SearchedUserGoalModal';
function SearchPage () {
    const [showModal, setShowModal] = useState(false);
//     const params = useParams();
//     const {searchTerm} = params;
    
//     const dispatch = useDispatch()

//     useEffect (() => {
//         dispatch(search({searchTerm}))
//     }, [])
  

    const search = useSelector(state => {
        return state.search.search
    });
    let searchedUsers;
 

    if (search){
        searchedUsers = search.users
        

        if (searchedUsers.length ===0){
            return (
                <h1 className='h1'>No matching results</h1>
            )
        } else {
            return (
                searchedUsers.map(user => {
                    const userId = user.id
                    const username = user.username
                return (
                    <>
                        <div key={user.id}>
                            <button>
                                <SearchedUserGoalModal userId={userId} username={username}/>
                                {user.username}
                                <SearchedUserGoalModal userId={userId} username={username}/>
                            </button>
                        </div>
                    </>
                )
               
            })
            )
        }
    }

 

//     if (searchedProducts.length === 0){
//         return (
//             <h3>No products match the search</h3>
//         )
//     } else {
//         return (
//              <div className='product-listing'>
//                 {searchedProducts && searchedProducts.map(product => {
//                 return (
//                     <>
//                         <Link to={`/products/${product.id}`} id='link'>
//                             <img className='product-listing' style={{width: 200, height: 200}} src ={product.ImageUrls[0].url} key={product.id} alt='' /> 
//                             <div className='product-prices'>Title: {product.title}</div>
//                             <div className='product-prices'> Price: ${product.price}</div>
//                         </Link>
//                     </>
//                 )
//             })}
//             </div>
//         )
//     }
// }

return (
    <h1>ho</h1>
)
}

export default SearchPage;