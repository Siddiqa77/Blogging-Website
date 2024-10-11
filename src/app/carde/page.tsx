import React from 'react'

const Blog = () => {
  return (
    <div>
      <div className="p-8 w-full lg:w-[80%] lg:ml-[120px]">
  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
    <img
      className="w-full h-60 object-cover object-center md:h-[100%] lg:h-[100%] lg:w-full rounded"
      src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="full-page blog"
    />
    <div className="p-8">
     
      <h1 className="title-font text-3xl font-bold card-title mb-4">
        Machine Learnings
      </h1>
      <p className="leading-relaxed text-lg mb-6 text-white">
      Machine Learning tutorial covers basic and advanced concepts, specially
       designed to cater to both students and experienced working professionals.
       This machine learning tutorial helps you gain a solid introduction to the fundamentals of machine learning and explore a wide range of techniques, including supervised, unsupervised, and reinforcement learning.

Machine learning (ML) is a subdomain of artificial intelligence (AI) that focuses on developing systems that learn—or improve performance—based on the data they ingest. Artificial intelligence is a broad word that 
refers to systems or machines that resemble human intelligence. Machine learning and AI are frequently discussed together, and the terms are occasionally used interchangeably, although they do not signify the same
 thing. A crucial distinction is that, while all machine learning is AI, not all AI is machine learning.Machine Learning is the field of study that gives computers the capability to learn without being explicitly
  programmed. ML is one of the most exciting technologies that one would have ever come across. As it is evident from the name, it gives the computer that makes it more similar to humans: The ability to learn. Machine learning is actively being used today, perhaps in many more places than one would expect.
  </p>
      
    </div>
  </div>
</div>


    </div>
  )
}

export default Blog