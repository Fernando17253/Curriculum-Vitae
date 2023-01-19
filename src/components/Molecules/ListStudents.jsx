import Title from "../atoms/title";
import Widge from "../atoms/Widge";

function ListStudents({listStudents}) {
    return ( 
        <>
        <Title msn="Resumen Profesional"></Title>
        {
            listStudents.map(itemStudents =>(
                <Widge item={itemStudents}></Widge>
            )
            )
        }
        </>
     );
}

export default ListStudents;