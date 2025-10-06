import { useRef } from "react";
import { Animated, Easing } from "react-native";

export const useAnimation = () => {
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedTop = useRef(new Animated.Value(0)).current;

  const fadeIn = ({
    duration = 300,
    toValue = 1,
    useNativeDriver = true,
    easing = Easing.linear,
    callback = () => {},
  }) => {
    Animated.timing(animatedOpacity, {
      toValue,
      duration,
      useNativeDriver,
      easing,
    }).start(callback);
  };
  const fadeOut = ({
    duration = 300,
    toValue = 0,
    useNativeDriver = true,
    easing = Easing.ease,
    callback = () => {},
  }) => {
    Animated.timing(animatedOpacity, {
      toValue: toValue,
      duration,
      useNativeDriver,
      easing,
    }).start(callback);
  };

  const startMovingTopPosition = ({
    initialPostion=-100,
    duration = 300,
    toValue = 0,
    useNativeDriver = true,
    easing = Easing.linear,
    callback = () => {},
  }) => {
    animatedTop.setValue(initialPostion);
    Animated.timing(animatedTop, {
      toValue,
      duration,
      useNativeDriver,
      easing,
      //}).start(()=> animatedTop.setValue(-100));
    }).start(callback);
  };

  return {
    animatedTop,
    animatedOpacity,

    //Methods
    fadeIn,
    fadeOut,
    startMovingTopPosition,
  };
};
