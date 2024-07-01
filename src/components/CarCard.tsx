import { FaStar, FaUsers } from "react-icons/fa";
import { TbAutomaticGearbox } from "react-icons/tb";
import { MdOutlineSevereCold } from "react-icons/md";
import { GiCarDoor } from "react-icons/gi";

interface Props {
  image: string;
  title: string;
  rate: string;
  review: string;
  passengers: string;
  auto: string;
  airconditioning: string;
  door: string;
  price: string;
}

const CarCard = ({
  image,
  title,
  rate,
  review,
  passengers,
  auto,
  airconditioning,
  door,
  price,
}: Props) => {
  return (
    <div className="border-2 w-[350px] h-[450px] flex flex-col justify-center mx-auto space-y-2 rounded-3xl p-5">
      <div className="w-[300px] flex justify-center mx-auto h-[150px]">
        <img className=" w-full h-full object-fit" src={image} />
      </div>
      <div>
        <h1 className="text-xl font-bold uppercase">{title}</h1>
      </div>
      <div className="flex space-x-2 items-center">
        <FaStar className="text-yellow-400" />
        <h1 className="font-semibold">{rate}</h1>
        <h1 className="text-gray-500">({review} reviews)</h1>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center space-x-2">
          <FaUsers size={20} className="text-gray-500" />
          <h1 className="text-gray-500">{passengers} Passengers</h1>
        </div>
        <div className="flex items-center space-x-2">
          <TbAutomaticGearbox size={20} className="text-gray-500" />
          <h1 className="text-gray-500">{auto}</h1>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center space-x-2">
          <MdOutlineSevereCold size={20} className="text-gray-500" />
          <h1 className="text-gray-500">{airconditioning}</h1>
        </div>
        <div className="flex items-center space-x-2">
          <GiCarDoor size={20} className="text-gray-500" />
          <h1 className="text-gray-500">{door} Doors</h1>
        </div>
      </div>
      <hr></hr>
      <div className="flex justify-between">
        <h1 className="text-gray-500 text-lg">Price</h1>
        <h1 className="text-lg font-semibold">
          {price} /<span className="text-gray-500">day</span>
        </h1>
      </div>
      <div className="flex justify-center">
        <button className="bg-black text-white w-[80%] py-2 rounded-full text-lg">
          Rent Now
        </button>
      </div>
    </div>
  );
};

export default CarCard;
