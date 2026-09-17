import './empty-todo-styles.css'

export function EmptyTodo() {
    return (
        <section className='empty-todo'>
            <p className='empty-txt'>Ainda não há tarefas cadastradas, adicione para começar!</p>
            <img src="/empty.png" alt='' />
        </section>
    )
}