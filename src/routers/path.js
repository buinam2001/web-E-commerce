export const pathpublic = {
    home:'/',
    CategoryProduct:'/:category',
    cart:'/cart',
    ProductDes:'/product/:id',
    NotFound:'*',
}
export const pathpublicParam = {
    homeParam:'/',
    ProductDesParam:'/product/',

}

export const pathprivate = {
    Manage:'/admin',
   

    ProductAdmin:'/admin/product',
    ProductAdd:'/admin/product/add',
    ProductEdit:'/admin/product/edit/:id',
    
    AdminOrder:'/admin/order',
    DetailOrder:'/admin/order/detailorder/:id',
    
    CategoryAdmin:'/admin/category',
    CategoryAdd:'/admin/category/add',
    CategoryEdit:'/admin/category/edit/:id',

}

export const pathprivateParam  = {

    ProductEditParam:'/admin/product/edit/',
    DetailOrderParam:'/admin/order/detailorder/',
    CategoryEditParam:'/admin/category/edit/',


}

