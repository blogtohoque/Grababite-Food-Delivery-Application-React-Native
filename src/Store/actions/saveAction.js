import { statement } from "@babel/template";
import {SAVE_CITY,SAVE_VENDOR,ADD_ITEM,ADD_QUANTITY,DECREASE_QUANTITY,DELETE_ITEM,SAVE_USERNAME,SAVE_USERDETAIL} from './actionTypes';
export const saveCity =(cityName) =>{
    return {
        type: SAVE_CITY,
        city: cityName


    };

};
export const saveVendor =(vendorName) =>{
    return {
        type: SAVE_VENDOR,
        vendorName: vendorName


    };

};

export const addItem = (name,price,description,_id,vendorName) =>
{
    return {
        type: ADD_ITEM,
        payload:{id:_id,name:name,desc:description,price:price,quantity:1,vendorName:vendorName}
    };

};
export const addQuantity = (id,price) =>
{
    return {
        type: ADD_QUANTITY,
        ID:id,
        price:price
    };

};
export const decreaseQuantity = (id,price) =>
{
    return {
        type: DECREASE_QUANTITY,
        ID:id,
        price:price   
    };

};
export const deleteItem = (id,price,quantity) =>
{
    return {
        type: DELETE_ITEM,
        ID:id,
        price:price,
        quantity:quantity   
    };

};
export const saveUserName = (username) =>
{
    return {
        type: SAVE_USERNAME,
        userName:username
    };

};
export const saveUserDetail = (userdetail) =>
{
 //   console.log('action page');
//    console.log(userdetail);
    return {
        type: SAVE_USERDETAIL,
        payload:userdetail

    };

};