function PersonalInfo(){
    return (
        <section className="personalInfo">
            <h3>Personal Information</h3>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" placeholder="Likhitha Vakalapudi"/>
            <label htmlFor="email">Email</label>
            <input type="email" name="name" id="name" placeholder="likithavakalapudi@gmail.com"/>
            <label htmlFor="phonenumber">Phone Number</label>
            <input type="number" id="phonenumber" name="phonenumber" placeholder="9999999999" />
        </section>
    )
}

export default PersonalInfo;