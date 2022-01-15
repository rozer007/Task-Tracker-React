import Button from "./Button"

const Header = ({title,onAdd,showAdd}) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color={showAdd?"red":"green"} text={showAdd ? "Close":"Add"} onclick={onAdd}/>
        </header>
    )
}

// const headerStyle=
// {color:'red'}
export default Header