import { ChevronRight, Battery, Zap, Gauge, ArrowRight } from 'lucide-react';

interface TruckCardProps {
  model: string;
  battery: string;
  power: string;
  torque: string;
  range: string;
  image: string;
}

function TruckCard({ model, battery, power, torque, range, image }: TruckCardProps) {
  return (
    <div className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800">
      <div className="relative aspect-[16/10] bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
        <img 
          src={image} 
          alt={`SANY ${model} Electric Truck`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </div>

      <div className="p-8">
        <h3 className="text-3xl font-bold text-black dark:text-white mb-6">
            SANY {model}
        </h3>

        <div className="space-y-4 mb-8">
          {[
            { icon: <Battery className="text-gray-500" size={20} />, label: "Battery Capacity", value: battery },
            { icon: <Zap className="text-gray-500" size={20} />, label: "Power Output", value: power },
            { icon: <Gauge className="text-gray-500" size={20} />, label: "Max Torque", value: torque },
            { icon: <ArrowRight className="text-gray-500" size={20} />, label: "Range", value: range },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between pb-3 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3">
                {item.icon}
                <span className="text-gray-600 dark:text-gray-400">{item.label}</span>
              </div>
              <span className="text-black dark:text-white font-bold text-lg">{item.value}</span>
            </div>
          ))}
        </div>

        <button 
            className="w-full bg-black dark:bg-red-600 text-white py-4 rounded-lg font-semibold hover:bg-red-700 dark:hover:bg-red-500 transition-colors duration-300 flex items-center justify-center space-x-2 group"
        >
          <span>View Full Specifications</span>
          <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}

export function ProductsSection() {
  const trucks = [
    {
      model: "5550E",
      battery: "376 kWh",
      power: "500 HP",
      torque: "2800 Nm",
      range: "300+ km",
      image: "https://sanyglobal-img.sany.com.cn/prod/20250611/INDIA%20VERSION(1)_113547.jpg?x-oss-process=image/format,webp"
    },
    {
      model: "5538E",
      battery: "282 kWh",
      power: "380 HP",
      torque: "2400 Nm",
      range: "250+ km",
      image: "https://trucksbuses.com/uploads/40225_bbe03e7c67f34d95ba39862e3307f0b6sany1.jpg"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-gray-50 dark:bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
            Heavy-Duty EV Truck Range
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Engineered for performance, built for reliability, designed for the future.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {trucks.map((truck) => (
            <TruckCard key={truck.model} {...truck} />
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            *Range figures are approximate and depend on load, terrain, and driving conditions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProductsSection;
