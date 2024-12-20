/* eslint-disable react/prop-types */

const ContactCard = ({ name, phone, image }) => {
  return (
    <div className="flex items-center justify-between  px-4 backdrop-blur-3xl py-2 rounded-md shadow-sm mb-4">
      <div className="flex items-center space-x-4">
        <img
          src={image}
          alt={`${name}'s avatar`}
          className="w-12 h-12 rounded-full border border-gray-200"
        />
        <div>
          <h3 className="text- font-medium">{name}</h3>
          <p className="text-lg text-white0">{phone}</p>
        </div>
      </div>
      <button className="px-4 py-1 text-sm font-medium text-blue-600 border rounded-full bg-white hover:bg-neutral-100">
        View
      </button>
    </div>
  );
};

const ContactList = () => {
  const contacts = [
    {
      name: "XYZ",
      phone: "99888XXXX",
      image: "https://via.placeholder.com/48/000000/FFFFFF?text=AB",
    },
    {
      name: "XYZ",
      phone: "99888XXXX",
      image: "https://via.placeholder.com/48/000000/FFFFFF?text=CD",
    },
    {
      name: "XYZ",
      phone: "99888XXXX",
      image: "https://via.placeholder.com/48/000000/FFFFFF?text=EF",
    },
    {
      name: "XYZ",
      phone: "99888XXXX",
      image: "https://via.placeholder.com/48/000000/FFFFFF?text=GH",
    },
    {
      name: "XYZ",
      phone: "99888XXXX",
      image: "https://via.placeholder.com/48/000000/FFFFFF?text=IJ",
    },
  ];

  return (
    <div className="  rounded-lg text-white max-w-sm mx-auto">
      {contacts.map((contact, index) => (
        <ContactCard
          key={index}
          name={contact.name}
          phone={contact.phone}
          image={contact.image}
        />
      ))}
    </div>
  );
};

export default ContactList;
