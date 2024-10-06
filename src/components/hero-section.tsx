'use client'; // Mark the component as a Client Component

import React, { useEffect, useRef, useState } from 'react';
import 'animate.css'; // Importing animate.css for animations

function HeroSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [events, setEvents] = useState(0);
  const [communityMembers, setCommunityMembers] = useState(0);
  const [Members, setMembers] = useState(0);

  useEffect(() => {
    // Scroll-based video playback
    const handleScroll = () => {
      const video = videoRef.current;
      if (video) {
        // Calculate the scroll position
        const scrollPosition = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

        // Set the video's current time relative to the scroll position
        const scrollFraction = scrollPosition / maxScroll;
        video.currentTime = scrollFraction * video.duration;
      }
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Increment animation for events
    const eventsInterval = setInterval(() => {
      setEvents((prev) => {
        if (prev < 3) {
          return prev + 1; // Increment until reaching 3
        }
        clearInterval(eventsInterval); // Clear interval when done
        return prev;
      });
    }, 1000); // Change the interval as necessary

    // Increment animation for community members
    const communityInterval = setInterval(() => {
      setCommunityMembers((prev) => {
        if (prev < 200) {
          return prev + 20; // Increment by 20 until reaching 200
        }
        clearInterval(communityInterval); // Clear interval when done
        return prev;
      });
    }, 100); // Change the interval as necessary

    const membersInterval = setInterval(() => {
      setMembers((prev) => {
        if (prev < 8) {
          return prev + 2; // Increment by 2 until reaching 8
        }
        clearInterval(membersInterval); // Clear interval when done
        return prev;
      });
    }, 100);

    // Cleanup intervals on unmount
    return () => {
      clearInterval(eventsInterval);
      clearInterval(communityInterval);
      clearInterval(membersInterval);
    };
  }, []);

  return (
    <section className="w-full h-screen overflow-hidden mb-2">
      {/* Background Video */}
      <video
        ref={videoRef}
        src="/Images/scroll.mp4" // Change to your background video file
        playsInline
        className="absolute top-0 left-0 mb:w-[100%] w-[100%] h-[130%] mb:h-screen object-cover z-0"
      >
        Your browser does not support the video tag.
      </video>
      <div className="mx-auto mb-8 w-full max-w-4xl text-center text-white relative z-10 px-4">
        <h1 className="mb-4 text-4xl font-bold sm:text-6xl animate__animated animate__fadeInUp">
          E-Cell JNEC
        </h1>
        <p className="animate__animated animate__fadeInUp mb-4">
          Empowering student innovators & entrepreneurs at JNEC.
        </p>
        <p className="animate__animated animate__fadeInUp mb-4">
        <strong>Established in 2024</strong> by the Electronics Department at JNEC <strong>under the NEC IIT Bombay challenge</strong>, E-Cell JNEC nurtures innovation and entrepreneurship by providing essential resources and support for aspiring entrepreneurs to turn their ideas into successful ventures.
        </p>

        {/* Flex Container for Statistics */}
        <div className="flex flex-col sm:flex-row justify-around items-center mb-4 w-full">
          {/* First Item */}
          <div className="flex flex-col items-center animate__animated animate__fadeInUp mb-4 sm:mb-0 w-full sm:w-1/2 max-w-xs">
            <img src="/Images/start-up.png" alt="Events" className="w-16 h-16 mb-2" />
            <span className="text-lg">{events}+<br />Events Conducted</span>
          </div>
          {/* Second Item */}
          <div className="flex flex-col items-center animate__animated animate__fadeInUp mb-4 sm:mb-0 w-full sm:w-1/2 max-w-xs">
            <img src="/Images/graduating-student.png" alt="Community Members" className="w-16 h-16 mb-2" />
            <span className="text-lg">{communityMembers}+<br />Community Members</span>
          </div>
        </div>

        {/* Bottom Item */}
        <div className="flex flex-col items-center animate__animated animate__fadeInUp mb-4 w-full max-w-xs mx-auto">
          <img src="/Images/smart-city.png" alt="Members" className="w-16 h-16 mb-2" />
          <span className="text-lg">{Members}+<br />Members</span>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
