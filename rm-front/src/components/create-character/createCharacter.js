// IMPORTS

// LOGIC
function createCharacter () {
  const handleSubmit = () => {
    console.log('ajout du personnage...')
  }
  return (
    <form className='create-character-form' onSubmit={handleSubmit}>
      <div className='ccf-bloc'>
        <label className='ccfb-label' for='name'>Nom du personnage</label>
        <input type='text' name='name' className='ccfb-input' />
      </div>
    </form>
  )
}

// EXPORTS
export default createCharacter
