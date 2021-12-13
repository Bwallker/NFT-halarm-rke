import type { NextPage } from 'next';
import Image from 'next/image';
import Logo from '../assets/images/579161.png';
import Header1 from '../components/Text/Header1';
import Header3 from '../components/Text/Header3';

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
          <Header1 textColor="white">CREATE & DELIVER</Header1>
          <Header3 textColor="white">Real Experience</Header3>
        </div>
        <div className="pe-5 pt-5 text-center position-sticky">
          <Image src={Logo} width={417} height={717} />
        </div>
      </div>
    </div>
  );
};

export default Home;
