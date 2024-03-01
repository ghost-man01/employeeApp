import maleProifle from './images/maleProfile.jpg'
import femaleProfile from './images/femaleProfile.jpg'

const Employees = () => {

    const employees = [

        {
            id: 1,
            fullName: "Bob Jones",
            designation: "JavaScript Developer",
            gender: "male",
            teamName: "TeamA"
        },
        {
            id: 2,
            fullName: "Jill Bailey",
            designation: "Node Developer",
            gender: "female",
            teamName: "TeamA"
        },
        {
            id: 3,
            fullName: "Gail Shepherd",
            designation: "Java Developer",
            gender: "female",
            teamName: "TeamA"
        },
        {
            id: 4,
            fullName: "Sam Reynolds",
            designation: "React Developer",
            gender: "male",
            teamName: "TeamB"
        },
        {
            id: 5,
            fullName: "David Henry",
            designation: "DotNet Developer",
            gender: "male",
            teamName: "TeamB"
        },
        {
            id: 6,
            fullName: "Sarah Blake",
            designation: "SQL Server DBA",
            gender: "female",
            teamName: "TeamB"
        },
        {
            id: 7,
            fullName: "James Bennet",
            designation: "Angular Developer",
            gender: "male",
            teamName: "TeamC"
        },
        {
            id: 8,
            fullName: "Jessica Faye",
            designation: "API Developer",
            gender: "female",
            teamName: "TeamC"
        },
        {
            id: 9,
            fullName: "Lita Stone",
            designation: "C++ Developer",
            gender: "female",
            teamName: "TeamC"
        },
        {
            id: 10,
            fullName: "Daniel Young",
            designation: "Python Developer",
            gender: "male",
            teamName: "TeamD"
        },
        {
            id: 11,
            fullName: "Adrian Jacobs",
            designation: "Vue Developer",
            gender: "male",
            teamName: "TeamD"
        },
        {
            id: 12,
            fullName: "Devin Monroe",
            designation: "Graphic Designer",
            gender: "male",
            teamName: "TeamD"
        }];

    return (
        <main className='container'>
            <div className="row justify-content-ceter mt-3 mb-4">
                <div className="col-6 card-collection">
                    {
                        employees.map((employee) =>
                            <div className='card'>
                                <div className="card-body">
                                    {
                                        (employee.male === 'male')
                                            ? <img src={maleProifle} alt="profile" className='card-img-top' />
                                            : <img src={femaleProfile} alt="profile" className='card-img-top' />
                                    }
                                    <p className='card-title'><b>Full Name:</b> {employee.fullName} </p>
                                    <p className='card-description'><b>Designation:</b> {employee.designation} </p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </main >

    );

}

export default Employees;