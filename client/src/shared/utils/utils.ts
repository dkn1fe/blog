
export const deleteItems = (id:string,array:any[])=>  {
    return array?.filter(item => item.id !== id)
}

export const addItems = (array:any[],items:any)=>{
    return [...array,items]
}