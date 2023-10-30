"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import classes from "./navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  const { data: session } = useSession();
  const isLoggedIn = Boolean(session?.user);
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Link href="/" className={classes.left}>
        <Image
            src="/sankofa-logo.ico"
            alt="Vercel Logo"
            width={150}
            height={64}
            className=""
          />
        </Link>
        <div className={classes.right}>
          {isLoggedIn ? (
            <button onClick={() => signOut()} className={classes.logoutButton}>
              Sign Out
            </button>
          ) : (
            <>
              <button onClick={() => signIn()} className={classes.login}>
                Sign In
              </button>
              <Link href="/register" className={classes.register}>
                Register
              </Link>
            </>
          )}
          {isLoggedIn && (
            <Link href="/cart" className={classes.cartContainer}>
              <AiOutlineShoppingCart className={classes.cartIcon} />
              <span className={classes.cartQuantity}>5</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
