import './todo-form-styles.css'
import { TextInput } from '../TextInput'
import { FormBtn } from '../FormBtn'

export function TodoForm({ onSubmit, defaultValue }) {

    return (

        <form action={onSubmit} className="form-container">
            <TextInput
                placeholder="Digite o item que deseja adicionar"
                name='description'
                defaultValue={defaultValue}
                required 
            />
            <FormBtn type="submit">Salvar item</FormBtn>
        </form>

    )
}