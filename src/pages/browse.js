import React from "react";
import { useContext } from "../hooks";
import selectionFilter from "../utils/selection-filter";
import { BrowseContainer } from "../containers/browse";

export default function Browse() {
  // we need the series and films
  const { series } = useContext("series");
  const { films } = useContext("films");
  // we need slides
  const slides = selectionFilter({ series, films });

  // pass it to the browse container
  return <BrowseContainer slides={slides} />;
}
