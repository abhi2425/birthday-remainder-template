import React, { Component } from 'react'
import './Birthday.css'
import Person from '../Person'
import ShowPerson from '../ShowPerson/ShowPerson'
import Modal from '../Modal/Modal'
import { personList } from '../../utils/personsList'
import addSign from '../../Assets/img/Vector.svg'
import { default as UploadPreview } from '../UploadPreview/UploadPreview'
import { getListFromLocalStorage } from '../../utils/localStorage'

const list = personList()
class Birthday extends Component {
   state = {
      showList: true,
      showModal: false,
      person: null,
      upload: false,
      uploadedImage: '',
      captureEvent: {},
      personDetails: [...list, ...getListFromLocalStorage(this.state?.uploadedImage)],
   }
   clearHandler = () => this.setState({ personDetails: [] })
   showHandler = () => this.setState({ personDetails: list })
   showModalHandler = (person) => {
      this.setState({
         showModal: true,
         person: person,
      })
   }
   hidePersonHandler = () => {
      this.setState({
         showModal: false,
      })
   }
   removePersonHandler = (index) => {
      const copy = this.state.personDetails.slice()
      copy.splice(index, 1)
      this.setState({
         personDetails: copy,
      })
   }
   changeHandler = (event) => {
      const fileObject = event.target.files[0]
      this.setState({ captureEvent: event.target })
      const url = URL.createObjectURL(fileObject)
      this.setState({ uploadedImage: url })
      console.log(url)
      this.setState({ upload: true })
   }
   closeUploadVault = () => {
      console.log('close')
      // eslint-disable-next-line react/no-direct-mutation-state
      this.state.captureEvent.value = null
      this.setState({ uploadedImage: '' })
      this.setState({ upload: false })
      console.log(this.state.uploadedImage)
   }
   render() {
      let persons = []
      let button =
         this.state.personDetails.length === 0 ? (
            <button className='btn btn-green' onClick={this.showHandler}>
               Show All
            </button>
         ) : (
            <button className='btn btn-pink' onClick={this.clearHandler}>
               Clear All
            </button>
         )

      if (this.state.showList) {
         persons = this.state.personDetails.map((person, index) => {
            return (
               <Person
                  key={index}
                  name={person.name}
                  age={person.age}
                  image={person.image}
                  clicked={() => this.showModalHandler(person)}
                  remove={() => this.removePersonHandler(index)}
               />
            )
         })
      }

      return (
         <>
            <Modal show={this.state.showModal} clicked={this.hidePersonHandler}>
               <ShowPerson person={this.state?.person} />
            </Modal>
            <Modal show={this.state.upload}>
               <UploadPreview
                  uploadedImage={this.state.uploadedImage}
                  close={this.closeUploadVault}
                  personList={this.state.personDetails}
               />
            </Modal>
            <div
               style={{
                  width: '100%',
                  padding: '1.5rem',
                  display: 'flex',
                  justifyContent: 'space-around',
                  position: 'fixed',
                  background: '#ff69b4',
                  top: '0',
                  zIndex: '10',
               }}>
               <h1 className='dashboard'>Dashboard</h1>
               <form className='upload'>
                  <label htmlFor='upload'>
                     <div
                        className='name'
                        style={{ color: 'white', fontFamily: 'cursive', alignSelf: 'center' }}>
                        Add Photo
                     </div>
                     <img src={addSign} alt='Upload' />
                  </label>
                  <input
                     type='file'
                     id='upload'
                     accept='image/*'
                     onChange={(e) => this.changeHandler(e)}
                  />
               </form>
            </div>

            <section className='birthday'>
               <h2 className='heading'>{persons.length} birthdays today</h2>
               {persons}
               {button}
            </section>
         </>
      )
   }
}
export default Birthday
