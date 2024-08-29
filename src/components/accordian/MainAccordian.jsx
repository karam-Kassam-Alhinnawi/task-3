import { useState } from 'react'
import Accordian from './Accordian'

const MainAccordian = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const data = [
        {
            id: 1,
            label: 'List One',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing  ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            id: 2,
            label: 'List Two',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing  ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            id: 3,
            label: 'List Three',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing  ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
      ];

      const handleClickEvent = (index) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index)); 
      };

  return (
    <div style={{borderRadius: '5px', overflow: 'hidden'}}>
      {data.map(({label, content, id}, index) => (
        <Accordian label={label} content={content} isOpen={openIndex === index} onClick={() => handleClickEvent(index)}/>
      ))}
    </div>
  )
}

export default MainAccordian