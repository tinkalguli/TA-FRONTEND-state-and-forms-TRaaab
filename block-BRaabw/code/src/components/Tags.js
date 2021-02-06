import React from "react";

export default function Tags(props) {
  return (
    <section className="size-sec">
      <h2>Sizes:</h2>
      <div className="flex-wrap">
        <span
          className={props.activeSizes.includes("XS") ? "tag active" : "tag"}
          onClick={props.handleClick}>XS</span>
        <span
          className={props.activeSizes.includes("S") ? "tag active" : "tag"}
          onClick={props.handleClick}>S</span>
        <span
          className={props.activeSizes.includes("M") ? "tag active" : "tag"}
          onClick={props.handleClick}>M</span>
        <span
          className={props.activeSizes.includes("ML") ? "tag active" : "tag"}
          onClick={props.handleClick}>ML</span>
        <span
          className={props.activeSizes.includes("L") ? "tag active" : "tag"}
          onClick={props.handleClick}>L</span>
        <span
          className={props.activeSizes.includes("XL") ? "tag active" : "tag"}
          onClick={props.handleClick}>XL</span>
        <span
          className={props.activeSizes.includes("XXL") ? "tag active" : "tag"}
          onClick={props.handleClick}>XXL</span>
      </div>
    </section>
  )
}