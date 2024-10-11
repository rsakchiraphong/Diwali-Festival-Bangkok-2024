import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 text-gray-800">
      <header className="bg-[url('/images/diwali-header.jpg')] bg-cover bg-center py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/70 to-pink-500/70"></div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <h1 className="text-6xl font-serif mb-4">Diwali Festival Bangkok 2024</h1>
          <p className="text-2xl font-light mb-2">Come Join & Celebrate</p>
          <p className="text-xl mb-8">October 28 - November 3, 2024 @ Little India Bangkok (Phahurat Rd.)</p>
          <button className="bg-white text-orange-600 hover:bg-orange-100 text-lg px-8 py-3 transition-colors">
            Explore Event
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 space-y-24">
        {/* Introduction Section */}
        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif mb-6 text-orange-600">ดิวาลีเฟสติวัล เทศกาลเฉลิมฉลองที่ยิ่งใหญ่ที่สุดของคนเชื้อสายอินเดีย</h2>
          <p className="text-lg mb-8">
            Bharat Choice World (BCW) in collaboration with Indian Association of Thailand (IAT),
            Bangkok Metropolitan Administration (BMA), Tourism Authority of Thailand (TAT),
            Mittare Insurance Public Company Limited and partners are excited to present the "Diwali Festival Bangkok 2024."
          </p>
        </section>

        {/* Festival Zones Section */}
        <section>
          <h2 className="text-4xl font-serif mb-12 text-center text-orange-600">Festival Zones and Activities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Cross-Cultural Zone",
                thaiTitle: "โซนวัฒนธรรมไทย อินเดีย",
                items: [
                  "Various Indian Food & products",
                  "Traditional Thai and Indian cultural displays",
                  "Interactive cultural workshops"
                ]
              },
              {
                title: "Main Stage",
                thaiTitle: "โซนเวทีหลัก แสงสีเสียง",
                items: [
                  "Vibrant lights and sound shows",
                  "Bollywood-style entertainment",
                  "Live music and dance performances"
                ]
              },
              {
                title: "Festival Marketplace",
                thaiTitle: "โซนตลาดไทย อินเดีย",
                items: [
                  "Shop a variety of Indian and Thai products",
                  "Handicrafts and artisanal goods",
                  "Festival souvenirs and memorabilia"
                ]
              }
            ].map((zone, index) => (
              <div key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 p-6 rounded-lg">
                <h3 className="text-2xl font-serif text-orange-600 mb-2">{zone.title}</h3>
                <p className="text-lg text-orange-500 mb-4">{zone.thaiTitle}</p>
                <ul className="space-y-2">
                  {zone.items.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="text-orange-500 mr-2">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Sponsorship Benefits Section */}
        <section className="bg-gradient-to-r from-orange-100 to-pink-100 p-8 rounded-lg shadow-md">
          <h3 className="text-3xl font-serif text-orange-600 mb-6">Why Sponsor Diwali Festival Bangkok?</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Reach 100,000+ attendees over 7 days",
              "Connect with the 150,000-strong Indian community in Thailand",
              "Gain exposure to international tourists and local Thai audience",
              "Associate your brand with cultural diversity and celebration",
              "Benefit from extensive media coverage",
              "Showcase your commitment to cultural exchange and CSR"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center">
                <span className="text-orange-500 mr-2">•</span> {benefit}
              </div>
            ))}
          </div>
        </section>

        {/* Sponsorship Packages Section */}
        <section>
          <h2 className="text-4xl font-serif mb-12 text-center text-orange-600">Sponsorship Packages</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                name: 'Silver', 
                price: '50,000 THB', 
                color: 'bg-gradient-to-br from-gray-100 to-gray-200',
                benefits: [
                  'Logo Spot at the event',
                  'Press Release Invitation',
                  'Opening Ceremony Invitation',
                  'Complimentary Booth Space (4 SQM)',
                  'Regular Announcement during the event',
                  '2 Sponsor Seats'
                ]
              },
              { 
                name: 'Gold', 
                price: '100,000 THB', 
                color: 'bg-gradient-to-br from-yellow-100 to-yellow-200',
                benefits: [
                  'All Silver benefits',
                  'Photo Booth Spot with private logo',
                  'Logo Featured in Press Release',
                  'Complimentary Booth Space (8 SQM)',
                  '2 Sponsor Seats'
                ]
              },
              { 
                name: 'Diamond', 
                price: '250,000 THB', 
                color: 'bg-gradient-to-br from-blue-100 to-blue-200', 
                limited: '5 spots only',
                benefits: [
                  'All Gold benefits',
                  'Logo Spot on Main KV & Video Highlight',
                  'Logo Featured in VIP Invitations',
                  'Souvenir from Chief Guest',
                  'Complimentary Booth Space (12 SQM)',
                  '2 VIP Seats'
                ]
              },
              { 
                name: 'Co-Host', 
                price: '500,000 THB', 
                color: 'bg-gradient-to-br from-purple-100 to-purple-200', 
                limited: '2 spots only',
                benefits: [
                  'All Diamond benefits',
                  'Welcome Chief Guest / Diya ceremony',
                  'Prominent Logo placement (Top position)',
                  'Complimentary Booth Space (16 SQM)',
                  'Special Kurti / VIP Seat / VIP Spot',
                  '2 Front Sofa seats'
                ]
              },
            ].map((pkg) => (
              <div key={pkg.name} className={`${pkg.color} shadow-md transition-all duration-300 hover:shadow-lg p-6 rounded-lg`}>
                <h3 className="text-2xl font-serif text-orange-600 mb-4">{pkg.name} Package</h3>
                <p className="text-3xl font-bold mb-4 text-gray-800">{pkg.price}</p>
                {pkg.limited && <p className="text-sm text-orange-600 font-semibold mb-4">{pkg.limited}</p>}
                <ul className="text-sm mb-4 space-y-2">
                  {pkg.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-orange-500 mr-2">•</span> {benefit}
                    </li>
                  ))}
                </ul>
                <button className="bg-orange-500 hover:bg-orange-600 text-white w-full py-2 rounded transition-colors">
                  Select Package
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-orange-100 to-pink-100 text-gray-800 py-10 mt-24">
        <div className="container mx-auto px-4 text-center">
          <p className="text-2xl font-serif mb-4 text-orange-600">Happy Diwali to you and your family</p>
          <hr className="border-orange-200 my-4" />
          <p className="mb-2">Coordinator: Mr. Sukthep (Tel. 081 171 7005)</p>
          <p>Mr. Prasert. (Tel. 062 696 5552)</p>
          <hr className="border-orange-200 my-4" />
          <div className="mt-4">
            <p>Organized by Bharat Choice World (BCW) in collaboration with:</p>
            <p>Indian Association of Thailand (IAT), Bangkok Metropolitan Administration (BMA),</p>
            <p>Tourism Authority of Thailand (TAT), Mittare Insurance Public Company Limited</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
