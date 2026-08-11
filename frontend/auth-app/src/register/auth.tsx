import { Fragment, useState } from "react";
import {Register} from './index.tsx';

type Auth =  'register' | 'login'


function Auth(){
    const [mode, setMode] = useState<Auth>('register')

    return(
        <Fragment>
            <button
            onClick={()=> setMode('register')}
            >Register</button>

            <button
            onClick={()=> setMode('login')}
            >Login</button>

            {mode === "register" ? (
                <Register/>
            ): null}
        </Fragment>
    )
}
export default  Auth