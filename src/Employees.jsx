import maleProifle from './images/maleProfile.jpg'
import femaleProfile from './images/femaleProfile.jpg'


const Employees = ({ employees, selectedTeam, handleEmployeeCardClick, handleTeamSelectionChange }) => {

    return (
        <main className='container'>
            {/* Team DropDown */}

            <div className="row justify-content-ceter mt-3 mb-4">
                <div className="col-6" value="TeamB">
                    <select className='form-select form-select-lg' value={selectedTeam} onChange={handleTeamSelectionChange}>
                        <option value="TeamA">TeamA</option>
                        <option value="TeamB">TeamB</option>
                        <option value="TeamC">TeamC</option>
                        <option value="TeamD">TeamD</option>
                    </select>
                </div>
            </div>

            {/* Emplyee Cards */}

            <div className="row justify-content-ceter mt-3 mb-4">
                <div className="col-8">
                    <div className='card-collection'>
                        {
                            employees.map((employee) => (
                                <div id={employee.id} className={(employee.teamName === selectedTeam) ? 'card m-2 standout' : 'card m-2'} style={{ cursor: 'pointer' }} onClick={handleEmployeeCardClick}>
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
                            ))
                        }
                    </div>
                </div>
            </div>
        </main >

    );

}

export default Employees;