import React, { useState } from 'react';
import { Briefcase, Users, PieChart, Code, CheckCircle, TrendingUp, Shield, Zap } from 'lucide-react';

// --- Department Data ---
const departmentData = [
  {
    id: 'eng',
    name: 'Software Engineering',
    description: 'Developing, maintaining, and scaling the core product infrastructure and features.',
    icon: Code,
    color: 'bg-indigo-600',
  },
  {
    id: 'prd',
    name: 'Product Management',
    description: 'Defining the product vision, strategy, and roadmap based on market and customer needs.',
    icon: Zap,
    color: 'bg-red-500',
  },
  {
    id: 'mkt',
    name: 'Marketing & Outreach',
    description: 'Crafting compelling campaigns to reach new customers and grow the brand presence.',
    icon: PieChart,
    color: 'bg-green-600',
  },
  {
    id: 'hr',
    name: 'Human Resources',
    description: 'Fostering a positive work culture, recruiting top talent, and managing employee development.',
    icon: Users,
    color: 'bg-purple-600',
  },
  {
    id: 'fin',
    name: 'Finance & Accounting',
    description: 'Managing company assets, budgeting, financial planning, and ensuring compliance.',
    icon: Briefcase,
    color: 'bg-yellow-600',
  },
  {
    id: 'sales',
    name: 'Sales & Business Dev',
    description: 'Driving revenue by acquiring new clients and building strong strategic partnerships.',
    icon: TrendingUp,
    color: 'bg-sky-600',
  },
  {
    id: 'legal',
    name: 'Legal & Compliance',
    description: 'Ensuring all operations adhere to legal standards and protecting the company’s interests.',
    icon: Shield,
    color: 'bg-gray-600',
  },
];

// --- Department Card Component ---
const DepartmentCard = ({ department, isSelected, onSelect }) => {
  const Icon = department.icon;

  const baseClasses =
    "flex flex-col items-start p-6 rounded-xl shadow-lg cursor-pointer transition-all duration-300 transform border-2 h-full";

  const selectedClasses = isSelected
    ? `${department.color} text-white shadow-2xl scale-[1.03] border-4 border-white ring-4 ring-offset-2 ring-opacity-50 ${department.color.replace('bg-', 'ring-')}`
    : "bg-white text-gray-800 hover:shadow-xl hover:scale-[1.02] border-gray-100 hover:border-gray-300";

  const iconWrapperClasses = isSelected
    ? "bg-white text-gray-800 shadow-md"
    : `${department.color} text-white`;

  return (
    <div
      className={`${baseClasses} ${selectedClasses}`}
      onClick={() => onSelect(department.id)}
    >
      <div className={`p-3 rounded-full mb-4 transition-colors duration-300 ${iconWrapperClasses}`}>
        <Icon size={30} strokeWidth={2.5} />
      </div>

      <h3 className="text-xl font-extrabold mb-2 leading-snug">
        {department.name}
      </h3>

      <p className={`text-sm ${isSelected ? 'text-white/80' : 'text-gray-500'}`}>
        {department.description}
      </p>

      {isSelected && (
        <div className="mt-4 flex items-center text-sm font-bold text-white">
          <CheckCircle size={16} className="mr-1 fill-white" /> Currently Focused
        </div>
      )}
    </div>
  );
};

// --- Main App Component ---
const App = () => {
  const [selectedDeptId, setSelectedDeptId] = useState(null);

  const handleSelectDepartment = (id) => {
    setSelectedDeptId(selectedDeptId === id ? null : id);
  };

  const selectedDepartment = departmentData.find(d => d.id === selectedDeptId);

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8 font-sans">
      <div className="max-w-7xl mx-auto">

        <header className="text-center mb-10 pt-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-2 tracking-tight">
            Explore Organizational Units
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 max-w-3xl mx-auto">
            Click on a department card below to see its detailed description and highlight its role.
          </p>
        </header>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {departmentData.map((dept) => (
            <DepartmentCard
              key={dept.id}
              department={dept}
              isSelected={selectedDeptId === dept.id}
              onSelect={handleSelectDepartment}
            />
          ))}
        </div>

        {/* Summary Card */}
        <div className="mt-12 p-6 md:p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-3 flex items-center">
            {selectedDepartment ? (
              <>
                <span
                  className={`h-3 w-3 rounded-full mr-3 ${selectedDepartment.color.replace('600', '500')}`}
                ></span>
                {selectedDepartment.name} Focus
              </>
            ) : (
              'Select a Department to View Details'
            )}
          </h2>

          <p className="text-lg text-gray-600 transition-opacity duration-300">
            {selectedDepartment
              ? selectedDepartment.description
              : 'The description of the selected department will appear here, emphasizing its core responsibilities.'}
          </p>
        </div>

      </div>
    </div>
  );
};

export default App;
