import React, { useRef } from "react";
import { Scrollbars, positionValues } from "react-custom-scrollbars";
import { Colors } from "./theme/Forge";

export interface ScrollPositionValues extends positionValues {};
interface ScrollAreaProps {
  children?: React.ReactNode | React.ReactNodeArray;
  onScroll: (values: positionValues) => void;
}
const ScrollArea: React.FunctionComponent<ScrollAreaProps> = (props: ScrollAreaProps): JSX.Element => {
  const renderScrollbarTrack = (trackProps: any) => {
    const { style, ...rest } = trackProps;
    const customStyles = {
      width: '20px',
      top: '0',
      right: '0',
      bottom: '0',
      borderRadius: '0',
      backgroundColor: `transparent`,
    };

    return (
      <div
        {...rest}
        style={{ ...style, ...customStyles }}
        className="scrollbar-track-vertical"
      />
    );
  }

  const renderScrollbarThumb = (thumbProps: any) => {
    const { style, ...rest } = thumbProps;
    const customStyles = {
      backgroundColor: `${Colors.dark}`,
      zIndex: 2,
    };

    return (
      <div
        {...rest}
        style={{ ...style, ...customStyles }}
        className="scrollbar-thumb-vertical"
      />
    );
  }

  return (
    <Scrollbars
      onScrollFrame={props.onScroll}
      renderTrackVertical={renderScrollbarTrack}
      renderThumbVertical={renderScrollbarThumb}
    >
      {props.children}
    </Scrollbars>
  );
}
export default ScrollArea;