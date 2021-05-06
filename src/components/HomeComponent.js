import React from "react";
import {Card, CardImg, CardText, CardBody, CardTitle} from "reactstrap";
import CardImgOverlay from "reactstrap/lib/CardImgOverlay";

function RenderCard({item}) {
    return (
        <div className="container">
        <Card className="flex-sm-row">
            <CardImg className="card-image" src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle tag="h4">{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
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