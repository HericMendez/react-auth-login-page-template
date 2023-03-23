import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";

const Admin = () => {
    const auth = useContext(AuthContext);

    return (
        <div>
                   <br/>
            <h2>Página Privada</h2>

            Olá {auth.user?.name}, tudo bem?
        </div>
    );

}

export default Admin;