const testimonials = [
    {
      name: "Jana Adams",
      role: "Coffee lover",
      rating: 5,
      text: "I dropped by to have a cappuccino and honestly, after 30 years of coffee shops, this was top-notch. Just wow!",
      img: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      name: "Sam Williams",
      role: "Entrepreneur",
      rating: 5,
      text: "I've been ordering beans from you for ten years. The quality of the product is consistently high!",
      img: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      name: "Angela Gonzales",
      role: "Coffee Enthusiast",
      rating: 5,
      text: "The care in the roast is apparent, plus the excellent customer service. Amazing experience!",
      img: "https://randomuser.me/api/portraits/women/3.jpg",
    },
  ];
  
  export default function Testimonials() {
    return (
      <section className="py-16 px-4 bg-white text-center">
        <h3 className="text-lg italic text-gray-500 mb-2">Come and join</h3>
        <h2 className="text-2xl font-semibold mb-10">Our Happy Customers</h2>
        <div className="flex flex-col md:flex-row justify-center gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-[#f9f6f2] rounded-lg p-6 shadow-md max-w-sm mx-auto">
              <div className="flex items-center gap-4 mb-4">
                <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div className="text-left">
                  <h4 className="font-semibold">{t.name}</h4>
                  <p className="text-sm text-gray-600">{t.role}</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-4">{t.text}</p>
              <div className="flex justify-center gap-1">
                {"⭐".repeat(t.rating)}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  