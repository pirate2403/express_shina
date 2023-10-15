import {useEffect, useState} from "react";
import {DataStore, DataStoreContext} from "./logic/DataStore.ts";
import {RouterProvider} from "react-router-dom";
import {router} from "./router";

function App() {
    const [store] = useState(() => new DataStore())

    useEffect(() => {
        store.getInitialData()
    }, []);

    return (

        <DataStoreContext.Provider value={store}>
            <RouterProvider router={router}/>
        </DataStoreContext.Provider>
    )
}

export default App
