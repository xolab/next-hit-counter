import React from 'react';

import {
  readFile,
  writeFile,
} from '../helpers/file-helpers';
import Button from "./button";
import DbProvider from "./dbProvider";

function Home() {
  return (
    <main>
      <h1>Welcome!</h1>
      <p>
        You are visitor number{' '}
        <Button>
          <DbProvider />
        </Button>.
      </p>
    </main>
  );
}

export default Home;
