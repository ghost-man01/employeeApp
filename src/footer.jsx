
const Footer = () => {

    const today = new Date();

    return (

        <footer className="container">

            <div className="row justify-content center mt-4 mb-3">
                <div className="colo-8">
                    <h5>Team Allocation App - {today.getFullYear()} </h5>
                </div>
            </div>

        </footer>
    );
}

export default Footer;