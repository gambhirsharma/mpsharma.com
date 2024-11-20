'use client'

import { Phone, Mail, MessageCircle } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-blue-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-12 flex flex-col lg:flex-row md:px-12 lg:px-24">
        <div className="flex-1 mb-8 lg:mb-0 lg:pr-8">
          <h2 className="text-3xl font-bold mb-6">Contact us</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <Phone className="mr-4 h-6 w-6" />
              <span className="text-xl">+91 9435339625</span>
            </div>
            <div className="flex items-center">
              <Mail className="mr-4 h-6 w-6" />
              <a href="mailto:mpsharma4444@gmail.com" className="text-xl hover:underline">mpsharma4444@gmail.com</a>
            </div>
            <div className="flex items-center">
              {/*               <MessageCircle className="mr-4 h-6 w-6" /> */}
              <svg
                fill="#ffffff"
                height="25px"
                width="25px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 308 308"
                xmlSpace="preserve"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <g id="XMLID_468_">
                    <path
                      id="XMLID_469_"
                      d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156 c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687 c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887 c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153 c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348 c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802 c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922 c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0 c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458 C233.168,179.508,230.845,178.393,227.904,176.981z"
                    ></path>
                    <path
                      id="XMLID_470_"
                      d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716 c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396 c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188 l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677 c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867 C276.546,215.678,222.799,268.994,156.734,268.994z"
                    ></path>
                  </g>
                </g>
              </svg>
              &nbsp;
              &nbsp;
              <a href="https://wa.me/919435339625" target='_blank' className="text-xl hover:underline">WhatsApp: + 91 9435339625</a>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4">Business Hours</h3>
            <p className="text-lg">Monday - Friday: 9:00 AM - 5:00 PM</p>
            <p className="text-lg">Saturday: 9:00 AM - 3:00 PM</p>
            <p className="text-lg">Sunday: Closed</p>
          </div>
        </div>
        <div className="flex-1 lg:pl-8">
          <h2 className="text-3xl font-bold mb-6">Our Office</h2>
          <div className="aspect-video mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d453489.3515087448!2d94.7810266903805!3d27.379286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x373f40e728b444f5%3A0x7e24d9ee5f3adcfa!2sLICI%20PREMIUM%20POINT!5e0!3m2!1sen!2sin!4v1725603130012!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <address className="text-lg not-italic">
            LICI PREMIUM POINT<br />
            Jutlibari Borhula, Assam 786191<br />
            India
          </address>
        </div>
      </div>
      <div className="bg-yellow-primary text-black py-3 text-center border-t-white border-t-4">
        <p className="text-lg">mpsharma.com © 2024</p>
      </div>
    </footer>
  )
}
