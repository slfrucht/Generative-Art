import React from 'react';
import { Card, CardBody } from 'reactstrap';

function Contact() {
    return (
        <div className="contact-body">

        <div className="row contact-card">
            <div className="col-12">
            <Card bg="Light" border="dark">
                <CardBody>
                    <div className="col info-link">
					<p>
						To see other artwork of mine please visit: <br /> <a
							href="https://www.behance.net/sarafrucht">Sara Frucht on
							Behance</a>
					</p>
				</div>


				<div className="info-link">
					<p>
						To find out about my artwork at Makers Paradise Art Gallery in
						Berkeley, CA please visit: <br /> <a
							href="https://www.makersparadise.org/">Makers Paradise Art Gallery</a>
					</p>
				</div>
				<div className="info-link">
					<p>
						I would love to hear your feedback! <br /> <a
							href="mailto:sfrucht@lmi.net?subject=Mail from SF.com">Email
							me</a>
					</p>
				</div>
                </CardBody>
            </Card>

            </div>
        </div>
        </div>


    )
}
export default Contact;