"use client";

import { useAuthStore } from "@/store/useAuthStore";

const heroimg =
  "https://images.unsplash.com/photo-1789700537085-f6127b35ae33?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D";

const Demo = () => {
  const { isLogin, setDialog } = useAuthStore((state) => state);
  const handleBooking = () => {
    if (!isLogin) {
      setDialog(true);
    }else{
      alert("user is loggedin");
    }
  };

  return (
    <div className="flex gap-12">
      {/* Image */}
      <div className="flex-1">
        <img
          src={heroimg}
          alt="Paradise Hotel"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col  gap-5 pr-8">
        <div>
          <p className="text-sm text-black/50 uppercase tracking-wider mb-2">
            Luxury Hotel
          </p>

          <h2 className="text-5xl font-bold">The Paradise Hotel</h2>

          <p className="text-sm text-black/50 mt-2">📍 Maldives · Beachfront</p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <span className="text-yellow-500 text-lg">★</span>
            <span className="font-semibold">4.8</span>
          </div>

          <span className="text-black/40">·</span>

          <span className="text-sm text-black/50">324 reviews</span>
        </div>

        {/* Summary */}
        <p className="text-base leading-7 text-black/60">
          Experience a relaxing stay at The Paradise Hotel, surrounded by
          beautiful beaches, modern rooms, and exceptional hospitality. Perfect
          for a peaceful getaway or a romantic vacation.
        </p>

        {/* Highlights */}
        <div className="flex gap-6 text-sm text-black/60">
          <span>🏖️ Private Beach</span>
          <span>🍽️ Restaurant</span>
          <span>📶 Free Wi-Fi</span>
        </div>

        {/* Price + Button */}
        <div className="flex items-center justify-between pt-5 border-t">
          <div>
            <p className="text-sm text-black/40">Starting from</p>
            <p className="text-2xl font-bold">
              $249
              <span className="text-sm font-normal text-black/40">
                {" "}
                / night
              </span>
            </p>
          </div>

          <button
            onClick={handleBooking}
            className="rounded-full bg-black px-8 py-3 text-white font-medium hover:bg-black/80 transition"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Demo;
