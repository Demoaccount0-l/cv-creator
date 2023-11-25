import { useState } from "react";
import PersonalInfo from "./PersonalInfo.jsx";
import ProfessionalInfo from './ProfressionalInfo.jsx'
import EducationDetails from './EducationDetails.jsx'
import Button from "./Button.jsx";
import PreviewCV from "./PreviewCV.jsx"

export default function Main() {
  const [preview, setPreview] = useState(false);
  const [inputValue,setInputValue] = useState({
    name:"",
    email:"",
    phoneno:"",
    collegeName:"",
    degree:"",
    collegeStart:"",
    collegeEnd:"",
    companyName:"",
    jobTitle:"",
    jobStart:"",
    jobEnd:"",
    jobDescription:""
  });

  // toggle preview
  function togglePreview() {
    setPreview(prevState => !prevState);
  }

  const handleInputChange = (e) =>{
    const {name,value} = e.target;
    setInputValue(prevState => ({
      ...prevState,
      [name]:value
    }))
  }

  const handleReset = () => {
    setInputValue({
      name:"",
      email:"",
      phoneno:"",
      collegeName:"",
      degree:"",
      collegeStart:"",
      collegeEnd:"",
      companyName:"",
      jobTitle:"",
      jobStart:"",
      jobEnd:"",
      jobDescription:""
    });
  }

  // gather form parts and return it
  function showForm() {
    return (
      <form className="cvform">
        <PersonalInfo handleInput= {handleInputChange} {...inputValue}/>
        <EducationDetails handleInput= {handleInputChange} {...inputValue}/>
        <ProfessionalInfo handleInput= {handleInputChange} {...inputValue}/>
        <button type="button" onClick={handleReset}> Reset</button>
      </form>
    );
  }

  return (
    <main>
      {preview ? <PreviewCV {...inputValue}/> : showForm()}
      <Button change={togglePreview} btnTxt={preview ? "Edit" : "Submit"} />
      
    </main>
  );
}