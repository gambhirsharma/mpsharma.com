import React from 'react'

function CustomMap() {
  return (
    <div className="relative flex items-center justify-center flex-col">

      <h1 className="top-0 text-6xl p-7 w-full ">Our Office</h1>
        <div className="w-[40vw] lg:aspect-[600/450] aspect-[450/600]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3542.8856634944586!2d95.35522861117818!3d27.379285976273625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x373f40e728b444f5%3A0x7e24d9ee5f3adcfa!2sLICI%20PREMIUM%20POINT!5e0!3m2!1sen!2sin!4v1725346686284!5m2!1sen!2sin"
        //width="600"
        //height="450"
        style={{ border: 0, width: "100%", height: "100%" }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      </div>
    </div>
  )
}

export default CustomMap
