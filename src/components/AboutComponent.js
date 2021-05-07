import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardImg, CardTitle, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

function About() {
    return (
        <div>
            <div className="card-spacer"/>
            <h2>About Sara Frucht</h2>
            <div className="row align-items-center  m-2">
                <div className="col-12 col-sm-8">
                    <p>
                        Sara Frucht is an artist, programmer and mathematician who has been working in a variety of media for many years. When she was growing up, she had a fascination for geometry, especially the 4th dimension. When she was in high school, she won a regional award for a presentation on visualizing the binomial formula (a + b)^4 with a 3-d model she had made from pipe cleaners. Later she created various geometric models by soldering brass rods and folding mat board.
                    </p>
                </div>
                <div className="col-12 col-sm-4">
                    <Card className="about-card" m-10>
                        <CardImg className="about-image" src="/assets/images/24-sided.jpg" alt="24-cell" />
                        <CardBody>
                            <CardTitle tag="p">24-cell 4-d platonic solid</CardTitle>
                        </CardBody>
                    </Card>
                </div>
            </div>


            <h3>Painting</h3>
            <div className="row align-items-center  m-2">
                <div className="col-12 col-sm-4">
                    <Card className="about-card" m-10>
                    <CardImg className="about-image" src="/assets/images/ivy.jpg" alt="Ivy painting" />
                <CardBody>
                    <CardTitle tag="p">Ivy</CardTitle>
                </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-sm-8">
                    <p>
                    Starting in 2008, she taught herself how to paint, painting mostly still life, floral and landscape, using acrylics on paper. She has shown her work in galleries in Berkeley, Oakland, San Francisco, Sacramento and Pacifica.
                    </p>
                </div>
            </div>
            <div className="row align-items-center  m-2">
                <div className="col-12 col-sm-8">
                    <p>
                    A few years ago, she started making paintings on her iPad, using the Brushes app. She loves iPad painting because she can do it anywhere.  This painting was done sitting in a friend's living room in fromt of the fire.
                    </p>
                </div>
                <div className="col-12 col-sm-4">
                    <Card className="about-card" m-10>
                    <CardImg className="about-image" src="/assets/images/tangerines.jpg" alt="Tangerines painting" />
                <CardBody>
                    <CardTitle tag="p">Tangerines</CardTitle>
                </CardBody>
                    </Card>
                </div>
            </div>

            <h3>Kaleidoscapes</h3>

            <div className="row align-items-center  m-2">
                <div className="col-12 col-sm-4">
                    <Card className="about-card" m-10>
                    <CardImg className="about-image" src="/assets/images/portland.jpg" alt="24-sided" />
                <CardBody>
                    <CardTitle tag="p">Kaleidoscape generating 24-sided space</CardTitle>
                </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-sm-8">
                    <p>
                    In 1987, Frucht came up with and patented the idea of creating immersive environments she calls “kaleidoscapes”. There are spherical tiling patterns that are created by putting mirrors on the inside of a pyramid whose walls meet at particular angles. The effect of being inside one of these structures is of being inside a much larger space that is a 3-dimensional mandala. She has created kaleidoscopes for science and children’s museums, math fairs and a holistic health center. She is currently working on an installation at a maker’s space in Reno, Nevada.
                    </p>
                </div>
            </div>

            <h3>Laser cut art</h3>

            <div className="row align-items-center  m-2">
                <div className="col-12 col-sm-8">
                    <p>
                    In 2018, Frucht began an internship at the College of Alameda to learn to use equipment in their Fab Lab.  She began by fabricating her own mirrors to make small kaleidoscope prototypes, but soon began to explore other possibilities for making laser cut art.  She started out by making assemblages with laser cut paper and plastic sheets, then started making lamps. When she heard that certain types of fabric could be laser cut to create non-fraying edges, she made a series of laser cut shirts, dresses and shawls.  She sold these items along with her paintings at the Makers Paradise gallery in Berkeley, California until the gallery closed due to the pandemic.
                    </p>
                </div>
                <div className="col-12 col-sm-4">
                <Card className="about-card" m-10>
               <CardImg className="about-image" src="/assets/images/sunflower_lamp.jpg" alt="Sunflower lamp" />
                <CardBody>
                    <CardTitle tag="p">Sunflower lamp</CardTitle>
                </CardBody>
                    </Card>
                </div>
            </div>


            <h3>Generative Art</h3>

            <div className="row align-items-center  m-2">
                <div className="col-12 col-sm-4">
                    <Card className="about-card" m-10>
                    <CardImg className="about-image" src="/assets/images/groove_thing.png" alt="Sunflower lamp" />
                <CardBody>
                    <CardTitle tag="p">The Groove Thing</CardTitle>
                </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-sm-8">
                    <p>
                    Frucht started making generative art in the mid-90s.  She was working on a contract to make Escher-based screen savers when the project was cancelled.  She decided to go ahead with creating the screen savers on her own, using Escher’s tiling patterns as a jumping off point for creating randomly generated animating art. She and her business partner, Loring Vogel, published the set of screen savers as Sara’s Geometric Dreams.
                    </p>
                    <p>
                The screen savers were then incorporated into an experimental art and music program called “The Groove Thing”, published by Big Top Productions, in 1994. The Groove Thing was sold worldwide and apparently became a cult item among European acid heads. It also appeared as an interactive installation at Epcot Center.
                    </p>
                </div>
            </div>

            <div className="row align-items-center  m-2">
                <div className="col-12 col-sm-8">
                    <p>
                These generative art pieces were also incorporated into Bliss Paint, published by Imaja, an interactive tool for combining music with generative art animation.  Frucht created two sets of animations for Imaja: Geometric Bliss, based on the original animations, and Space Garden Meditations, a set of animations based on fractals and plant forms.  Bliss Paint was shown at many raves and concerts in the San Francisco Bay Area during the ‘90s.
                    </p>
                </div>
                <div className="col-12 col-sm-4">
                <Card className="about-card" m-10>
                <CardImg className="about-image" src="/assets/images/bliss.jpg" alt="bliss image" />
                <CardBody>
                    <CardTitle tag="p">Image from "Space Garden Meditations"</CardTitle>
                </CardBody>
                    </Card>
                </div>
            </div>

            <div className="row align-items-center  m-2">
                <div className="col-12 col-sm-4">
                <Card className="about-card" m-10>
                <CardImg className="about-image" src="/assets/images/generative_art.png" alt="spiral curve image" />
                <CardBody>
                    <CardTitle tag="p">Image from "Spiral Lines" animation</CardTitle>
                </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-sm-8">
                    <p>
                    In 2008, Frucht teamed up with the former CEO of BigTop, Jim Myrick, to create, among other things, a Flash-based art and music program called reVerb. When Flash stopped being supported in browsers, she decided she needed to update her Flash-based animations to JavaScript, and of course, create completely new pieces. The result is the current set of JavaScript/Canvas animations.
                    </p>
                </div>
            </div>




            <div className="container align-items-center m-1">
            <div className="row">
            <h3 className="col-12">Artist Statement About Generative Art</h3>
            </div>
            <div className="col-12">
            <p>
                I believe that math can best be understood visually, and that the beauty and elegance of math can be best expressed through art. Rather than using paints and canvas, I use mathematical formulas and computer code to create art. The main tools I use are symmetry, tiling patterns, splines, fractals, colors, transparency, and of course, randomness.
            </p>
            <p>
                The main challenge for me is to create a series of random images that can each stand on their own as well-composed, interesting and beautiful artistic compositions, and that also move in a way that is pleasing and holds the viewer’s interest.  Creating these art pieces for me is like making a stew - I come up with a concept and write a program, but it often doesn’t look very interesting at first. I have to work with it, pushing various aspects of it until it gels and turns into something exciting and unexpected.
            </p>
            </div>
            </div>

        </div>
    )
}
export default About;