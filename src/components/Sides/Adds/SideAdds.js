import React, {useEffect} from 'react'
import { Card } from 'react-bootstrap'

const SideAdds = () => {
  const handleClick = e => {
    console.log(e)
  }

  useEffect(() => {
    window.addEventListener('scroll',(event) => {
      console.log('Scrolling...');
    });
  }, [])
  return (
    <div style={{width: '18rem'}}>
        <div style={{width: '18rem', height: '0'}}></div>
        <Card bg="dark" text="light" style={{position: 'fixed', marginTop: '0', marginLeft: '0', zIndex: '1', width: '18rem'}}>
          <Card.Img variant="top" src="https://random.imagecdn.app/300/200" />
          <Card.Body>
            <Card.Title>This is an add</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
    </div>
  )
}

export default SideAdds
