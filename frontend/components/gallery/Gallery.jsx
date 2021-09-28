const products = [
  {
    id: 1,
    caption: "Earthen Bottle",
    imageSrc: "/images/1.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    caption: "Nomad Tumbler",
    imageSrc: "/images/2.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    caption: "Focus Paper Refill",
    imageSrc: "/images/3.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    caption: "Machined Mechanical Pencil",
    imageSrc:"/images/4.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 5,
    caption: "Machined Mechanical Pencil",
    imageSrc:"/images/5.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 6,
    caption: "Machined Mechanical Pencil",
    imageSrc:"/images/6.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 7,
    caption: "Machined Mechanical Pencil",
    imageSrc:"/images/7.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 8,
    caption: "Machined Mechanical Pencil",
    imageSrc:"/images/8.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 9,
    caption: "Machined Mechanical Pencil",
    imageSrc:"/images/9.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 10,
    caption: "Machined Mechanical Pencil",
    imageSrc:"/images/10.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 11,
    caption: "Machined Mechanical Pencil",
    imageSrc:"/images/11.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 12,
    caption: "Machined Mechanical Pencil",
    imageSrc:"/images/12.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
];

export default function Gallery() {
  return (
    <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-10 lg:grid-cols-2 xl:grid-cols-3 bg-white">
      {products.map((product) => (
        <a key={product.id} className="group">
          <div className="w-full bg-gray-500 overflow-hidden">
            <img
              src={product.imageSrc}
              alt={product.imageAlt}
              className="w-full h-full object-center object-cover group-hover:opacity-50"

            />
          </div>
        </a>
      ))}
    </div>
  );
}
