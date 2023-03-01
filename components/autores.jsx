import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

import { grpahCMSImageLoader } from '../util';


const Autores = () => {
  
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Autores Fundadores</h3>
        <div  className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <img
              height="60px"
              width="60px"
              unoptimized
              className="align-middle rounded-full"
              src="https://media.graphassets.com/H93m4DkgT5aTZqYHchPo"
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs"></p>
            <span href={`/post/}`} className="text-md">Michell Andres Rivera Betancourt</span>
          </div>
        </div>
        <div  className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <img
              height="60px"
              width="60px"
              unoptimized
              className="align-middle rounded-full"
              src="https://media.graphassets.com/H93m4DkgT5aTZqYHchPo"
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs"></p>
            <span href={`/post/}`} className="text-md">Brigitte Arrieta Delgado</span>
          </div>
        </div>
        <div  className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <img
              height="60px"
              width="60px"
              unoptimized
              className="align-middle rounded-full"
              src="https://media.graphassets.com/H93m4DkgT5aTZqYHchPo"
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs"></p>
            <span href={`/post/}`} className="text-md">David Beleño Diaz</span>
          </div>
        </div>
        <div  className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <img
              height="60px"
              width="60px"
              unoptimized
              className="align-middle rounded-full"
              src="https://media.graphassets.com/H93m4DkgT5aTZqYHchPo"
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs"></p>
            <span href={`/post/}`} className="text-md">Nicolle Pérez Redondo</span>
          </div>
        </div>
    </div>
  );
};

export default Autores;
