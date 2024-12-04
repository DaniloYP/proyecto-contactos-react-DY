
import { useEffect, useState } from "react";
import Modal from "./Modal";
const ContactCard = ({ name, address, phone, email, onUpDate, idDeleteSelect }) => {



    return (
        <>
            <div className="card mb-3 tarjeta">
                <div className="row g-0">
                    <div className="col-md-2">
                        <img src="https://media.istockphoto.com/id/1398385367/es/foto/feliz-mujer-de-negocios-millennial-con-gafas-posando-con-las-manos-cruzadas.jpg?s=1024x1024&w=is&k=20&c=v_Kiu0J8oRDWY3XChQYfYsDDtJw31igQ9VVqax_LvS0=" className=" rounded-circle" alt="..." />
                    </div>
                    <div className="col-md-10">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center">
                                <h5 className="card-title mx-2">{name}</h5>
                                <div>
                                    <i className="fa-solid fa-pencil mx-2" onClick={onUpDate}></i>
                                    <i className="fa-solid fa-trash mx-2" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={idDeleteSelect}></i>
                                </div>
                            </div>
                            <p className="card-text "><i className="fa-solid fa-location-dot "></i> {address}</p>
                            <p className="card-text "><i className="fa-solid fa-phone "></i> {phone}</p>
                            <p className="card-text "><i className="fa-solid fa-envelope "></i> {email}</p>
                        </div>
                    </div>
                </div>
            </div>
           
        </>
    )
}
export default ContactCard;