import {SAVE_CITY,SAVE_VENDOR,ADD_ITEM, ADD_QUANTITY,DECREASE_QUANTITY, DELETE_ITEM,SAVE_USERNAME} from '../actions/actionTypes'
const initialState={
    city:"City",
    vendor:"Vendor",

    cart:[],
    subTotal:0,
    deliveryFees:100,
    total:0,

    userName:"",
    count:0

};

const reducer =(state= initialState, action)=>
{
//    console.log('ACTION DISPATCHED:', action.type)
    switch(action.type){
        case SAVE_CITY:
        return{
            ...state,
            city: action.city
        };
        case SAVE_VENDOR:
        return{
            ...state,
            vendor: action.vendorName
        };
        case ADD_ITEM:
        if(state.cart.length === 0)
        {
            
            var x=  ( parseInt(state.subTotal)+parseInt(action.payload.price) );
            var totalp=parseInt(x)+parseInt(state.deliveryFees);
            
            return{
                ...state,               
              //  foodName: action.name,
           //     description: action.desc,
            //    price: action.price, 
                cart: state.cart.concat(action.payload),    
                           //+action.name  
                //var res = str1.concat(str2);
                subTotal:x,
                total:totalp,
                count:state.cart.length+1
                
            };
        }
        else if(!state.cart.find(c => c.name === action.payload.name)){

            var quan=parseInt(action.payload.quantity);
            var x1= ( parseInt(state.subTotal)+parseInt(action.payload.price) ); 
            var totalp1=parseInt(x1)+parseInt(state.deliveryFees);
            return{
                ...state,               
           //     foodName: action.name,
           //     description: action.desc,
           //     price: action.price, 
                cart: state.cart.concat(action.payload),  
                subTotal:x1,   
                total:totalp1,
                //+action.name  
                //var res = str1.concat(str2);
                count:state.cart.length+1
            };

        }
        else if(state.cart.find(c => c.name === action.payload.name)){
         //   var quan=parseInt(action.payload.quantity);
            let item = state.cart.find(c => c.id === action.payload.id);

            var x2=  parseInt(state.subTotal)+parseInt(action.payload.price); 
            var totalp2=parseInt(x2)+parseInt(state.deliveryFees);
            item.quantity++; 
            return{
                ...state,
                subTotal:x2, 
                total:totalp2,
                
            };  
            

        }
        case ADD_QUANTITY:
                    var x3=parseInt(state.subTotal)+parseInt(action.price);
                    var totalp3=parseInt(x3)+parseInt(state.deliveryFees);
                    let item = state.cart.find(c => c.id === action.ID);
                    
                    item.quantity++; 
                    return{
                        ...state,
                        subTotal:x3,
                        total:totalp3

                    };
        case DECREASE_QUANTITY:
                    let item1 = state.cart.find(c => c.id === action.ID);
                    if(item1.quantity>1){
                    var x4=parseInt(state.subTotal)-parseInt(action.price);
                    var totalp4=parseInt(x4)+parseInt(state.deliveryFees);
                            
                    item1.quantity--;
                    return{
                        ...state,
                        subTotal:x4,
                        total:totalp4
                    };    
                            
                       
                    }
        case DELETE_ITEM:
                    //total ko 0 karna ha with respect to id
                    const updatedArray=state.cart.filter(result=>result.id !==action.ID);
                    var minus=action.quantity*action.price;
                    
                    
                    return{
                        ...state,
                        cart: updatedArray,
                        subTotal:state.subTotal-minus,
                        total:state.total-minus,
                        count:state.cart.length-1
                    };
        case SAVE_USERNAME:
      //      console.log('SAVE USERNAME')
       //     console.log(action.userName)
            return{
                ...state,
                userName: action.userName
            };
        
            
            
        default: 
            return state;
    }

}


export default reducer;