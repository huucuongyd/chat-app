import Avatar from '../../../assets/jesus.png'

export default function HeaderBoxChat(){
    return(
        <div className="HeaderBoxChat" id='handle'>
            <div className="avatar">
                <img src={Avatar}/>
            </div>
            <div className='user'>
                <div>Chủ tọa</div>
                <div className='status'>
                    <span className='status-point' style={{
                        backgroundColor:'green'
                    }}></span>
                    status
                </div>
            </div>
            
        </div>
    )
}