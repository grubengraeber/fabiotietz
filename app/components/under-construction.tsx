import React from 'react'

const UnderConstruction: React.FC = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-center">
      <div className="bg-white dark:bg-gray-800 p-10 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-yellow-500 dark:text-yellow-400">
          🚧 Under Construction 🚧
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg">
          I'm working hard to bring you something amazing! Please check back later.
        </p>
      </div>
    </div>
    );
  };
  
  export default UnderConstruction;