import styled from "styled-components";
import {useState, useEffect} from "react";

const Main = () => {
  const data = [1, 2, 3, 4, 5, 6];

  return (
    <main className="h-screen grid place-content-center">
      <div className='flex items-center space-x-4 w-50 bg-white rounded-xl p-4 border-black border-4 ring-2 ring-black ring-offset-2'>
        <img className="w-14" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Physics_wallah_logo.svg/225px-Physics_wallah_logo.svg.png" />
        <div>
          <h4 className='text-black text-lg capitalize font-bold'>physics wallah</h4>
          <p className='text-xsm capitalize tracking-wider  '>-by demo lista</p>
        </div>
      </div>
      <button className='rounded-md mt-2.5 py-0.5 bg-black text-white capitalize font-bold ring-2 ring-black ring-offset-0.5 border-white border-2 hover:text-black hover:bg-white hover:border-black hover:ring-offset-2'>buy</button>
    </main>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  background: var(--clr-primary-8);
`;
export default Main;
