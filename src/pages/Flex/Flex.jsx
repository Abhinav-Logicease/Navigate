import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import './flex.css'

const Flex = () => {
  return (
    <div>
        <Header backarrow={true}/>
        
        <div className='flex-conatiner'>
            <div className='flex-item'> container 1</div>
            <div className='flex-item'> container 2</div>
            <div className='flex-item'> container 3</div>

            
        </div>
       <Footer/>   
    </div>
  )
}

export default Flex