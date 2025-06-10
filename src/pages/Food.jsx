import { useEffect, useState } from "react";
import { fetchMealsData } from "./client";
import { Icon } from "@iconify/react";

export default function Food() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const meals = await fetchMealsData();
      if (meals) {
        setData(meals);
      }
    };

    getData();
  }, []);

  const categoryIcons = {
    "Ястия": "🍽️",
    "Салати": "🥗",
    "Десерти": "🍰",
    "Ядки": "🥜",
  };

  return (
    <div className="bg-gradient-to-br from-gray-100 to-white min-h-screen font-sans text-gray-800 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <a href="/" class="inline-flex items-center text-blue-500 mb-6">
          <svg
            class="w-5 h-5 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            ></path>
          </svg>
          Назад
        </a>
        <h2 className="text-4xl font-extrabold text-center mb-10 tracking-tight text-gray-800">
          Меню с Ястия
        </h2>

        {data.length === 0 ? (
          <p className="flex items-center flex-row gap-5 justify-center mt-20 text-center text-gray-500 text-lg">
            🍽️ Зареждане на менюто ... 
            <Icon icon="svg-spinners:ring-resize" width="24" height="24" />
          </p>
        ) : (
          data.map((category) => (
            <div
              key={category.category}
              className="bg-white rounded-2xl shadow-lg p-6 mb-10"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 relative pl-4 before:absolute before:left-0 before:top-1 before:bottom-1 before:w-1 before:bg-blue-500 before:rounded">
                {category.category}
              </h3>

              <div className="divide-y divide-gray-200">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex justify-between py-2 menu-item hover:bg-gray-50 transition-colors"
                  >
                    <div className="text-gray-700">{item.name}</div>
                    <div className="text-right">
                      <p className="text-gray-500 text-sm">{item.weight}</p>
                      <p className="font-bold">{item.price.toFixed(2)} лв</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}