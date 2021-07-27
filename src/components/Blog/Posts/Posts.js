import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'

import './styles.css'
const Posts = () => {
  return (
    <div>
      <Card bg="dark" text="light">
        <Card.Img variant="top" src="https://random.imagecdn.app/1100/300" />
        <Card.Header as="h5">Fresh title</Card.Header>
        <Card.Body>
          <Card.Text className="Posts-textMuted">By David Flores on 01/01/2000</Card.Text>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Molestiae deserunt commodi ea molestias! Provident recusandae minus excepturi perspiciatis. 
            Vel voluptatem architecto eaque eius excepturi dolorem ab laboriosam at in, 
            asperiores velit eum, minus quae dignissimos aliquid repellendus quisquam libero 
            magni quibusdam placeat molestias rem repellat a? Rem tempore ea minima veniam 
            atque eos animi facere dolor pariatur inventore, optio fugit ullam mollitia dolores
            <Link to={`/Post?id=${1}`} className="Posts-outlined"> Read more...</Link>
          </Card.Text>
          <Button variant="outline-secondary" className="float-right">Go to post</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Posts
