function PersonalInfo({name,email,phoneno,handleInput}){
    return (
        <section className="personalInfo">
            <h3>Personal Information</h3>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" placeholder="Enter Name" value={name} onChange={handleInput}/>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Enter email" value={email} onChange={handleInput}/>
            <label htmlFor="phoneno">Phone Number</label>
            <input type="number" id="phoneno" name="phoneno" placeholder="Enter phone number" value={phoneno} onChange={handleInput}/>
        </section>
    )
}

export default PersonalInfo;