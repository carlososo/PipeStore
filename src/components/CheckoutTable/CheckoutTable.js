import React from 'react';
import Swal from 'sweetalert2';
import {notAvailable} from '../../utils/img/imageExports';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const CheckoutTable =({products, setProduct})=>{

    const deleteFromProducts=(id, product_name)=>{
      Swal.fire({
        title: 'Are you sure?',
        text: `${product_name} will be removed from your Shopping Cart`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#A0CC36',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          const editedProducts = products.filter((product)=>product._id!==id)
          setProduct(editedProducts);
          Swal.fire(
            'Deleted!',
            'Removed from your Shopping Cart.',
            'success'
          )
        }
      })
    }

    const renderTable =()=>{
        const renderedTable = products.map((product) => (
          <tr key={product._id}>
            <td>
              <h4 className="ui image header">
                <img
                  src={product.image || notAvailable}
                  alt={product.product_name}
                  className="ui mini rounded image"
                />
                <div className="content">
                    {product.product_name}
                  <div className="sub header">{product.brand}</div>
                </div>
              </h4>
            </td>
            <td className="text-center">{product.counter}</td>
            <td className="text-center">${product.priceXquantity}</td>
            <td className="text-center">
            <button onClick={()=>deleteFromProducts(product._id )} className="__checkout_table_button"><EditIcon color={'primary'}/></button></td>
            <td className="text-center">
            <button onClick={()=>deleteFromProducts(product._id, product.product_name)} className="__checkout_table_button"><DeleteIcon color='error'/></button></td>
            
          </tr>
        ));
        return renderedTable;
    }

    return(
        <table className="ui very basic collapsing celled table">
  <thead>
    <tr>
    <th>Product</th>
    <th>Quanatity</th>
    <th>Subtotal</th>
    <th>Edit Product</th>
    <th>Remove Product</th>
  </tr>
  </thead>
  <tbody>
    {renderTable()}
  </tbody>
</table>
    )
};

export default CheckoutTable