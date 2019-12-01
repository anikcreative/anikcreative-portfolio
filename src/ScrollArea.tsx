import React from "react";
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
      width: '24px',
      top: '0',
      right: '0',
      bottom: '0',
      borderRadius: '0',
      borderLeft: `4px solid ${Colors.accent}`,
      backgroundColor: `${Colors.accent}`,
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
      backgroundColor: `${Colors.light}`,

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