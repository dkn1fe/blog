
export function getTokenFromLocalStorage(): string {
    const token = localStorage.getItem("token");
    return token || "";
}


export function setTokenToLocalStorage(key: string, token: string): void {
    localStorage.setItem(key, token);
}


export function removeTokenFromLocalStorage(key: string): void {
    localStorage.removeItem(key);
}

export function setIsAuthToLocalStorage(key:string,auth:string):void{
    localStorage.setItem(key,auth)
}
export function getIsAuthFromLocalStorage():string{
     const isAuthenticated = localStorage.getItem('isAuth')
     return isAuthenticated || ''
}