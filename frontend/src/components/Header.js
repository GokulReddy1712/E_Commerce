import { useState } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

export default function Header({cartItems}){

    return <>
        <nav class="navbar row">
      <div class="col-12 col-md-3">
        <div class="navbar-brand">
          <Link to={"/"}><img width="150px" src="./images/logo.png" /></Link>
        </div>
      </div>

      <div class="col-12 col-md-6 mt-2 mt-md-0">
        <Search/>
      </div>

      <Link to={"/cart"}>
                    <span id="cart" className="ml-3">Cart</span>
                    <span className="ml-1" id="cart_count">{cartItems.length}</span>
      </Link>
    </nav>
    </>
}