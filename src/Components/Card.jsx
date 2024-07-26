import React from 'react';
import { Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import { FaShoppingCart, FaSearch, FaHeart, FaShareAlt, FaStar } from 'react-icons/fa';
import img1 from '../assets/asset1.jpeg';

const ProductCard = () => {
  return (
    <Card className='relative m-20 border-2 border-red-400' style={{ width: '25rem', height: '400px' }}>
      <Card.Img variant="top" src={img1} className='img-fluid' />
      <div className="d-flex flex-column position-absolute" style={{ right: '10px', top: '10px' }}>
        <Button variant="" className="mb-2 p-0 bg-white rounded-circle" style={{ width: '36px', height: '36px' }}>
          <FaShoppingCart />
        </Button>
        <Button variant="" className="mb-2 p-0 bg-white rounded-circle" style={{ width: '36px', height: '36px' }}>
          <FaSearch />
        </Button>
        <Button variant="" className="mb-2 p-0 bg-white rounded-circle" style={{ width: '36px', height: '36px' }}>
          <FaHeart />
        </Button>
        <Button variant="" className='mb-2 p-0 bg-white rounded-circle' style={{ width: '36px', height: '36px' }}>
          <FaShareAlt />
        </Button>
      </div>
      <Card.Body>
        <Card.Title>Darkest Chocolate</Card.Title>
        <Card.Text>
          <div className="d-flex justify-content-between align-items-center">
            <div className='d-flex'>
              {[...Array(5)].map((star, index) => (
                <FaStar key={index} color="lightgray" />
              ))}
            </div>
            <div>
              <span className="text-muted">0 Reviews</span>
            </div>
          </div>
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>
          <strong>$13.00</strong>
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
};

export default ProductCard;
