
const Success = ({text}) => (
    <div style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5003 0.000303275C22.5084 0.000303275 29.0002 6.49218 29.0002 14.5003C29.0002 22.5084 22.5084 29.0002 14.5003 29.0002C6.49218 29.0002 0.000304285 22.5084 0.000304285 14.5003C-0.0224822 6.51489 6.43241 0.0230898 14.4177 0.000303275C14.4452 0.000224429 14.4727 0.000224429 14.5003 0.000303275Z" fill="#3BB54A" />
            <path d="M22.5326 10.5043L12.2344 20.8025L6.46735 15.0767L8.81538 12.7699L12.2344 16.1478L20.1847 8.19748L22.5326 10.5043Z" fill="white" />
        </svg>
        <br/>
        <p style={{textAlign:'center'}}>{text}</p>
    </div>
)

export default Success