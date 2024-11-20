import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapStagger = () => {
  // TODO: Implement the gsap.stagger() method
  useGSAP(() => {
  gsap.to('.stagger-box', {
    y: 250,
    rotation: 360,
    borderRadius: '100%',
    repeat: -1,
    yoyo: true,
    //stagger:
    stagger:{
      amount:1.5,
      grid:[3, 1],
      axis: 'y',
      ease:'circ.inOut',
      from: 'center',
    }
  })
  }, [])

  return (
    <main>
      <h1>GsapStagger</h1>

      <p className="mt-5 text-gray-500">
        GSAP stagger is a feature that allows you to apply animations with a
        staggered delay to a group of elements.
      </p>

      <p className="mt-5 text-gray-500">
        By using the stagger feature in GSAP, you can specify the amount of time
        to stagger the animations between each element, as well as customize the
        easing and duration of each individual animation. This enables you to
        create dynamic and visually appealing effects, such as staggered fades,
        rotations, movements, and more.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://gsap.com/resources/getting-started/Staggers"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          Gsap Stagger
        </a>{" "}
        feature.
      </p>

      <div className="mt-20">
        <div className="flex gap-5">
        <div className="w-20 h-20 bg-red-200 rounded-lg flex items-center justify-center stagger-box"><h1>A</h1></div>
        <div className="w-20 h-20 bg-blue-300 rounded-lg flex items-center justify-center stagger-box"><h1 className="text-center">L</h1></div>
        <div className="w-20 h-20 bg-green-400 rounded-lg flex items-center justify-center stagger-box"><h1 className="text-center">E</h1></div>
        <div className="w-20 h-20 bg-yellow-500 rounded-lg flex items-center justify-center stagger-box"><h1 className="text-center">X</h1></div>
        <div className="w-20 h-20 bg-purple-600 rounded-lg flex items-center justify-center stagger-box"><h1 className="text-center">A</h1></div>
        <div className="w-20 h-20 bg-pink-700 rounded-lg flex items-center justify-center stagger-box"><h1 className="text-center">N</h1></div>
        <div className="w-20 h-20 bg-teal-800 rounded-lg flex items-center justify-center stagger-box"><h1 className="text-center">D</h1></div>
        <div className="w-20 h-20 bg-orange-900 rounded-lg flex items-center justify-center stagger-box"><h1 className="text-center">R</h1></div>
        <div className="w-20 h-20 bg-lime-500 rounded-lg flex items-center justify-center stagger-box"><h1 className="text-center">A</h1></div>
        </div>
      </div>
    </main>
  );
};

export default GsapStagger;
