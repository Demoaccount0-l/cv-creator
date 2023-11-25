function ProfressionalInfo({companyName,jobTitle,jobStart,jobEnd,jobDescription,handleInput}) {
    return (
        <section className="professionalInfo">
            <h3>Professional Experience</h3>
            <label htmlFor="companyName">Company</label>
            <input type="text" name="companyName" id="companyName" placeholder="Enter Company" value={companyName} onChange={handleInput}/>

            <label htmlFor="jobTitle">Position</label>
            <input type="text" name="jobTitle" id="jobTitle" placeholder="Enter position" value={jobTitle} onChange={handleInput}/>

            <label htmlFor="jobStart">From</label>
            <input type="date" name="jobStart" id="jobStart" value={jobStart} onChange={handleInput}/>

            <label htmlFor="jobEnd">To</label>
            <input type="date" name="jobEnd" id="jobEnd" value={jobEnd} onChange={handleInput}/>
            
            <label htmlFor="jobDescription">Job Description</label>
            <textarea name="jobDescription" id="jobDescription" cols="30" rows="10" placeholder="Enter job decription or role" value={jobDescription} onChange={handleInput}></textarea>
        </section>
    );

}

export default ProfressionalInfo;