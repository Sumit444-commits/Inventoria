
import ContactCard from "../components/Layout/ContactCard";
import useTypewriter from "../hooks/useTypeWriter";

const Contact = () => {
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 sm:px-8 lg:px-20 py-12">
      <h1 className="text-4xl font-bold text-blue-900 mb-10 text-center">
        {useTypewriter("Contact Us",300)}
      </h1>

      <ContactCard phone={"+92 311679910"} email={"sumit8444061@gmail.com"} address={"H#05 Talpur Colony Tandojam Disct: Hyderabad"}/>
    </div>
  );
};

export default Contact;
