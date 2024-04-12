import React, { useState, useEffect } from "react";
import Vivus from "vivus";
import cardinalhandwriting from "../assets/img/Cardinal_Handwriting.svg";

export default function WithSplashScreen() {
  const [isVisible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    new Vivus(
      "move",
      {
        type: "scenario-sync",
        duration: 120,
        start: "autostart",
        animTimingFunction: Vivus.EASE,
      },
      () => {
        setTimeout(() => {
          const splashScreen = document.querySelector(".splash-screen")!;
          splashScreen.setAttribute("style", "opacity:0;");

          //splashScreen.style.opacity = 0;

          setTimeout(() => {
            setVisible(false);
          }, 2000);
        }, 1000);
      }
    );
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="splash-screen">
      <svg viewBox="0 0 1792 1024" id="move" width="100%">
        <defs>
          <mask id="clipMask">
            <g id="mask">
              <path
                className="st2"
                d="M589.4,485.28c15.97-49.59,13.45-41.18,13.45-41.18s-2.71-53.01-32.78-14.61
                c-27.86,35.58-37.69,70.62-21.01,82.51c16.68,11.9,59.46,2.1,54.11,21.34c-5.35,19.24-36.46,50.59-74.28,17.23
                s70.16-93.87,97.69-103.95c27.53-10.09,58.3,6.55,37.03-12.69s-25.47-58.9-33.03,39.09c-7.56,97.99,41.44,60.99,43.53,31.79
                c2.37-33.16,28.57-18.06,37.16-31.79c9.82-15.7-5.46-83.24-29.91-15.61c-23.52,65.07,35.05,90.81,56.01,28.66
                s26.64-83.65,37.77-76.57c11.13,7.08,14.29,8.15,14.29,8.15s-40.34-14.46-43.7,63.56c-3.36,78.02,57.06-50.9,55.01-73.01
                c-2.06-22.11-29.79,53.82-12.98,73.01c16.81,19.19,39.3-22.42,46.13-80.2c6.82-57.78,8.14-125.32,8.65-72.91
                s-22.69,163.14-18.18,151.82s2.77-109.19,43.18-98.15s-18.42,38.13-20.1,47.7c-1.68,9.57,26.31,61.21,48.57,24.32
                c13.49-22.35,13.3-78.45,20.08-115.28c4.73-25.71,9.22-43.04,10.04-36.47c2,15.97-33.13,131.91-18.17,98.96s21.35-49.9,35.47-47.54
                c14.12,2.36-16.07,81.66,0,83.88s35.2-4.99,36.85-39.47c1.64-34.48,3.73-63.05,19.29-58.01s-36.98,42.1-7.56,77.78
                c29.42,35.68,57.18-67.03,16.82-79.13c-40.35-12.1,35.29,68.75,56.3-15.8s-29.39,77.77-5.45,80.66c23.94,2.89,57.56-43.13,50-97.05
                c-3.41-24.31-34.61,65.65-8.4,77.71c51.02,23.47,41.56-146.07,55.52-106.36c20.76,59.06,38.4,112.56,0,96.2
                c-22.77-9.7,19.93,12.3,33.61-12.71c13.67-25.01,82.96-100.1,56.93-94.77c-16.63,3.4-41.44,15.44-39.32,39.94
                c2.71,31.23,8.87,56.53,27.32,45.22s28.84-31.05,33.22-49.91c5.3-22.85-609.04,354.13-611.89,364.05c0,0,3.03-48.68-17.65-35.28
                c-21.24,13.76-55.75,57.39-45.39,95.24c10.91,39.85,49.02,82.37,70,0c19.82-77.81,84.41-73.77,86.09-65.06
                c1.68,8.71-46.2-18.15-55.76,48.25s25.38,23.27,35.22,14.6c9.77-8.6,16.03-83.27,9.28-51.58c-7.2,33.76-4.11,63.95,2.26,64.25
                c6.37,0.3,46-22.08,38.12-75.52s-4.85-27.96,0-16.47s35.23-18.15,37.93-5.04c3.28,15.99-39.27,99.82,0,75.59
                c40.87-25.22,23.95-46.78,28.99-61.61c5.04-14.83,21.44-59.25,34.25-46.28s-40.97,26.15-29.21,68.72s34.78,9.8,40.92-29.7
                c6.14-39.5,11.39-124.08,11.29-95.24s-28.63,150.84,3.7,127.66s25.66-92.94,23.96-76.97c-1.7,15.97-4.15,88.77,18.78,70.06
                s24.9-104.51,25.74-95.27c0.84,9.25-11.96,94.87-7.8,89.12s31.36-110.42,41.44-100.19c10.07,10.23-15.74,83.44,0,83.7
                s52.87-83.29,61.34-98.11c8.47-14.82,26.89-20.92,13.45-10.46s-45.51,90.15-27.11,90.3c18.4,0.15,45.07-82.12,46.44-91.93
                c1.38-9.8-10.2,65.19-4.2,74.26c6,9.07,36.22,1.56,36.18-23.87s8.06-131.33,18.72-122.93c10.66,8.4,8.57,59.31,1.9,67.39
                c-6.68,8.08-24.63,82.94-5.35,73.4c19.28-9.55,33.28-46.33,33.63-56.16c0.53-14.39-278.73,4.82-243.76,20.54
                c1.19,0.54,0.5,10.48,0,14.88"
              />
            </g>
          </mask>
        </defs>
        <image
          href={cardinalhandwriting}
          width="100%"
          height="100%"
          mask="url(#clipMask)"
        />
      </svg>
    </div>
  );
}
