import React from "react";

const InspirationPage = () => {
  const inspirations = [
    {
      title: "Modern UI Design",
      description: "Clean, minimal, and elegant designs for web apps.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Creative Branding",
      description: "Inspiring brand identities and logo designs.",
      image:
        "https://static.vecteezy.com/system/resources/previews/066/739/417/non_2x/creative-logo-design-services-for-building-a-strong-visual-brand-identity-company-vector.jpg",
    },
    {
      title: "Photography Ideas",
      description: "Explore stunning photography concepts and themes.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Mobile App UI",
      description: "Trendy designs for mobile applications.",
      image:
        "https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/1fa2f512a3f8aa78906dc4748c1a8ac720e5a1d9/930b6c7f949ed825daa1372d66c860e51edc5c12",
    },
    {
      title: "E-commerce Layouts",
      description: "Stunning templates and ideas for online stores.",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Dark Mode Inspiration",
      description: "Sleek, dark-themed UI designs for modern apps.",
      image:
        "https://assets.hongkiat.com/uploads/dark-mobile-app-ui/Night-Hiking-App.jpg",
    },
    {
      title: "Portfolio Showcase",
      description: "Creative portfolio layouts to showcase your skills.",
      image:
        "https://i.etsystatic.com/34933625/r/il/4b3e1f/5333900843/il_fullxfull.5333900843_prqe.jpg",
    },
    {
      title: "Typography Trends",
      description: "Modern typography and font pairing inspiration.",
      image:
        "https://static.wixstatic.com/media/41e17b_7f3904bf562d4800a5b975bcaa5c850f~mv2.png/v1/fill/w_752,h_430,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/41e17b_7f3904bf562d4800a5b975bcaa5c850f~mv2.png",
    },

    {
      title: "Minimalist Web Design",
      description: "Simple and aesthetic designs focused on clarity.",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-10">
          Inspiration Gallery ✨
        </h1>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {inspirations.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transform transition duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h2>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <button className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm hover:bg-pink-600 transition-colors">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InspirationPage;
