'use client'

import {store} from  "./store"
import {Provider} from "react-redux"

 function ReduxProvider({comps}) {
    return <Provider store={store}>{comps}</Provider>
}

export default ReduxProvider