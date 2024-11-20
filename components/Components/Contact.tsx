import Link from "next/link";

export default function Contact() {

  function getCurrentYear() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    return year;
  }
  const currentYear = getCurrentYear();

  return (<div className="relative h-full w-full">
    <h1 className="text-6xl p-7 w-full ">Contact us</h1>
    <div>
      <ul>
        <li>WhatsApp</li>
        <li>WhatsApp</li>
        <li>WhatsApp</li>
      </ul>
    </div>
    <div className="bg-yellow-primary absolute bottom-0 w-full h-24 border-t-white border-t-8 flex items-center justify-center text-bold text-sm text-blue-primary">
      <Link className="" href="https://mpsharma.com">mpsharma.com</Link>
      &nbsp;
      <p>©</p>
      &nbsp;
      <p>2024</p>
      <p>{currentYear !== 2024 ? `-${currentYear}` : ''}</p>

    </div>
  </div>);
}
