import { useState } from "react";
export default function GlassesShop() {
    // Thông tin các sản phẩm của shop
  const ItemGlasses = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./../../public/glasses/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./../../public/glasses/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./../../public/glasses/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./../../public/glasses/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./../../public/glasses/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./../../public/glasses/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./../../public/glasses/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./../../public/glasses/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./../../public/glasses/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];

  const [selected, setSelected] = useState(ItemGlasses[0]);



  
  return (
    <section className="flex justify-center items-center py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-6">
          <h1 className="text-3xl font-bold">
            Try Glasses — Modern Collection
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Select a frame to preview on the model and view details.
          </p>
        </header>

        {/* Main content */}
        <div className="grid gap-6 md:grid-cols-2 items-start">
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center gap-6">
            <div className="relative w-full md:w-80 h-80 rounded overflow-hidden">
              <img
                src="./../../public/glasses/model.jpg"
                alt="model"
                className="object-cover"
              />
              <img
                src={selected.url}
                alt="overlay"
                className="absolute top-21 left-1/2 transform -translate-x-1/2 w-2/3 pointer-events-none opacity-90"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-sm font-semibold mb-1">THÔNG TIN SẢN PHẨM</h3>
              <p className="text-sm text-gray-500 mb-2">{selected.name}</p>
              <p className="text-sm text-gray-500 mb-2">${selected.price}</p>
              <p className="text-sm text-gray-500 mb-4">{selected.desc}</p>
            </div>
          </div>

          {/* Các loại kính được lựa chọn */}
          <aside className="bg-white rounded-lg shadow-lg p-4 max-w-sm mx-auto md:mx-0">
            <h4 className="text-sm font-medium">Kính</h4>
            <p className="text-xs text-gray-500">
              Hãy chọn loại kính bạn muốn để rõ hơn
            </p>
            <div className="flex gap-3 flex-wrap mt-3">
              {ItemGlasses.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelected(item)}
                  className={`w-20 h-10 rounded-md border bg-white p-1 flex items-center justify-center transition-transform duration-150 ${
                    selected.id === item.id
                      ? "ring-2 ring-indigo-500 scale-105"
                      : "hover:scale-105"
                  }`}
                >
                  <img src={item.url} className="w-full h-auto block" />
                </button>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
