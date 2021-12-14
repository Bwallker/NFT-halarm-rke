import type { NextPage } from 'next';
import Image from 'next/image';
import Logo from '../assets/images/579161.png';
import Girl from '../assets/images/67732.jpg';
import Header1 from '../components/Text/Header1';
import Header3 from '../components/Text/Header3';
import Header2 from '../components/Text/Header2';
import CustomHeader from '../components/Text/CustomHeader';

const LILink = (href: string, text: string) => (
  <li>
    <a className="text-decoration-none text-white" href={href}>
      {text}
    </a>
  </li>
);

const Home: NextPage = () => {
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
          <Image src={Logo} width={417} height={717} />
        </div>
      </div>
      <div
        className="row row-cols-2 text-center justify-content-center position-relative"
        style={{ backgroundColor: '#360051' }}
      >
        <div className="m-0 p-0 translate-middle-y">
          <Image src={Girl} width={568.5} height={540} />
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
    </div>
  );
};

export default Home;
