export const buttonTypeConfigs = {
    blue: 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:hover:bg-blue-600',
    gray: 'bg-gray-600 hover:bg-gray-700 active:bg-gray-800 disabled:hover:bg-gray-600',
    green: 'bg-green-600 hover:bg-green-700 active:bg-green-800 disabled:hover:bg-green-600',
    red: 'bg-red-600 hover:bg-red-700 active:bg-red-800 disabled:hover:bg-red-600',
    yellow: 'bg-yellow-600 hover:bg-yellow-700 active:bg-yellow-800 disabled:hover:bg-yellow-600',
    purple: 'bg-purple-600 hover:bg-purple-700 active:bg-purple-800 disabled:hover:bg-purple-600',
    pink: 'bg-pink-600 hover:bg-pink-700 active:bg-pink-800 disabled:hover:bg-pink-600',
    indigo: 'bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 disabled:hover:bg-indigo-600',
    teal: 'bg-teal-600 hover:bg-teal-700 active:bg-teal-800 disabled:hover:bg-teal-600',
    outline: 'border-2 border-gray-600 hover:bg-gray-100 active:bg-gray-200 text-black shadow-none',
    ghost: 'bg-transparent hover:bg-gray-100 active:bg-gray-200 text-gray-600 text-black shadow-none hover:shadow-none',
};

export type ButtonTypeConfigsType = keyof typeof buttonTypeConfigs;
