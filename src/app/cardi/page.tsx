import React from 'react'

const Blog = () => {
  return (
    <div>
      <div className="p-8 w-full lg:w-[80%] lg:ml-[120px]">
  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
    <img
      className="w-full h-60 object-cover object-center md:h-[100%] lg:h-[100%] lg:w-full rounded"
      src="https://plus.unsplash.com/premium_photo-1675842663249-a8b70103dbaa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="full-page blog"
    />
    <div className="p-8">
     
      <h1 className="title-font text-3xl font-bold card-title mb-4">
      Programming Languages
      </h1>
      <p className="leading-relaxed text-lg mb-6 text-white">
     
      From Python to JavaScript, explore coding tips, new language features, and the best frameworks for modern development.
      A programming language is a system of notation for writing computer programs. Programming languages are described in terms
       of their syntax and semantics, usually defined by a formal language. Languages usually provide features such as a type
        system, variables, and mechanisms for error handling.
      
        A programming language is a system of notation for writing computer programs.[1]

Programming languages are described in terms of their syntax (form) and semantics (meaning), usually defined by a formal language. Languages usually provide features such as a type system, variables, and mechanisms
 for error handling. An implementation of a programming language is required in order to execute programs, namely an interpreter or a compiler. An interpreter directly executes the source code, while a compiler produces an executable program.

Computer architecture has strongly influenced the design of programming languages, with the most common type (imperative languages—which implement operations in a specified order) developed to perform well on the popular von Neumann architecture. While early programming languages were closely tied to the hardware, over time they have developed more abstraction to hide implementation details for greater simplicity.
      </p>
      
    </div>
  </div>
</div>


    </div>
  )
}

export default Blog