import React, { Component } from 'react';
import Head from 'next/head'

class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <body>
                <Head>
                    <title>VR Article</title>
                </Head>
                <div>
                    <header>
                        <h1>Experience VR</h1>
                        <p>A simple blog about virtual reality experience</p>

                        <nav>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/#about">About</a></li>
                                <li><a href="/#articles">Articles</a></li>
                                <li><a href="/#contact">Contact</a></li>
                            </ul>
                        </nav>
                    </header>

                    <article id="vr-articles">
                        <header>
                            <h2>VR Article </h2>
                            <p>By: Harley</p>
                            <p>Publish: June 19, 2018</p>
                        </header>

                        <img src="../../img/vr-user.jpg" alt="User trying a VR headset" />

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce finibus urna lacus, ut lacinia elit pretium a. Praesent rutrum ac ipsum vitae rhoncus. Nam non molestie purus.</p>
                        <aside>
                            <q>This is a pull quote from the VR Article...</q>
                        </aside>
                        <p>Nunc imperdiet, dui in varius eleifend, magna enim imperdiet felis, at ultricies magna metus vitae ante. Nulla in porttitor nibh. Mauris non libero in massa porta varius non sed magna. Donec ac mauris mattis, viverra turpis ac, dictum arcu.</p>
                        <p>Vivamus molestie laoreet viverra. Ut ac fringilla ex. Donec at nisl semper, commodo mi maximus, fermentum nisi. Duis bibendum gravida ante sit amet consectetur. Curabitur ac est id justo euismod porta quis ac arcu.</p>
                    </article>

                    <aside>
                        <h3>More Article About VR</h3>
                        <ol>
                            <li><a href="#">Make a VR Game</a></li>
                            <li><a href="#">Learn VR in Unity</a></li>
                            <li><a href="#">Build Users Interfaces in VR</a></li>
                        </ol>
                        <blockquote>
                            "Virtual reality was once the dream of science fiction. But the internet was also once a dream, and so were computers and smartphones. The future is coming."
                        <footer>
                                - <cite><a href="https://www.facebook.com/zuck/posts/10101319050523971">Mark Zuckerberg</a></cite>
                            </footer>
                        </blockquote>
                    </aside>

                    <footer>
                        <p>&copy;2018 Experience VR, The Blog</p>
                    </footer>
                </div>
            </body>
        );
    }
}


export default Demo;