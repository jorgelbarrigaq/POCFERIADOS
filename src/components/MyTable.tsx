import { Fragment } from "react"



export const MyTable = (props:any) =>{

    const {data} = props;
    return (
        <Fragment>
            <table className="table">
                    <tbody>
                    {data.map((feriados:any) => (
                                <tr>
                                <td> <span>{feriados.fecha}</span></td>
                                <td> <span>{feriados.nombre}</span></td>
                                </tr>
                            ))}

                    </tbody>
                </table>
        </Fragment>

    )
}