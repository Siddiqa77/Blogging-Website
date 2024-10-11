import React from 'react'

const Blog = () => {
  return (
    <div>
      <div className="p-8 w-full lg:w-[80%] lg:ml-[120px]">
  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
    <img
      className="w-full h-60 object-cover object-center md:h-[100%] lg:h-[100%] lg:w-full rounded"
      src="https://images.unsplash.com/photo-1489110804417-276c3f517515?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="full-page blog"
    />
    <div className="p-8">
     
      <h1 className="title-font text-3xl font-bold card-title mb-4">
      Cybersecurity & Privacy
      </h1>
      <p className="leading-relaxed text-lg mb-6 text-white">
      
      Stay informed on the latest cybersecurity threats, best practices for data protection, and tools to safeguard personal and organizational information.
       Cybersecurity and data protection are words that people tend to use interchangeably. While they have similarities and often overlap, it’s kind of like discussing a rectangle and a square where both have four sides but are distinct shapes. In a digital world, your cybersecurity posture directly impacts your data protection and privacy initiatives. 

Over the last few years, malicious actors have increased the number and speed of their attacks. According to the 2022 Verizon Data Breach Investigations Report, the median number of records compromised per breach in 2021 was 80,000. Additionally, the report noted that 8,465 Distributed Denial of Service (DDoS) attacks occurred in 2021, with four leading to confirmed data disclosure. In short, you can experience a cybersecurity incident without necessarily experiencing a data breach. 

Understanding the key differences between cybersecurity and data protection can help you better understand their unique benefits, especially when it comes to ensuring customer privacy. 

      </p>
      
    </div>
  </div>
</div>


    </div>
  )
}

export default Blog