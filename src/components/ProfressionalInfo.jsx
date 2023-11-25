function ProfressionalInfo() {
    return (
        <section className="professionalInfo">
            <h3>Professional Experience</h3>
            <label htmlFor="companyName">Company</label>
            <input type="text" name="companyName" id="companyName" placeholder="Enter Company"/>

            <label htmlFor="jobTitle">Position</label>
            <input type="text" name="jobTitle" id="jobTitle" placeholder="Enter position"/>

            <label htmlFor="jobStart">From</label>
            <input type="date" name="jobStart" id="jobStart" />

            <label htmlFor="jobEnd">To</label>
            <input type="date" name="jobEnd" id="jobEnd" />
            
            <label htmlFor="jobDescription">Job Description</label>
            <textarea name="jobDescription" id="jobDescription" cols="30" rows="10" placeholder="Enter job decription or role"></textarea>
        </section>
    );

}

export default ProfressionalInfo;