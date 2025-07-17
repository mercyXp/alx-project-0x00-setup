const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4 mt-auto">
      <p>&copy; {new Date().getFullYear()} Daily Contents. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
