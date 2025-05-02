import React from "react";
import { Link } from "react-router-dom";
import barImage1 from "../assets/front.jpeg";
import barImage2 from "../assets/back.jpeg";

export default function MenuSelector() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white flex flex-col items-center justify-center text-center px-4 py-10">
      <h1 className="text-3xl lg:text-5xl font-extrabold mb-6 text-gray-800 tracking-tight">
        Добре дошли в <span className="text-blue-600">Бар Центъра</span>!
      </h1>

      <p className="text-base lg:text-lg text-gray-600 max-w-2xl mb-10">
        Заповядайте в сърцето на града – място, където доброто настроение,
        освежаващите напитки и вкусната храна се срещат. Очакваме ви за едно
        незабравимо преживяване! 🍹🎶
      </p>

      <div className="flex flex-col md:flex-row gap-6 mb-12">
        <img
          src={barImage1}
          alt="Бар Центъра"
          className="rounded-2xl shadow-lg w-full md:w-80 h-60 object-cover"
        />
        <img
          src={barImage2}
          alt="Атмосфера в бара"
          className="rounded-2xl shadow-lg w-full md:w-80 h-60 object-cover"
        />
      </div>

      <h2 className="text-2xl lg:text-4xl font-bold mb-8 text-gray-800">Избери меню</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8 w-full max-w-md px-10 lg:px-0">
        <Link
          to="/food"
          className="bg-yellow-100 hover:bg-yellow-200 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl text-lg lg:text-2xl px-6 lg:px-8 py-3.5 lg:py-5 rounded-2xl font-semibold text-gray-800 shadow text-center"
        >
          🍽️ Храна
        </Link>

        <Link
          to="/drinks"
          className="bg-blue-100 hover:bg-blue-200 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl text-lg lg:text-2xl  px-6 lg:px-8 py-3.5 lg:py-5 rounded-2xl font-semibold text-gray-800 shadow text-center"
        >
          🍷 Напитки
        </Link>
      </div>
      <div className="mt-16 w-full max-w-4xl px-4">
        <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">
          Къде се намираме ?
        </h3>
        <div className="rounded-2xl overflow-hidden shadow-lg w-full h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2604.8123932182157!2d25.078886275386736!3d41.4548874918066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14adaf9cd7597445%3A0xbddf8523cc9619bf!2sBar%20Centara!5e1!3m2!1sen!2sbg!4v1745576644315!5m2!1sen!2sbg"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Локация на бара"
          ></iframe>
        </div>
      </div>
      <div className="mt-12 w-full max-w-4xl px-4 text-gray-700">
        <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">Работно време</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex justify-between p-4 bg-white rounded-lg shadow-md">
            <span className="font-semibold">Понеделник</span>
            <span>6:00 – 22:00</span>
          </div>
          <div className="flex justify-between p-4 bg-white rounded-lg shadow-md">
            <span className="font-semibold">Вторник</span>
            <span>6:00 – 22:00</span>
          </div>
          <div className="flex justify-between p-4 bg-white rounded-lg shadow-md">
            <span className="font-semibold">Сряда</span>
            <span>6:00 – 22:00</span>
          </div>
          <div className="flex justify-between p-4 bg-white rounded-lg shadow-md">
            <span className="font-semibold">Четвъртък</span>
            <span>6:00 – 22:00</span>
          </div>
          <div className="flex justify-between p-4 bg-white rounded-lg shadow-md">
            <span className="font-semibold">Петък</span>
            <span>6:00 – 22:00</span>
          </div>
          <div className="flex justify-between p-4 bg-white rounded-lg shadow-md">
            <span className="font-semibold">Събота</span>
            <span>6:00 – 22:00</span>
          </div>
          <div className="flex justify-between p-4 bg-white rounded-lg shadow-md">
            <span className="font-semibold">Неделя</span>
            <span>Затворено</span>
          </div>
        </div>
      </div>
      <div className="bg-blue-600 text-white py-4 text-center mt-10 w-full px-2.5 rounded-base">
        <p className="text-sm">
          &copy; {currentYear} Бар Центъра. Всички права са запазени.
        </p>
      </div>
    </div>
  );
}
