import React from 'react';

function Services() {
  const services = [
    { name: 'Gear Engineering and Repacement', description: 'Gear engineering and replacement play a vital role in maintaining the efficiency and reliability of mechanical systems. Gears are integral components in transmitting power and motion, used extensively in automotive, industrial, and machinery applications. Precision in gear engineering ensures smooth operation, optimal torque delivery, and minimal energy loss. Over time, gears can wear out due to friction, misalignment, or heavy loads, leading to decreased performance or potential system failure. Gear replacement involves selecting components with the correct specifications, including material, size, and tooth profile, to ensure compatibility and durability. Regular inspection and timely replacement of gears not only prevent costly breakdowns but also enhance the overall performance and longevity of mechanical systems.' },
    { name: 'Oil Change', description: 'Regular oil changes are vital for maintaining the performance and longevity of your vehicle transmission system. At Gupta Auto Transmission in Qatar, we ensure your transmission runs smoothly by using premium-grade oils and expert techniques. Clean oil reduces friction, prevents overheating, and ensures seamless gear shifting, enhancing both fuel efficiency and driving comfort. Our skilled technicians provide comprehensive inspections during every oil change, helping identify potential issues early and saving you from costly repairs. With a commitment to quality, affordable pricing, and customer satisfaction, Gupta Auto Transmission is your trusted partner for reliable oil change services.' },
    { name: 'Tire Replacement', description: 'Tire replacement is a crucial aspect of vehicle maintenance that ensures safety, optimal performance, and fuel efficiency. Over time, tires wear out due to road friction, weather conditions, and usage patterns, reducing their grip and stability. Worn tires can compromise handling, increase braking distance, and heighten the risk of accidents, especially in adverse weather conditions. It is essential to regularly inspect tire tread depth and overall condition, replacing them when the tread reaches the minimum legal limit or shows signs of damage like cracks or bulges. Choosing the right replacement tires suited to your vehicle and driving needs enhances driving comfort and prolongs the life of your vehicle.' },
    { name: 'Engine Diagnostics', description: 'Engine diagnostics is a critical process for identifying and addressing issues within a vehicles engine system, ensuring optimal performance and reliability. Modern vehicles are equipped with sophisticated onboard diagnostics (OBD) systems that monitor engine functions and detect irregularities. By using diagnostic tools, mechanics can access fault codes and pinpoint problems such as misfires, fuel inefficiency, or sensor malfunctions. This proactive approach helps prevent minor issues from escalating into costly repairs while maintaining the engines health. Regular engine diagnostics improve fuel economy, reduce emissions, and ensure the vehicle operates safely and efficiently. It is an essential aspect of routine vehicle maintenance, supporting both performance and longevity.' },
    { name: 'Brake Services', description: 'Brake services are essential for maintaining vehicle safety and ensuring responsive stopping power under all driving conditions. The braking system, comprising components like brake pads, rotors, calipers, and fluid, experiences wear and tear due to regular use and varying road conditions. Regular brake inspections help identify issues such as worn pads, warped rotors, or fluid leaks, which, if left unchecked, can compromise braking performance. Timely services, including pad replacement, rotor resurfacing, and fluid flushes, restore the systems efficiency and reliability. Investing in professional brake maintenance not only enhances safety but also prevents costly repairs and ensures a smoother, more confident driving experience' },
    { name: 'Vehicle Inspections', description: 'Vehicle inspections are a vital part of maintaining road safety, ensuring that a vehicle is in optimal condition and compliant with regulatory standards. These inspections involve a comprehensive check of critical systems, including brakes, tires, lights, suspension, and emissions. Regular inspections can identify potential issues, such as worn-out components or fluid leaks, before they lead to significant breakdowns or accidents. They also ensure adherence to environmental regulations by monitoring emissions and fuel efficiency. Whether conducted as part of routine maintenance or for mandatory compliance, vehicle inspections help extend the lifespan of the vehicle, enhance performance, and provide peace of mind for drivers and passengers alike.' },
  ];

  return (
    <div className='d-flex flex-column justify-content-center align-itmes-center'>
      <div className='services d-flex gap-4 justify-content-center'>
        <img src="/our_service.png" alt="not found" style={{width:'4rem', height:'4rem', backgroundColor:"#f0f2f5"}}  />
        <h2>Our Services</h2>
      </div>
      <div className='ms-4 d-flex flex-column bg-body-secondary me-4 p-3 rounded-3'>
        <div  className='d-flex justify-content-center mb-4'>
          <h2 style={{fontSize:'40px'}} >GENERAL REPAIR SERVICES</h2>
        </div>
        <div className='d-flex justify-content-between mx-4 ' >
          <div className='object-fit-cover d-flex flex-column gap-3 bg-dark p-3 text-white rounded-2 justify-content-between'>
            <img src="/gearbox_1.jpeg" alt="empty" className='rounded-2'/>
            <h4 >AUTO TRANSMISSION PARTS</h4>
          </div>
          <div className='object-fit-cover d-flex flex-column gap-3 bg-dark p-3 text-white rounded-2 justify-content-between'>
          <img src="/gearbox_2.jpeg" alt="empty" className='rounded-2'/>
          <h4>TORQUE CONVERTER REPAIR</h4>
          </div>
          <div className='object-fit-cover d-flex flex-column gap-3 bg-dark p-3 text-white rounded-2 justify-content-between'>
          <img src="/gearbox_3.jpeg" alt="empty" className='rounded-2'/>
          <h4>TRANSMISSION REBUILD</h4>
          </div>
          
        </div >
        
      </div>
      <div className='d-flex flex-wrap justify-content-center gap-4' >
        {services.map((service, index) => (
          <div key={index} className='d-flex flex-column mb-4 ms-4'>
            <h4 style={{fontSize:'40px'}} className='text-center'>{service.name}</h4>
            <p>{service.description}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
