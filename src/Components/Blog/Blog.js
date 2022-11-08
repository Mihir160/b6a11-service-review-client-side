import React from 'react';

const Blog = () => {
    return (
        <div>
            <div>
                <h1 className='text-2xl font-bold'>Difference between SQL and NoSQL?</h1>
                <h5 className='text-1xl font-bold'>SQl:</h5>
                <p>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS).
                    These databases have fixed or static or predefined schema.
                    These databases are not suited for hierarchical data storage.
                    These databases are best suited for complex queries.
                    Vertically Scalable.Follows ACID property.
                </p>
                <h5 className='text-1xl font-bold'>NoSQL:</h5>
                <p>Non-relational or distributed database system.They have dynamic schema.
                    These databases are best suited for hierarchical data storage.These databases are not so good for complex queries
                    Horizontally scalable.Follows CAP(consistency, availability, partition tolerance)
                </p>
            </div>
            <div>
                <h1 className='text-2xl font-bold'>What is JWT, and how does it work?</h1>

                <p>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

                    A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.

                    Once decoded, you will get two JSON strings:

                    The header and the payload.
                    The signature.
                    The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.

                    The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.

                    There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others.

                    The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.
                </p>

            </div>
            <div>
                <h1 className='text-2xl font-bold'>What is the difference between javascript and NodeJS?</h1>
                <h5 className='text-1xl font-bold'>javascript:</h5>
                <p>Javascript is a programming language that is used for writing scripts on the website.Javascript can only be run in the browsers.It is basically used on the client-side.
                    Javascript is capable enough to add HTML and play with the DOM.Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.
                    Javascript is used in frontend development.Some of the javascript frameworks are RamdaJS, TypedJS, etc. 
                    It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++. 
                </p>
                <h5 className='text-1xl font-bold'>NodeJS:</h5>
                <p>NodeJS is a Javascript runtime environment.We can run Javascript outside the browser with the help of NodeJS.
                It is mostly used on the server-side.Nodejs does not have capability to add HTML tags.V8 is the Javascript engine inside of node.js that parses and runs Javascript. Nodejs is used in server-side development.
                Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm. Nodejs is written in C, C++ and Javascript.
                </p>
            </div>
            <div>
                <h1 className='text-2xl font-bold'>How does NodeJS handle multiple requests at the same time?</h1>
               
                <p>NodeJS receives multiple client requests and places them into EventQueue.
                     NodeJS is built with the concept of event-driven architecture.
                     NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
                     EventLoop is the listener for the EventQueue. 
                </p>
                
            </div>
        </div>
    );
};

export default Blog;