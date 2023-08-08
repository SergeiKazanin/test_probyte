import React from "react";

import { Head } from "./components/Whoosh/Head";
import { Pad } from "./components/Whoosh/Pad";
import { Info } from "./components/Whoosh/Info";
import { Separator } from "./components/Whoosh/Separator";
import { Partners } from "./components/Whoosh/Partners";

export default function App() {
  return (
    <div>
      <Head />
      <Pad />
      <Info />
      <Separator />
      <Partners />
    </div>
  );
}
