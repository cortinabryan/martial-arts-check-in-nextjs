import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../comps/Navbar";
import Footer from "../comps/Footer";
import Link from "next/link";
import Container from "../comps/Container";

export default function Home() {
  return (
    <div>
      <Container />
      <div class="pop-up-container">
        <div class="pop-up">
          <h1>Would you like to check in?</h1>
          <div class="button-row">
            <button class="popup-btn" id="btn-yes">
              Yes
            </button>
            <button class="popup-btn" id="btn-no">
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
