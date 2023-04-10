import React from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
import FullButton from "../Buttons/FullButton";
import TestimonialSlider from "../Elements/TestimonialSlider";

// Assets
import ContactImg1 from "../../assets/img/job/job3.jpg";
import ContactImg2 from "../../assets/img/job/job2.jpg";
import ContactImg3 from "../../assets/img/job/job1.jpg";

export default function Blog() {
  return (
    <Wrapper id="blog">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Careers</h1>
            <p className="font18">Current Positions</p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Permanent Residential Support Worker"
                text="Location: Bromley, Greater London"
                tag="Sector: Social Care Residential Home"
                // author="Luke Skywalker, 2 days ago"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Part-Time Residential Support Worker"
                text="Location: Bromley, Greater London"
                tag="Sector: Social Care Residential Home"
                // author="Luke Skywalker, 2 days ago"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Bank Staff Residential Support Worker"
                text="Location: Bromley, Greater London"
                tag="Sector: Social Care Residential Home"
                // author="Luke Skywalker, 2 days ago"
                action={() => alert("clicked")}
              />
            </div>
          </div>
          {/* <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="New Office!"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                tag="company"
                author="Luke Skywalker, 2 days ago"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="New Office!"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                tag="company"
                author="Luke Skywalker, 2 days ago"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="New Office!"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                tag="company"
                author="Luke Skywalker, 2 days ago"
                action={() => alert("clicked")}
              />
            </div>
          </div> */}
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="Load More" action={() => alert("clicked")} />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Start */}
      <Wrapper id="blog">
        <div className="lightBg">
          <div className="container">
            <HeaderInfo>
              <h1 className="font40 extraBold textCenter">Apply for a job!</h1>
            </HeaderInfo>
            <div className="row" style={{ paddingBottom: "30px" }}>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
                <div
                  style={{ width: "50%" }}
                  className="flexNullCenter flexColumn"
                >
                  <ContactImgBox>
                    <img
                      src={ContactImg1}
                      style={{ width: "180px" }}
                      alt="office"
                      className="radius6"
                    />
                  </ContactImgBox>
                  <ContactImgBox>
                    <img
                      src={ContactImg2}
                      style={{ width: "200px" }}
                      alt="office"
                      className="radius6"
                    />
                  </ContactImgBox>
                </div>
                <div style={{ width: "50%" }}>
                  <div style={{ marginTop: "100px" }}>
                    <img
                      src={ContactImg3}
                      style={{ width: "200px" }}
                      alt="office"
                      className="radius6"
                    />
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <Form>
                  <label className="font13">Name:</label>
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    className="font20 extraBold"
                  />
                  <label className="font13">Email:</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="font20 extraBold"
                  />
                  <label className="font13">Phone:</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="font20 extraBold"
                  />
                  <label className="font13">Position:</label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    className="font20 extraBold"
                  />
                  <textarea
                    rows="4"
                    cols="50"
                    type="text"
                    id="message"
                    name="message"
                    className="font20 extraBold"
                  />
                </Form>
                <SumbitWrapper className="flex">
                  <ButtonInput
                    type="submit"
                    value="Apply Now!"
                    className="pointer animate radius8"
                    style={{ maxWidth: "220px" }}
                  />
                </SumbitWrapper>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>

      {/* Contact Form End */}

      <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">What They Say?</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <TestimonialSlider />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;

const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #7620ff;
  background-color: #7620ff;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
const ContactImgBox = styled.div`
  max-width: 180px;
  align-self: flex-end;
  margin: 10px 30px 10px 0;
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;
