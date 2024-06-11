import React, { Component } from "react";
import ShoppingItems from "./ShoppingItems";

export class ShoppingArea extends Component {
  items = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 6,
      title: "Solid Gold Petite Micropave ",
      price: 168,
      description:
        "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      rating: {
        rate: 3.9,
        count: 70,
      },
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      rating: {
        rate: 4.7,
        count: 500,
      },
    },
    {
      id: 4,
      title:
        "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
      price: 114,
      description:
        "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
      rating: {
        rate: 4.8,
        count: 400,
      },
    },
    {
      id: 5,
      title:
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      price: 695,
      description:
        "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      rating: {
        rate: 4.6,
        count: 400,
      },
    },
    {
      id: 6,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: {
        rate: 4.1,
        count: 259,
      },
    },
    {
      id: 7,
      title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
      price: 109,
      description:
        "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      rating: {
        rate: 2.9,
        count: 470,
      },
    },
    {
      id: 8,
      title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
      price: 10.99,
      description:
        "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      rating: {
        rate: 1.9,
        count: 100,
      },
    },
    {
      id: 9,
      title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
      price: 64,
      description:
        "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      rating: {
        rate: 3.3,
        count: 203,
      },
    },
    {
      id: 10,
      title: "White Gold Plated Princess",
      price: 9.99,
      description:
        "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      rating: {
        rate: 3,
        count: 400,
      },
    },
    {
      id: 11,
      title:
        "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
      price: 109,
      description:
        "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
      category: "electronics",
      image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
      rating: {
        rate: 4.8,
        count: 319,
      },
    },
    {
      id: 12,
      title: "Mens Casual Slim Fit",
      price: 15.99,
      description:
        "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      rating: {
        rate: 2.1,
        count: 430,
      },
    },
  ];
  
  // items =[
  //   {
  //   "id": 1,
  //   "title": "iPhone 9",
  //   "description": "An apple mobile which is nothing like apple",
  //   "price": 549,
  //   "discountPercentage": 12.96,
  //   "rating": 4.69,
  //   "stock": 94,
  //   "brand": "Apple",
  //   "category": "smartphones",
  //   "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  //   "images": [
  //     "https://i.dummyjson.com/data/products/1/1.jpg",
  //     "https://i.dummyjson.com/data/products/1/2.jpg",
  //     "https://i.dummyjson.com/data/products/1/3.jpg",
  //     "https://i.dummyjson.com/data/products/1/4.jpg",
  //     "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
  //   ]
  // }
  // ]; 
  // {
  //   "id": 2,
  //   "title": "iPhone X",
  //   "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
  //   "price": 899,
  //   "discountPercentage": 17.94,
  //   "rating": 4.44,
  //   "stock": 34,
  //   "brand": "Apple",
  //   "category": "smartphones",
  //   "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
  //   "images": [
  //     "https://i.dummyjson.com/data/products/2/1.jpg",
  //     "https://i.dummyjson.com/data/products/2/2.jpg",
  //     "https://i.dummyjson.com/data/products/2/3.jpg",
  //     "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
  //   ]
  // },
  // {
  //   "id": 3,
  //   "title": "Samsung Universe 9",
  //   "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
  //   "price": 1249,
  //   "discountPercentage": 15.46,
  //   "rating": 4.09,
  //   "stock": 36,
  //   "brand": "Samsung",
  //   "category": "smartphones",
  //   "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
  //   "images": [
  //     "https://i.dummyjson.com/data/products/3/1.jpg"
  //   ]
  // },
  // {
  //   "id": 4,
  //   "title": "OPPOF19",
  //   "description": "OPPO F19 is officially announced on April 2021.",
  //   "price": 280,
  //   "discountPercentage": 17.91,
  //   "rating": 4.3,
  //   "stock": 123,
  //   "brand": "OPPO",
  //   "category": "smartphones",
  //   "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
  //   "images": [
  //     "https://i.dummyjson.com/data/products/4/1.jpg",
  //     "https://i.dummyjson.com/data/products/4/2.jpg",
  //     "https://i.dummyjson.com/data/products/4/3.jpg",
  //     "https://i.dummyjson.com/data/products/4/4.jpg",
  //     "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
  //   ]
  // },
  // {
  //   "id": 5,
  //   "title": "Huawei P30",
  //   "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
  //   "price": 499,
  //   "discountPercentage": 10.58,
  //   "rating": 4.09,
  //   "stock": 32,
  //   "brand": "Huawei",
  //   "category": "smartphones",
  //   "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
  //   "images": [
  //     "https://i.dummyjson.com/data/products/5/1.jpg",
  //     "https://i.dummyjson.com/data/products/5/2.jpg",
  //     "https://i.dummyjson.com/data/products/5/3.jpg"
  //   ]
  // },
  // {
  //   "id": 6,
  //   "title": "MacBook Pro",
  //   "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
  //   "price": 1749,
  //   "discountPercentage": 11.02,
  //   "rating": 4.57,
  //   "stock": 83,
  //   "brand": "Apple",
  //   "category": "laptops",
  //   "thumbnail": "https://i.dummyjson.com/data/products/6/thumbnail.png",
  //   "images": [
  //     "https://i.dummyjson.com/data/products/6/1.png",
  //     "https://i.dummyjson.com/data/products/6/2.jpg",
  //     "https://i.dummyjson.com/data/products/6/3.png",
  //     "https://i.dummyjson.com/data/products/6/4.jpg"
  //   ]
  // },
  // {
  //   "id": 7,
  //   "title": "Samsung Galaxy Book",
  //   "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
  //   "price": 1499,
  //   "discountPercentage": 4.15,
  //   "rating": 4.25,
  //   "stock": 50,
  //   "brand": "Samsung",
  //   "category": "laptops",
  //   "thumbnail": "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
  //   "images": [
  //     "https://i.dummyjson.com/data/products/7/1.jpg",
  //     "https://i.dummyjson.com/data/products/7/2.jpg",
  //     "https://i.dummyjson.com/data/products/7/3.jpg",
  //     "https://i.dummyjson.com/data/products/7/thumbnail.jpg"
  //   ]
  // },
  // {
  //   "id": 8,
  //   "title": "Microsoft Surface Laptop 4",
  //   "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
  //   "price": 1499,
  //   "discountPercentage": 10.23,
  //   "rating": 4.43,
  //   "stock": 68,
  //   "brand": "Microsoft Surface",
  //   "category": "laptops",
  //   "thumbnail": "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
  //   "images": [
  //     "https://i.dummyjson.com/data/products/8/1.jpg",
  //     "https://i.dummyjson.com/data/products/8/2.jpg",
  //     "https://i.dummyjson.com/data/products/8/3.jpg",
  //     "https://i.dummyjson.com/data/products/8/4.jpg",
  //     "https://i.dummyjson.com/data/products/8/thumbnail.jpg"
  //   ]
  // },
  // {
  //   "id": 9,
  //   "title": "Infinix INBOOK",
  //   "description": "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
  //   "price": 1099,
  //   "discountPercentage": 11.83,
  //   "rating": 4.54,
  //   "stock": 96,
  //   "brand": "Infinix",
  //   "category": "laptops",
  //   "thumbnail": "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
  //   "images": [
  //     "https://i.dummyjson.com/data/products/9/1.jpg",
  //     "https://i.dummyjson.com/data/products/9/2.png",
  //     "https://i.dummyjson.com/data/products/9/3.png",
  //     "https://i.dummyjson.com/data/products/9/4.jpg",
  //     "https://i.dummyjson.com/data/products/9/thumbnail.jpg"
  //   ]
  // },
  // {
  //   "id": 10,
  //   "title": "HP Pavilion 15-DK1056WM",
  //   "description": "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
  //   "price": 1099,
  //   "discountPercentage": 6.18,
  //   "rating": 4.43,
  //   "stock": 89,
  //   "brand": "HP Pavilion",
  //   "category": "laptops",
  //   "thumbnail": "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
  //   "images": [
  //     "https://i.dummyjson.com/data/products/10/1.jpg",
  //     "https://i.dummyjson.com/data/products/10/2.jpg",
  //     "https://i.dummyjson.com/data/products/10/3.jpg",
  //     "https://i.dummyjson.com/data/products/10/thumbnail.jpeg"
  //   ]
  // },
  // {
  //   "id": 11,
  //   "title": "perfume Oil",
  //   "description": "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
  //   "price": 13,
  //   "discountPercentage": 8.4,
  //   "rating": 4.26,
  //   "stock": 65,
  //   "brand": "Impression of Acqua Di Gio",
  //   "category": "fragrances",
  //   "thumbnail": "https://i.dummyjson.com/data/products/11/thumbnail.jpg",
  //   "images": [
  //     "https://i.dummyjson.com/data/products/11/1.jpg",
  //     "https://i.dummyjson.com/data/products/11/2.jpg",
  //     "https://i.dummyjson.com/data/products/11/3.jpg",
  //     "https://i.dummyjson.com/data/products/11/thumbnail.jpg"
  //   ]
  // },
  // {
  //   "id": 12,
  //   "title": "Brown Perfume",
  //   "description": "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
  //   "price": 40,
  //   "discountPercentage": 15.66,
  //   "rating": 4,
  //   "stock": 52,
  //   "brand": "Royal_Mirage",
  //   "category": "fragrances",
  //   "thumbnail": "https://i.dummyjson.com/data/products/12/thumbnail.jpg",
  //   "images": [
  //     "https://i.dummyjson.com/data/products/12/1.jpg",
  //     "https://i.dummyjson.com/data/products/12/2.jpg",
  //     "https://i.dummyjson.com/data/products/12/3.png",
  //     "https://i.dummyjson.com/data/products/12/4.jpg",
  //     "https://i.dummyjson.com/data/products/12/thumbnail.jpg"
  //   ]
  // }
  // ];
  constructor() {
    super();
    // console.log("I am main conts");
    this.state = {
      items: this.items,
      loading: false,
    };
  }
  async componentDidMount() { 
    let url = "https://fakestoreapi.com/products";
    let data = await fetch(url);
    let parsedData = await data.json(); 
    this.setState({ items: parsedData });
   }

  render() {
    return (
      <div>
        <h1 className="w-72 h-2 mx-auto container text-2xl font-bold px-6 py-10 ">
          Welcome to Store
        </h1>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-6 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
          {this.state.items.map((element) => {
            // console.log(element)

            return (
              <ShoppingItems
                key={element.id}
                title={element.title.slice(0,20)}
                description={element.description.slice(0,150)}
                imageUrl={element.image}
                price={element.price}
                mrp={15}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default ShoppingArea;
