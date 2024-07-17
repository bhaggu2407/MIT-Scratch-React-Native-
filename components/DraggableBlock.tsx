import React, {useRef} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const DraggableBlock = ({title, color}) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const panGestureEvent = useAnimatedGestureHandler({
    onStart: (_, context) => {
      context.startX = translateX.value;
      context.startY = translateY.value;
    },
    onActive: (event, context) => {
      translateX.value = context.startX + event.translationX;
      translateY.value = context.startY + event.translationY;
    },
    onEnd: () => {
      translateX.value = withSpring(0);
      translateY.value = withSpring(0);
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: translateX.value},
        {translateY: translateY.value},
      ],
    };
  });

  return (
    <PanGestureHandler onGestureEvent={panGestureEvent}>
      <Animated.View
        style={[styles.block, animatedStyle, {backgroundColor: color}]}>
        <Text style={styles.text}>{title}</Text>
      </Animated.View>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  block: {
    width: 120,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 10,
  },
  text: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default DraggableBlock;
