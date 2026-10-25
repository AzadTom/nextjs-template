
"use client";

import { MapPin, Star, Umbrella, Utensils, Wifi } from "lucide-react";
import { useAuthStore } from "@/store/useAuthStore";
import ReadMore from "../readmore/ReadMore";

const heroimg =
  "https://images.unsplash.com/photo-1789700537085-f6127b35ae33?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D";

const Example = () => {
  const { isLogin, setDialog } = useAuthStore((state) => state);

  const handleBooking = () => {
    if (!isLogin) {
      setDialog(true);
    } else {
      alert("User is logged in");
    }
  };

  return (
    <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:gap-12">
      {/* Image */}
      <div className="flex-1">
        <img
          src={heroimg}
          width={1280}
          height={720}
          alt="Paradise Hotel"
          className="aspect-video h-full w-full rounded-2xl object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-5 pr-8">
        {/* Hotel Information */}
        <div>
          <p className="mb-2 text-sm uppercase tracking-wider text-black/50">
            Luxury Hotel
          </p>

          <h2 className="text-5xl font-bold">
            The Paradise Hotel
          </h2>

          <p className="mt-2 flex items-center gap-1.5 text-sm text-black/50">
            <MapPin size={16} strokeWidth={1.8} />
            Maldives · Beachfront
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <Star
              size={18}
              strokeWidth={1.8}
              className="fill-yellow-500 text-yellow-500"
            />

            <span className="font-semibold">4.8</span>
          </div>

          <span className="text-black/40">·</span>

          <span className="text-sm text-black/50">
            324 reviews
          </span>
        </div>

        {/* Summary */}
        <ReadMore
          text="Experience a relaxing stay at The Paradise Hotel, surrounded by beautiful beaches, modern rooms, and exceptional hospitality. Perfect for a peaceful getaway or a romantic vacation. Experience a relaxing stay at The Paradise Hotel, surrounded by beautiful beaches, modern rooms, and exceptional hospitality. Perfect for a peaceful getaway or a romantic vacation."
        />

        {/* Highlights */}
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-black/60">
          <span className="flex items-center gap-2">
            <Umbrella size={17} strokeWidth={1.8} />
            Private Beach
          </span>

          <span className="flex items-center gap-2">
            <Utensils size={17} strokeWidth={1.8} />
            Restaurant
          </span>

          <span className="flex items-center gap-2">
            <Wifi size={17} strokeWidth={1.8} />
            Free Wi-Fi
          </span>
        </div>

        {/* Price + Booking Button */}
        <div className="flex items-center justify-between border-t pt-5">
          <div>
            <p className="text-sm text-black/40">
              Starting from
            </p>

            <p className="text-2xl font-bold">
              $249
              <span className="text-sm font-normal text-black/40">
                {" "}/ night
              </span>
            </p>
          </div>

          <button
            type="button"
            onClick={handleBooking}
            className="rounded-full bg-black px-8 py-3 font-medium text-white transition hover:bg-black/80"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Example;
