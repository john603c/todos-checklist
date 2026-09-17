import './form-btn-styles.css'

export function FormBtn ({children, ...rest}) {
    
    return <button {...rest} className='form-btn'><p>{children}</p></button>
}