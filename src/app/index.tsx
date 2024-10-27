import {RouterProvider} from "./providers/RouterProvider/ui/RouterProvider.tsx";
import {StoreProvider} from "./providers/StoreProvider/ui/StoreProvider.tsx";


export const App = () => {

    return (
        <>
            <StoreProvider>
                <RouterProvider/>
            </StoreProvider>
        </>
    )
}


