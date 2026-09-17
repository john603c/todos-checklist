import { useRef, useEffect } from "react";

import './dialog.style.css'
import { IconClose } from "../icons";

export function Dialog({isOpen, onClose, children}) {
    // não deveríamos fazer buscas no DOM desse jeito!
    // const dialog = document.querySelector("dialog");

    const dialogRef = useRef(null);

    useEffect(() => {
        
        if(isOpen){
            openDialog()
        }else{
            closeDialog()
        }
        
    },[isOpen])

    useEffect(() => {
        const dialog = dialogRef.current
        dialog?.addEventListener('close', onClose)
        return () => {
            dialog?.removeEventListener('close', onClose)
        }
    },[onClose])

    // "Show the dialog" button opens the dialog modally
    const openDialog = () => {
        dialogRef.current.showModal();
    }

    // "Close" button closes the dialog
    const closeDialog = () => {
        dialogRef.current.close();
    } 

    return (
        <>
            <dialog ref={dialogRef} className="dialog-container">
                <div className="btn-close-wrapper">
                    <button autoFocus onClick={onClose} className="btn-close">
                        <IconClose />
                    </button>
                </div>
                <div className="body-dialog">
                     {children}
                </div>
            </dialog>
        </>
    )
}