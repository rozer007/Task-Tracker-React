import { useState } from "react"
const AddTask = ({onAdd }) => {

    const [text,setText]= useState('')
    const [day,setday]= useState('')
    const [reminder,setReminder]= useState(false)

    const onSumbit=(e)=>{
        e.preventDefault()

        if(!text)
        {
            alert('Enter the task')
        }

        onAdd({text,day,reminder})

        setText('')
        setday('')
        setReminder(false)
    }
    return (
        <form className="add-form" onSubmit={onSumbit}>
            <div className="form-control">
                 <label>Task</label>
                 <input type='text' placeholder="Add task" value={text}
                 onChange={(e)=>setText(e.target.value)} />
            </div>
            <div className="form-control">
                 <label>day & Time</label>
                 <input type='text' placeholder="Add task" value={day}
                 onChange={(e)=>setday(e.target.value)}/>
            </div>
            <div className="form-control form-control-check">
                 <label>Set Reminder</label>
                 <input type='checkbox'value={reminder}
                 checked={reminder}
                 onChange={(e)=>setReminder(e.currentTarget.checked)}/>
            </div>
            <input className="btn btn-block" type="submit" value="Save task"/>
        </form>
    )
}

export default AddTask
