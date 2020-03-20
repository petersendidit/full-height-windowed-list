import React, { useRef } from "react";
import { WindowScroller } from "react-virtualized";
import { FixedSizeList } from "react-window";

import ItemRenderer from "./ItemRenderer.js";

export default function List() {
  const listRef = useRef();
  return (
    <>
      <WindowScroller
        onScroll={({ scrollTop }) => {
          console.log({ scrollTop });
          if (listRef.current) {
            listRef.current.scrollTo(scrollTop);
          }
        }}
      >
        {() => <div />}
      </WindowScroller>
      <FixedSizeList
        height={window.innerHeight}
        width={window.innerWidth}
        itemSize={46}
        itemCount={200}
        ref={listRef}
        className="window-scroller-override"
      >
        {ItemRenderer}
      </FixedSizeList>
    </>
  );
}
