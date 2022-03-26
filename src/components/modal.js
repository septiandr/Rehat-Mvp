import Modal from 'react-modal'
 import './modal.css'
export default function Modall(props){
    return(
        <Modal id="modal"
        isOpen={ props.isOpen }
        contentLabel="Example Modal" >
        <h1>Modal Screen</h1>
        <button onClick={props.toggle}>close</button>
        </Modal>  
    )
}