import React, { Component } from "react";

export class ShoppingItems extends Component {
  // constructor(){
  //   super();
  // }
  render() {
    let { title, description, imageUrl,price } = this.props;
    return (
      <div>
        {/* <!-- component --> */}
        <section className="bg-white dark:bg-gray-900">
          {/* <div className="container px-6 py-10 mx-auto "> */}

          {/* <!-- <p className="w-64 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p> */}
          {/* <p className="w-64 h-2 mx-auto mt-4 bg-gray-200 rounded-lg sm:w-80 dark:bg-gray-700"></p> --> */}

          {/* <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-6 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3"> */}
          <div className="mx-auto mt-11 w-72 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
            <img
              className="h-48 w-full object-cover object-center"
              src={imageUrl}
              alt="Product "
            />
            <div className="p-4">
              <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
                {/* Product Name */}{title}...
              </h2>
              <p className="mb-2 text-base dark:text-gray-300 text-gray-700">
                {description}...
              </p>
              <div className="flex items-center">
                <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                  {price} INR
                </p>
                {/* <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
                  {mrp}
                </p> */}
                <p className="ml-auto text-base font-medium text-green-500">
                  20% off
                </p>
                <a
                  href="/"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to cart
                </a>
              </div>
            </div>
          </div>
          {/* </div> */}
          {/* </div> */}
        </section>
      </div>
    );
  }
}

export default ShoppingItems;
