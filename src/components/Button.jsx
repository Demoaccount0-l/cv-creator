export default function Button({ change, btnTxt }) {
    
    return (
      <button onClick={change} className="button">
        {btnTxt}
      </button>
    );
  }