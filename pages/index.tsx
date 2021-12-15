import type { NextPage } from 'next';
import Image from 'next/image';
import Shrek from '../assets/images-for-real/vAhThJ84iE6Jk3ZORRLdjVebcGlW.png';
import QRCode from '../assets/images-for-real/frame_1.png';
import Stonks from '../assets/images-for-real/download.png';
import OnePieceBadges from '../assets/images-for-real/OnePieceBadges.png';
import Phone from '../assets/images/579161.png';

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
import { ReactNode, useState, useEffect } from 'react';
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
  const [wwindow, setWwindow] = useState<Window>();
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    setWwindow(window);
    setWindowWidth(window.innerWidth);
    const resize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  return (
    <div>
      <head>
        <title>NFT Halare</title>
      </head>
      <div
        style={{
          background: 'linear-gradient(to bottom right, #ff005b, #620d9a)',
        }}
        className="row row-cols-2"
      >
        <div className="p-5 my-auto text-center">
          <CustomHeader fontSize="3rem" textColor="white" fontStyle="bold">
            VILL DU HA ETT UNIKT HALARMÄRKE SOM ÄR EN INVESTERING?
          </CustomHeader>
        </div>
        <div className="pe-5 pt-5 my-auto text-center">
          <Image src={Stonks} />
        </div>
      </div>
      <div
        className="row row-cols-2 text-center justify-content-around position-relative"
        style={{ backgroundColor: '#360051' }}
      >
        <div>
          <Image src={Shrek} width={512} height={512} />
        </div>
        <div
          className="text-start m-0 p-0 position-relative"
          style={{ width: '20vw', left: '-10vw' }}
        >
          <Header1 textColor="white">01</Header1>
          <Header2 textColor="red" fontStyle="bold">
            EN INSPIRERANDE TEKNOLOGI
          </Header2>
          <CustomHeader textColor="white" fontSize={'1.25rem'}>
            Vi tog det traditionella halarmärket och gav det en ny twist.
          </CustomHeader>
        </div>
      </div>
      <div className="row row-cols-2">
        <div className="mx-0" style={{ backgroundColor: '#360051' }}>
          <div className="pt-5 mt-5 ps-5 ms-5">
            <Header1 textColor="white" className="my-0 py-0">
              02
            </Header1>
            <Header2 textColor="red" fontStyle="bold" className="my-0 py-0">
              NFT HALARMÄRKE - ETT NYTT SÄTT ATT VISA UPP HALARMÄRKET
            </Header2>
            <CustomHeader textColor="white" fontSize={'1.25rem'}>
              Vi lagt en QR kod på baksidan av halarmärken som leder till en NFT
              av bilden på halarmärket. Detta är förrutom ett halarmärke också
              en investering.
            </CustomHeader>
          </div>
        </div>
        <div className="p-0">
          <Image src={OnePieceBadges} width={windowWidth * 0.51} height={500} />
        </div>
      </div>
      <div className="text-center justify-content-center">
        <Header3 fontStyle="bold" className="mt-5">
          STATISTIK
        </Header3>
        <div className="row row-cols-auto text-center justify-content-center p-0 m-0">
          <Counter end={0}>GLADA KUNDER</Counter>
          <Counter end={Math.random() > 0.5 ? 4 : 3}>VÅRA HALARMÄRKEN</Counter>
          <Counter end={0}>HALARMÄRKEN SÅLDA</Counter>
          <Counter end={100}>ARBETSTIMMAR</Counter>
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
          <Header1
            textColor="red"
            className="my-0 mx-auto py-0 px-0 text-center"
          >
            INTRESSERAD? - TA KONTAKT
          </Header1>
        </div>
        <Form
          style={{ zIndex: 0 }}
          className="position-relative my-auto text-start"
        >
          <Form.Control
            className="bg-transparent text-white border-danger border-4 mt-5"
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
            className="mt-3 mb-5"
            variant="danger"
            onClick={async () => {
              await fetch('/api/email', {
                method: 'POST',
                body: JSON.stringify(formData),
              });
              wwindow?.location.reload();
            }}
          >
            SUBMIT
          </Button>
        </Form>
      </div>
      <div
        className="row row-cols-2 text-center justify-content-center position-relative"
        style={{ backgroundColor: '#360051' }}
      >
        <div
          className="text-start my-0 ms-auto me-0 p-0 position-relative"
          style={{ width: '20vw', left: '-10vw' }}
        >
          <Header1 textColor="white">03</Header1>
          <Header2 textColor="red" fontStyle="bold">
            NFT
          </Header2>

          <CustomHeader textColor="white" fontSize={'1.25rem'}>
            NFT står för Non Fungable Token. En NFT är ett digitalt föremål som
            finns på blockkedjan. Varje NFT är unik eftersom de innehåller en
            innbygd autentiserings mekanism som gör att det är lätt att kolla om
            en NFT är godkänd av blockkedjan. Vi har använt oss av NFT
            teknologin för att skapa unika halarmärken som bara en person äger.
          </CustomHeader>
        </div>
        <div className="my-auto p-0">
          <Image src={QRCode} width={300} height={300} />
        </div>
      </div>
      {/*
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
        <Image src={OfficeSetup} width={windowWidth * 0.5} height={200} />
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
      </div>*/}
    </div>
  );
};

export default Home;
