import React, { useState } from 'react';

export function Counter(): JSX.Element {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        🪂 Click me : {count}
      </button>

      <p> Don&apos;t forgot to install Eslint and Prettier in Your Vscode.</p>

      <p>
        Mess up the code in <code>App.tsx </code> and save the file.
      </p>
    </div>
  );
}
