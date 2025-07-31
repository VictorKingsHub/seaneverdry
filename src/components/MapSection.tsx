// src/components/MapSection.tsx
"use client";

const MapSection = () => {
  // This URL is confirmed for "1 UKE STREET AREA 11 GARKI, ABUJA, Nigeria"
  const googleMapsEmbedUrl =
    "https://maps.google.com/?cid=17931833422885337766&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ";

  return (
    // Applied consistent padding and background for a polished look
    <section className="w-full py-16 md:py-24 bg-white" id="map">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        {/* Adjusted padding for responsiveness */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-2">
          {" "}
          {/* Heading styling */}
          Find Us On The Map
        </h2>
        {/* Added the address text directly below the heading */}
        <p className="text-lg md:text-xl text-center text-gray-700 max-w-2xl mx-auto mb-8">
          Our location: 1 UKE STREET AREA 11 GARKI, ABUJA, NIGERIA
        </p>
        <div className="w-full rounded-xl overflow-hidden shadow-2xl border-4 border-green-100">
          {" "}
          {/* Stronger shadow and a subtle green border */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.3193266896674!2d7.49313977501056!3d9.034607288901167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b8e38484b69%3A0xf8daab7dbe8ebaa6!2s1%20Uke%20St%2C%20Garki%2C%20Abuja%20900001%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1753926940424!5m2!1sen!2sng"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
