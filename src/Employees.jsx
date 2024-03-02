import TeamMembers from './TeamMembers';
import Teams from './Teams';

const Employees = ({ employees, selectedTeam, handleEmployeeCardClick, handleTeamSelectionChange }) => {

    return (
        <main className='container'>
            {/* Team DropDown */}

            <div className="row justify-content-center mt-4 mb-3">
                <div className="col-6">
                    <Teams selectedTeam={selectedTeam}
                        handleTeamSelectionChange={handleTeamSelectionChange} />
                </div>
            </div>

            {/* Emplyee Cards */}

            <div className="row justify-content-center mt-6 mb-3">
                <div className="col-8">
                    <div className='card-collection'>
                        <TeamMembers employees={employees}
                            handleEmployeeCardClick={handleEmployeeCardClick}
                            selectedTeam={selectedTeam}
                        />
                    </div>
                </div>
            </div>
        </main >

    );

}

export default Employees;