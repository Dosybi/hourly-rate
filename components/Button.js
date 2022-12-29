const Button = ({ label, handleButtonClick }) => {
  return (
    <button
      className="text-blue-600 hover:text-blue-800"
      onClick={handleButtonClick}
    >
      {label}
    </button>
  )
}

export default Button
