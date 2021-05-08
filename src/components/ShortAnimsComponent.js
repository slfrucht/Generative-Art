import React, { Component, useState } from 'react';
import { Modal, ModalBody, ModalHeader, Card, CardBody, CardImg, CardTitle } from 'reactstrap';
import ReactPlayer from 'react-player';



function RenderCard({item}) {
    return (
        <div className="container">
            <AnimModal item={item}/>
        </div>
    );
}

function ShortAnimations(props) {

    const items = props.shortAnimations.map(item => {
        return (
            <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <RenderCard item={item} />
            </div>

        );
    });

    return (
        <div className="container">
             <div className="row align-items-center">
             {items}
             </div>
            
        </div>
    );
}

class AnimModal extends Component {
    constructor(props) {
        super(props);
        console.log(JSON.stringify(props));

        this.state = {
            isOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        
    }
    toggleModal() {
        console.log("state = " + JSON.stringify(this.state));
        console.log("props = " + JSON.stringify(this.props));

        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
            <Card className="anim-card">
            <CardImg className="card-image" src={this.props.item.thumbnail} onClick={this.toggleModal} alt={this.props.item.description} />
            <CardBody className="anim-card-body">
                <CardTitle tag="p">{this.props.item.name}</CardTitle>
            </CardBody>
            </Card>
                <Modal className="anim-modal" isOpen={this.state.isOpen} toggle={this.toggleModal}>
                <ModalBody onClick={this.toggleModal}>
                    <div className='player-wrapper'>
                        <ReactPlayer
                        className='react-player'
                        url={this.props.item.movie}
                        width='100%'
                        height='100%'
                        loop="true"
                        playing="true"
                        />
                </div>
                </ModalBody>
                </Modal>
            </div>
         );
    }

}

export default ShortAnimations;