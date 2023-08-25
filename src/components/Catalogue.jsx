import '../cssfiles/catalogue.css'
import CC from './catalogue-container/CC'

const Catalogue = () => {
  return (
    <div className='catalogue-fluid container-fluid'>
        <h1 className='catalogue-header'>OverSized T-Shirts</h1>
        <div className='catalogue'>
            <CC src="/images/fakemode1.webp" hover="/images/fakemodel12.webp" title="Basics"/>
            <CC src="/images/fakemode1.webp" hover="/images/fakemodel12.webp" title="Graphics Printed"/>
            <CC src="/images/fakemode1.webp" hover="/images/fakemodel12.webp" title="Floral"/>
        </div>
    </div>
  )
}

export default Catalogue
