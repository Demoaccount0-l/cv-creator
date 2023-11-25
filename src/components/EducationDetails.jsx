function EducationDetails(){
    return (
        <section className="educationInfo">
            <h3>Educaton Details</h3>
            <label htmlFor="college">University/college Name</label>
            <input type="text" name="college" id="college" placeholder="University/College Name"/>
            <label htmlFor="course">Degree</label>
            <input type="text" name="course" id="course" placeholder="Enter course"/>
            <label htmlFor="courseStart">From</label>
            <input type="date" id="courseStart" name="courseStart" placeholder="Start of the course" />
            <label htmlFor="courseEnd">To</label>
            <input type="date" name="courseEnd" id="courseEnd" placeholder="End of the course"/>
        </section>
    )
}

export default EducationDetails;