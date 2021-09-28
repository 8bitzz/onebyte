const products = [
  {
    id: 1,
    caption: "Pier 39",
    album: "San Francisco, 2017.",
    imageSrc: "/images/1.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    caption: "Downtown San Francisco",
    album: "San Francisco, 2017.",
    imageSrc: "/images/2.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    caption: "Burlingame",
    album: "C.A, 2017.",
    imageSrc: "/images/3.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    caption: "People at museum",
    album: "SFMOMA, 2017.",
    imageSrc: "/images/4.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 5,
    caption: "People at museum",
    album: "SFMOMA, 2017.",
    imageSrc: "/images/5.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 6,
    caption: "People at museum",
    album: "SFMOMA, 2017.",
    imageSrc: "/images/6.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 7,
    caption: "Bixby Bridge",
    album: "C.A, 2017.",
    imageSrc: "/images/7.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 8,
    caption: "Palace of Fine Arts",
    album: "San Francisco, 2017.",
    imageSrc: "/images/8.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 9,
    caption: "Golden Gate's view",
    album: "San Francisco, 2017.",
    imageSrc: "/images/9.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 10,
    caption: "People at museum",
    album: "San Francisco, 2017.",
    imageSrc: "/images/10.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 11,
    caption: "SFMOMA",
    album: "SFMOMA, 2017.",
    imageSrc: "/images/11.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 12,
    caption: "People at museum",
    album: "SFMOMA, 2017.",
    imageSrc: "/images/12.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
];

export default function Gallery() {
  return (
    <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-10 lg:grid-cols-2 xl:grid-cols-3 bg-white">
      {products.map((product) => (
        <div className="relative cursor-pointer">
          <a key={product.id} className="group">
            <div className="w-full overflow-hidden ">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="w-full h-full object-center object-cover group-hover:opacity-50"
              />
            </div>
          </a>
          <a className="absolute inset-0 z-10 bg-gray-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-90 bg-opacity-90 duration-300">
            <h1 className="tracking-wider font-light">{product.caption}</h1>
            <p className="mt-2 mx-auto font-light">{product.album}</p>
          </a>
        </div>
      ))}
    </div>
  );
}
