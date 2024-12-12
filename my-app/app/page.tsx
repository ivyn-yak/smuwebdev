"use client";
import dynamic from 'next/dynamic';
import { Testimonial } from "@/components/ui/animated-testimonials";

const AnimatedTestimonials = dynamic(
  () => import('@/components/ui/animated-testimonials').then((mod) => mod.AnimatedTestimonials),
  {
    loading: () => <p> </p>, 
    ssr: false, 
  }
);

export default function AboutMe() {
  const testimonials: Testimonial[] = [
    {
      quote: "I don't know. Play Moomoo.io.",
      name: "Jayden",
      designation: "Absolute Beast of a Gamer",
      src: "/jayden.jpg",
    },
    {
      quote: "My favourite hobby's prolly getting rich.",
      name: "Yu Ting",
      designation: "Professional TTS generator, part-time yapper/innovator",
      src: "/yuting.jpg",
    },
    {
      quote: "Ask for money, get advice. Ask for advice, get money twice.",
      name: "Javen",
      designation: "Pitbull Lover/ Pitbull's Lover",
      src: "/javen.jpeg",
    },
    {
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Ivyn",
      designation: "What The Cup Fan",
      src: "/ivyn.jpeg",
    },
  ];
  return (
    <div className="mt-10">
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
}

