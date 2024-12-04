import { useNavigate } from "react-router-dom"
import ContactCard from "../components/ContactCard"
import { useContext, useState } from "react"
import ContactContext from "../store/appContext"
import ButtonAdd from "../components/ButtonAdd"
import Modal from "../components/Modal"


const Home = () => {

    const navigate = useNavigate()
    const {contact, handleGetContacts} = useContext(ContactContext)

    const [idDelete, setidDelete] = useState(null)
    //useEffect (() => {setidDelete(contactoId)}, [])


    const handleDelete = async () => {
       
		const deleteResponse = await fetch("https://playground.4geeks.com/contact/agendas/agendacontextDY/contacts/"+ idDelete,
			{
				method: "DELETE"
			}
		)
        
		
			if(deleteResponse.ok) console.log("Contacto eliminado correctamente")
		  
          await handleGetContacts()
		
	}  
    

    return (
        <>
        <div className="container-fluid">
            <ButtonAdd/>
            
            {contact && contact.map((contact,index) => (
                <ContactCard
                contactoId = {contact.id}
                key = {index}
                name = {contact.name}
                address = {contact.address}
                phone = {contact.phone}
                email = {contact.email}
                idDeleteSelect = {() => setidDelete(contact.id)}

                onUpDate = {() => navigate("/updatecontact/" + contact.id)}
                />
            ))}

        </div>

    <Modal onDelete = {() => handleDelete(idDelete)}/>
    </>
    )
}

export default Home