import React, { useState } from 'react';
import Navbar from './Navbar';

const clients = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    services: ['Tax Filing', 'Audit'],
    address: '123 Main St, Cityville, CA 12345',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '987-654-3210',
    services: ['Bookkeeping', 'Consulting'],
    address: '456 Elm St, Townsville, CA 67890',
  },
  {
    id: 3,
    name: 'Mike Johnson',
    email: 'mike.johnson@example.com',
    phone: '555-123-4567',
    services: ['Payroll', 'Audit'],
    address: '789 Maple Ave, Metropolis, CA 34567',
  },
  {
    id: 4,
    name: 'Sara Williams',
    email: 'sara.williams@example.com',
    phone: '444-789-0123',
    services: ['Tax Filing', 'Consulting'],
    address: '321 Oak St, Smalltown, CA 54321',
  },
  {
    id: 5,
    name: 'Tom Brown',
    email: 'tom.brown@example.com',
    phone: '222-654-7890',
    services: ['Bookkeeping', 'Payroll'],
    address: '654 Pine St, Big City, CA 67890',
  },
  {
    id: 6,
    name: 'Emily Davis',
    email: 'emily.davis@example.com',
    phone: '999-012-3456',
    services: ['Consulting', 'Audit'],
    address: '987 Birch Ave, Megalopolis, CA 34567',
  },
  {
    id: 7,
    name: 'Robert Wilson',
    email: 'robert.wilson@example.com',
    phone: '777-555-1234',
    services: ['Tax Filing', 'Bookkeeping'],
    address: '246 Spruce St, Little City, CA 54321',
  },
  {
    id: 8,
    name: 'Linda Martinez',
    email: 'linda.martinez@example.com',
    phone: '888-789-0123',
    services: ['Consulting', 'Payroll'],
    address: '135 Cedar Ave, Middletown, CA 67890',
  },
  {
    id: 9,
    name: 'Chris Anderson',
    email: 'chris.anderson@example.com',
    phone: '333-222-4567',
    services: ['Audit', 'Consulting'],
    address: '579 Cherry St, Villagetown, CA 34567',
  },
  {
    id: 10,
    name: 'Jessica Thomas',
    email: 'jessica.thomas@example.com',
    phone: '111-666-7890',
    services: ['Bookkeeping', 'Tax Filing'],
    address: '864 Aspen St, Hamlet, CA 54321',
  },
  {
    id: 11,
    name: 'Daniel Harris',
    email: 'daniel.harris@example.com',
    phone: '666-444-0123',
    services: ['Payroll', 'Audit'],
    address: '753 Willow Ave, Urbania, CA 67890',
  },
  {
    id: 12,
    name: 'Anna White',
    email: 'anna.white@example.com',
    phone: '555-333-5678',
    services: ['Consulting', 'Tax Filing'],
    address: '159 Hickory St, Countryside, CA 34567',
  },
  {
    id: 13,
    name: 'James Lee',
    email: 'james.lee@example.com',
    phone: '444-111-2345',
    services: ['Audit', 'Bookkeeping'],
    address: '258 Magnolia Ave, Town City, CA 54321',
  },
  {
    id: 14,
    name: 'Sophia Kim',
    email: 'sophia.kim@example.com',
    phone: '333-999-0123',
    services: ['Payroll', 'Consulting'],
    address: '357 Dogwood St, Metropolis, CA 67890',
  },
  {
    id: 15,
    name: 'William Brown',
    email: 'william.brown@example.com',
    phone: '222-888-3456',
    services: ['Tax Filing', 'Audit'],
    address: '456 Oakwood Ave, Smalltown, CA 34567',
  },
  {
    id: 16,
    name: 'Mia Johnson',
    email: 'mia.johnson@example.com',
    phone: '111-777-5678',
    services: ['Consulting', 'Bookkeeping'],
    address: '654 Pine St, Big City, CA 54321',
  },
  {
    id: 17,
    name: 'David Anderson',
    email: 'david.anderson@example.com',
    phone: '999-555-7890',
    services: ['Audit', 'Payroll'],
    address: '789 Maple Ave, Metropolis, CA 67890',
  },
  {
    id: 18,
    name: 'Ella Martinez',
    email: 'ella.martinez@example.com',
    phone: '888-222-1234',
    services: ['Tax Filing', 'Consulting'],
    address: '321 Oak St, Smalltown, CA 34567',
  },
  {
    id: 19,
    name: 'Liam Wilson',
    email: 'liam.wilson@example.com',
    phone: '777-666-2345',
    services: ['Bookkeeping', 'Audit'],
    address: '135 Cedar Ave, Middletown, CA 54321',
  },
  {
    id: 20,
    name: 'Olivia Davis',
    email: 'olivia.davis@example.com',
    phone: '333-444-0123',
    services: ['Payroll', 'Consulting'],
    address: '246 Spruce St, Little City, CA 67890',
  },
];

const Client = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredClients = clients.filter((client) =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentClients = filteredClients.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredClients.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div>
        <Navbar/>
    <div className="bg-[rgb(0,6,36)] bg-gradient-to-r from-[rgba(0,6,36,1)] to-[rgba(14,119,212,0.89)] to-75% min-h-screen p-4">
      <div className="max-w-5xl mt-10 mx-auto">
        <h1 className="text-5xl font-bold text-white mb-6">Client List</h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by name"
            className="px-4 py-2 border border-gray-300 rounded-lg w-full"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                  Name
                </th>
                <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                  Email
                </th>
                <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                  Phone
                </th>
                <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                  Services
                </th>
                <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                  Address
                </th>
              </tr>
            </thead>
            <tbody>
              {currentClients.map((client) => (
                <tr key={client.id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b border-gray-200 text-sm">
                    {client.name}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm">
                    {client.email}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm">
                    {client.phone}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm">
                    {client.services.join(', ')}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm">
                    {client.address}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex justify-between">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
          >
            Previous
          </button>
          <div className='text-white'>
            Page {currentPage} of {totalPages}
          </div>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Client;
