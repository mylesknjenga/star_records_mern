import { Accordion, Button } from 'react-bootstrap';

const FilterAside = () => {
  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Filter by Genre</Accordion.Header>
        <Accordion.Body>
          <Button variant='warning' className='m-1' active>R&B</Button>
          <Button variant='warning' className='m-1' active>Hip hop</Button>
          <Button variant='warning' className='m-1' active>Jazz</Button>
          <Button variant='warning' className='m-1' active>Soul</Button>
          <Button variant='warning' className='m-1' active>Rock</Button>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Filter by price</Accordion.Header>
        <Accordion.Body>
        <Button variant='warning' className='m-1' active>Below $25</Button>
          <Button variant='warning' className='m-1' active>$25-$65</Button>
          <Button variant='warning' className='m-1' active>$65 and up</Button>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
};

export default FilterAside;