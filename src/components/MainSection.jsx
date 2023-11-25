import { useState } from "react";
import PersonalInfo from "./PersonalInfo.jsx";
import ProfessionalInfo from './ProfressionalInfo.jsx'
import EducationDetails from './EducationDetails.jsx'
import Button from "./Button.jsx";
import PreviewCV from "./PreviewCV.jsx";

export default function Main() {
  const [preview, setPreview] = useState(false);
  

  // toggle preview
  function togglePreview() {
    setPreview((prevState) => !prevState);
  }

  

  // gather form parts and return it
  function showForm() {
    return (
      <form className="form">
        <PersonalInfo />
        <EducationDetails />
        <ProfessionalInfo />
      </form>
    );
  }

  return (
    <main>
      {preview ? <PreviewCV /> : showForm()}
      <Button change={togglePreview} btnTxt={preview ? "edit" : "submit"} />
    </main>
  );
}