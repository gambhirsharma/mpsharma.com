 const Stats = () =>  {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Helping business and family</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum
          dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "20", text: "Years of experience" },
            { number: "200", text: "Years of experience" },
            { number: "120+", text: "Years of experience" },
            { number: "20", text: "Years of experience" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-blue-primary mb-2">{stat.number}</p>
              <p className="text-sm md:text-base text-gray-600">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats;

