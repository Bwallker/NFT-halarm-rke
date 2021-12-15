import type { NextPage } from 'next';
import Image from 'next/image';
import Phone from '../assets/images/579161.png';
import Girl from '../assets/images/67732.jpg';
import GirlDots from '../assets/images/Untitled5.png';
import Phone2 from '../assets/images/OS5KJE1.png';
import Phone2Circle from '../assets/images/Untitled6.png';
import PhoneBusinessmen from '../assets/images/closeupofthreebusinesspeoplehandsusingtheirsmartphoneswhileridingtheelevator_swgbe9_9r__F0000.jpg';
import Phone3 from '../assets/images/grcell2.jpg';
import Phone4 from '../assets/images/Untitled6.jpg';
import OfficeSetup from '../assets/images/Untitled2.jpg';
import AppleLogo from '../assets/images/h5img11.png';
import Header1 from '../components/Text/Header1';
import Header2 from '../components/Text/Header2';
import Header3 from '../components/Text/Header3';
import CustomHeader from '../components/Text/CustomHeader';
import CountUp from 'react-countup';
import { ReactNode, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const LILink = (href: string, text: string) => (
  <li>
    <a className="text-decoration-none text-white" href={href}>
      {text}
    </a>
  </li>
);

const Counter = ({
  end,
  children,
}: {
  end: number;
  children: ReactNode | string;
}) => {
  return (
    <div className="px-5 mx-5">
      <CountUp
        start={0}
        end={end}
        duration={1}
        className="text-danger display-1 fw-bold"
      />
      <p>{children}</p>
    </div>
  );
};

const Home: NextPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  return (
    <div>
      <div
        style={{
          background: 'linear-gradient(to bottom right, #ff005b, #620d9a)',
        }}
        className="row row-cols-2"
      >
        <div className="p-5 mt-5 text-center">
          <Header1 textColor="white" fontStyle="bold">
            CREATE
          </Header1>
          <Header1 textColor="white" fontStyle="bold">
            & DELIVER
          </Header1>
          <Header2 textColor="white">Real Experience</Header2>
        </div>
        <div className="pe-5 pt-5 text-center position-sticky">
          <Image src={Phone} width={417} height={717} />
        </div>
      </div>
      <div
        className="row row-cols-2 text-center justify-content-center position-relative"
        style={{ backgroundColor: '#360051' }}
      >
        <div className="m-0 p-0 translate-middle-y d-flex">
          <Image src={Girl} width={568.5} height={540} />
          <div
            className="position-relative"
            style={{ top: '20vh', left: '-5vw' }}
          >
            <Image src={GirlDots} width={284} height={284} />
          </div>
        </div>
        <div
          className="text-start m-0 p-0 position-relative"
          style={{ width: '20vw', left: '-10vw' }}
        >
          <Header1 textColor="white">01</Header1>
          <Header2 textColor="red" fontStyle="bold">
            AN INSPIRATIONAL TECHNOLOGY
          </Header2>
          <CustomHeader textColor="white" fontSize={'1.25rem'}>
            Phasellus scelerisque sed leo quis gravida. Fusce lobortis libero ut
            arcu blandit pharetra.
          </CustomHeader>
        </div>
      </div>
      <div
        className="row row-cols-2 text-center justify-content-center position-relative"
        style={{ backgroundColor: '#360051' }}
      >
        <div
          className="text-start my-0 ms-auto me-0 p-0 position-relative"
          style={{ width: '20vw', left: '-10vw' }}
        >
          <Header1 textColor="white">02</Header1>
          <Header2 textColor="red" fontStyle="bold">
            QUICKLY PICK UP
          </Header2>
          <Header2 textColor="red" fontStyle="bold">
            A NEW SKILL
          </Header2>
          <CustomHeader textColor="white" fontSize={'1.25rem'}>
            How much time do you think that you get to make a good impression
            with a potential customer? If you’re talking about interacting with
            them online, you have less than three seconds.
          </CustomHeader>
        </div>
        <div className="m-0 p-0 d-flex">
          <Image src={Phone2} width={625.6} height={660.8} />
          <div className="position-relative" style={{ left: '-10vw' }}>
            <Image src={Phone2Circle} width={300} height={300} />
          </div>
        </div>
      </div>
      <div className="text-center justify-content-center">
        <Header3 fontStyle="bold" className="mt-5">
          DOING THE RIGHT THINGS
        </Header3>
        <div className="row row-cols-auto text-center justify-content-center p-0 m-0">
          <Counter end={92}>HAPPY CLIENTS</Counter>
          <Counter end={33}>AWARDS WINNING</Counter>
          <Counter end={12}>OUR PROJECTS</Counter>
          <Counter end={492}>WORKING HOURS</Counter>
        </div>
      </div>
      <div className="row row-cols-auto text-center justify-content-center position-relative">
        <Image
          src={PhoneBusinessmen}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <div
          style={{
            width: '100%',
            height: '100%',
            background: 'rgba(67,0,93,0.7)',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        />
        <div
          style={{ zIndex: 0, left: 0 }}
          className="mx-5 px-5 position-relative text-start"
        >
          <Header1 textColor="red" className="my-0 py-0">
            DREAM,
          </Header1>
          <Header1 textColor="red" className="my-0 py-0">
            TRAIN AND
          </Header1>
          <Header1 textColor="red" className="my-0 py-0">
            ACTIVATE
          </Header1>
          <CustomHeader textColor="white" fontSize={'1.25rem'}>
            Justis pede vixtu, aliquet vel fringilla, pellentes arcu eget mus
            vix
          </CustomHeader>
        </div>
        <Form
          style={{ zIndex: 0 }}
          className="position-relative my-auto text-start"
        >
          <Form.Control
            className="bg-transparent text-white border-danger border-4"
            type="text"
            value={formData.name}
            placeholder="Name"
            onChange={(e) => {
              console.log(e.target.value);
              setFormData({ ...formData, name: e.target.value });
            }}
          />
          <Form.Control
            className="bg-transparent text-white border-danger border-4 my-2"
            type="email"
            value={formData.email}
            placeholder="Email"
            onChange={(e) => {
              console.log(e.target.value);
              setFormData({ ...formData, email: e.target.value });
            }}
          />
          <Form.Control
            className="bg-transparent text-white border-danger border-4"
            style={{ height: '10vh', width: '12vw' }}
            as="textarea"
            value={formData.message}
            placeholder="Message"
            onChange={(e) => {
              console.log(e.target.value);
              setFormData({ ...formData, message: e.target.value });
            }}
          />
          <Button
            className="mt-3"
            variant="danger"
            onClick={async () => {
              await fetch('/api/email', {
                method: 'POST',
                body: JSON.stringify(formData),
              });
            }}
          >
            SUBMIT
          </Button>
        </Form>
      </div>
      <div className="row row-cols-2">
        <div className="p-0">
          <Image src={Phone3} width={window.innerWidth * 0.51} height={500} />
        </div>
        <div className="mx-0" style={{ backgroundColor: '#360051' }}>
          <div className="pt-5 mt-5">
            <Header1 textColor="white" className="my-0 py-0">
              03
            </Header1>
            <Header2 textColor="red" fontStyle="bold" className="my-0 py-0">
              USERFRIENDLY DESIGN
            </Header2>
            <CustomHeader textColor="white" fontSize={'1.25rem'}>
              How much time do you think that you get to make a good impression
              with a potential customer? If you’re talking about interacting
              with them online, you have less than three seconds.
            </CustomHeader>
          </div>
        </div>
      </div>
      <div className="row row-cols-2 justify-content-center">
        <div className="mt-5 ps-5">
          <Header2 textColor="red" fontStyle="bold">
            WHAT WE DO
          </Header2>
          <CustomHeader textColor="black" fontSize={'1.25rem'}>
            While you could create a separate version of your website that works
            well on mobile devices from the one people see on desktop, for most
            businesses the better option is to make one website that’s
            responsive.
          </CustomHeader>
          <Image src={Phone4} />
        </div>
        <Image src={OfficeSetup} width={window.innerWidth * 0.5} height={200} />
      </div>
      <div
        className="text-center mt-5"
        style={{
          background: 'linear-gradient(to bottom right, #aa005b, #830d9a)',
        }}
      >
        <Header2 textColor="red" fontStyle="bold">
          GET THE APP
        </Header2>
        <p
          style={{ color: '#e2a8f8', fontSize: '1.25rem', width: '30%' }}
          className="mx-auto mb-5"
        >
          In vitae velit luctus, imperdiet augue et, elementum dui. Sed sit amet
          nisi nulla. In ut diam id lectus efficitur efficitur quis vitae felis.
          Suspendisse euismod leo sapien, sit amet accumsan quam fermentum nec.
        </p>
        <Image src={AppleLogo} />
      </div>
    </div>
  );
};

export default Home;
