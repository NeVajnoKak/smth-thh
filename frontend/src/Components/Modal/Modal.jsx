import React, { useRef, useState } from 'react'
import axios from 'axios'
// import { useNavigate } from 'react-router'

const Modal = () => {
    const [status ,setStatus] = useState('')
    // const navigate = useNavigate();

    const nameRef = useRef()
    const emailRef = useRef()
    const phoneRef = useRef()

    const handleSubmit = async (event) => {
        // event.preventDefault();

        const user = {
            firstName: nameRef.current.value,
            email : emailRef.current.value, 
            phone: phoneRef.current.value
        }
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_POSTS}/users/add`, {user})
            .then(res => {
                console.log(res);
                console.log(res.data);
                setStatus(res.statusText)
              })
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="container d-flex justify-content-center mt-5">
                <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#modal" data-bs-whatever="@mdo">Добавить пользователя</button>
            {console.log(status)}
            </div>

            <div className="modal fade" id="modal" aria-labelledby="modalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="modalLabel">Новый пользователь</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={handleSubmit} action="">
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label className="col-form-label">Имя:</label>
                                    <input type="text" className="form-control" ref={nameRef} />
                                </div>
                                <div className="mb-3">
                                    <label className="col-form-label">Почта:</label>
                                    <input type="email" className="form-control" ref={emailRef} />
                                </div>
                                <div className="mb-3">
                                    <label  className="col-form-label">Номер телефона:</label>
                                    <input type="phone" className="form-control" ref={phoneRef} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary">Send message</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal