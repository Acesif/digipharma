import React from 'react'
import Layout from '../components/Layout/Layout'
import abimg from '../images/about.jpeg'


const About = () => {
  return (
    <Layout title={"About"}>
      <div className="row contact-us">
        <div className="col-md-6 ">
          <img
            src={abimg}
            alt="contact us"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h2 className='pb-5'>About Us</h2>
          <p className="text-justify mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            officiis obcaecati esse tempore unde ratione, eveniet mollitia,
            perferendis eius temporibus dicta blanditiis doloremque explicabo
            quasi sunt vero optio cum aperiam vel consectetur! Laborum enim
            accusantium atque, excepturi sapiente amet! Tenetur ducimus aut
            commodi illum quidem neque tempora nam.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About