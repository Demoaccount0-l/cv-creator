function EducationDetails({ collegeName,degree,collegeStart,collegeEnd, handleInput }) {
    return (
        <section className="educationInfo">
            <h3>Education Details</h3>
            <label htmlFor="collegeName">University/college Name</label>
            <input type="text" name="collegeName" id="collegeName" placeholder="University/College Name" value={collegeName} onChange={handleInput}/>
            <label htmlFor="course">Degree</label>
            <input type="text" name="degree" id="course" placeholder="Enter course" value={degree} onChange={handleInput}/>
            <label htmlFor="courseStart">From</label>
            <input type="date" id="courseStart" name="collegeStart" placeholder="Start of the course" value={collegeStart} onChange={handleInput}/>
            <label htmlFor="courseEnd">To</label>
            <input type="date" name="collegeEnd" id="courseEnd" placeholder="End of the course" value={collegeEnd} onChange={handleInput}/>
        </section>
    )
}

export default EducationDetails;