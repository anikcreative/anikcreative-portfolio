import React from "react";
import { Scrollbars, positionValues } from "react-custom-scrollbars";
import { Colors } from "./theme/Solitude";

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
      backgroundColor: `rgba(210, 220, 225, 0.2)`,
    };

    return (
      <div
        {...rest}
        style={{ ...style, ...customStyles }}
        className="track-vertical"
      />
    );
  }

  const renderScrollbarThumb = (thumbProps: any) => {
    const { style, ...rest } = thumbProps;
    const customStyles = {
      backgroundColor: `${Colors.textNormal1}`,
    };

    return (
      <div
        {...rest}
        style={{ ...style, ...customStyles }}
        className="thumb-vertical"
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