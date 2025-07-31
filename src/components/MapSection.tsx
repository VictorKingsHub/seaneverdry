// src/components/MapSection.tsx
'use client';

const MapSection = () => {
  // This URL is for "1 UKE STREET AREA 11 GARKI, ABUJA, Nigeria"
  const googleMapsEmbedUrl = "https://maps.google.com/?cid=17931833422885337766&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ";

  return (
    // Applied consistent padding and background for a polished look
    <section className="w-full py-16 md:py-24 bg-white" id="map">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Adjusted padding for responsiveness */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8"> {/* Enhanced heading styling */}
          Find Us On The Map
        </h2>
        <div className="w-full rounded-xl overflow-hidden shadow-2xl border-4 border-green-100"> {/* Stronger shadow and a subtle green border */}
          <iframe
            title="SeaNeverDry Location"
            src={googleMapsEmbedUrl} // The correct URL for your Abuja office
            width="100%"
            height="500" // Increased height for better visibility
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default MapSection;