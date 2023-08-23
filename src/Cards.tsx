
import { Card, Button, Container, Row, Col } from 'react-bootstrap';


const CardData = [
    {
        title: 'Black Tea',
        // text: 'This is the first card.',
        src: 'black tea.jpg',
    },
    {
        title: 'Masala Tea',
        // text: 'This is the second card.',
        src: 'masala tea.jpg'
    },
    {
        title: 'Elaichi Tea',
        // text: 'This is the third card.',
        src: 'elaichi tea.jpg'
    },
    {
        title: 'Classic Green Tea',
        // text: 'This is the second card.',
        src: 'classicgreentea.jpg'
    },
    {
        title: 'Organic Green Tea',
        // text: 'This is the second card.',
        src: 'organicgreentea.jpg'
    },
    {
        title: 'Premium Black Tea',
        // text: 'This is the second card.',
        src: 'premium black tea.jpg'
    },
    {
        title: 'Premium Green Tea',
        // text: 'This is the second card.',
        src: 'premium green tea.jpg'
    },
    {
        title: 'Premium White Tea',
        // text: 'This is the second card.',
        src: 'premium white tea.jpg'
    },
];


function BasicExample() {
    return (

        <Container className="mt-4">
            <Row>
                {CardData.map((card, index) => (
                    <Col key={index} md={4}>
                        <Card className="text-center">
                            <Card.Img variant="top" src={card.src}
                                      style={{ width: '200px', height: '300px' }} />
                            <Card.Body>
                                <Card.Title>{card.title}</Card.Title>
                                {/*<Card.Text>{card.text}</Card.Text>*/}
                                <Button variant="primary">Buy</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default BasicExample;