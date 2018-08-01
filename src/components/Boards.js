import React, { Component } from "react";

{items.map(item => {
          return (
            <div className="Board" key={item.id}>
              {item.text}
            </div>
          );
        })}