import maleProifle from './images/maleProfile.jpg'
import femaleProfile from './images/femaleProfile.jpg'

const TeamMemberCard = ({ employee, handleEmployeeCardClick, selectedTeam }) => {
    return (
        <div key={employee.id} id={employee.id} className={(employee.teamName === selectedTeam) ? 'card m-2 standout' : 'card m-2'} style={{ cursor: 'pointer' }} onClick={handleEmployeeCardClick}>
            {
                (employee.gender === 'male')
                    ? <img src={maleProifle} alt="profile" className='card-img-top' />
                    : <img src={femaleProfile} alt="profile" className='card-img-top' />
            }
            <div className="card-body">
                <p className='card-title'>Full Name: {employee.fullName} </p>
                <p className='card-description'><b>Designation:</b> {employee.designation} </p>
            </div>
        </div>
    );
}

export default TeamMemberCard;