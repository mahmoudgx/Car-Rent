import { FaStar } from "react-icons/fa";

interface Props {
  rating?: number;
  avatar: string;
  name: string;
  location: string;
  review: string;
}

const CustomerReviewCard = ({
  name,
  rating = 5,
  avatar,
  location,
  review,
}: Props) => {
  return (
    <div className="border-2 w-[470px] p-5 space-y-3 rounded-xl">
      <div className="flex items-center space-x-2">
        <div>
          <img src={avatar} className="w-[32px] h-[32px] rounded-full" />
        </div>
        <div>
          <h1 className="font-semibold">{name}</h1>
          <h1 className="text-gray-500">{location}</h1>
        </div>
      </div>
      <div>
        <p className="text-lg">{review}</p>
      </div>
      <div className="mr-5 space-y-2 items-center">
        <div className="flex items-center space-x-1">
          {Array.from({ length: rating }, (_, i) => (
            <FaStar key={i} className="text-yellow-500" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReviewCard;
