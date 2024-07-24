import React from 'react';
import { Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import { FaShoppingCart, FaSearch, FaHeart, FaShareAlt, FaStar } from 'react-icons/fa';

const ProductCard = () => {
  return (
    <Card className='relative m-20 border-2 border-red-400 h-[400px]  ' style={{ width: '25rem' }}>
      <Card.Img className='h-auto mx-' variant="top" src="{images[2]}" />
      <div className="d-flex absolute flex-column right-0 m-2">
          <Button variant="" className="mb-2 w-8 h-8 bg-white rounded-full px-2">
            <FaShoppingCart />
          </Button>
          <Button variant="" className="mb-2 w-8 h-8 bg-white rounded-full px-2">
            <FaSearch />
          </Button>
          <Button variant="" className="mb-2 w-8 h-8 bg-white rounded-full px-2">
            <FaHeart />
          </Button>
          <Button variant="" className='mb-2 w-8 h-8 bg-white rounded-full px-2'>
            <FaShareAlt />
          </Button>
        </div>
      <Card.Body>
        <Card.Title>Darkest Chocolate</Card.Title>
        <Card.Text>
          <div className="d-flex justify-content-between align-items-center flex-row relative">
            
            <div className='flex flex-row'>
              {[...Array(5)].map((star, index) => (
                <FaStar key={index} color="lightgray" />
              ))}
            </div>
            <div>
              <span className="text-muted left-24 top-[-5px] absolute">0 Reviews</span>
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
