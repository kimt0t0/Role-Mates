// IMPORTS
// Styles
import './FormAlert.scss'

// LOGIC
function FormAlert ({ text, color }) {
  return (
    <p className={'form-alert __' + color}>{text}</p>
  )
}

// EXPORTS
export default FormAlert
