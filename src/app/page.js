"use client"
import { useEffect } from "react";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

export default function Home() {
  useEffect(()=>{
    const loadLocomotiveScroll = async()=>{
      const LocomotiveScroll = (await import("locomotive-scroll")).default
      new LocomotiveScroll()
    }
    loadLocomotiveScroll()
  },[])

  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </>
  );
}
