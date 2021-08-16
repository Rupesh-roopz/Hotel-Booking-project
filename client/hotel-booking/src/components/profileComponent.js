import homeImg from '../asserts/images/homeImg.jpg'
function ProfileComponent (props) {
    return (
        <div className="container-fluid profile-wrapperOutside">
            <div className="profile-wrapper">
                <div>
                    <label className="bookedHotel-label">
                    Name :
                    </label>
                    {(props.state.profile.name !== null)
                        ? <span>
                            {props.state.profile.name}
                        </span>
                        : <span/>}
                </div>
                <div>
                    <label className="bookedHotel-label">
                    Email :
                    </label>
                    {(props.state.profile.email !== null)
                        ? <span>
                            {props.state.profile.email}
                        </span>
                        : <span/>}
                </div>
                <div>
                    <label className="bookedHotel-label">
                    Phone :
                    </label>
                    {(props.state.profile.mobileNumber !== null)
                        ? <span>
                            {props.state.profile.mobileNumber}
                        </span>
                        : <span/>}
                </div>
                <div>
                    <label className="bookedHotel-label">
                    Age :
                    </label>
                    {(props.state.profile.age !== null)
                        ? <span>
                            {props.state.profile.age}
                        </span>
                        : <span/>}
                </div>
                <div>
                    <label className="bookedHotel-label">
                    ID Proof Number :
                    </label>
                    {(props.state.profile.idProofNumber !== null)
                        ? <span>
                            {props.state.profile.idProofNumber}
                        </span>
                        : <span/>}
                </div>
            </div>
            <img src={homeImg} alt="homeImage" className="profileImage-wrapper" />
        </div>
    )
}

export default ProfileComponent
