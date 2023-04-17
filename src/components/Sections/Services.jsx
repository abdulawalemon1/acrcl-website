import React from "react";
import styled from "styled-components";
// Components
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";
// Assets
import AddImage1 from "../../assets/img/about/about3.jpg";
import AddImage3 from "../../assets/img/about/about2.jpg";
import AddImage2 from "../../assets/img/about/about1.png";
import AddImage4 from "../../assets/img/about/about4.jpg";

export default function Services() {
  return (
    <Wrapper id="services">
      {/* <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
          <ClientSlider />
        </div>
      </div> */}
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="lightBg">
          <div className="container">
            <Advertising className="flexSpaceCenter">
              <AddLeft>
                <h2 className="font40 extraBold">About Us</h2>
                <p className="font12 ">
                  The children and young people will be ‘looked after, having
                  come into the care of the local authority via one of two
                  routes: <br />
                  <p className="semiBold">
                    • Being accommodated under section 20 Children Act 1989; or
                    <br /> • Being made the subject of a Care Order under
                    section 31 Children Act 1989.
                  </p>
                </p>
                <div className="font12 " style={{ marginTop: "10px" }}>
                  <p>
                    In addition to accommodation services that enable local
                    authorities to meet their Corporate Parenting duties,
                    Agility One will provide tailored support for each child in
                    our care to develop and thrive to adulthood. <br />
                    Agility One exists to provide highly individualised packages
                    that enable young service users to develop holistically to
                    have a greater chance of enjoying successful adulthood. This
                    means we are set up to provide accommodation, care, and
                    support for five young people aged 8 to 18 years in our
                    designed and furnished property in Ilford. <br />
                    Agility One’s Children’s Home will be staffed by qualified
                    and vetted staff 24/7/365. This is where our trained and
                    supported staff will provide support services that address
                    young people’s health, welfare, educational, social,
                    psychological, and personal needs. The specific activities
                    we undertake will be based on the young person’s Care Plan
                    that we develop in partnership with commissioners,
                    stakeholders, and young people. <br />
                    Agility One is committed to raising the standard of care for
                    children and young people with disabilities by providing a
                    family home-from-home experience for young people in our
                    care. Central to delivering this high-quality care is
                    ensuring a good match with our inspirational and
                    aspirational staff that care for our young people. We
                    actively work with young people to build nurturing, solid
                    relationships with our team from day 1. We strongly believe
                    that the strength of these relationships provides the
                    platform for optimal development: Young people have a better
                    chance of achieving their potential when they feel cared
                    for, have protection against harm, and with a sense of
                    emotional security.
                  </p>
                </div>

                <ButtonsRow
                  className="flexNullCenter"
                  style={{ margin: "30px 0" }}
                >
                  <div style={{ width: "190px" }}>
                    <FullButton
                      title="Get Started"
                      action={() => alert("clicked")}
                    />
                  </div>
                  <div style={{ width: "190px", marginLeft: "15px" }}>
                    <FullButton
                      title="Contact Us"
                      action={() => alert("clicked")}
                      border
                    />
                  </div>
                </ButtonsRow>
              </AddLeft>
              <AddRight>
                <AddRightInner>
                  <div className="flexNullCenter">
                    <AddImgWrapp1 className="flexCenter">
                      <img src={AddImage1} alt="office" />
                    </AddImgWrapp1>
                    <AddImgWrapp2>
                      <img src={AddImage2} alt="office" />
                    </AddImgWrapp2>
                  </div>
                  <div className="flexNullCenter">
                    <AddImgWrapp3>
                      <img src={AddImage3} alt="office" />
                    </AddImgWrapp3>
                    <AddImgWrapp4>
                      <img src={AddImage4} alt="office" />
                    </AddImgWrapp4>
                  </div>
                </AddRightInner>
              </AddRight>
            </Advertising>
          </div>
        </div>

        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Awesome Services</h1>
            <p className="font13">
              Agility One actively strives to conduct and support high
              aspirations for children and young people with special educational
              needs and disabilities. Our goal is to provide adequate care and
              services to support their health, well-being, education, and
              independence. These are the objectives that commissioners can use
              to measure the effectiveness of Agility One’s care home services:
              <br />
              <p className="semiBold">
                1. Provide quality accommodation <br />
                2. Deliver long-term stable placements <br />
                3. Young people achieve higher attainment & outcomes
                academically and vocationally <br />
                4. Meet young people’s safety, welfare, and support needs <br />
                5. Provide value-for-money services. <br />
              </p>
            </p>
          </HeaderInfo>
          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper>
              <ServiceBox
                icon="roller"
                title="Business Philosophy and values"
                subtitle="Agility One residential home management will be underpinned by the requirements of the Children Act 1989, Children Act 2004, the Care Standards Act 2000 and related legislation, including the Children’s Home Regulations and Quality Standards 2015. Our service is guided by the fundamental principles of residential care, which provide a framework for service delivery. We will aim to provide high-quality care, which places the following values at the centre of service provision. 
                As a result, Agility One’s founders’ have engaged an experienced consultant and responsible individual with extensive backgrounds as qualified social workers and experienced practitioners in the residential care sector; here is their vision of how they provide care that demonstrates the values of Agility One. 
                "
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="monitor"
                title="Feel at home"
                subtitle="Children and young people need to live somewhere they feel safe and cared for: a place they can call home; a place free from abuse and harm; and a place where they feel free and confident to express their views. Providing stability relies on identifying the proper placement for a young person early in their time in care whilst ensuring that individual and family needs are adequately assessed and support services are provided.
                We work hard to make every young person we support feel memorable, safe, and comfortable in a relaxed home environment. Our ethos is to increase young people’s potential for growth and development towards future independence and adulthood. We encourage our team to adopt an authoritative parenting style characterised by high warmth, positive/proactive control strategies, and high expectations of every young person.
                "
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="browser"
                title="Holistic support"
                subtitle="Children placed in Agility One’s accommodation will receive services and support that meets their safety, health, education, emotional, behavioural, self-identity, family, and contact needs. We are especially mindful of contributing to commissioners’ corporate parenting legal duty to ensure the principles in accommodation for Looked-after children: focus on safety and stability in home lives, relationships, education, or work; preparation for independence; promotion of health and well-being; access to and use of services; and participation in decisions about their lives."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="printer"
                title="Care Plan-led support and services"
                subtitle="We develop detailed support services based on Care Plans that we tailor to meet each young person’s identified support needs. We work with commissioners and external stakeholders like charities to provide necessary additional resources to deliver all the elements in each young person’s plan where necessary. 
                Agility One staff will attend meetings relevant to each young person’s care and Care Planning, including those stipulated in the Care Planning, Placement and Case Review Regulations 2010. By prioritising meeting young people’s needs, we will allow them to take the next step in their progression towards independence in adulthood. 
                "
              />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper>
              <ServiceBox
                icon="roller"
                title="Partners in care"
                subtitle="Agility One’s approach will be outward-facing to get the best outcomes for young people. So, we will work in partnership with each young person’s network of professionals and with young people’s families and communities of origin to sustain links and understand past issues to explore support needs. 
                We support commissioners in delivering their Corporate Parenting duties by adopting a ‘whole systems approach. We will collaborate with commissioners, the local authority, and its elected members and employees in partnership with education, health, police, other agencies and individuals with responsibility for the safety and wellbeing of young people in care. 
                "
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="monitor"
                title="The Right Support at the Right Time"
                subtitle="We know and acknowledge that young people also need opportunities to develop and experience positive relationships with adults. Agility One provides the support and guidance of positive role models, a structured environment, and resources to support each young person’s development and needs. Furthermore, we accept that delivering services to young people in care requires procedures, processes and systems to ensure that their needs are met to a high standard.
                Agility One’s approach to supporting services is based on the premise that making positive decisions, welfare, and placement stability for the young people in our accommodation is paramount. The support we provide is based on the recognition that young people require safety, space, clear boundaries, opportunities for growth, and encouragement and support to be involved in the decision-making process that affects their lives. 
                "
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="browser"
                title="Operational Objectives"
                subtitle="Agility One ultimately aims to provide a package of care tailored to young people's individual needs and identities. Delivering this high quality of service to each young person placed with us demands that we lay down firm foundations of safe practice and care that will nurture and sustain the well-being of young people. At the same time, as a private business, our operations processes will enable us to develop the business capability to be sustainable by aiming for long-term provision with an exemplary culture."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="printer"
                title="Management and supervision"
                subtitle="Cheryl Carter and Laila Morgan will take the lead in ensuring that the home is run to the highest standards and in line with current Regulations. Both Chery and Laila are highly experienced in the social care sector and possess the skills and experience to manage the organisation to achieve its business and operational objectives"
              />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp2 = styled.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp3 = styled.div`
  width: 20%;
  margin-left: 40%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;

const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;
