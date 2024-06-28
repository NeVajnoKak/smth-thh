import React, { useEffect, useState } from 'react'
import Card from '../Components/Card/Card'
import axios from 'axios'
// import Pagination from '../Components/Pagination/Pagination'
import Pagination from '@mui/material/Pagination';
// import { useLocation } from 'react-router';

const Admin = () => {

    // const location = useLocation();

    const [users, setUsers] = useState([])
    const [pages, setPages] = useState(0)
   
    const [page, setPage] = useState(1);

    const pageElem = 10;


    const [from , setFrom ] = useState(0)
    const [to , setTo] = useState(pageElem)
    useEffect (() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_POSTS}/users`)
            setUsers(response.data.users)
            setPages(response.data.limit)
        }
        catch (error) {
            console.log(error)
        }
    }

    const handleChange = (event, value) => {
        setPage(value)
        if(value == 1) {
            setFrom(0)
            setTo(pageElem)
            return
        }
        setFrom((prev) => value * pageElem - pageElem)
        setTo((prev) => value * pageElem)
    }




  return (
    <>
    
    <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">

            {/* {console.log(location.state.key)} */}

                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4">
                 {users.slice(from,to).map((user, index) => (
                     <Card key={index} user={user}/>
                ))} 
                </div>

                <div className="d-flex justify-content-center">

                <Pagination count={Math.ceil(pages/pageElem)} variant="outlined" siblingCount={0} page={page} onChange={handleChange}/>
                </div>

            </div>
        </section>
    </>
    
  )
}

export default Admin