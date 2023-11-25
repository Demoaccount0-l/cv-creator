function PreviewCV(props) {

    const { 
        name,
        email,
        phoneno,
        collegeName,
        degree,
        collegeStart,
        collegeEnd,
        companyName,
        jobTitle,
        jobStart,
        jobEnd,
        jobDescription 
    } = props;

    return (
        <div className="preview">
            <h3>CV</h3>
            <section>
                <h3>Personal Information</h3>
                <div className="personalDetails">
                    <div>
                    <h4>Name</h4>
                    <p>{name}</p>
                    </div>
                    <div>
                    <h4>Email</h4>
                    <p>{email}</p>
                    </div>
                    <div>
                    <h4>Phone Number</h4>
                    <p>{phoneno}</p>
                    </div>
                </div>
            </section>

            <section>
                <h3>Education Details</h3>
                <div className="educationDetails">
                    <div>
                    <h4>University/College Name</h4>
                    <p>{collegeName}</p>
                    </div>
                    <div><h4>Degree</h4>
                    <p>{degree}</p>
                    </div>
                    
                    <div><h4>Degree Start</h4>
                    <p>{collegeStart}</p></div>
                    <div>
                    <h4>Degree End</h4>
                    <p>{collegeEnd}</p>
                    </div>
                    
                </div>
            </section>

            <section>
                <h3>Professional Experience</h3>
                <div className="professionalDetails">
                    <div>
                    <h4>Comapny Name</h4>
                    <p>{companyName}</p>
                    </div>
                    <div>
                    <h4>Job Title</h4>
                    <p>{jobTitle}</p>
                    </div>
                    <div>
                    <h4>Job Start</h4>
                    <p>{jobStart}</p>
                    </div>
                    <div>
                    <h4>Job End</h4>
                    <p>{jobEnd}</p>
                    </div>
                    <div>
                    <h4>Job Description</h4>
                    <p>{jobDescription}</p>
                    </div>
                </div>
            </section>

        </div>

    );
}

export default PreviewCV;