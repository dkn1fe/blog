
export const deleteItems = (id:string,array:any[],state:(value:any[]) => void)=>  {
    return state(array?.filter(item => item.id !== id))
}