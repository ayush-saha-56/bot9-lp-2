import React from 'react';
const NavLinks = () => {
  const links = ['Features', 'Pricing', 'Contact Us'];
  return (
    <nav>
      <ul className="flex space-x-10">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="text-lg text-[#667185] hover:text-[#5755FF]">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default NavLinks;