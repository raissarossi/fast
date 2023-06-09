import Navbar from "../Header/Navbar"
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import api from "../../services/api";

const Extrato = () => {
    const [extrato, setExtrato] = useState([])
    const [user, setUser] = useState();
    const rota = useNavigate()

    useEffect(() => {
        let tokenAccess = JSON.parse(localStorage.getItem('dados'))
        console.log(tokenAccess)
        api.get('auth/users/me/', {
            headers: { Authorization: "JWT " + tokenAccess.access}
        })
        .then((response) => {
            
            setUser(response.data.id)
            api.get("bank/movimentacao/", {
                headers: { Authorization: "JWT " + tokenAccess.access }
            }).then(function (response) {
                console.log(response)
                setExtrato(response.data)
            }).catch(function (err) {
                console.log(err)
            })
        }).catch(()=>{
               alert("Your access session has expired") 
               rota('/')
        })
        
    }, [])


    return (
        <div className="dark:bg-black h-screen">
            <Navbar exibirBotao={false} />
            <div className="w-full flex justify-center">
                <text className="flex my-5 w-5/6 max-w-7xl text-2xl font-normal text-light-blue2 dark:text-white dark:font-light">Bank Statement</text>
            </div>
            <div className="flex justify-center">
                <div className="flex flex-col w-5/6 max-w-7xl">
                    <table className="min-w-full divide-y divide-light-blue_grey2 dark:divide-white w-5/6 shadow-light dark:shadow-dark rounded-3xl">
                        <thead className="bg-light-blue2 dark:bg-dark-blue5">
                            <tr className="">
                                <th scope="col"
                                    className="table-head-extrato rounded-tl-2xl">
                                    Date</th>
                                <th scope="col"
                                    className="table-head-extrato">
                                    Sender / Receiver</th>
                                <th scope="col"
                                    className="table-head-extrato">
                                    Key</th>
                                <th scope="col"
                                    className="table-head-extrato rounded-tr-2xl">
                                    Value</th>
                            </tr>
                        </thead>
                        {extrato.map((item) =>
                            <tbody className="">
                                <tr>
                                    <td className="table-item-extrato">{item.data}</td>
                                    {/* <td className="table-item-extrato">{item.destinatarioNome}</td> */}

                                    {item.remetente == user ? 
                                    <td className="table-item-extrato">REC. {item.destinatarioNome}</td>
                                    : 
                                    <td className="table-item-extrato">SEN. {item.remetenteNome}</td>}

                                    <td className="table-item-extrato">{item.chavePix}</td>

                                    {item.remetente == user ? 
                                    <td className="table-item-extrato text-red-700">$ {item.valor}</td>
                                    : 
                                    <td className="table-item-extrato text-green-500">$ {item.valor}</td>}
                                </tr>
                            </tbody>)}
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Extrato