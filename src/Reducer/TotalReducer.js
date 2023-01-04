const DisplayProducts= (state=0 , action) => {
  switch(action.type){
    case "DISPLAYPRODUCTS": return state = action.payLoad

    default: return state 
  }
}

export default DisplayProducts