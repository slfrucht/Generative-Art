import React from "react";
import { Link } from "react-router-dom";
import {Card, CardImg, CardText, CardBody, CardTitle} from "reactstrap";

function RenderCard({item}) {
    return (
        <div className="container">
        <Card className="flex-md-row align-items-center">
            <Link to={item.link}>
                <CardImg className="card-image" src={item.image} alt={item.name} />
            </Link>
            <CardBody>
                <CardTitle tag="h4">{item.name}</CardTitle>
                <CardText>{item.description} <a href={item.link}>more...</a></CardText>
            </CardBody>
        </Card>
        </div>
    );
}

function Home(props) {

    const items = props.homePageElements.map(item => {
        return (
            <div className="row">
            <div key={item.id} className="col m-2">
                <RenderCard item={item} />
            </div>
            </div>

        );
    });

    return (
        <div className="container">
            
                {items}
                <div className="card-spacer"/>
        </div>
    );
}

export default Home;