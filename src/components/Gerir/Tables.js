import Spinner from "../UI/Spinner"

const Tables = ({ data }) => {

    const styles = {
        display: 'flex',
        marginTop: '10px',
        gap: '30px'
}


if (!data) {
    return (
        <div style={styles}>
            <Spinner text="A carregar dados, por favor aguarde" textColor="" />
        </div>
    )
}

return(
    <div>
        <h1>Tables Content</h1>
    </div>
)
    
}

export default Tables