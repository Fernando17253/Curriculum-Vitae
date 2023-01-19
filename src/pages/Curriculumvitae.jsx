import { Link } from "react-router-dom";
import ListStudents from "../components/Molecules/ListStudents";
import Header from "../components/atoms/Header";

function Home() {

    const listStudents = [
        {
            name:Fernando,
        }
    ];

    return(

        <>
        <Header/>
        
        <ListStudents listStudents={listStudents}></ListStudents>
        
        </>
    )
}

export default Home;