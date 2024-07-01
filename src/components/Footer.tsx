import {
  FaClock,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-black text-white flex justify-evenly p-10">
        <div className="space-y-3">
          <h1 className="text-2xl">Rent cars</h1>
          <p className="text-xl text-gray-300">
            We are well-known car rental service<br></br> that has many partners
            in each region<br></br> to connect with you to assist in your
            <br></br>
            trip in meetings, events, holidays or<br></br> long trips
          </p>
          <div className="flex  space-x-2">
            <FaLinkedin size={25} />
            <FaFacebook size={25} />
            <FaInstagram size={25} />
          </div>
        </div>
        <div className="list-none space-y-2">
          <ul className="text-2xl ">Company</ul>
          <li className="text-xl text-gray-300">About Us</li>
          <li className="text-xl text-gray-300">Contact Info</li>
          <li className="text-xl text-gray-300">Our Service</li>
          <li className="text-xl text-gray-300">Career</li>
        </div>
        <div className="list-none space-y-2">
          <ul className="text-2xl">Services</ul>
          <li className="text-xl text-gray-300">Airport Transfers</li>
          <li className="text-xl text-gray-300">Ride-Hailing</li>
          <li className="text-xl text-gray-300">Corporate Accounts</li>
          <li className="text-xl text-gray-300">Hourly Rentals</li>
        </div>
        <div className="space-y-2 text-xl ">
          <h1 className="text-2xl">Work Hours</h1>
          <div className="flex space-x-2 items-center text-gray-300">
            <FaClock />
            <h1>9AM - 5 PM, Monday - Saturday</h1>
          </div>
          <div className="flex space-x-2 items-center text-gray-300">
            <FaPhoneAlt />
            <h1>+971 (555) 123-456</h1>
          </div>
          <div>
            <h1 className="text-gray-300">
              Our Support and Sales team is available<br></br> 24/7 to answer
              your queries
            </h1>
          </div>
        </div>
      </div>
      <div className="px-[150px] py-5 justify-between flex bg-black text-gray-300">
        <div>
          <h1 className="text-md">Copyright © 2024 RentCars</h1>
        </div>
        <div>
          <div className="flex space-x-2">
            <h1>Terms of Use |</h1>
            <h1>Privacy Policy</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
