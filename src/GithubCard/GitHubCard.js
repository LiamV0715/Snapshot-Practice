import React from "react"
import Card from "react-bootstrap/Card"
import BreakingBad from './Breaking-Bad.jpg'

function GitHubCard() {
  return (
      <div className="card">
        <Card style={{ width: "18rem", 'border-radius': '25px', height: '100px'}}>
        {/* Use your GitHub info instead, but Mickey Mouse is used as an example */}
        <Card.Img variant="top" src={BreakingBad} style={{height: '100px'}}/>
        
        <Card.Body>
            <Card.Title>Liam Vermette</Card.Title>
            <Card.Text>
            It's me Liam, and I NEVER get tired of filler text!
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard