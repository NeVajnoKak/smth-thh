import React from 'react'
import axios from 'axios'

const Card = ({user}) => {
    const fullName = `${user.firstName} ${user.lastName} ${user.maidenName}`

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`${process.env.REACT_APP_API_POSTS}/users/${id}`)
            .then(res => {
                console.log(res);
                console.log(res.status);
                console.log(res.data);
              })
            
        }
        catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="col mb-5">
            <div className="card h-100">
                <img className="card-img-top" src={user.image} alt="..." />
                <div className="card-body p-4">
                    <div className="text-center">
                        <h5 className="fw-bolder">{fullName}</h5>
                    </div>
                    <div className="text-start">
                        <p>Почта : <span>{user.email}</span></p>
                        <p>Телефон : <span>{user.phone}</span></p>
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-end">
                        <button onClick={() => handleDelete(user.id)} className='btn btn-danger'>Удалить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card