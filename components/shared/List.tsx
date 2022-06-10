import * as React from "react";
import { BsDot } from "react-icons/bs";

interface P {
  listData: string[];
}

export function List({ listData }: P): JSX.Element {
  return (
    <>
      {listData.map((i, idx) => {
        return (
          <div key={idx}>
            <p>{i}</p>
            {idx < listData.length - 1 && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <BsDot />
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}
