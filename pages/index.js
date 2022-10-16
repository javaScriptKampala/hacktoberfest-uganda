import Layout from "../components/Layout";
import Image from "next/image";
import hacktoberfestLogo from "../public/hacktoberfest-logo.png";
import jsKampalaLogo from "../public/JavaScript-logo.png";
import oscaKampalaLogo from "../public/osca-kla.jpeg";
import pythonKampalaLogo from "../public/python-kla.png";
import outboxLogo from "../public/outbox-logo.jpeg";

export default function Home() {
  return (
    <Layout title="Home Page">
      {/* hacktoberfest logo image  */}
      <div className="centered-horizontally">
        <Image src={hacktoberfestLogo} />
      </div>

      {/* description  */}
      <div className="centered-horizontally">
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* call to action buttons */}
      <div className="flex justify-center space-x-8">
        <button className="primary-button uppercase bg-white text-black border-white text-md">
          registration is now open
        </button>
        <button className="primary-button uppercase border-white border text-md">
          see colaborators
        </button>
      </div>

      {/* partners and sponsors  */}
      <div className="centered-horizontally">
        <h4 className="text-gray-400 uppercase ">brought to you by:</h4>
        <div className="space-x-8 flex flex-row">
          <div>
            <Image src={jsKampalaLogo} width={100} height={100} />
          </div>
          <div>
            <Image src={oscaKampalaLogo} width={100} height={100} />
          </div>
          <div>
            <Image src={pythonKampalaLogo} width={100} height={100} />
          </div>
          <div>
            <Image src={outboxLogo} width={100} height={100} />
          </div>
        </div>
      </div>

      {/* projects  */}
      {/* <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        projects
      </div> */}
    </Layout>
  );
}
